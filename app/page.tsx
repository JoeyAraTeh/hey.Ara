"use client";

import { useEffect, useId, useRef, type CSSProperties } from "react";
import {
  animate,
  motion,
  useMotionValue,
  type AnimationPlaybackControls,
} from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ExploreWorks from "@/components/ExploreWorks";
import Footer from "@/components/Footer";
import FeaturedWorks from "@/components/FeaturedWorks";
import Certificates from "@/components/Certificates";

interface AnimationConfig {
  scale: number;
  speed: number;
}

interface NoiseConfig {
  opacity: number;
  scale: number;
}

interface ShadowOverlayBackgroundProps {
  animation?: AnimationConfig;
  className?: string;
  color?: string;
  noise?: NoiseConfig;
  sizing?: "fill" | "stretch";
  style?: CSSProperties;
}

const MASK_IMAGE = "https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png";
const NOISE_IMAGE = "https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png";

function mapRange(
  value: number,
  fromLow: number,
  fromHigh: number,
  toLow: number,
  toHigh: number
) {
  if (fromLow === fromHigh) {
    return toLow;
  }

  const percentage = (value - fromLow) / (fromHigh - fromLow);
  return toLow + percentage * (toHigh - toLow);
}

function useInstanceId() {
  const id = useId();
  return `shadowoverlay-${id.replace(/:/g, "")}`;
}

function ShadowOverlayBackground({
  animation = { scale: 72, speed: 28 },
  className,
  color = "rgba(199, 183, 163, 0.32)",
  noise = { opacity: 0.1, scale: 0.7 },
  sizing = "fill",
  style,
}: ShadowOverlayBackgroundProps) {
  const id = useInstanceId();
  const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null);
  const hueRotateMotionValue = useMotionValue(180);
  const hueRotateAnimation = useRef<AnimationPlaybackControls | null>(null);

  const animationEnabled = animation.scale > 0;
  const displacementScale = mapRange(animation.scale, 1, 100, 20, 100);
  const animationDuration = mapRange(animation.speed, 1, 100, 1000, 50);
  const maskSize = sizing === "stretch" ? "100% 100%" : "cover";

  useEffect(() => {
    if (!feColorMatrixRef.current || !animationEnabled) {
      return;
    }

    hueRotateAnimation.current?.stop();
    hueRotateMotionValue.set(0);
    hueRotateAnimation.current = animate(hueRotateMotionValue, 360, {
      delay: 0,
      duration: animationDuration / 25,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 0,
      repeatType: "loop",
      onUpdate: (value) => {
        feColorMatrixRef.current?.setAttribute("values", String(value));
      },
    });

    return () => {
      hueRotateAnimation.current?.stop();
    };
  }, [animationDuration, animationEnabled, hueRotateMotionValue]);

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        position: "relative",
        width: "100%",
        ...style,
      }}
    >
      <motion.div
        animate={
          animationEnabled
            ? {
                rotate: [0, 2.5, -2, 0],
                scale: [1.03, 1.14, 1.08, 1.03],
                x: ["-6%", "5%", "-4%", "-6%"],
                y: ["-4%", "4%", "-2%", "-4%"],
              }
            : undefined
        }
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          filter: animationEnabled ? `url(#${id}) blur(4px)` : "none",
          inset: -displacementScale,
          position: "absolute",
        }}
      >
        {animationEnabled && (
          <svg
            focusable="false"
            style={{
              height: 0,
              position: "absolute",
              width: 0,
            }}
          >
            <defs>
              <filter id={id}>
                <feTurbulence
                  baseFrequency={`${mapRange(
                    animation.scale,
                    0,
                    100,
                    0.001,
                    0.0005
                  )},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`}
                  numOctaves="2"
                  result="undulation"
                  seed="0"
                  type="turbulence"
                />
                <feColorMatrix
                  ref={feColorMatrixRef}
                  in="undulation"
                  type="hueRotate"
                  values="180"
                />
                <feColorMatrix
                  in="undulation"
                  result="circulation"
                  type="matrix"
                  values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="circulation"
                  result="dist"
                  scale={displacementScale}
                />
                <feDisplacementMap
                  in="dist"
                  in2="undulation"
                  result="output"
                  scale={displacementScale}
                />
              </filter>
            </defs>
          </svg>
        )}

        <div
          style={{
            backgroundColor: color,
            height: "100%",
            maskImage: `url("${MASK_IMAGE}")`,
            maskPosition: "center",
            maskRepeat: "no-repeat",
            maskSize,
            WebkitMaskImage: `url("${MASK_IMAGE}")`,
            WebkitMaskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: maskSize,
            width: "100%",
          }}
        />
      </motion.div>

      {noise.opacity > 0 && (
        <div
          style={{
            backgroundImage: `url("${NOISE_IMAGE}")`,
            backgroundRepeat: "repeat",
            backgroundSize: noise.scale * 200,
            inset: 0,
            opacity: noise.opacity,
            position: "absolute",
          }}
        />
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-base-900 text-base-200 antialiased">
      <ShadowOverlayBackground
        className="fixed inset-0 z-0 opacity-90 mix-blend-screen"
        animation={{ scale: 72, speed: 24 }}
        color="rgba(199, 183, 163, 0.48)"
        noise={{ opacity: 0.14, scale: 0.7 }}
        style={{ inset: 0, position: "fixed" }}
      />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(199,183,163,0.14),transparent_28%),radial-gradient(circle_at_82%_58%,rgba(109,41,50,0.22),transparent_32%),linear-gradient(180deg,rgba(44,15,18,0.16),rgba(44,15,18,0.46))] pointer-events-none" />
      <div className="relative z-10 pb-24">
        <Navbar />
        <Hero />
        <TechStack />
        <FeaturedWorks />
        <ExploreWorks />
        <Certificates />
        <Footer />
      </div>
    </main>
  );
}