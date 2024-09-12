/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: ['./scss'], // Adjust the path if your SCSS files are in ./scss
  },
}
module.exports = nextConfig
