import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
     
      },
    ],
  },

    env: {
      GOOGLE_CLIENT_ID:"1045618701620-9p6ur3m5hlblf2ohbi74f6pl0ppt5i5q.apps.googleusercontent.com",
      GOOGLE_CLIENT_SECRET:"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",
      BACK_END_API: "https://blog-rest-api-self.vercel.app/api",
    },
  
};

export default nextConfig;
