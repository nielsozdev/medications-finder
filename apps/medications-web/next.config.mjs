/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignora el linting durante el build
    dirs: ['src'], // Solo ejecuta ESLint en estos directorios
    ignoreDuringBuilds: true,
  },
  // eslint: {
  // },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'rickandmortyapi.com'
  //     }
  //   ]
  // }
}

export default nextConfig
