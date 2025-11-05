import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    // {
    //   title: 'MongoDB와 MySQL 대용량 처리 비교를 통한 NoSQL 활용방안 연구',
    //   subTitle: '김은기 (숭실대학교 IT융합학과 국내석사논문)',
    //   at: '2016-08',
    //   descriptions: [
    //     {
    //       content: '학술연구정보서비스',
    //       postHref: '	http://www.riss.kr/link?id=T14144757&outLink=K',
    //     },
    //   ],
    // },
    {
      title:
        'Comparative Analysis of MongoDB and MySQL for Large-Scale Data Processing and NoSQL Utilization',
      subTitle:
        'Eunki Kim (M.S. Thesis, Department of IT Convergence, Soongsil University, South Korea)',
      at: '2016-08',
      descriptions: [
        {
          content: 'RISS',
          postHref: '	http://www.riss.kr/link?id=T14144757&outLink=K',
        },
      ],
    },
  ],
};

export default presentation;
