/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const path = require('path')

const withPWA = require('next-pwa')({ dest: 'public', skipWaiting: false })

const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname)],
    prependData: `
@use "styles/vars" as *;
@use "styles/mixins" as *;`,
  },
}

module.exports = withPWA(nextConfig)
