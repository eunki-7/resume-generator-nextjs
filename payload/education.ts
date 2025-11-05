import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '숭실대학교',
      subTitle: '석사과정/일반대학원 IT융합(학점: 4.4/4.5)',
      startedAt: '2014-09',
      endedAt: '2016-08',
    },
    // {
    //   title: 'Soongsil University',
    //   subTitle: 'M.S. in IT Convergence, Graduate School(GPA: 4.4 / 4.5)',
    //   startedAt: '2014-09',
    //   endedAt: '2016-08',
    // },
    {
      title: '독학사, 학점은행제',
      subTitle: '학사과정/컴퓨터공학(학점: 4.3/4.5)',
      startedAt: '2009-02',
      endedAt: '2011-02',
    },
    // {
    //   title: 'Academic Credit Bank System (South Korea)',
    //   subTitle: 'Bachelor’s Degree in Computer Engineering(GPA: 4.3 / 4.5)',
    //   startedAt: '2009-02',
    //   endedAt: '2011-02',
    // },
  ],
};

export default education;
