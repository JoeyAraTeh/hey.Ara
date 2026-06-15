import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/hey.Ara",
  assetPrefix: "/hey.Ara/",
};

module.exports = nextConfig;