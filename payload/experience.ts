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
            'Galaxy Gaming Hub 클라우드 인프라 운영 리딩. 실시간 성능 지표 기반 운영 기준 수립 및 사전 장애 탐지 체계 정교화, 서비스 중단 리스크 통제',
            '실무 조직부터 C-Level까지 이해관계자 커뮤니케이션. 전략 과제 및 중장기 프로젝트 기술 방향 정렬',
            '모니터링 이슈 대응 프로세스 표준화. 선제 대응 체계 내재화. 시스템 가용성 및 사용자 경험 지표 개선',
            '<b>서비스 안정화 로드맵 수립·이행. 자동화 범위 확장. 장애 대응 리드타임 30% 단축. 내부·외부 약 10명 규모 기술 조직 협업 및 운영 프로세스 구조화</b>',
          ],
        },
        {
          projectName: 'Samsung Big Data Center(DX)',
          projectDetail: [
            '30PB 규모 Galaxy 사용자 로그 파이프라인 운영 리딩. 데이터 수집·분석 플랫폼 안정성 및 확장성 기준 정립',
            '전사 통합 고객 DB 및 분석 시스템 운영 체계 정비, DR 설계 및 장애 대응 표준 수립. 서비스 연속성 확보',
            '데이터 처리 구조 재정비 및 분석 아키텍처 개선. 운영 복잡성 감소 및 성능 지표 개선',
            '<b>데이터 거버넌스·DR 고도화 로드맵 수립 및 단계적 아키텍처 표준화 적용. 연간 운영비용 8% 절감, 리소스 효율 15% 향상</b>',
          ],
        },
        {
          projectName: 'Samsung Research(SR)',
          projectDetail: [
            '42,000 RPS·4PB 규모 DWH 및 분석 플랫폼 DR 전략 수립. Lambda/ECS 기반 전환 방향 정렬',
            'Bixby LLM 학습용 멀티 GPU HPC 아키텍처 설계. EFA 기반 성능 기준 검증 및 POC 리딩',
            'GenAI 모델 드리프트·재학습·DevOps 통합 운영 체계 정립. 시스템 다운타임 10% 감소',
            '<b>AI 학습 인프라 현대화 전략 및 단계적 마이그레이션 로드맵 수립. LLM 훈련 효율 20% 개선, HPC 운영 표준안 제시 및 채택</b>',
          ],
        },
        {
          projectName: 'Samsung Digital Appliance(DA)',
          projectDetail: [
            '클라우드 보안 거버넌스 정책 정립 및 보안 통제 기준 재정비. 보안 사고 10% 감소',
            '신규 클라우드 기술 도입 전략 수립. 서비스 운영 비용 10% 절감 및 확장성 개선',
            '아키텍처 표준화 및 문서 체계 정립. 재사용성 및 운영 효율성 개선',
            '<b>보안·비용 최적화 정책 로드맵 수립. 연간 OPEX 5% 절감, 신규 프로젝트 대응 속도 30% 향상</b>',
          ],
        },
        {
          projectName: 'ETC',
          projectDetail: [
            '<a target="_blank" href="https://coral-macaroni-54f.notion.site/2024-06-AWS-50b225b640a54617990eb6bc7aefdb00">AWS 삼성전자 대상 ‘SageMaker Fine-Tuning with Experiments’ 세미나 발표. 모델 실험 환경 아키텍처 사례 공유</a>',
            '<a target="_blank" href="https://www.linkedin.com/in/eunkikim7224/overlay/experience/2087486539/multiple-media-viewer/?profileId=ACoAAC505Q0ByO4td6JYF1X6Ym7GF4uI_U_fARo&treasuryMediaId=1754283874088">AWS 외부 ‘Fine-Tuning & Evaluation of Foundation Models on SageMaker’ 대기업 적용 전략 및 운영 사례 제시</a>',
            '<a target="_blank" href="https://www.linkedin.com/in/eunkikim7224/overlay/experience/2087486539/multiple-media-viewer/?profileId=ACoAAC505Q0ByO4td6JYF1X6Ym7GF4uI_U_fARo&treasuryMediaId=1754283902784">AWS 내부 ‘Generative AI Bootcamp – SageMaker JumpStart’ 세미나 발표. 교육 콘텐츠 기획 및 커리큘럼 공동 설계</a>',
            '<a target="_blank" href="https://www.linkedin.com/in/eunkikim7224/overlay/experience/2087486539/multiple-media-viewer/?profileId=ACoAAC505Q0ByO4td6JYF1X6Ym7GF4uI_U_fARo&treasuryMediaId=1754453572559">AWS 외부 ‘Generative AI Bootcamp – RAG Essentials: Bedrock & Q in Action’ 세션 리딩</a>',
            '<a target="_blank" href="https://github.com/son-kjun/bedrock-workshop">외부 고객 대상 생성형 AI 워크숍 리딩. PoC 아키텍처 설계 및 모델 추론 실습 프레임 제공</a>',
            'Python 기반 비용 분석 자동화 도구 설계. 삼성 고객사 과금 구조 분석 및 비용 최적화 기준 정립',
            'AWS 내부 AI/ML 기술 공유 세션 기획 및 발표. 조직 내 기술 표준 정렬 및 확산',
            '고객 대상 GenAI/ML(SageMaker, Model Serving, MLOps) 기술 세션 발표. PoC 아키텍처 방향성 제시',
            '비용 최적화 및 서비스 단순화 아키텍처 설계 주도. 운영 구조 재정비 및 관리 효율 개선',
            '신규 서비스 리스크 리뷰 및 DR 전략 수립. 글로벌 리더십 협업 기반 사전 리스크 통제',
          ],
        },
      ],
      skillKeywords: [
        'AWS Architecture & Governance',
        'Generative AI & LLM Platforms',
        'AI/ML Solution Architecture',
        'Enterprise MLOps & LLMOps',
        'Cloud Cost Optimization (FinOps)',
        'Hybrid & Multi-Cloud Infrastructure',
        'Accelerated Computing & GPU Clusters (HPC)',
        'Big Data & Analytics Platforms',
        'Infrastructure as Code (Terraform, CDK)',
        'DevOps Automation & Observability',
        'Cross-Functional Leadership & Stakeholder Alignment',
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
            'KB금융 전 계열사 AICC MLOps TF 리딩, 금융 규제 환경 기반 하이브리드 클라우드 아키텍처(EKS·Istio) 설계 및 트래픽 제어, 관측 체계 정립',
            'Ray Serve, BentoML 기반 모델 서빙 및 버전 관리 체계 설계, 성능·정확도·신뢰도 자동 측정 프레임 정의 및 인퍼런스 최적화',
            '모델 서빙 프레임워크 안정성 검증 및 성능 분석 기준 수립, 외주 기술 검토, 선정 심사 참여',
            'KB-STAR NLP 모델(NER·형태소 분석, Intent 분류) 경량화 및 콜봇 서빙 구조 재설계, 추론 성능 30% 개선',
            '<b>AI 비서 서비스 고도화 전략 및 운영 표준 수립, 전 계열사 확장 가능한 AICC 플랫폼 기반 정립</b>',
            '<a target="_blank" href="https://www.newstomato.com/readNewspaper.aspx?no=1126892">"은행원 대신 가상인간" 국민은행의 AI 금융비서 실험</a>',
            '<a target="_blank" href="https://www.etnews.com/20240306000220">"내 손안의 금융비서" KB국민은행, 모바일 특화 AI 고도화</a>',
            '<a target="_blank" href="https://www.g-enews.com/article/Finance/2020/06/20200618141958190da878e5c53_1">KB국민은행 한글 자연어 학습 모델 ‘KB ALBERT’ 개발 및 내재화 추진</a>',
          ],
        },
        {
          projectName: 'KB금융 AI 상담 콜봇 전사 도입 전략 TF',
          projectDetail: [
            'KB금융 전 계열사 AI 상담 콜봇 도입 전략 TF 참여, 기술 전략 수립 및 단계적 구축 로드맵 정의',
            '챗봇 솔루션 성능 비교 및 AI 스타트업 협력 검토, 사업 제안서 평가 및 업체 선정 기준 정립',
            '하이브리드 클라우드 기반 AICC 아키텍처 검토, 망분리 환경 반영 및 보안, 운영 효율성 기준 수립',
            'AI 콜봇 구축 RFP(요건 정의서) 작성 주도, 아키텍처·보안·용량·이중화·DR 기술 심의 참여',
            '<b>생성형 AI 협력 스타트업 발굴, KB금융 자체 구축 전략 수립 및 실행 체계 정렬</b>',
            '<a target="_blank" href="https://www.globalnewsagency.kr/news/articleView.html?idxno=270125">KB국민은행, 고령층 고객을 위한 ‘콜봇 서비스’ 지원</a>',
            '<a target="_blank" href="https://www.globalnewsagency.kr/news/articleView.html?idxno=270125">AI은행원 고객 접점 확대, KB국민은행 콜봇 서비스 ‘똑똑’ 전진 배치</a>',
          ],
        },
        {
          projectName: 'KB국민은행 메타버스(Metaverse) 금융 연계 시스템 테스트베드 기획 및 개발',
          projectDetail: [
            'KB 금융 메타버스 테스트베드 기획 및 개발 리딩, 가상 뱅킹 연계 시나리오 설계 및 금융 보안 심의 대응',
            '금융감독기관 규제 대응 및 신기술 도입 기술 타당성 검토 주도, 정책 협의 지원',
            'AWS·Ray·Lambda·Kubernetes 기반 실시간 유저 로그 분석, 저장 백엔드 아키텍처 설계 및 개발',
            '접속률, 이벤트 활용률·유저 행동 데이터 기반 분석 파이프라인 및 대시보드 구성, 메타버스 금융 채널 실증 검증 및 전략 수립 기여',
            '<a target="_blank" href="https://biz.chosun.com/stock/finance/2022/02/09/NINCMSR4JJGI7LNMUDKYQBPN6I">KB국민은행, 로블록스(Roblox)로 ‘메타버스 금융’ 시도</a>',
            '<a target="_blank" href="https://www.econovill.com/news/articleView.html?idxno=542825">KB국민은행, "메타버스·디지털자산·금융" 접점 찾는다</a>',
            '<a target="_blank" href="https://www.kbanker.co.kr/news/articleView.html?idxno=200455">KB국민은행, "메타버스 영업점 실증" 프로젝트 추진</a>',
          ],
        },
        {
          projectName: 'KB국민은행 비대면 화상상담 플랫폼 구축',
          projectDetail: [
            '비대면 상담 채널 고도화를 위한 브라우저 기반 화상상담 플랫폼 POC 기획 및 리딩, AWS Chime, WebRTC, Docker, TypeScript 기반 경량 아키텍처 설계',
            'MSCOCO-BodyPix 기반 AI 영상 처리 모델 적용, Tensor.js 활용 실시간 배경 제거 및 렌더링 성능 최적화',
            'CI/CD(CodeDeploy, Jenkins), 메트릭(Grafana, Prometheus), 로그 수집(EFK) 체계 구성, 운영 자동화 및 품질 모니터링 구조 정립',
            '<b>임직원, 영업점 사용자 테스트 및 적용 고도화 보고, 코로나 이후 비대면 상담 대기시간 25% 단축 및 고객 접근성 개선</b>',
            '<a target="_blank" href="https://www.youthdaily.co.kr/mobile/article.html?no=120894">"어디서든 비대면으로" KB국민은행 ‘모바일 화상상담 서비스’ 확대</a>',
          ],
        },
        {
          projectName: 'KB Antoc 기업 여신 가치 평가 자동화 시스템 POC',
          projectDetail: [
            '기업 여신 심사 자동화를 위한 크롤링 시스템 POC 기획 및 리딩, Python 기반 기업 정보·신용·특허·기술 데이터 수집 모듈 설계',
            'Spring Boot 기반 기업 정보 저장 및 주기 갱신 배치 구조 설계, REST API 서버 및 Android 프론트엔드 연동',
            '여신 심사 자동화 프로세스 및 데이터 파이프라인 검증, 업무 효율화 구조 분석 및 차세대 시스템 아키텍처 제안',
            '<b>심사 프로세스 자동화를 통해 연간 1,000건 이상 업무 절감 기반 마련, AI 기반 여신 심사 체계 전환을 위한 기술 검증 단계 확보</b>',
          ],
        },
        {
          projectName: 'KB국민은행 모바일 브랜치 비대면 계좌개설 플랫폼 개발',
          projectDetail: [
            '비대면 금융 서비스 혁신을 위한 모바일 브랜치 프로젝트 참여, IB Framework 기반 예금, 적금 계좌 발급 시스템 설계 및 협업',
            'CDD, EDD 및 AML 프로세스 연계 구조 설계, 계정계 보안 정책 및 금융 규제 준수 체계 반영',
            '주민등록증 OCR 및 WebRTC 기반 실시간 이미지 캡처 연동 검증, BMT 단계 안정화 기여',
            '<b>대용량 트래픽 대응을 위한 비동기 아키텍처 전환 설계, 서비스 장애율 40% 감소 및 비대면 계좌개설 프로세스 안정화</b>',
            '<a target="_blank" href="https://www.hankyung.com/article/2020091463216">앱·인증서 없이 OK! KB국민은행 "모바일 브랜치" 출시</a>',
            '<a target="_blank" href="https://m.joseilbo.com/news/view.htm?newsid=437905#_enliple">KB국민은행, "KB모바일 브랜치" 신규 가입 이벤트 진행</a>',
            '<a target="_blank" href="https://www.fntimes.com/html/view.php?ud=202009141115486803179ad43907_18">국민은행, 웹기반 "KB모바일 브랜치" 출시…공인인증서 없이 상품 가입</a>',
          ],
        },
        {
          projectName: 'KB MyStar 상담 데이터 분석 및 만족도 평가 POC',
          projectDetail: [
            '고객 상담 만족도 자동 평가 체계 검증을 위한 POC 수행, Konlpy, Mecab, TensorFlow 기반 NLP 분석 구조 설계',
            'KB 전 영업점 10년치 상담 텍스트 데이터 분석, 감정 분류 및 고객 이탈 관련 핵심 키워드 도출',
            '상담 만족도 유형화 및 트렌드 분석 체계 정립, Dash 기반 시각화 대시보드 및 리포팅 구조 설계',
            '<b>분석 결과를 기반으로 마케팅 전략 보고서 도출, 고객 경험 개선 및 브랜드 신뢰도 강화 방향 제시</b>',
          ],
        },
        {
          projectName: 'KB 디지털 인감 AI 기반 비교 시스템 검증 프로젝트',
          projectDetail: [
            'OpenCV 기반 이미지 유사도 분석(SSIM, SIFT, SURF, ORB) 및 CNN 모델을 활용한 디지털 인감 비교 POC 리딩, 기술 적합성 및 서비스 적용 가능성 검증',
            '인감 이미지 특성(각도, 마모도, 농도 등)을 반영한 학습 데이터셋 설계, 영업점 실무 환경 기준 성능 검증 수행',
            '유관 부서 및 기술 협력사 공동 검토 체계 정립, 인감 이미지 인식 정확도 88% 향상 및 품질 일관성 확보',
            '<b>서비스 도입 타당성 분석 및 협력사 기술 로드맵 정렬 리딩, 상용화 기반 구조 마련</b>',
          ],
        },
        {
          projectName: 'KB 신용카드 전표 OCR 고도화 및 사업 전환 검증 POC',
          projectDetail: [
            'KB 전 영업점 대상 신용카드 전표 자동화를 위한 OCR 고도화 POC 리딩, Tesseract 기반 모델 튜닝 및 손글씨 인식 성능 개선',
            'Box 라벨링 기반 학습 데이터셋 설계 및 이미지 전처리 구조 정립, LSTM 파라미터 최적화로 인식 정확도 개선',
            '<b>전국 영업점 카드 매출 집계 시스템 연계 방향 정립, 인식률 83%에서 92%로 향상</b>',
            '모델 검증 결과를 기반으로 본사업 전환 전략 제안, 수기 업무 자동화 및 운영 효율화 기반 마련',
          ],
        },
        {
          projectName: 'KB 디지털 창구 전환 전자필경대 POC',
          projectDetail: [
            'KB 전 영업점 대상 사전 서류 작성 전자필경대 POC 리딩, 프로세스 설계 및 UX 구조 기획',
            '태블릿 기반 전자 문서 작성 UI 설계 및 HTML5 Canvas 기반 전자 서명, 암호화 처리 구조 구현, 기존 번호표 시스템 연동 아키텍처 설계',
            '<b>실증 테스트 결과 대기시간 50% 단축, 디지털 창구 파일럿 모델 구축 및 전국 확산 기반 마련</b>',
            '<a target="_blank" href="https://www.babytimes.co.kr/news/articleView.html?idxno=41541">KB국민은행, “미리작성 서비스”로 고객 대기시간 단축</a>',
          ],
        },
      ],
      skillKeywords: [
        'AI 전략수립 및 기술 로드맵 수립',
        '엔터프라이즈 아키텍처 리더십',
        'Generative AI 및 LLM 엔지니어링',
        'Enterprise MLOps, LLMOps, DevOps 체계',
        'AI/ML 및 AWS·Multi-Cloud 아키텍처',
        'Model Serving 및 성능 최적화',
        'TensorFlow, BentoML, ONNX 기반 모델 운영',
        'Docker·Kubernetes·Airflow 기반 컨테이너 오케스트레이션',
        '데이터 파이프라인 및 Redshift·EMR 기반 분석 플랫폼',
        'Observability 체계(EFK, Grafana, Prometheus)',
        '프로젝트 거버넌스(PMO) 및 기술 전략 수립',
        '조직 커뮤니케이션 및 이해관계자 정렬',
        '신기술 도입 전략 및 혁신 기획',
        '금융 AI 서비스(AICC, AML, CDD/EDD)',
        '디지털 뱅킹 및 비대면 금융 아키텍처',
        'OpenCV, WebRTC 기반 실시간 시스템 및 백엔드 아키텍처'
      ],
    },
    {
      title: '(주)NHN다이퀘스트',
      position: '과장(프리랜서)-TA사업부',
      startedAt: '2018-09',
      endedAt: '2019-05',
      descriptions: [
        {
          projectName: 'LG유플러스 AICC 실시간 상담 어드바이저 POC',
          projectDetail: [
            'LG유플러스 고객센터 대상 실시간 채팅 기반 상담 어드바이저 및 만족도 평가 POC 개발, 상담 스크립트 분석 및 채점 알고리즘 설계',
            'WebSocket 기반 30채널 채팅 인프라 및 MongoDB 메시지 저장소 설계, 상담사 현황, 만족도 모니터링 대시보드 구현',
            '통화 종료 후 텍스트 전처리 및 콜 단위 데이터 생성, NLP 기반 상담 유형 분류 및 추천어 API 개발',
            '<b>일 단위 모델 재학습 배치 스크립트 구현 및 실시간 추론 환경 구성, AICC 본사업 수주 기여 및 기술 교육 내재화 주도</b>',
          ],
        },
        {
          projectName: '한국장학재단 IVR 고도화 및 VOC 분석 시스템',
          projectDetail: [
            '상담 문장 데이터 저장을 위한 데이터 레이크 및 파이프라인 설계, Sqoop 기반 MariaDB→HDFS 적재 구조와 HiveSQL 조회 환경 구성',
            '형태소 분석, 개체명 인식, 문장 분리 등 NLP 전처리 파이프라인 구축, 상담사 추천 스크립트 추출 로직 개발',
            '모델 재학습 배치 스크립트 및 버전 관리 저장소 설계, 지속 운영을 위한 성능 개선 체계 정립',
            '<b>하둡 네임노드, 데이터노드 및 레플리카 구성 검증, AICC, STT/TA 기술 내재화 기반 확보 및 금융권 계약 수주 기여</b>',
          ],
        },
        {
          projectName: '롯데정보통신 ML 기반 AICC, STT/TA 솔루션 구축',
          projectDetail: [
            '롯데 계열사(롯데마트, 롯데면세점, 롯데리아) 대상 상담 음성 STT/TA 솔루션 개발 리드, 실시간 문장 데이터 이중화(Master/Slave) 저장 및 전처리 구조 설계',
            '최근 5분 상담콜 기반 상담 요약, 유형 분류, 키워드 추출 분석 파이프라인 설계',
            '유사도 분석, 묵음 탐지, 감정 분석, 고객 불만 지수 그룹핑 등 AI 기반 상담 품질 평가 API 구현',
            '<b>상담사 현황 대시보드 및 RNN 기반 재학습 배치 자동화 체계 구축, LG, 한화 등 다수 기업 TA 시스템 도입 및 금융권 STT/TA 사업 확장 기여</b>',
            '<a target="_blank" href="https://www.ezyeconomy.com/news/articleView.html?idxno=126963">롯데정보통신, 고객센터 전문 AI 상담 서비스 론칭</a>',
          ],
        },
      ],
      skillKeywords: [
        'Python, Java',
        'AI/ML & NLP (Keras, Konlpy)',
        'AICC & STT/TTS Systems',
        'AWS & Distributed Systems',
        'Model Serving & API Development (FastAPI, Django, Flask, Spring Boot)',
        'Data Engineering (Hadoop, Spark, MariaDB, Redis)',
      ],
    },
    {
      title: '(주)디오팩토리',
      position: '과장 (SI사업부)',
      startedAt: '2016-12',
      endedAt: '2018-08',
      descriptions: [
        {
          projectName: '신한은행 희망 위기재정 신청 온라인 접수 시스템 구축',
          projectDetail: [
            '신용 위기 대상자 대출 심사 백엔드 예약 시스템 설계 및 개발 주도',
            'Nginx, Tomcat 세션 클러스터링 기반 고가용성 로드밸런싱 구성',
            '비즈니스 로직 재설계로 API 트래픽 감소 및 응답 성능 N% 개선',
            '위기재정 대상자 통합 검색 개발 및 암호화 파일 생성, FTP 전송 자동화 구현',
            '<b>성과 : 트래픽 병목 해소, 시스템 안정성 확보, 신한은행 긴급 서비스 일정 준수, 보안 전송 자동화로 업무 효율 및 데이터 무결성 강화</b>',
          ],
        },
        {
          projectName: '행정자치부 정부혁신 국민포럼 데이터 레이크 구축',
          projectDetail: [
            '10년 누적 5TB 데이터 전처리 및 RDBMS→HDFS 마이그레이션, 정형·비정형 분산 저장 구조 설계',
            'Sqoop 기반 데이터 이관 및 Hadoop Reducer 최적화, 롤백·스키마 자동화로 다운타임 최소화',
            'Nginx·Tomcat 세션 클러스터링 및 로드밸런싱 구성, 무중단 배포 환경 구축',
            '사용자 트래픽 기반 실시간 인기 검색어 조회 시스템 설계 및 개발',
            '<b>성과 : 대용량 공공 데이터 안정적 이전, 고가용성 데이터 레이크 구현, 실시간 검색 기능 도입으로 사용자 경험 개선</b>',
          ],
        },
        {
          projectName: '현대자동차 BLE 기반 스마트 키 밴드 앱 개발',
          projectDetail: [
            '해외 고객 대상 BLE 기반 스마트 키 밴드 안드로이드 Native 앱 개발, 차량 운행, 헬스 데이터 수집 기능 구현',
            '심박수, 이동거리 센서 데이터 실시간 수집 및 스마트폰 전송, 이벤트 기반 통합 처리 및 REST API 서버 개발',
            '차량–스마트밴드 BLE 통신 동기화 설계 및 기종별 블루투스 버전 호환성 이슈 해결',
            '사용자 헬스 데이터 시각화 대시보드 및 API 응답 추적 기능 개발',
            '<b>성과 : BLE 기반 IoT 연동 시스템 안정화, 기기 호환성 개선으로 글로벌 사용자 유지율 향상 기여</b>',
          ],
        },
        {
          projectName: '경기도 이천시청 애니메이션 박람회 웹 시스템 구축',
          projectDetail: [
            '박람회 정보, 온라인 예약 기능 데이터 모델링 및 API 백엔드 개발',
            '요구사항 분석 기반 전체 사이트 구조 설계 및 기능 정의',
            '기획, 개발 연계 PM 역할 수행, 설계부터 오픈까지 전 단계 관리',
            '<b>성과 : 공공 프로젝트 기한 내 구축, 사용자 피드백 즉시 반영, 예약 기능 및 모바일 호환성 확보 alc 접근성 향상</b>',
          ],
        },
        {
          projectName: 'NCS 기반 경민대, 백제대 학사 운영 시스템 개발',
          projectDetail: [
            '경민대, 백제대 상담 예약 시스템 구축 및 상담 결과 PDF 자동 출력 기능 개발',
            'Storybook 기반 시각 테스트 및 API 명세 관리로 프론트, 백엔드 협업 품질 개선',
            '크로스브라우징 점검 및 웹표준, 웹접근성 개선 리팩토링 수행',
            '<b>성과 : 상담 결과 출력 자동화로 행정 업무 효율 향상, 사용자 피드백 반영을 통한 실사용 중심 개선 완료</b>',
          ],
        },
        {
          projectName: '행정자치부 모바일 홈페이지 성능 개선',
          projectDetail: [
           'Legacy 코드 리팩토링 및 비즈니스 로직 개선으로 모바일 최적화 구조 재설계',
           'JMeter, nGrinder 기반 부하, 지속, 스파이크 테스트 수행 및 TPS 기준 성능 리포트 작성',
           '<b>성과 : 성능 병목 제거 및 운영 기준 충족, 공공기관 품질 기준에 부합하는 안정성 확보</b>',
          ],
        },
      ],
      skillKeywords: [
          'Java, Spring, MySQL, Tibero',
          'Hadoop, Sqoop',
          'React, Angular, Vue, JavaScript',
          'Android (Native), Bluetooth (BLE)',
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
          projectName: 'e-Form 온라인 전자계약 서비스 고도화 및 운영',
          projectDetail: [
            '온라인 전자계약 작성, 체결, 전송 프로세스 설계 및 필드 매핑 기능 개발',
            '전자문서 계약 정책 변경 반영 및 시스템 안정성 유지',
            'OCR 파라미터 튜닝으로 한/영 인식률 개선 및 계약서 유형 자동 분류 REST API 개발',
            'ElasticSearch 클러스터 구축 및 검색 쿼리 튜닝, 노드 디스크 불균형 문제 해결',
            '<b>성과 : 비대면 전자계약 시스템 구축, 대기업 대상 대용량 트래픽 안정 운영 경험 확보</b>',
          ],
        },
        {
          projectName: 'iDrive 전자문서관리시스템(EDMS) 개발 및 운영',
          projectDetail: [
            'iDrive EDMS 전자문서 생성, 결재, 폐기 전 과정 개발 및 운영',
            '한글, 영문 계약서 OCR 자동 분류 시스템 커스터마이징 및 폰트 대응 정확도 개선',
            '개체명 인식 기반 문서 분류 성능 개선 및 코드 최적화, 핵심 메뉴 구조 설계 참여',
            '사내 최초 클라우드 기반 EDMS 도입 및 SaaS형 해외 서비스 구조 구축',
            '<b>성과 : AWS 기반 대용량 트래픽 안정 처리 및 비용 절감, 자연어 기반 개체명 인식기 개발, 해외 고객 계약 성사</b>',
          ],
        },
        {
          projectName: 'POSCO ICT 스마트그리드 수요 예측 시스템',
          projectDetail: [
            '전력 소비자, 생산자 간 실시간 데이터 연계 및 에너지 지표 대시보드 개발',
            '계절, 기간별 전력 수요 예측 모델 기반 사용량 예측 시스템 구축',
            'ElasticSearch 노드, 샤드, 클러스터 구성 및 리드 레플리카 기반 분산 처리 구현',
            '실시간 지표 시각화 및 외부 연동 REST API 서버 개발',
            '<b>성과 : 대규모 트래픽 기반 실시간 운영 경험 확보, 스마트그리드 확산 기반 마련</b>',
          ],
        },
      ],
      skillKeywords: [
       'Java, Spring, Python',
       'ElasticSearch, RabbitMQ',
       'OCR',
       'AWS',
       'Bootstrap',
      ],
    },
    {
      title: '(주)넥서스웨어',
      position: '과장 (SI사업수행팀)',
      startedAt: '2013-04',
      endedAt: '2015-03',
      descriptions: [
        {
          projectName: '대기업, 공공기관 대상 SI 프로젝트 수행 및 웹 서비스 설계, 개발',
          projectDetail: [],
        },
        {
          projectName: 'LG U+ 유플릭스 무비 하이브리드 앱 고도화',
          projectDetail: [
            '프로젝트 테크 리드로 아키텍처 개선 및 기술 의사결정 수행',
            'Cordova 기반 하이브리드 앱 구조 개선 및 UI 성능 최적화',
            'RabbitMQ·Jenkins 연계 CI/CD 파이프라인 구축 및 배포 자동화',
            'Spring EnCache 캐싱 적용 결과 트래픽 부하 감소 및 확장성 개선',
          ],
        },
        {
          projectName: 'KT텔레캅 현행 시스템 기능 개선 및 고도화',
          projectDetail: [
            'Spring, 마이플랫폼 기반 ERP 기능 확장 및 레거시 코드 리팩토링, 성능 최적화',
            '관제 서비스 연동 REST API 설계 및 확장성, 모듈화 구조 개선',
            '시스템 안정성 강화 및 외부 연동 체계 구축, 운영 효율 향상',
          ],
        },
        {
          projectName: 'PNS 그룹웨어 구축 및 유지보수',
          projectDetail: [
            '프로젝트 매니저, 그룹웨어 신규 구축 및 기능 확장 리딩',
            '비즈니스 로직 개선 및 유지보수, 레거시 코드 정리',
            'TDD 점진적 도입으로 코드 품질 개선 및 유지보수 효율 향상',
          ],
        },
        {
          projectName: '삼성전자 조직도 자동화 모듈 개발',
          projectDetail: [
            '그룹 조직도, 직원 정보 연동 백엔드 배치 서비스 개발',
            '조직, 인사 정보 변경 시 사내 메신저 자동 반영 인터페이스 구현',
            '조직 정보 동기화 자동화, 수작업 최소화 및 운영 효율 향상',
          ],
        },
        {
          projectName: '한국과학기술기획평가원(KISTEP) 그룹웨어 시스템 고도화 및 인프라 구축',
          projectDetail: [
            '사용자 요구 기반 그룹웨어 기능 개선 및 일정 관리 모듈 개발',
            '데이터 입력·규칙 정의형 컴포넌트 설계 및 세부 기능 구현',
            'Linux, Nginx 기반 리버스 프록시 서버 구축, 운영 안정성 및 확장성 확보',
          ],
        },
        {
          projectName: '인천 교통정보센터 실시간 버스노선(BIS) 웹 개선 사업',
          projectDetail: [
            '인천 시내버스 위치 실시간 모니터링 웹 UI 설계, 개발',
            'Flash ActionScript 기반 버스 위치 마킹 인터페이스 구현',
            '교통 관제 API 연동 실시간 데이터 동기화 처리 및 위치 가시성 확보',
          ],
        },
        {
          projectName: '정보화 마을 데이터 아키텍처 분석 설계',
          projectDetail: [
            '행정안전부 인빌 시스템 통합, 분산 데이터 구조 분석 및 설계',
            '전사 적용 데이터 정규화 및 아키텍처 표준 수립',
            '데이터 구조 일관성 확보 및 확장 가능한 표준 체계 정립',
          ],
        },
        {
          projectName: '법제처 고도화 프로젝트 TA(CI/CD) 환경 구축',
          projectDetail: [
            'Jenkins 기반 테스트, 스테이징·프로덕션 빌드 및 배포 자동화 체계 구축',
            'CI/CD 표준 정립 및 배포 안정성·운영 효율성 향상',
          ],
        },
      ],
      skillKeywords: [
        'Java, Spring',
        'Cordova, JavaScript, ExtJS, ActionScript',
        'Oracle11, Cubrid',
        'RabbitMQ',
        'DA#, Erwin',
        'Linux, Apache, Jenkins',
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
            '서울시 장애인협회 홈페이지 구축 및 지속 운영 담당',
            'PHP·WordPress 기반 쇼핑몰 기능 개선 및 관리자 페이지 개발',
            'Linux·Apache 환경 서버 구성 및 운영 자동화 스크립트 관리',
          ],
        },
      ],
      skillKeywords: ['JSP, PHP', 'Oracle9i, MySQL', 'HTML5, Javascript', 'Linux, Apache'],
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
            'NCS 기반 IT 직무 교육과정 기획 및 커리큘럼 구성, 과정 운영 지원',
            'OA, 웹 프로그래밍, Flash·ActionScript 등 실무 중심 강의 진행 (신촌, 노원, 수원 캠퍼스)',
            '<b>주중 야간 및 주말 과정 운영, 프로젝트 기반 실습 중심 수업 진행</b>',
          ],
        },
      ],
      skillKeywords: ['HTML5', 'OA', 'Flash/ActionScript', 'NCS 기반 교육과정 설계'],
    },
  ],
};

export default experience;
