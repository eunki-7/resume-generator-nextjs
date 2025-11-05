import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Amazon Web Service(AWS)',
      position: 'Technical Account Manager',
      startedAt: '2022-12',
      endedAt: '2025-06',
      descriptions: [
        {
          projectName: 'Samsung Gaming Hub(MX)',
          projectDetail: [
            'Galaxy Gaming Hub 클라우드 인프라 운영 및 유지보수 주도, 실시간 성능 지표 분석과 사전 장애 탐지 시스템 구축 서비스 중단 위험 최소화',
            '고객 요구사항에 따라 실무자부터 C레벨까지 다양한 Stakeholder와 커뮤니케이션, 전략 과제 및 장기 프로젝트 유연 대응',
            '모니터링 이슈 감지 후 빠른 조치 프로세스를 설계 및 정착시켜 사용자 이탈 방지 및 시스템 안정성 향상',
            '<b>서비스 운영 안정화 로드맵 수립 및 실행, 주요 기능 자동화 적용으로 장애 대응 속도 약 30% 개선</b>',
            '<b>내부·외부 포함 약 10명 규모의 기술팀 협업 및 리딩, 부서 간 운영 프로세스 정착</b>',
          ],
        },
        // {
        //   projectName: 'Samsung Gaming Hub(MX)',
        //   projectDetail: [
        //     'Led Galaxy Gaming Hub cloud infrastructure operations and maintenance, conducted real-time performance analysis and implemented proactive issue detection to minimize service downtime risk',
        //     'Communicated with diverse stakeholders from engineers to C-level executives to address strategic tasks and long-term projects with agility',
        //     'Designed and established an automated monitoring and response process to prevent user churn and enhance system reliability',
        //     '<b>Developed and executed a service stability roadmap, applying automation to key functions and improving incident response speed by approximately 30%</b>',
        //     '<b>Collaborated and led a 10-member cross-functional technical team (internal and external), establishing consistent operational processes across departments</b>',
        //   ],
        // },
        {
          projectName: 'Samsung Big Data Center(DX)',
          projectDetail: [
            '30PB 규모 Galaxy 사용자 로그 파이프라인 운영 지원 데이터 수집·분석 플랫폼의 안정성 및 확장성 확보',
            '전사 통합 고객 DB 및 분석 시스템 운영, DR 설계 및 장애 대응 체계 구축을 통해 서비스 연속성 보장',
            '데이터 처리 효율화 및 분석 구조 개선을 통한 운영 복잡성 감소 및 성능 향상',
            '<b>데이터 거버넌스 및 DR 고도화 로드맵 수립, 단계적 아키텍처 표준화 적용으로 글로벌 서비스 안정성 강화</b>',
            '<b>운영비용 연간 약 8% 절감, 분석 성능 향상으로 리소스 효율 15% 개선</b>',
          ],
        },
        // {
        //   projectName: 'Samsung Big Data Center(DX)',
        //   projectDetail: [
        //     'Supported operation of a 30PB-scale Galaxy user log pipeline, enhancing stability and scalability of the data collection and analytics platform',
        //     'Managed enterprise-wide customer DB and analytics systems, designed DR architecture and incident response processes to ensure service continuity',
        //     'Optimized data processing and analytics architecture to reduce operational complexity and improve performance',
        //     '<b>Established a data governance and DR enhancement roadmap, applying phased architecture standardization to strengthen global service stability</b>',
        //     '<b>Reduced annual operational costs by approximately 8% and improved resource efficiency by 15% through performance optimization</b>',
        //   ],
        // },
        {
          projectName: 'Samsung Research(SR)',
          projectDetail: [
            '42,000 RPS 처리, 4PB 규모 DWH 및 분석 플랫폼 DR 설계 및 Lambda/ECS 기반 인프라 전환 프로젝트 수행',
            'Bixby LLM 학습용 멀티 GPU HPC 인프라 (NCCL, Infiniband, RDMA 등) 설계 및 EFA 성능 테스트 기반 POC 리딩',
            'GenAI 모델 드리프트 탐지, 재학습 프로세스, DevOps 연계 운영화 컨설팅 수행 시스템 다운타임 10% 감소, 서비스 신뢰도 향상',
            '<b>AI 학습 인프라 현대화 전략 수립 및 단계별 마이그레이션 로드맵 설계, LLM 모델 훈련 효율 20% 향상</b>',
            '<b>내부 10명·고객 10명 이상과 협업, HPC 인프라 운영 표준안 제시 및 채택</b>',
          ],
        },
        // {
        //   projectName: 'Samsung Research(SR)',
        //   projectDetail: [
        //     'Executed DR design and Lambda/ECS migration for a 42,000 RPS, 4PB-scale DWH and analytics platform project',
        //     'Designed multi-GPU HPC infrastructure for Bixby LLM training (NCCL, Infiniband, RDMA) and led EFA performance testing-based POC',
        //     'Implemented GenAI model drift detection, retraining, and DevOps-integrated operations consulting, reducing system downtime by 10% and improving service reliability',
        //     '<b>Developed an AI infrastructure modernization strategy and a phased migration roadmap, improving LLM training efficiency by 20%</b>',
        //     '<b>Collaborated with over 10 internal and 10 customer-side engineers, establishing and adopting HPC infrastructure operational standards</b>',
        //   ],
        // },
        {
          projectName: 'Samsung Digital Appliance(DA)',
          projectDetail: [
            '삼성 DA 보안팀과 협업, 클라우드 보안 정책을 수립 및 적용 보안 사고 10% 감소, 보안 수준 향상',
            '신규 클라우드 기술 적용을 통해 서비스 운영 비용 10% 절감, 인프라 확장성 개선',
            '아키텍처 설계 표준화 및 문서화 주도 재사용성, 운영 효율성 향상',
            '<b>보안·비용 최적화 정책 로드맵 수립, 부서 간 협업 구조 정립으로 관리 효율성 강화</b>',
            '<b>연간 약 5% OPEX 절감, 표준화 문서 체계 구축으로 신규 프로젝트 대응 속도 30% 향상</b>',
          ],
        },
        // {
        //   projectName: 'Samsung Digital Appliance(DA)',
        //   projectDetail: [
        //     'Collaborated with the Samsung DA security team to establish and apply cloud security policies, reducing incidents by 10% and enhancing overall security posture',
        //     'Applied new cloud technologies to reduce service operation costs by 10% and improve infrastructure scalability',
        //     'Led architecture standardization and documentation initiatives, increasing system reusability and operational efficiency',
        //     '<b>Developed security and cost-optimization policy roadmaps, establishing cross-departmental collaboration structures to improve management efficiency</b>',
        //     '<b>Reduced annual OPEX by approximately 5% and improved new project response speed by 30% through standardized documentation practices</b>',
        //   ],
        // },
        {
          projectName: 'ETC',
          projectDetail: [
            '<a target="_blank" href="https://coral-macaroni-54f.notion.site/2024-06-AWS-50b225b640a54617990eb6bc7aefdb00">AWS 삼성전자 대상 ‘SageMaker Fine-Tuning with Experiments’ 세미나 발표, 모델 실험 환경 구축 사례 공유</a>',
            '<a target="_blank" href="https://www.linkedin.com/in/eunkikim7224/overlay/experience/2087486539/multiple-media-viewer/?profileId=ACoAAC505Q0ByO4td6JYF1X6Ym7GF4uI_U_fARo&treasuryMediaId=1754283874088">AWS 외부 ‘Fine-Tuning & Evaluation of Foundation Models on SageMaker’ 세미나 발표, 대기업 활용 사례 소개</a>',
            '<a target="_blank" href="https://www.linkedin.com/in/eunkikim7224/overlay/experience/2087486539/multiple-media-viewer/?profileId=ACoAAC505Q0ByO4td6JYF1X6Ym7GF4uI_U_fARo&treasuryMediaId=1754283902784">AWS 내부 ‘Generative AI Bootcamp – SageMaker JumpStart’ 세미나 발표, 교육 콘텐츠 공동 개발</a>',
            '<a target="_blank" href="https://www.linkedin.com/in/eunkikim7224/overlay/experience/2087486539/multiple-media-viewer/?profileId=ACoAAC505Q0ByO4td6JYF1X6Ym7GF4uI_U_fARo&treasuryMediaId=1754453572559">AWS 외부 ‘Generative AI Bootcamp – RAG Essentials: Bedrock & Q in Action’ 발표, Hands-on 세션 리딩</a>',
            '<a target="_blank" href="https://github.com/son-kjun/bedrock-workshop">외부 고객 대상 생성형 AI 워크숍(Hands-on Lab) 리딩, PoC·모델 추론 실습 진행</a>',
            'Python 기반 비용 리포트 자동화 도구 개발, 삼성 고객사 과금 모니터링 및 리소스 효율화 지원',
            'AWS 내부 AI/ML 기술 공유 세션 발표 및 자료 제작, 조직 내 기술 확산 기여',
            '고객 대상 GenAI/ML(SageMaker, ModelServing, MLOps) 기술 세션 발표, PoC 아키텍처 가이드 제공',
            '비용 최적화 및 서비스 단순화 아키텍처 설계 주도, 운영비 절감 및 관리 효율성 향상',
            '신규 서비스 리스크 검토·DR 설계 및 글로벌 리더십 협업 수행, 고객 이슈 사전 차단',
          ],
        },
        // {
        //   projectName: 'ETC',
        //   projectDetail: [
        //     '<a target="_blank" href="https://coral-macaroni-54f.notion.site/2024-06-AWS-50b225b640a54617990eb6bc7aefdb00">Presented the "SageMaker Fine-Tuning with Experiments" seminar for Samsung Electronics, sharing best practices for building and optimizing model experimentation environments</a>',
        //     '<a target="_blank" href="https://www.linkedin.com/in/eunkikim7224/overlay/experience/2087486539/multiple-media-viewer/?profileId=ACoAAC505Q0ByO4td6JYF1X6Ym7GF4uI_U_fARo&treasuryMediaId=1754283874088">Delivered the external seminar "Fine-Tuning & Evaluation of Foundation Models on SageMaker," introducing enterprise-level use cases and optimization strategies</a>',
        //     '<a target="_blank" href="https://www.linkedin.com/in/eunkikim7224/overlay/experience/2087486539/multiple-media-viewer/?profileId=ACoAAC505Q0ByO4td6JYF1X6Ym7GF4uI_U_fARo&treasuryMediaId=1754283902784">Presented at the internal "Generative AI Bootcamp – SageMaker JumpStart," co-developing training materials and leading internal enablement sessions</a>',
        //     '<a target="_blank" href="https://www.linkedin.com/in/eunkikim7224/overlay/experience/2087486539/multiple-media-viewer/?profileId=ACoAAC505Q0ByO4td6JYF1X6Ym7GF4uI_U_fARo&treasuryMediaId=1754453572559">Led the external "Generative AI Bootcamp – RAG Essentials: Bedrock & Q in Action" seminar, conducting hands-on sessions on RAG architecture implementation</a>',
        //     '<a target="_blank" href="https://github.com/son-kjun/bedrock-workshop">Led hands-on workshops for enterprise customers on Generative AI (PoC and model inference), guiding end-to-end solution implementation</a>',
        //     'Developed a Python-based automated cost reporting and visualization tool to support Samsung billing monitoring and resource optimization',
        //     'Delivered internal AI/ML knowledge-sharing sessions and technical documentation to promote cross-team enablement',
        //     'Hosted customer-focused GenAI/ML technical sessions (SageMaker, Model Serving, MLOps), providing PoC architecture guidance',
        //     'Drove cost-optimization and service simplification architecture initiatives, improving operational efficiency and reducing expenses',
        //     'Conducted pre-launch risk assessments, DR architecture design, and global leadership collaboration to prevent customer-impacting issues',
        //   ],
        // },
      ],
      skillKeywords: [
        'AWS GenAI',
        'AWS Security & Governance',
        'AWS Architecture & Infra',
        'Cloud Cost Optimization (FinOps)',
        'Multi-GPU Cluster Infra (HPC, EFA, RDMA)',
        'Cross-functional Collaboration & Leadership',
        'MLOps / LLMOps, IaC (Terraform, CDK)',
        'Accelerated Computing',
        'NLP / LLM',
        'NVIDIA NCCL',
        'Big Data Analytics (EMR, Glue, Redshift)',
        'AI/ML Solution Design',
        'DevOps Automation & Observability',
      ],
    },
    {
      title: '(주)KB국민은행',
      position: '금융AI센터(과장)',
      startedAt: '2019-12',
      endedAt: '2022-11',
      descriptions: [
        {
          projectName: 'KB 전 계열사 인공지능 금융AI비서(AICC) MLOps 구축 프로젝트',
          projectDetail: [
            'KB금융 전 계열사 대상 AICC MLOps 프로젝트 수행, AWS 기반 서비스 메시(EKS, Istio) 아키텍처 설계 및 트래픽 제어/모니터링 구조 적용',
            'Ray Serve, BentoML 기반 딥러닝 모델 서빙 및 버전 관리 체계 구축, 성능·정확도·신뢰도 자동 측정 및 인퍼런스 최적화 테스트 수행',
            '모델 서빙 프레임워크 안정성 검증 및 성능 분석(Performance Analyzer) 수행, 외주 업체 기술 검토 및 선정 심사 참여',
            'KB-STAR NLP 모델(NER, 형태소 분석, 인텐트 분류기) 경량화 및 콜봇 서빙 구조 개선, 추론 성능 30% 향상 및 운영 안정성 확보',
            '<b>AI 비서 서비스 고도화 전략 수립 및 운영 체계 표준화 주도, AICC 플랫폼 확장성 강화 및 서비스 품질 개선</b>',
            '<a target="_blank" href="https://www.newstomato.com/readNewspaper.aspx?no=1126892">"은행원 대신 가상인간" 국민은행의 AI 금융비서 실험</a>',
            '<a target="_blank" href="https://www.etnews.com/20240306000220">"내 손안의 금융비서" KB국민은행, 모바일 특화 AI 고도화</a>',
            '<a target="_blank" href="https://www.g-enews.com/article/Finance/2020/06/20200618141958190da878e5c53_1">KB국민은행 한글 자연어 학습 모델 ‘KB ALBERT’ 개발 및 내재화 추진</a>',
          ],
        },
        // {
        //   projectName: 'Enterprise-Wide AI Financial Assistant (AICC) MLOps Initiative at KB Financial Group',
        //   projectDetail: [
        //    'Led the group-wide KB Financial AICC MLOps project, designing AWS-based service mesh architecture (EKS, Istio) with traffic control and monitoring frameworks',
        //    'Built deep learning model serving and version management system using Ray Serve and BentoML, automating accuracy, reliability, and performance validation with optimized inference testing',
        //    'Conducted model serving framework stability verification and performance analysis (Performance Analyzer), and participated in vendor technical evaluations and selection reviews',
        //    'Optimized the KB-STAR NLP model (NER, morphological analysis, intent classification) and improved callbot serving architecture, achieving 30% enhancement in inference performance and operational stability',
        //    'Established AI assistant service advancement strategy and standardized operational framework, strengthening AICC platform scalability and improving service quality',
        //     '<a target="_blank" href="https://www.etnews.com/20240306000220">"내 손안의 금융비서” KB국민은행, 모바일 특화 AI 고도화</a>',
        //     '<a target="_blank" href="https://www.g-enews.com/article/Finance/2020/06/20200618141958190da878e5c53_1">KB국민은행, 한글 자연어 학습 모델 KB ALBERT 개발</a>',
        //   ],
        // },
        {
          projectName: 'KB 전 계열사 AI 상담 콜봇 도입 및 구축 (TF)',
          projectDetail: [
            'KB금융 전 계열사 대상 AI 상담 콜봇 도입 TF 참여, 프로젝트 기술 전략 및 구축 로드맵 수립',
            '챗봇 솔루션 성능 비교·AI 스타트업 협력 검토, 사업 제안서 평가 및 업체 선정 프로세스 참여',
            '하이브리드 클라우드 기반 AICC 아키텍처 검토, 망분리 환경 적용 및 보안·운영 효율성 강화 방안 기획',
            'AI 콜봇 구축 RFP(요건 정의서) 작성 주도, 아키텍처·보안·용량·이중화·DR 등 기술 심의 및 검토 지원',
            '<b>생성형 AI 기술 협력 스타트업 발굴, KB금융 내 자체 구축 전략 수립 및 실행 지원</b>',
            '<a target="_blank" href="https://www.globalnewsagency.kr/news/articleView.html?idxno=270125">KB국민은행, 고령층 고객을 위한 ‘콜봇 서비스’ 지원</a>',
            '<a target="_blank" href="https://www.globalnewsagency.kr/news/articleView.html?idxno=270125">AI은행원 고객 접점 확대, KB국민은행 콜봇 서비스 ‘똑똑’ 전진 배치</a>',
          ],
        },
        // {
        //   projectName: 'KB Financial Group - AI Voicebot Deployment & Strategy Support (TF)',
        //   projectDetail: [
        //     'Participated in the KB Financial Group-wide AI Callbot adoption TF, establishing the project’s technical strategy and implementation roadmap',
        //     'Compared chatbot solution performance and reviewed potential AI startup collaborations, contributing to proposal evaluations and vendor selection process',
        //     'Reviewed hybrid cloud-based AICC architecture, planning network separation application and strategies to enhance security and operational efficiency',
        //     'Led the drafting of AI Callbot RFP (Requirements Definition Document), providing technical reviews on architecture, security, capacity, redundancy, and DR design',
        //     'Identified and evaluated generative AI technology partners, supporting in-house AI Callbot development strategy formulation and execution within KB Financial Group',
        //     '<a target="_blank" href="https://www.globalnewsagency.kr/news/articleView.html?idxno=270125">KB국민은행, 고령층 고객을 위한 ‘콜봇 서비스’ 지원</a>',
        //     '<a target="_blank" href="https://www.globalnewsagency.kr/news/articleView.html?idxno=270125">AI은행원 고객 접점 늘린다..KB국민은행, 콜봇 서비스 ‘똑똑’ 전진 배치</a>',
        //   ],
        // },
        {
          projectName: 'KB국민은행 메타버스(Metaverse) 금융 연계 시스템 테스트베드 기획 및 개발',
          projectDetail: [
            'KB 금융 메타버스 테스트베드 기획 및 개발 리딩, 가상 뱅킹 연계 시나리오 설계 및 금융 보안 심의 대응 문서 작성',
            '금융감독기관 규제 대응 및 기술 타당성 검토를 주도, 신기술 도입 관련 정책 협의 지원',
            'AWS, Ray, Lambda, Kubernetes 기반 실시간 유저 로그 분석·저장 백엔드 시스템 설계 및 개발',
            '접속률·이벤트 활용률·유저 상태 기반 데이터 파이프라인 및 시각화 대시보드 구성, 게임형 금융 UX 분석 시나리오 설계',
            '유저 행동 기반 분석 환경 도입을 통해 메타버스 금융 채널의 실증 검증 및 전략 수립 기여',
            '<a target="_blank" href="https://biz.chosun.com/stock/finance/2022/02/09/NINCMSR4JJGI7LNMUDKYQBPN6I">KB국민은행, 로블록스(Roblox)로 ‘메타버스 금융’ 시도</a>',
            '<a target="_blank" href="https://www.econovill.com/news/articleView.html?idxno=542825">KB국민은행, "메타버스·디지털자산·금융" 접점 찾는다</a>',
            '<a target="_blank" href="https://www.kbanker.co.kr/news/articleView.html?idxno=200455">KB국민은행, "메타버스 영업점 실증" 프로젝트 추진</a>',
          ],
        },
        // {
        //   projectName: 'KB Kookmin Bank - Metaverse Banking Testbed',
        //   projectDetail: [
        //     'Led the planning and development of the KB Financial Metaverse Testbed, designing virtual banking integration scenarios and preparing documentation for financial security and compliance reviews',
        //     'Took the lead in regulatory response and technical feasibility assessments with the Financial Supervisory Service, supporting policy coordination for new technology adoption',
        //     'Designed and developed a real-time user log analysis and storage backend system using AWS, Ray, Lambda, and Kubernetes',
        //     'Built a data pipeline and visualization dashboard based on user activity metrics (connection rate, event utilization, engagement status), designing gamified financial UX analysis scenarios',
        //     'Implemented a behavior-based analytics environment, contributing to the validation and strategic planning of KB’s Metaverse financial channel',
        //     '<a target="_blank" href="https://biz.chosun.com/stock/finance/2022/02/09/NINCMSR4JJGI7LNMUDKYQBPN6I">KB국민은행, 로블록스(Roblox)로 ‘메타버스 금융’ 시도</a>',
        //     '<a target="_blank" href="https://www.econovill.com/news/articleView.html?idxno=542825">KB국민은행, 메타버스·디지털자산·금융 접점 찾는다</a>',
        //     '<a target="_blank" href="https://www.kbanker.co.kr/news/articleView.html?idxno=200455">KB의 새 메타버스 실험…“현장감 살린 영업점포 구현 중”</a>',
        //   ],
        // },
        {
          projectName: 'KB 무설치 웹 브라우저 기반 화상상담 시스템 개발',
          projectDetail: [
            '비대면 상담 채널 고도화를 위한 무설치형 화상상담 시스템 POC 기획 및 개발 리딩, AWS Chime, WebRTC, Docker, TypeScript 기반 경량 아키텍처 설계 및 구현',
            'MSCOCO·BodyPix 기반 AI 영상 처리 모델 탑재, Tensor.js 활용한 실시간 배경 제거 및 렌더링 성능 최적화 수행',
            'CI/CD(CodeDeploy, Jenkins), 메트릭(Grafana/Prometheus), 로그 수집(EFK Stack) 환경 구축, 운영 자동화 및 품질 모니터링 체계 정립',
            '<b>임직원·영업점 대상 사용자 테스트 및 적용 고도화 보고서 작성, 서비스 안정화 및 운영 효율 향상</b>',
            '코로나 이후 비대면 상담 대기시간 25% 단축, 고객 접근성·편의성 대폭 개선',
            '<a target="_blank" href="https://www.youthdaily.co.kr/mobile/article.html?no=120894">"어디서든 비대면으로" KB국민은행 ‘모바일 화상상담 서비스’ 확대</a>',
          ],
        },
        // {
        //   projectName: 'Browser-Based Video Consultation System Development',
        //   projectDetail: [
        //     'Led the planning and development of a browser-based, installation-free video consultation system POC to enhance remote customer service channels, designing and implementing a lightweight architecture using AWS Chime, WebRTC, Docker, and TypeScript',
        //     'Integrated AI video processing models based on MSCOCO and BodyPix, utilizing Tensor.js for real-time background removal and rendering performance optimization',
        //     'Established CI/CD pipelines (CodeDeploy, Jenkins), monitoring (Grafana/Prometheus), and log collection (EFK Stack) environments, defining an automated operations and quality monitoring framework',
        //     'Conducted user testing across employees and branch offices, preparing system enhancement reports to improve service stability and operational efficiency',
        //     'Achieved a 25% reduction in customer waiting time for remote consultations post-COVID, significantly improving accessibility and user convenience',
        //     '<a target="_blank" href="https://www.youthdaily.co.kr/mobile/article.html?no=120894">"어디서든 비대면으로" KB국민은행 "모바일 화상상담 서비스" 확대</a>',
        //   ],
        // },
        {
          projectName: 'KB Antoc(앤톡) 기업 여신 가치 평가 크롤링 시스템 POC 개발',
          projectDetail: [
            '기업 여신 심사 자동화를 위한 크롤링 시스템 POC 기획 및 개발 리딩, Python 기반 기업 정보·신용·특허·기술 데이터 수집 모듈 구현',
            'Spring Boot 기반 기업 정보 저장 및 주기적 갱신용 배치 스크립트 설계, REST API 서버와 Android 프론트엔드 연동 개발',
            '여신 심사 자동화 프로세스 설계 및 데이터 파이프라인 검증, 업무 효율화 구조 검토 및 차세대 시스템 아키텍처 제안',
            '심사 프로세스 자동화를 통해 영업점 운영 부담을 경감, 연간 1,000건 이상의 업무 절감 기반 마련',
            '<b>AI 기반 여신 심사 체계 전환의 기술 검증 단계로서, 차세대 금융 심사 시스템 도입의 초석 마련</b>',
          ],
        },
        // {
        //   projectName: 'KB Kookmin Bank - Corporate Credit Evaluation Crawler (Antoc)',
        //   projectDetail: [
        //     'Led the planning and development of a credit evaluation automation crawling system POC, implementing Python-based modules for collecting corporate information, credit, patents, and technology data',
        //     'Designed Spring Boot-based batch scripts for corporate data storage and periodic updates, and developed REST API integration with the Android frontend',
        //     'Architected the loan evaluation automation process and validated data pipelines, reviewing workflow efficiency and proposing next-generation system architecture',
        //     'Reduced branch operational workload through automated evaluation workflows, establishing a foundation for over 1,000 annual task reductions',
        //     'Served as the technical validation phase for transitioning to an AI-driven credit evaluation system, laying the groundwork for next-generation financial assessment infrastructure',
        //   ],
        // },
        {
          projectName: 'KB국민은행 모바일 브랜치 비대면 계좌개설 웹뱅킹 시스템 개발 협업',
          projectDetail: [
            '비대면 금융 서비스 혁신을 위한 모바일 브랜치 구축 프로젝트 참여, IB Framework 기반 예금·적금 계좌 발급 시스템 설계 및 개발 협업',
            '고객확인(CDD/EDD) 및 자금세탁방지(AML) 프로세스 연동 개발 주도, 계정계 보안 정책 및 금융 규제 준수 체계 반영',
            '주민등록증 OCR(발급일자·안면인식) 기능 연동 및 WebRTC 기반 실시간 이미지 캡처 테스트 지원, BMT 단계 안정화 기여',
            '대용량 트래픽 대응을 위한 비동기 아키텍처 전환 설계, 수신·상품 파트 협업을 통한 금융 도메인 내재화 및 개발 프로세스 최적화',
            '<b>서비스 장애율 40% 감소, 비대면 계좌개설 프로세스 안정화 및 사용자 경험(UX) 개선</b>',
            '<a target="_blank" href="https://www.hankyung.com/article/2020091463216">앱·인증서 없이 OK! KB국민은행 "모바일 브랜치" 출시</a>',
            '<a target="_blank" href="https://m.joseilbo.com/news/view.htm?newsid=437905#_enliple">KB국민은행, "KB모바일 브랜치" 신규 가입 이벤트 진행</a>',
            '<a target="_blank" href="https://www.fntimes.com/html/view.php?ud=202009141115486803179ad43907_18">국민은행, 웹기반 "KB모바일 브랜치" 출시…공인인증서 없이 상품 가입</a>',
          ],
        },
        // {
        //   projectName: 'KB Kookmin Bank – Remote Account Opening System (Mobile Branch)',
        //   projectDetail: [
        //     'Participated in the Mobile Branch project to drive innovation in non-face-to-face financial services, collaborating on the design and development of deposit and savings account issuance systems based on the IB Framework',
        //     'Led the integration of Customer Due Diligence (CDD/EDD) and Anti-Money Laundering (AML) processes, incorporating core banking security policies and financial regulatory compliance frameworks',
        //     'Integrated OCR functionality for resident ID (issuance date and facial recognition) and supported WebRTC-based real-time image capture testing, contributing to system stabilization during BMT phase',
        //     'Designed asynchronous architecture to handle large-scale traffic, collaborating with deposit and product teams to internalize financial domain knowledge and optimize development processes',
        //     'Achieved a 40% reduction in service downtime, stabilizing the non-face-to-face account opening process and enhancing overall user experience (UX)',
        //     '<a target="_blank" href="https://www.hankyung.com/article/2020091463216">앱·인증서 없어도 OK! KB국민은행, "모바일브랜치" 출시</a>',
        //     '<a target="_blank" href="https://m.joseilbo.com/news/view.htm?newsid=437905#_enliple">KB국민은행, "KB모바일 브랜치" 신규 가입 이벤트 진행</a>',
        //     '<a target="_blank" href="https://www.fntimes.com/html/view.php?ud=202009141115486803179ad43907_18">국민은행, 웹기반 "KB모바일브랜치" 출시…공인인증서 없이 상품가입</a>',
        //   ],
        // },
        {
          projectName: 'KB MyStar 상담 내역 분석 POC',
          projectDetail: [
            '고객 상담 만족도 평가 자동화를 위한 POC 수행, Konlpy·Mecab·TensorFlow 기반 NLP 처리 및 학습 데이터 레이블링 설계',
            'KB 전 영업점의 10년치 상담 텍스트 데이터 분석, 긍·부정 감정 및 고객 이탈 키워드 등 핵심 인사이트 추출',
            '고객 응대 만족도 유형화 및 트렌드 분석, Dash 기반 시각화 대시보드 개발 및 리포팅 체계 구축',
            '<b>데이터 분석 결과를 기반으로 마케팅 전략 수립 보고서 도출, 고객 경험 개선 및 브랜드 신뢰도 강화에 기여</b>',
          ],
        },
        // {
        //   projectName: 'KB MyStar Consultation Record Analysis POC',
        //   projectDetail: [
        //     'Conducted a POC to automate customer satisfaction evaluation, designing NLP processing and data labeling workflows using Konlpy, Mecab, and TensorFlow',
        //     'Analyzed 10 years of customer consultation text data from all KB branches, extracting key insights such as sentiment polarity and churn-related keywords',
        //     'Categorized customer satisfaction types and performed trend analysis, developing Dash-based visualization dashboards and reporting frameworks',
        //     'Produced marketing strategy reports based on data analysis outcomes, contributing to enhanced customer experience and strengthened brand trust',
        //   ],
        // },
        {
          projectName: 'KB 디지털 인감 유사도 분석(Image Comparison)',
          projectDetail: [
            'OpenCV 기반 SSIM, SIFT, SURF, ORB 알고리즘을 활용한 인감 이미지 유사도 분석 시스템 POC 수행, CNN 기반 모델 성능 검증 및 서비스 적합도 평가',
            '인감 이미지 특성(각도·마모도·농도 등)에 따른 맞춤형 학습 데이터셋 생성, 영업점 실무 환경에서 모델 테스트 및 성능 검증 진행',
            '유관 부서 및 기술 협력사와의 공동 검토를 통해 사업 전략 수립, 인감 이미지 정확도 88% 향상 및 품질 일관성 확보',
            '<b>서비스 도입 타당성 분석 및 협력사 간 기술 로드맵 조율 리딩, 향후 상용화 기반 마련</b>',
          ],
        },
        // {
        //   projectName: 'KB Digital Seal Similarity Analysis POC',
        //   projectDetail: [
        //     'Executed a POC for seal image similarity analysis using OpenCV-based SSIM, SIFT, SURF, and ORB algorithms, validating CNN model performance and assessing service applicability',
        //     'Created customized training datasets reflecting seal image characteristics (angle, wear, ink density), conducting model testing and performance verification in real branch environments',
        //     'Collaborated with internal departments and technology partners to establish business strategies, achieving an 88% improvement in seal image recognition accuracy and quality consistency',
        //     'Led feasibility analysis and coordinated technical roadmaps among partner companies, laying the foundation for future commercialization',
        //   ],
        // },
        {
          projectName: 'KB 신용카드 전표 OCR 정확도 향상 POC 프로젝트',
          projectDetail: [
            'KB 전 영업점 대상 신용카드 전표 수기 입력 자동화를 위한 OCR 정확도 향상 POC 수행, Tesseract 기반 모델 학습 및 손글씨 커스텀 튜닝 적용',
            'Box 라벨링 기반 학습 데이터셋 구축 및 이미지 전처리 파이프라인 설계, LSTM 파라미터 최적화로 필체 인식 성능 개선',
            '<b>전국 영업점 카드 매출 전표 집계 시스템 연동 방향 수립, 인식률 83% → 92%로 향상</b>',
            'OCR 모델 검증 결과를 기반으로 본사업 전환 전략 제시, 수기 업무 자동화 및 영업점 운영 효율화 기여',
          ],
        },
        // {
        //   projectName: 'KB Credit Card Receipt OCR Accuracy Improvement POC',
        //   projectDetail: [
        //     'Conducted a POC to enhance OCR accuracy for automating handwritten credit card slip entry across all KB branches, applying Tesseract-based model training and custom handwriting tuning',
        //     'Built a labeled dataset using Box annotation and designed an image preprocessing pipeline, improving handwriting recognition through LSTM parameter optimization',
        //     'Defined integration strategy with the nationwide branch card sales aggregation system, increasing recognition accuracy from 83% to 92%',
        //     'Proposed a full-scale implementation strategy based on OCR model validation results, contributing to automation of manual tasks and operational efficiency across branches',
        //   ],
        // },
        {
          projectName: 'KB 전자필경대 시스템 POC 개발',
          projectDetail: [
            'KB 전 영업점 대상 고객 대기시간 단축 및 창구 혼잡도 개선을 위한 사전 서류 작성 시스템 POC 개발, 프로세스 설계 및 UX 기획 리딩',
            '태블릿 기반 전자 서류 작성 UI 설계 및 입력 흐름 구조화, HTML5 Canvas 기반 전자 서명(Sign) 및 암호화 처리 기능 구현',
            '기존 번호표 발급 시스템과의 연동 아키텍처 설계, 실증 테스트를 통해 대기시간 50% 단축 및 창구 운영 효율화 성과 달성',
            '<b>디지털 창구 혁신을 위한 파일럿 모델 구축, 전국 영업점 확산 기반 마련</b>',
            '<a target="_blank" href="https://www.babytimes.co.kr/news/articleView.html?idxno=41541">KB국민은행, “미리작성 서비스”로 고객 대기시간 단축</a>',
          ],
        },
        // {
        //   projectName: 'KB Kookmin Bank – Digital Signing Desk System (POC)',
        //   projectDetail: [
        //     'Led the POC development of a pre-document preparation system to reduce customer wait times and improve branch congestion across all KB branches, overseeing process design and UX planning',
        //     'Designed tablet-based electronic document UI and structured data input flow, implementing HTML5 Canvas-based digital signature and encryption features',
        //     'Architected system integration with the existing queue management system, achieving a 50% reduction in customer wait times through pilot testing and improved branch operations',
        //     'Developed a pilot model for digital branch innovation, establishing the foundation for nationwide branch deployment',
        //     '<a target="_blank" href="https://www.babytimes.co.kr/news/articleView.html?idxno=41541">KB국민은행, "미리작성 서비스"로 고객 대기시간 단축</a>',
        //   ],
        // },
      ],
      skillKeywords: [
        'AI 전략수립',
        'Architecture Leadership',
        'Generative AI, LLM Engineering',
        'MLOps, LLMOps, DevOps',
        'AI/ML, AWS, Multi-Cloud',
        'Model Serving, 성능 최적화',
        'TensorFlow, BentoML, ONNX',
        'Docker, Kubernetes, Airflow',
        '데이터 파이프라인, Redshift, EMR',
        '모니터링(EFK, Grafana, Prometheus)',
        '프로젝트 관리(PMO), 기술 전략 수립',
        '조직 커뮤니케이션, 이해관계자 협업',
        '신기술 도입 및 혁신 기획',
        '금융 서비스(AICC, AML, CDD/EDD)',
        '디지털 뱅킹, 비대면 금융 서비스',
        'OpenCV, WebRTC, 백엔드 아키텍처',
      ],
    },
    {
      title: '(주)NHN다이퀘스트',
      position: '과장(프리랜서)-TA사업부',
      startedAt: '2018-09',
      endedAt: '2019-05',
      descriptions: [
        {
          projectName: 'LG 유플러스 AICC 실시간 상담 어드바이저 POC 구축',
          projectDetail: [
            'LG유플러스 고객센터 대상 실시간 채팅 기반 상담 어드바이저 및 만족도 평가 시스템 POC 개발, 상담 스크립트 분석 및 채점 알고리즘 설계',
            'WebSocket 기반 30채널 채팅 인프라 및 MongoDB 메시지 저장소 설계, 상담사 실시간 현황 모니터링(상담 현황, 만족도 등) 대시보드 UI 구성',
            '통화 종료 후 텍스트 전처리(간투어·불용어 제거 등) 및 콜 단위 전문 데이터 생성, NLP 기반 상담 유형 분류(상담 유형 분류 및 추천어, 상담 도움말 제공) 및 추천어 API 개발',
            '일 단위 모델 재학습을 위한 배치 스크립트 구현, 실시간 추론 환경 구성 및 모델 운영 자동화 구조 설계',
            '<b>성과 : 정규직 대상 아키텍처 및 AI 솔루션 교육 내재화 주도, LG U+ AICC 본사업 수주에 기여, 다수 기업 대상 제안서 기반 기술 신뢰 확보</b>',
          ],
        },
        // {
        //   projectName: 'LG U+ AICC Real-Time Advisor POC',
        //   projectDetail: [
        //     'Developed a real-time chat-based advisor and customer satisfaction scoring system for LG U+ contact centers, including dialogue analysis and evaluation algorithms',
        //     'Designed a 30-channel WebSocket infrastructure with MongoDB message storage, and built a live dashboard UI for agent activity and satisfaction monitoring',
        //     'Processed post-call texts (e.g., filler word and stopword removal), generated session-level datasets, and implemented NLP models for intent classification and response recommendations',
        //     'Built daily batch retraining pipelines and deployed real-time inference environments with automated model serving workflows',
        //     '<b>Achievements : Led internal training on system architecture and AI solution design, Contributed to the full-scale LG U+ AICC project acquisition and enhanced technical credibility in external solution proposals</b>',
        //   ],
        // },
        {
          projectName: '한국장학재단 IVR 고도화 및 VOC 분석 시스템 구축',
          projectDetail: [
            '과거/실시간 상담 문장 데이터를 저장하기 위한 데이터 레이크 구성 및 파이프라인 스크립트 개발, Sqoop 기반 MariaDB → HDFS 적재 및 HiveSQL 조회 기능 구현',
            '형태소 분석, 개체명 인식(Tagging), 문장 분리, 토크나이징, 품사 변환 등 NLP 전처리 파이프라인 구축, 상담사 추천 스크립트 추출 로직 개발',
            '학습 모델 재학습을 위한 배치 스크립트 및 모델 버전 관리 저장소 설계, 모델 성능 개선과 지속 운영 체계 마련',
            '하둡 네임노드/데이터노드 및 레플리카 구성, 실제 장애 복원 테스트를 통한 가용성 확보 구조 설계 및 검증',
            '<b>성과 : AICC, STT/TA 사업군 기술 내재화 기반 확보, 금융권 대상 계약 수주 및 PaaS AI 서비스 기반 발판 마련</b>',
          ],
        },
        // {
        //   projectName: 'Korea Student Aid Foundation IVR Modernization & VOC Analysis',
        //   projectDetail: [
        //     'Built a data lake and ingestion pipeline for storing historical and real-time customer consultation texts, using Sqoop for MariaDB-to-HDFS transfer and HiveSQL query development',
        //     'Developed NLP preprocessing components including morphological analysis, NER tagging, sentence segmentation, tokenization, and POS normalization for advisor recommendation logic',
        //     'Designed batch retraining scripts and a model versioning repository to enable continuous model updates and performance improvements',
        //     'Configured Hadoop NameNode/DataNode with replication strategy, and conducted failover simulation tests to ensure system availability and recovery',
        //     '<b>Achievements : Established core capabilities for expanding into AICC and STT/TA solution markets, Contributed to AI platform contracts in the finance sector and enabled packaged deployment offerings</b>',
        //   ],
        // },
        {
          projectName: '롯데정보통신 ML 기반 AICC 솔루션 구축',
          projectDetail: [
            '롯데 계열사(롯데마트, 롯데면세점, 롯데리아) 대상 상담사 음성 STT 및 TA 솔루션 개발 리드, 실시간 문장 데이터 실시간 이중화(Master/Slave) 저장 및 전처리 로직 설계',
            '과거 5분 내 상담콜을 기반으로 상담 내역 요약, 상담 유형 분류, 키워드 추출 등 분석 파이프라인 개발',
            '유사도 분석, 묵음 구간 탐지, 감정 분석, 고객 불만 지수 그룹핑 등 AI 기반 상담 품질 평가 API 구현',
            '상담사 현황 대시보드 UI 차트(통화/대기 상담원, 부서, 만족도 통계 등) 구성, 및 RNN 기반 재학습 배치 스케줄러 및 정확도 검증 자동화 구축',
            '<b>성과 : 롯데 AICC 구축 경험 기반으로 LG, 한화 등 다수 기업 TA 시스템 도입 및 계약 성사, 금융권 대상 STT/TA 사업 확장 기회 확보</b>',
            '<a target="_blank" href="https://www.ezyeconomy.com/news/articleView.html?idxno=126963">롯데정보통신, 고객센터 전문 AI 상담 서비스 론칭</a>',
          ],
        },
        // {
        //   projectName: 'ML-Based AICC Solution for Lotte Group',
        //   projectDetail: [
        //     'Led development of an STT/TA solution for Lotte affiliates (Lotte Mart, Lotte Duty Free, Lotteria), including real-time dual DB replication (Master/Slave) and text preprocessing logic',
        //     'Built an analytics pipeline to summarize call content, classify consultation types, and extract key phrases from recent 5-minute conversations',
        //     'Developed AI-powered APIs for similarity scoring, silence detection, sentiment analysis, and customer complaint clustering',
        //     'Designed dashboard charts for real-time agent monitoring (call/wait status, departments, satisfaction metrics), and built RNN-based batch retraining and auto accuracy validation pipelines',
        //     '<b>Achievements : Enabled successful adoption of TA systems by LG, Hanwha, and others based on the Lotte AICC deployment, Expanded NHN’s STT/TA footprint into financial clients and regulated industries</b>',
        //     '<a target="_blank" href="https://www.ezyeconomy.com/news/articleView.html?idxno=126963">롯데정보통신, 고객센터 전문 AI 상담 서비스 론칭</a>',
        //   ],
        // },
      ],
      skillKeywords: [
        'Python, Java',
        'AI/ML, AWS',
        'AICC',
        'STT/TTS, Konlpy',
        'FastAPI',
        'Model Serving',
        'Django, Flask',
        'NLP, Keras',
        'SpringBoot',
        'Redis',
        'Hadoop, Spark',
        'MariaDB',
      ],
    },
    {
      title: '(주)디오팩토리',
      position: '과장 (SI사업부)',
      startedAt: '2016-12',
      endedAt: '2018-08',
      descriptions: [
        {
          projectName: '신한은행 희망 위기재정 신청 웹 사이트 개발',
          projectDetail: [
            '신용 위기 대상자 대출 심사를 위한 백엔드 예약 시스템 설계 및 구축',
            '대규모 인입 트래픽에 대비한 Nginx, Tomcat 세션 클러스터링 및 로드밸런싱 환경 구성',
            '비효율적인 기존 비즈니스 로직 리팩토링을 통해 API 트래픽 부하 감소 및 응답 속도 N% 향상',
            '위기재정 대상자 정보 통합 검색 화면 개발, DB → 암호화 파일 생성 및 FTP 전송 처리 로직 구현',
            '<b>성과 : 트래픽 병목 해소 및 시스템 안정성 확보, 신한은행 긴급 서비스 런칭 일정 내 성공적 대응, 보안 파일 전송 처리 자동화로 업무 처리 효율 및 데이터 안전성 강화</b>',
          ],
        },
        // {
        //   projectName: 'Emergency Financial Aid System for Shinhan Bank',
        //   projectDetail: [
        //     'Designed and launched a backend reservation system for loan screening targeting financially at-risk customers',
        //     'Configured scalable infrastructure with Nginx and Tomcat session clustering, including load balancing for high-traffic volume',
        //     'Refactored legacy business logic to reduce API load and improve system response time',
        //     'Developed an integrated information lookup UI and implemented secure file generation and FTP transmission logic',
        //     '<b>Achievements : Ensured stable system performance during peak traffic and met Shinhan Bank’s urgent service launch timeline, Automated secure data delivery pipeline, enhancing operational efficiency and data protection</b>',
        //   ],
        // },
        {
          projectName: '행정자치부 국민포럼 정부혁신 사이트 데이터 레이크 구축',
          projectDetail: [
            '행정자치부 국민포럼 사이트 대상 10년간 누적 데이터(5TB) 전처리 및 마이그레이션 수행, 정형/비정형 데이터 클러스터 분산 저장 환경 설계',
            'RDBMS → HDFS 마이그레이션(Sqoop 기반) 수행 및 하둡 Reducer 작업 최적화, 다운타임 최소화를 위한 롤백 스크립트 및 스키마 컨버전 자동화 구현',
            'Nginx + Tomcat 기반 세션 클러스터링 및 로드밸런서 구성, 무중단 배포 환경 구축',
            'Sqoop 기반 RDBMS -> HDFS 마이그레이션 작업 및 하둡 Reducer 작업 최적화',
            '실시간 인기 검색어 조회 시스템 신규 개발, 사용자 트래픽 기반 실시간 조회 처리 구조 추가 설계',
            '<b>성과 : 대용량 공공 데이터 안정적 이전 및 고가용성 기반 데이터 레이크 환경 구현, 실시간 검색어 시스템 기능 기획·구현을 통한 사용자 UX 개선 기여</b>',
          ],
        },
        //   {
        //     projectName: 'Ministry of the Interior and Safety (MOIS) Data Lake Project',
        //     projectDetail: [
        //       'Migrated and preprocessed 5TB of structured and unstructured historical data from the MOIS National Forum platform, and designed a distributed storage cluster architecture',
        //       'Executed Sqoop-based RDBMS-to-HDFS migration, optimized Hadoop reducer tasks, and developed rollback shell scripts to minimize downtime during schema conversion',
        //       'Configured Nginx + Tomcat session clustering and load balancing to enable zero-downtime deployment',
        //       'Sqoop 기반 RDBMS -> HDFS 마이그레이션 작업 및 하둡 Reducer 작업 최적화',
        //       'Developed a real-time trending keyword system based on user access behavior, integrated into the live platform',
        //       '<b>Achievements : Delivered a stable, large-scale data lake infrastructure for public-sector datasets, Improved end-user experience by enabling real-time keyword visibility through custom search logic</b>',
        //     ],
        //   },`
        {
          projectName: '현대자동차 안드로이드 스마트 키 밴드 개발',
          projectDetail: [
            '해외 현대차 고객 대상 블루투스 기반 스마트 키 밴드 전용 안드로이드 Native 앱 개발, 차량 운행 및 건강 데이터 수집 기능 구현',
            '심박수·이동거리 등 센서 기반 사용자 데이터를 실시간 수집 후 스마트폰으로 전송, 이벤트 기반 데이터 통합 처리 및 Rest API 서버 구축',
            '차량–스마트밴드 간 블루투스 통신 동기화 설계 및 기종별 블루투스 버전 호환성 문제 해결',
            '사용자 헬스 정보 시각화를 위한 모니터링 대시보드 화면 구성 및 API 응답 추적 기능 개발',
            '<b>성과 : 글로벌 사용자를 위한 BLE 기반 IoT 연동 시스템 안정화, 기기 호환성 이슈 해결을 통한 사용자 이탈 방지 및 유지율 향상 기여</b>',
          ],
        },
        // {
        //   projectName: 'Hyundai Motor Company Smart Key Band (Android)',
        //   projectDetail: [
        //     'Developed a native Android app for Hyundai’s global smart key band product, enabling Bluetooth-based pairing with vehicles and real-time driving data sync',
        //     'Implemented real-time collection and transmission of sensor data (heart rate, distance, activity) to smartphones, and built a REST API server for unified event handling',
        //     'Solved Bluetooth module compatibility issues across multiple Android device models and ensured reliable synchronization with smart bands',
        //     'Designed a user-facing dashboard to visualize health data and implemented backend monitoring tools to track API response patterns',
        //     '<b>Achievements : Delivered a stable BLE-connected IoT app experience across global Android devices, Reduced user churn and support incidents through effective compatibility handling and performance optimization</b>',
        //   ],
        // },
        {
          projectName: '경기도 이천시청 애니메이션 박람회 사이트 구축',
          projectDetail: [
            '박람회 정보 제공 및 온라인 예약 기능을 위한 데이터 모델링 및 API 백엔드 개발 수행',
            '고객 요구사항 분석을 통해 사이트 전체 구조 설계 및 기능 정의, 기획서 해석 및 기술 스펙 도출',
            '개발과 기획을 연계하는 PM 역할 수행, 설계–구현–오픈까지 전 단계 관리',
            '<b>성과 : 공공기관 프로젝트 납기 내 성공 구축, 고객 피드백 기반 UX 개선사항 실시간 반영, 예약 기능 및 모바일 호환성 확보로 사용자 접근성과 서비스 만족도 향상 기여</b>',
          ],
        },
        // {
        //   projectName: 'Icheon City Animation Expo Website Development',
        //   projectDetail: [
        //     'Developed backend APIs and data models to support event information delivery and reservation functionality',
        //     'Interpreted client requirements and translated them into a complete site architecture and user experience design',
        //     'Managed the full development lifecycle and served as liaison between technical implementation and business goals',
        //     '<b>Achievements : Delivered the project on schedule for a public-sector client, incorporating iterative feedback during development, Enabled mobile accessibility and seamless reservation flow, resulting in improved user engagement and satisfaction</b>',
        //   ],
        // },
        {
          projectName: 'NCS 기반 경민대학교·백제대학교 학사 운영 시스템 개발',
          projectDetail: [
            '경민대학교·백제대학교 대상 학생 및 교수 상담 예약 시스템 구축 및 상담 결과 PDF 출력 기능 개발',
            'Storybook 기반 시각적 테스팅 및 API 명세 문서 관리 주도, 프론트–백엔드 협업 품질 및 생산성 향상',
            '크로스 브라우징 이슈 점검 및 수정, 웹표준·웹 접근성 개선을 위한 프론트엔드 리팩토링 수행',
            '<b>성과 : 비전공 교수진을 위한 사용 편의성 강화 및 상담 결과 출력 자동화 → 행정 업무 효율화에 기여, 운영 부서 중심 사용자 피드백을 반영한 실사용 중심 개선 완료</b>',
          ],
        },
        // {
        //   projectName: 'NCS-Based Academic Management System for Kyungmin & Baekje Universities',
        //   projectDetail: [
        //     'Developed a student–faculty consultation scheduling system and PDF export feature to streamline academic advising',
        //     'Led API documentation and visual testing using Storybook to enhance frontend–backend integration and UI consistency',
        //     'Resolved cross-browser issues and implemented web standards and accessibility improvements',
        //     '<b>Achievements : Automated consultation reporting for faculty users, improving administrative efficiency across departments, Improved system usability based on feedback from real-world academic staff and operational teams</b>',
        //   ],
        // },
        {
          projectName: '행정자치부 모바일 홈페이지 성능 개선',
          projectDetail: [
            'Legacy 소스코드 리팩토링 및 비즈니스 로직 개선을 통해 모바일 최적화 구조로 재설계',
            'JMeter, nGrinder 기반 부하·지속성·스파이크·중단점 테스트 수행, TPS 기준 결과 리포트 및 프로젝트 종료 문서 작성',
            '<b>성과 : 성능 병목 요소 제거 및 실제 운영 환경 기준 충족, 공공기관 품질 기준에 부합하는 안정성 확보</b>',
          ],
        },
        // {
        //   projectName: 'Mobile Website Performance Optimization for the Ministry of the Interior',
        //   projectDetail: [
        //     'Refactored legacy source code and optimized business logic to enhance mobile responsiveness and system structure',
        //     'Executed JMeter and nGrinder-based performance tests (load, endurance, spike, breakpoint), with TPS report generation and project closure documentation',
        //     '<b>Achievements : Resolved bottlenecks and validated system stability under real-world conditions, meeting public sector performance standards</b>',
        //   ],
        // },
      ],
      skillKeywords: [
        'Java, Spring, MySQL',
        'Hadoop, Sqoop',
        'Tibero',
        'React, Android',
        'Bluetooth',
        'Angular, Vue, Javascript',
        'JMeter, nGrinder',
      ],
    },
    {
      title: '(주)아이온커뮤니케이션즈',
      position: '선임연구원(ECM개발팀)',
      startedAt: '2015-04',
      endedAt: '2016-06',
      descriptions: [
        {
          projectName: 'e-Form 온라인 전자 계약 서비스 고도화 및 운영',
          projectDetail: [
            '전자 계약서 작성–체결–전송 전 과정을 위한 온라인 기반 프로세스 설계 및 필드 매핑 관리 기능 개발',
            '주기적으로 변경되는 전자문서 계약 및 법적 효력 정책을 반영하여 시스템 안정성 및 최신성 확보',
            '계약서 스캔 이미지 OCR 파라미터 튜닝을 통해 한/영 인식 정확도 향상, 양식 유형 자동 분류 Rest API 인터페이스 개발',
            'ElasticSearch 클러스터 구축 및 검색 쿼리 튜닝, 노드 간 디스크 불균형 문제 해결',
            '<b>성과 : 비대면 온라인 계약 시스템 최초 구축, 다수 대기업 대상 계약 체결 및 대용량 운영 트래픽 처리 경험 확보</b>',
          ],
        },
        // {
        //   projectName: 'e-Form Online Electronic Contract System Enhancement',
        //   projectDetail: [
        //     'Designed and developed a full online workflow for e-contract drafting, execution, field mapping, and transmission',
        //     'Incorporated frequently updated electronic document regulations and validity policies into the system for legal compliance',
        //     'Tuned OCR module parameters to improve Korean/English recognition accuracy; built REST API interface for automatic form classification',
        //     'Built an ElasticSearch cluster and optimized query performance, resolving disk usage imbalance across nodes',
        //     '<b>Achievements : Launched the first non-face-to-face online contract system, secured contracts with major enterprises, and gained hands-on experience handling large-scale traffic in production</b>',
        //   ],
        // },
        {
          projectName: 'iDrive 전자문서관리시스템(EDMS) 개발 및 운영',
          projectDetail: [
            '전자문서 생성–결재–폐기 전 과정을 포함한 iDrive EDMS 시스템 개발 및 기능 개선, 운영 업무 수행',
            '한글·영문 계약서 기반 OCR 문서 자동 분류 시스템 커스터마이징 개발, 다양한 한글 폰트 대응 정확도 향상',
            '개체명 인식 기반 문서 분류기 성능 개선, 소스 코드 최적화 및 핵심 메뉴 구조 설계 참여',
            '사내 최초 클라우드 기반 EDMS 도입, SaaS 형태의 해외 서비스 제공 구조 구축',
            '<b>성과 : AWS 기반 대용량 트래픽 안정적 처리 및 비용 절감, 자연어 기반 개체명 인식기 개발 경험, 해외 고객사 계약 성사</b>',
          ],
        },
        // {
        //   projectName: 'iDrive Electronic Document Management System (EDMS)',
        //   projectDetail: [
        //     'Developed and maintained iDrive EDMS for document creation, approval, and disposal, with continuous functional enhancements',
        //     'Customized an OCR-based classification system for Korean/English contracts and improved recognition accuracy for various font types',
        //     'Participated in source optimization and menu structure design, enhancing performance of the NER-based classification engine',
        //     'Contributed to the company’s first cloud-based EDMS deployment, enabling SaaS delivery for international customers',
        //     '<b>Achievements : Handled large-scale traffic efficiently on AWS, reduced infrastructure costs, and closed overseas contracts through stable NLP-powered services</b>',
        //   ],
        // },
        {
          projectName: 'POSCO ICT 스마트그리드 수요관리 예측 시스템 구축 및 운영',
          projectDetail: [
            '전력 소비자·생산자 간 실시간 양방향 데이터 공유 및 에너지 효율성 지표 대시보드 개발',
            '계절 및 기간별 전력 수요를 예측하기 위한 지능형 에너지 사용량 예측 시스템 구축',
            '실시간 사용량 데이터 저장을 위한 ElasticSearch 노드·샤드·클러스터 구성 및 리드 레플리카 기반 분산 처리 모듈 구현',
            '생산성 및 경제성 지표 기반 차트를 실시간 시각화하고 외부 연동용 REST API 서버 개발',
            '<b>성과 : 대규모 트래픽 처리 및 실시간 운영 노하우 확보, 스마트그리드 국내외 확산 기반 마련</b>',
          ],
        },
        // {
        //   projectName: 'POSCO ICT Smart Grid Demand Forecasting System',
        //   projectDetail: [
        //     'Developed a real-time dashboard for bi-directional energy data sharing between producers and consumers to monitor efficiency metrics',
        //     'Built an intelligent energy usage forecasting system to predict seasonal and temporal power demand patterns',
        //     'Designed ElasticSearch infrastructure (nodes, shards, clustering) and implemented read replica-based query distribution modules',
        //     'Visualized productivity and cost-efficiency metrics in real-time charts and developed external REST APIs for system integration',
        //     '<b>Achievements : Gained expertise in managing high-volume data traffic and visualization, laying the groundwork for global smart grid expansion and domestic project wins</b>',
        //   ],
        // },
      ],
      skillKeywords: [
        'Java, Spring, Python',
        'ElasticSearch',
        'OCR',
        'AWS',
        'BootStrap',
        'RabbitMQ',
      ],
    },
    {
      title: '(주)넥서스웨어',
      position: '과장 (SI사업수행팀)',
      startedAt: '2013-04',
      endedAt: '2015-03',
      descriptions: [
        {
          projectName: '일반적 SI 파견 및 웹 서비스 개발 및 프로젝트 매니징 업무',
          projectDetail: [],
        },
        {
          projectName: 'LG U+ 유플릭스 무비 하이브리드 앱 고도화 프로젝트',
          projectDetail: [
            '프로젝트 테크 팀 리드 역할 수행',
            'Cordova 기반 하이브리드 앱 코드 구조 개선 및 UI 성능 최적화',
            'CI/CD 파이프라인 구축, RabbitMQ·Jenkins 연동을 통한 배포 자동화 환경 구성',
            'Spring EnCache를 활용한 리딩 데이터 캐싱으로 트래픽 부하 감소 및 확장성 향상',
          ],
        },
        // {
        //   projectName: 'LG U+ Uflix Movie Hybrid App Enhancement Project',
        //   projectDetail: [
        //     'Served as Technical Project Lead',
        //     'Refactored Cordova-based hybrid app architecture and improved UI performance',
        //     'Built CI/CD pipelines with RabbitMQ and Jenkins for automated deployment workflows',
        //     'Leveraged Spring EnCache to reduce traffic load and enhance scalability through critical data caching',
        //   ],
        // },
        {
          projectName: 'KT텔레캅 현행 시스템 기능 개선 및 고도화 프로젝트',
          projectDetail: [
            '스프링 및 마이플랫폼 기반 ERP 기능 추가, 레거시 코드 리팩토링 및 성능 최적화 중심 개발 수행',
            '관제 서비스 연동을 위한 RESTful API 서버 신규 개발',
            '기술 회의 기반 확장성 및 모듈화 구조 제안, 실제 개발 프로세스에 반영',
          ],
        },
        // {
        //   projectName: 'KT Telecop System Enhancement Project',
        //   projectDetail: [
        //     'Extended ERP features using Spring and MyPlatform, with legacy code refactoring and performance tuning',
        //     'Developed RESTful API servers to support the monitoring service platform',
        //     'Proposed and implemented scalable, modular architecture based on technical discussions',
        //   ],
        // },
        {
          projectName: 'PNS 그룹웨어 구축 참여 및 유지보수',
          projectDetail: [
            '프로젝트 매니저 역할',
            '그룹웨어 신규 구축 프로젝트에 참여, 사이트 유지보수 및 기능 추가 업무 수행',
            '비즈니스 로직 수정 및 기능 확장을 위한 개발 작업 진행',
            '레거시 코드 정리 및 테스트 주도 개발(TDD) 방식 점진적 도입',
          ],
        },
        // {
        //   projectName: 'PNS Groupware Development and Maintenance',
        //   projectDetail: [
        //     'Acted as Project Manager',
        //     'Participated in building a new groupware system and handled routine maintenance and feature updates',
        //     'Modified business logic and implemented enhancements based on evolving requirements',
        //     'Reduced legacy codebase and gradually introduced test-driven development (TDD) practices',
        //   ],
        // },
        {
          projectName: '삼성전자 조직도 배치 모듈 개발',
          projectDetail: [
            '그룹 조직도 및 직원 정보 연동을 위한 백엔드 Batch 서비스 개발',
            '조직/인사 정보 변경 시 사내 메신저 자동 반영 인터페이스 구현',
          ],
        },
        // {
        //   projectName: 'Organization Chart Synchronization Module',
        //   projectDetail: [
        //     'Developed backend batch services to synchronize group org charts and employee records',
        //     'Built an interface to automatically reflect org/personnel updates into the internal messenger system',
        //   ],
        // },
        {
          projectName: '한국과학기술기획평가원(KISTEP) 그룹웨어 개발',
          projectDetail: [
            '그룹웨어 사용자 요청사항 기반 기능 개선 및 일정 관리 중심 개발 업무 수행',
            '데이터 입력 및 규칙 정의가 가능한 컴포넌트별 세부 기능 설계 및 구현',
            'Linux + Nginx 기반 리버스 프록시 설정 및 서버 구축 작업 수행',
          ],
        },
        // {
        //   projectName: 'KISTEP (Korea Institute of S&T Evaluation and Planning) - Groupware Development',
        //   projectDetail: [
        //     'Managed feature enhancements and development schedules based on user requests for groupware',
        //     'Developed component-level functionality for structured data entry and validation rule definition',
        //     'Configured reverse proxy using Linux and Nginx and contributed to server setup and deployment',
        //   ],
        // },
        {
          projectName: '인천 교통정보센터 실시간 버스노선(BIS) 웹 개선 사업',
          projectDetail: [
            '인천 시내 버스 위치를 실시간 모니터링하는 웹 화면 UI 설계 및 개발',
            'Flash ActionScript 기반 버스 위치 마킹 인터페이스 구현',
            '실시간 교통 관제 API 호출을 통한 백엔드 데이터 동기화 처리 로직 개발',
          ],
        },
        // {
        //   projectName: 'Incheon Traffic Information Center - Real-Time Bus Route (BIS) Web Enhancement',
        //   projectDetail: [
        //     'Developed a real-time web interface for visualizing city bus locations in Incheon',
        //     'Implemented bus location markers using Flash ActionScript for the monitoring view',
        //     'Built backend logic to synchronize live transport data via real-time control system APIs',
        //   ],
        // },
        {
          projectName: '정보화 마을 데이터 아키텍처 분석 설계',
          projectDetail: [
            '행정안전부 인빌 시스템의 통합 및 분산 데이터 체계 수립을 위한 분석·설계 업무 수행',
            '전체 시스템에 적용 가능한 정규화 및 데이터 아키텍처 표준화 작업 진행',
          ],
        },
        // {
        //   projectName: 'Informatization Village Data Architecture Analysis & Design (Ministry of the Interior)',
        //   projectDetail: [
        //     'Conducted system-wide analysis and design for integrated and distributed data architecture of the MOIS Invil platform',
        //     'Standardized the data structure and normalization process to support scalable system-wide deployment',
        //   ],
        // },
        {
          projectName: '법제처 고도화 프로젝트 TA(CI/CD) 환경 구축',
          projectDetail: [
            'Build Automation 툴(jenkins) 기반 테스트/스테이징/프로덕션 빌드 배포 시스템 구축',
          ],
        },
        // {
        //   projectName: 'Ministry of Government Legislation - CI/CD Environment Setup',
        //   projectDetail: [
        //     'Built a CI/CD deployment system for test, staging, and production using build automation tools',
        //   ],
        // },
      ],
      skillKeywords: [
        'Java, Spring',
        'Cordova, Javascript',
        'Oracle11, Cubrid',
        'ActionScript',
        'ExtJS',
        'RabbitMQ',
        'DA#, Erwin',
        'Linux, Jenkins, Apache',
      ],
    },
    {
      title: 'Happy오후 3시',
      position: '대리(프리랜서, 비상근) - 운영관리팀',
      startedAt: '2009-02',
      endedAt: '2012-12',
      descriptions: [
        {
          projectName: 'JSP 및 PHP 기반 웹 서비스 운영 및 유지보수',
          projectDetail: [
            'JSP 및 PHP 기반 웹 서비스 개발·운영, 서울시 장애인 협회 홈페이지 구축 및 유지보수 담당',
            'PHP·WordPress 기반 쇼핑몰 운영, 기능 개선 및 관리자 페이지 개발',
            'Linux, Apache 기반 서버 인프라 환경 구성 및 운영 자동화 스크립트 관리',
          ],
        },
        // {
        //   projectName: 'Web Service Operations & Maintenance',
        //   projectDetail: [
        //     'Developed and maintained JSP- and PHP-based websites, including the Seoul Disabled Association portal',
        //     'Operated and enhanced WordPress-based e-commerce platforms with admin tools and feature updates',
        //     'Managed server infrastructure setup using Linux and Apache, including scripting for automation tasks',
        //   ],
        // },
      ],
      skillKeywords: ['JSP, PHP', 'Oracle9i, MySQL', 'HTML5', ' Javascript', 'Linux, Apache'],
    },
    {
      title: '(주)하이미디어아카데미',
      position: '강사(프리랜서)',
      startedAt: '2008-03',
      endedAt: '2012-02',
      descriptions: [
        {
          projectName: 'IT 강의 및 교육 과정 기획',
          projectDetail: [
            'NCS 기반 IT 교육과정 기획 및 커리큘럼 발굴, 과정 운영 지원',
            'OA, 웹 프로그래밍, Flash 등 NCS·정규 과정 강의 수행 (신촌·노원·수원 등)',
            '<b>주중 저녁 및 주말 교육과정 강의</b> 중심으로 실무 중심 수업 진행',
          ],
        },
        // {
        //   projectName: 'HiMedia Academy - Freelance IT Instructor & Curriculum Designer',
        //   projectDetail: [
        //     'Designed and delivered NCS-based IT training programs, including curriculum development and class planning',
        //     'Taught OA, web programming, and Flash courses across locations including Shinchon, Nowon, and Suwon',
        //     'Conducted evening and <b>weekend classes focused on practical</b>, job-oriented instruction',
        //   ],
        // },
      ],
      skillKeywords: ['HTML5', 'OA', 'Flash', 'ActionScript', 'NCS'],
    },
  ],
};

export default experience;
