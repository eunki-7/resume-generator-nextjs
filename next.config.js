/* eslint-disable */
const { homepage } = require('./package.json');

const isGitHub = process.env.GITHUB_ACTIONS === 'true';
const { RESUME_LANG } = process.env;

let repo = '';
if (homepage) {
  try {
    const { pathname } = new URL(homepage);
    repo = pathname.replace(/^\/|\/$/g, ''); // strip leading/trailing slash
  } catch {}
}

const subPath = RESUME_LANG === 'ko' ? 'ko' : 'en';

let prefix = '';
if (isGitHub && repo) {
  prefix = `/${repo}/${subPath}`;
} else if (isGitHub) {
  prefix = `/${subPath}`;
} else {
  prefix = '';
}

module.exports = {
  images: { unoptimized: true },
  basePath: prefix,
  assetPrefix: prefix,
};
