const withImages = require('next-images');

module.exports = withImages({
  images: { unoptimized: true },
  assetPrefix: '.',
  basePath: '',
});