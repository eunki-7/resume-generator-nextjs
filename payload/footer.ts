import { homepage, version } from '../package.json';

import { IFooter } from '../component/footer/IFooter';
import * as t from '../package-lock.json';

const footer: IFooter.Payload = {
  version,
  github: homepage,
  nextVersion: t.next,
  reactVersion: t.react,
  bootstrapVersion: t.bootstrap,
};

export default footer;
