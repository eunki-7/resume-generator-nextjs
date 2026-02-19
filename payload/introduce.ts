import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    '<b>AI·클라우드 통합 전략 아키텍트 & 기술 리더 | LLM · GenAI · MLOps · HPC 인프라 | 대기업·금융사 AI 프로젝트 리딩</b>',
    '16년 이상의 개발 경험과 시니어 플랫폼 아키텍처 경력을 기반으로, 클라우드 기반 AI/ML 아키텍처(AIaaS)와 MLOps 운영 모델을 설계하고 조직 차원의 기술 전환 방향을 설정해 왔습니다. 기술 구현을 넘어 클라우드와 AI를 연계한 디지털 전환 전략을 수립하고, 아키텍처 정합성을 확보하는 역할을 수행해 왔습니다.',
    '금융, 통신, 제조, 공공 등 다양한 산업에서 AI 서비스 로드맵과 클라우드 아키텍처 표준을 정립했으며, 서비스 전 주기(기획–설계–운영)를 아우르는 구조를 다뤄왔습니다.',
    'Generative AI 기반 LLM 학습 인프라, 데이터레이크 파이프라인, MLOps 체계 고도화 등 전략적 판단이 요구되는 과제를 리딩하며 기술적 관점과 실행 관점을 함께 고려해 왔습니다.',
    'AWS 재직 시에는 삼성전자 등 대기업 고객을 대상으로 클라우드 운영 전략과 보안 거버넌스를 정립하고, 서비스 복잡도 개선 로드맵을 수립했습니다. FinOps 관점에서 조직 단위 비용 구조를 분석해 효율성과 안정성을 균형 있게 반영한 운영 기준을 마련했습니다.',
    '서비스 운영 체계와 품질·이슈 관리 프로세스를 정비하고, 중장기 목표를 정렬해 이해관계자 간 합의를 이끌어 실행력을 확보해 왔습니다.',
    '<b>기술과 전략을 연결해 조직의 의사결정 기준을 명확히 하고, AI·클라우드 기반 서비스의 확장성과 안정성을 동시에 고려한 구조를 정립해 왔습니다.</b>',
    
    // '2026-02-19(수정)',
    // '<b>AI·클라우드 통합 전략 아키텍트 & 기술 리더 | LLM · GenAI · MLOps · HPC 인프라 | 대기업·금융사 AI 혁신 프로젝트 리딩</b>',
    // '15년차 시니어 엔지니어로서, 클라우드 기반 AI/ML 아키텍처(AIaaS) 설계 및 MLOps 운영, 팀 리딩까지 클라우드와 AI를 융합한 디지털 전환 전략 및 아키텍처 역할을 수행해온 기술 리더입니다.',
    // '기술 구현을 넘어, 조직의 비즈니스 목표를 실현하기 위한 AI·클라우드 통합 전략 수립과 실행에 집중해 왔습니다.',
    // '금융, 통신, 제조, 공공 등 다양한 산업군에서 AI 서비스 로드맵 기획, 클라우드 아키텍처 표준화, 팀 리딩 및 성과 창출, 프로젝트 관리, FE/BE 서비스 개발, 클라우드 기반 시스템 설계 경험(기획-설계-운영)을 축적해 왔습니다.',
    // '특히 Generative AI 기반 대규모 언어모델(LLM) 학습 인프라 구축, 데이터레이크 파이프라인 설계, MLOps 인프라 고도화 등 기술 전략이 요구되는 프로젝트를 리딩하며, 기술적 통찰(리더십)과 비즈니스 실행력을 모두 검증해 왔습니다.',
    // 'AWS 재직 시에는 삼성전자 등 대기업 고객을 대상으로 클라우드 운영 전략, 보안 거버넌스, 서비스 복잡도 개선 로드맵을 수립해 그룹 전체 인프라 효율성을 향상시켰습니다. 또한 FinOps 컨설팅을 통해 조직 단위의 비용 구조를 최적화하고, 리소스 절감 및 운영 안정화 전략을 직접 수립·실행했습니다.',
    // '이와 함께 서비스 설계, 운영 자동화, 고객 피드백 반영, 품질 개선 및 이슈 관리 체계를 주도하여 안정적이고 지속 가능한 서비스 운영 체계를 구축했습니다.',
    // '최신 기술 트렌드 분석, 기술 부채 방지, 지식 공유 문화 확산을 핵심 가치로 두고 있으며, AI 논문 리뷰·오픈소스 기여 활동을 통해 조직 전체의 기술 역량 향상과 학습 문화 정착에도 기여해 왔습니다.',
    // '빠른 의사결정과 높은 조직 친화력을 바탕으로 중장기 목표를 조율하고 이해관계자 간 협업을 이끄는 커뮤니케이션 역량을 갖추고 있습니다.',
    // '<b>기술과 전략을 연결하는 리더십으로 팀의 성과를 극대화하며, 향후에는 AI·클라우드 혁신을 선도하는 전략형 아키텍트로서 조직의 성장과 시장 경쟁력 강화에 기여하고자 합니다.</b>',
    
    // '<br/><br/>',
    
    // '<b>AI & Cloud Strategy Architect & Technology Leader | LLM · GenAI · MLOps · HPC Infrastructure | Leading AI Innovation Projects for Enterprises & Financial Institutions</b>',
    // 'I am a senior engineer with 15 years of experience leading digital transformation through the convergence of cloud and AI technologies, including AI/ML architecture (AIaaS), MLOps operations, and team leadership.',
    // 'Beyond technical implementation, I focus on formulating and executing AI–Cloud integration strategies that directly align with organizational business goals.',
    // 'I have extensive hands-on experience across finance, telecommunications, manufacturing, and public sectors, covering AI service roadmap planning, cloud architecture standardization, team leadership and performance management, project governance, full-stack development (FE/BE), and end-to-end system design (planning–architecture–operations).',
    // 'In particular, I have led projects that required deep technical strategy, such as building large-scale Generative AI (LLM) training infrastructure, designing data lake pipelines, and advancing MLOps architectures—demonstrating both technical insight and business execution capability.',
    // 'At AWS, I worked with enterprise clients including Samsung Electronics to establish cloud operation strategies, security governance, and service complexity-reduction roadmaps, which improved overall infrastructure efficiency across the organization. I also led FinOps consulting initiatives to optimize enterprise-wide cost structures, reduce resource waste, and implement stabilization strategies for large-scale environments.',
    // 'In parallel, I directed efforts in service design, operational automation, user-feedback integration, quality improvement, and issue-management processes to build a stable and sustainable service-operations framework.',
    // 'I place strong emphasis on analyzing emerging technologies, preventing technical debt, and fostering a culture of knowledge sharing. Through AI paper reviews, open-source contributions, and internal technical seminars, I have continuously strengthened organizational technical capability and collective learning culture.',
    // 'With agility and high organizational adaptability, I effectively coordinate mid- to long-term objectives, communicate across stakeholders, and lead cross-functional collaboration.',
    // '<b>As a leader who bridges technology and business strategy, I strive to maximize team performance and drive organizational growth by spearheading AI & Cloud innovation initiatives.</b>',
  ],
  sign: 'Eunki Kim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
