import { faEnvelope, faPhone, faBlog } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile_eunki1.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김은기',
    small: '(Eunki Kim)',
  },
  contact: [
    {
      title: 'eunki.kim@kakao.com',
      link: 'mailto:outsider7224@hanmail.net',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://niceman.tistory.com/',
      icon: faBlog,
    },
    {
      link: 'https://github.com/eunki-7',
      icon: faGithub,
    },
    {
      link: 'https://www.linkedin.com/in/eunkikim7224/',
      icon: faLinkedin,
    },
    {
      link: 'https://www.facebook.com/profile.php?id=100009720571078',
      icon: faFacebook,
    },
  ],
  notice: {
    title: '휴대전화, 이메일 또는 링크드인으로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
