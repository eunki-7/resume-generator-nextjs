import { ISkill } from '../component/skill/ISkill';

const aimlEngineering: ISkill.Skill = {
  category: 'AI/ML Engineering & Architecture',
  items: [
    {
      title: 'NLP(LAG & LLM)',
      level: 2,
    },
    {
      title: 'AI Engineering, AIaaS',
      level: 3,
    },
    {
      title: 'Accelerated Computing',
      level: 3,
    },
    {
      title: 'Model Serving',
      level: 3,
    },
    {
      title: 'Software Prototyping',
      level: 3,
    },
    {
      title: 'SRE, Service Mesh',
      level: 3,
    },
    {
      title: 'FinOps',
      level: 2,
    },
    {
      title: 'MLOps, DevOps',
      level: 2,
    },
    {
      title: 'Technical Writer',
      level: 3,
    },
  ],
};

const projectManagement: ISkill.Skill = {
  category: 'Project Management & Leadership',
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
      title: 'Agile, Waterfall, Scrum',
      level: 2,
    },
    {
      title: 'Stakeholder Management',
      level: 2,
    },
    {
      title: 'Team(Cross) LeaderShip',
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
      level: 2,
    },
    {
      title: 'Redshift',
      level: 2,
    },
  ],
};

const programmingLanguages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'Python',
      level: 3,
    },
    {
      title: 'Prompt Engineering',
      level: 3,
    },
    {
      title: 'Shell Scripting',
      level: 2,
    },
    {
      title: 'Java, C, Golang, Rust',
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
      title: 'Notion',
      level: 3,
    },
    {
      title: 'Teams',
      level: 1,
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
      title: 'VirtualBox, KVM',
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
      title: 'Terraform, Ansible',
      level: 2,
    },
    {
      title: 'Kibana, Puppet',
      level: 1,
    },
    {
      title: 'Jenkins, ArgoCD',
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
      title: 'Grafana, Prometheus ',
      level: 2,
    },
  ],
};

const networkSkills: ISkill.Skill = {
  category: 'Network Skills & HPC',
  items: [
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
      title: 'Iptables, OpenSSH',
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
    aimlEngineering,
    cloudPlatform,
    programmingLanguages,
    managementTools,
    virtualization,
    automation,
    networkSkills,
    misc,
  ],
  tooltip: '1: Beginner\n2: Intermediate\n3: Expert',
};

export default skill;
