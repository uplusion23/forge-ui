import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  webpack(config, { nextRuntime }) {
    if (typeof nextRuntime === "undefined") {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }

    return config;
  },
  redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/components/accordion",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/accordion",
        permanent: true,
      },
      {
        source: "/examples",
        destination: "/examples/mail",
        permanent: false,
      },
      {
        source: "/docs/primitives/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
      {
        source: "/figma",
        destination: "/docs/figma",
        permanent: true,
      },
      {
        source: "/docs/forms",
        destination: "/docs/components/form",
        permanent: false,
      },
      {
        source: "/docs/forms/react-hook-form",
        destination: "/docs/components/form",
        permanent: false,
      },
    ]
  }
}

export default withContentCollections(nextConfig);
