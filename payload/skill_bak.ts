import { ISkill } from '../component/skill/ISkill';

const areasOfExpertise: ISkill.Skill = {
  category: 'Areas Of Expertise',
  items: [
    {
      title: 'NLP(LAG & LLM)',
      level: 2,
    },
    {
      title: 'AIaaS',
      level: 3,
    },
    {
      title: 'Software Prototyping',
      level: 3,
    },
    {
      title: 'AI Engineering',
      level: 2,
    },
    {
      title: 'Service Mesh',
      level: 3,
    },
    {
      title: 'FinOps',
      level: 3,
    },
    {
      title: 'MLOps',
      level: 3,
    },
    {
      title: 'DevOps',
      level: 2,
    },
    {
      title: 'Technical Writer',
      level: 3,
    },
    {
      title: 'Model Serving',
      level: 3,
    },
    {
      title: 'Accelerated Computing',
      level: 3,
    },
    {
      title: 'Team Leadership',
      level: 3,
    },
    {
      title: 'SRE',
      level: 2,
    },
  ],
};

const projectManagement: ISkill.Skill = {
  category: 'Project Management',
  items: [
    {
      title: 'Project Management',
      level: 3,
    },
    {
      title: 'IT Infrastructure',
      level: 3,
    },
    {
      title: 'Project Planning',
      level: 2,
    },
    {
      title: 'Agile & Waterfall',
      level: 2,
    },
    {
      title: 'Scrum',
      level: 2,
    },
    {
      title: 'Stakeholder Management',
      level: 2,
    },
    {
      title: 'Cross LeaderShip',
      level: 3,
    },
  ],
};

const cloudPlatform: ISkill.Skill = {
  category: 'Cloud Platform',
  items: [
    {
      title: 'AWS',
      level: 3,
    },
    {
      title: 'Azure',
      level: 3,
    },
    {
      title: 'GCP',
      level: 2,
    },
  ],
};

const programmingLanguages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'Prompt Engineering',
      level: 3,
    },
    {
      title: 'Python',
      level: 3,
    },
    {
      title: 'Shell Scripting',
      level: 2,
    },
    {
      title: 'C',
      level: 2,
    },
    {
      title: 'Java',
      level: 2,
    },
    {
      title: 'Golang',
      level: 3,
    },
    {
      title: 'Rust',
      level: 2,
    },
    {
      title: 'R',
      level: 2,
    },
    {
      title: 'TypeScript',
      level: 2,
    },
  ],
};

const managementTools: ISkill.Skill = {
  category: 'Team & Management',
  items: [
    {
      title: 'Slack',
      level: 3,
    },
    {
      title: 'Asana',
      level: 3,
    },
    {
      title: 'Jira',
      level: 2,
    },
    {
      title: 'Trello',
      level: 1,
    },
    {
      title: 'Notion',
      level: 3,
    },
    {
      title: 'Teams',
      level: 1,
    },
  ],
};

const amazonWebService: ISkill.Skill = {
  category: 'AWS Expert',
  items: [
    {
      title: 'Migration, Modernization',
      level: 3,
    },
    {
      title: 'Cost Optimization',
      level: 3,
    },
    {
      title: 'AI Computing',
      level: 3,
    },
    {
      title: 'Billing(Financial)',
      level: 3,
    },
    {
      title: 'Control Tower',
      level: 2,
    },
    {
      title: 'Security, Compliance',
      level: 3,
    },
    {
      title: 'Containers',
      level: 2,
    },
    {
      title: 'Database',
      level: 1,
    },
    {
      title: 'Redshift',
      level: 2,
    },
  ],
};

const virtualization: ISkill.Skill = {
  category: 'Virtualization',
  items: [
    {
      title: 'Docker',
      level: 3,
    },
    {
      title: 'KVM',
      level: 2,
    },
    {
      title: 'VirtualBox',
      level: 2,
    },
    {
      title: 'VMware ESXi',
      level: 1,
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Automation & Monitoring',
  items: [
    {
      title: 'Git & GitOps',
      level: 3,
    },
    {
      title: 'Ansible',
      level: 2,
    },
    {
      title: 'Terraform',
      level: 3,
    },
    {
      title: 'Puppet',
      level: 1,
    },
    {
      title: 'Jenkins',
      level: 3,
    },
    {
      title: 'ArgoCD',
      level: 3,
    },
    {
      title: 'CI/CD Pipelines',
      level: 3,
    },
    {
      title: 'Infrastructure as Code',
      level: 2,
    },
    {
      title: 'Prometheus ',
      level: 2,
    },
    {
      title: 'Grafana ',
      level: 2,
    },
    {
      title: 'Kibana ',
      level: 1,
    },
  ],
};

const networkSkills: ISkill.Skill = {
  category: 'Network Skills',
  items: [
    {
      title: 'Security',
      level: 3,
    },
    {
      title: 'GPUDirect RDMA',
      level: 3,
    },
    {
      title: 'EFA & NCCL',
      level: 3,
    },
    {
      title: 'GPU Performance',
      level: 3,
    },
    {
      title: 'Iptables',
      level: 2,
    },
    {
      title: 'OpenSSH',
      level: 2,
    },
    {
      title: 'OpenSSL',
      level: 2,
    },
    {
      title: 'VPN Technologies',
      level: 1,
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Playing Musical Instruments',
    },
    {
      title: 'Hiking',
    },
    {
      title: 'Gaming',
    },
    {
      title: 'Retro Game Collecting',
    },
    {
      title: 'Listening to music',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    projectManagement,
    cloudPlatform,
    areasOfExpertise,
    programmingLanguages,
    managementTools,
    amazonWebService,
    virtualization,
    automation,
    networkSkills,
    misc,
  ],
  tooltip: '1: Beginner\n2: Intermediate\n3: Expert',
};

export default skill;
