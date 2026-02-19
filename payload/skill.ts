import { ISkill } from '../component/skill/ISkill';

const aimlEngineering: ISkill.Skill = {
  category: 'AI & Accelerated Computing',
  items: [
    {
      title: 'LLM & Generative AI',
      level: 3,
    },
    {
      title: 'AIaaS & Enterprise MLOps',
      level: 3,
    },
    {
      title: 'Accelerated Computing (GPU/HPC)',
      level: 3,
    },
    {
      title: 'Model Serving & AI Platforms',
      level: 3,
    },
    {
      title: 'AI Platform Strategy',
      level: 3,
    },
  ],
};

const projectManagement: ISkill.Skill = {
  category: 'Leadership & Program Governance',
  items: [
    {
      title: 'Stakeholder Management',
      level: 3,
    },
    {
      title: 'Enterprise Architecture Governance',
      level: 3,
    },
    {
      title: 'Cross-Functional Team Leadership',
      level: 3,
    },
    {
      title: 'Program & Delivery Governance',
      level: 3,
    },
    {
      title: 'Technical Strategy & Documentation',
      level: 2,
    },
  ],
};

const cloudPlatform: ISkill.Skill = {
  category: 'Cloud & Enterprise Architecture',
  items: [
    {
      title: 'AWS, Azure, GCP',
      level: 3,
    },
    {
      title: 'Migration & Modernization',
      level: 3,
    },
    {
      title: 'Cloud Governance & Security',
      level: 2,
    },
    {
      title: 'Cost Optimization & FinOps',
      level: 3,
    },
    {
      title: 'Hybrid & Multi-Cloud Architecture',
      level: 3,
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Automation & Monitoring',
  items: [
    {
      title: 'Containers & Service Mesh',
      level: 3,
    },
    {
      title: 'Operational Governance',
      level: 3,
    },
    {
      title: 'CI/CD & GitOps',
      level: 2,
    },
    {
      title: 'Infrastructure as Code',
      level: 3,
    },
    {
      title: 'Observability & Reliability Engineering',
      level: 3,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    projectManagement,
    aimlEngineering,
    cloudPlatform,
    automation,
  ],
  tooltip: '1: Beginner\n2: Intermediate\n3: Expert',
};

export default skill;
