/* eslint-disable */
const { homepage } = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';
const { RESUME_LANG } = process.env;

let repo = '';
if (homepage) {
  try {
    repo = new URL(homepage).pathname.replace(/^\//, ''); // "resume_main"
  } catch {}
}

const subPath = RESUME_LANG === 'ko' ? 'ko' : 'en';

// ✅ 로컬에서는 prefix 없음
const basePath = isProd ? `/${repo}/${subPath}` : '';
const assetPrefix = isProd ? `/${repo}/${subPath}` : '';

module.exports = {
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix,
};
