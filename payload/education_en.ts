import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'Soongsil University',
      subTitle: 'M.S. in IT Convergence, Graduate School(GPA: 4.4 / 4.5)',
      startedAt: '2014-09',
      endedAt: '2016-08',
    },
    {
      title: 'Academic Credit Bank System (South Korea)',
      subTitle: 'Bachelor’s Degree in Computer Engineering(GPA: 4.3 / 4.5)',
      startedAt: '2009-02',
      endedAt: '2011-02',
    },
  ],
};

export default education;
