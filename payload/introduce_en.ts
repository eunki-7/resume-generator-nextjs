import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    '<b>AI & Cloud Strategy Architect & Technology Leader | LLM · GenAI · MLOps · HPC Infrastructure | Leading AI Innovation Projects for Enterprises & Financial Institutions</b>',
    'I am a senior engineer with 15 years of experience leading digital transformation through the convergence of cloud and AI technologies, including AI/ML architecture (AIaaS), MLOps operations, and team leadership.',
    'Beyond technical implementation, I focus on formulating and executing AI–Cloud integration strategies that directly align with organizational business goals.',
    'I have extensive hands-on experience across finance, telecommunications, manufacturing, and public sectors, covering AI service roadmap planning, cloud architecture standardization, team leadership and performance management, project governance, full-stack development (FE/BE), and end-to-end system design (planning–architecture–operations).',
    'In particular, I have led projects that required deep technical strategy, such as building large-scale Generative AI (LLM) training infrastructure, designing data lake pipelines, and advancing MLOps architectures—demonstrating both technical insight and business execution capability.',
    'At AWS, I worked with enterprise clients including Samsung Electronics to establish cloud operation strategies, security governance, and service complexity-reduction roadmaps, which improved overall infrastructure efficiency across the organization. I also led FinOps consulting initiatives to optimize enterprise-wide cost structures, reduce resource waste, and implement stabilization strategies for large-scale environments.',
    'In parallel, I directed efforts in service design, operational automation, user-feedback integration, quality improvement, and issue-management processes to build a stable and sustainable service-operations framework.',
    'I place strong emphasis on analyzing emerging technologies, preventing technical debt, and fostering a culture of knowledge sharing. Through AI paper reviews, open-source contributions, and internal technical seminars, I have continuously strengthened organizational technical capability and collective learning culture.',
    'With agility and high organizational adaptability, I effectively coordinate mid- to long-term objectives, communicate across stakeholders, and lead cross-functional collaboration.',
    '<b>As a leader who bridges technology and business strategy, I strive to maximize team performance and drive organizational growth by spearheading AI & Cloud innovation initiatives.</b>',
  ],
  sign: 'Eunki Kim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
