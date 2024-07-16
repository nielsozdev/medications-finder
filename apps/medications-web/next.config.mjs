/** @type {import('next').NextConfig} */
// const nextConfig = {}

// export default nextConfig

/** @type {import('next').NextConfig} */

// import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin'

const nextConfig = {
  // // reactStrictMode: true,
  // // webpack: (config, { isServer }) => {
  // //   if (isServer) {
  // //     config.plugins = [...config.plugins, new PrismaPlugin()]
  // //   }

  // //   return config
  // // },
  // eslint: {
  //   // Ignora el linting durante el build
  //   // dirs: ['src'], // Solo ejecuta ESLint en estos directorios
  //   ignoreDuringBuilds: true,
  // },
  // // eslint: {
  // // },
  // // images: {
  // //   remotePatterns: [
  // //     {
  // //       protocol: 'https',
  // //       hostname: 'rickandmortyapi.com'
  // //     }
  // //   ]
  // // }
  trailingSlash: true,
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
  },
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default nextConfig
