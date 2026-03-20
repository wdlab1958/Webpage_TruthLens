// ========================================
// Internationalization (i18n) - KO / EN
// TruthLens v3.0
// ========================================

const i18nData = {
    ko: {
        // Navigation
        'nav.home': 'Home',
        'nav.features': '핵심 기능',
        'nav.agents': '에이전틱 AI',
        'nav.dashboard': '대시보드',
        'nav.detection': '탐지 모듈',
        'nav.architecture': '아키텍처',
        'nav.btn.dashboard': '대시보드',

        // Hero
        'hero.badge': 'LangGraph + CrewAI + AutoGen + DSPy + vLLM + RAG + Ollama',
        'hero.title1': 'TruthLens',
        'hero.title2': 'DeepFake Detection',
        'hero.subtitle': '엔터프라이즈 포렌식 플랫폼 — 38개 탐지 모듈 · 12명 AI 전문가',
        'hero.subtitle2': '52종 GenAI 도구 대응 · 실시간 스트림 탐지 · 법적 증거 수준 보고서',
        'hero.btn.dashboard': '대시보드 미리보기',
        'hero.btn.agents': '에이전틱 AI',
        'hero.trust.tests': '350+ 테스트 통과',
        'hero.trust.modules': '38개 탐지 모듈',
        'hero.trust.pages': '21개 대시보드 페이지',
        'hero.trust.apis': '41개 REST API',

        // Features Section
        'features.title': '핵심 차별화 요소',
        'features.subtitle': 'TruthLens v3.0 - 8대 핵심 특장점',

        'feat.multimodule.title': '38개 멀티 도메인 탐지 모듈',
        'feat.multimodule.desc': '공간(Spatial), 시간(Temporal), 오디오, 메타데이터, 방어 — 5개 도메인에 걸친 38개 전문 분석 모듈이 다층 퓨전으로 결합됩니다.',
        'feat.multimodule.highlight': '5개 도메인',

        'feat.multiagent.title': '8개 프레임워크 멀티 에이전트',
        'feat.multiagent.desc': 'LangGraph + CrewAI + AutoGen + DSPy + vLLM + RAG + Ollama + HITL — 8개 AI 프레임워크가 시너지를 이루며 12명의 전문가 에이전트가 합의 판정합니다.',
        'feat.multiagent.highlight': '12명 AI 전문가',

        'feat.debate.title': '법정식 적대적 토론',
        'feat.debate.desc': 'AutoGen 기반 9명 에이전트 법정 토론 시스템. 검사·변호인·판사 구조의 1v1 및 GroupChat 모드로 불확실 구간 판정 정확도를 극대화합니다.',
        'feat.debate.highlight': '9명 에이전트',

        'feat.coverage.title': '52종 GenAI 도구 대응',
        'feat.coverage.desc': 'Midjourney, DALL-E, Stable Diffusion, Sora, ElevenLabs 등 52종 생성형 AI 도구의 고유 아티팩트를 탐지합니다.',
        'feat.coverage.highlight': '52종 도구',

        'feat.proactive.title': '선제적 방어 시스템',
        'feat.proactive.desc': 'ADAG Red Team 공격 시뮬레이션, 워터마크 삽입/검증, 위협 인텔리전스 피드로 선제적 방어 체계를 구축합니다.',
        'feat.proactive.highlight': 'Red-Blue Team',

        'feat.xai.title': '설명 가능한 AI (XAI)',
        'feat.xai.desc': '모든 판정에 대해 LLM 기반 상세 설명, 증거 체인, 법적 증거 수준 포렌식 보고서를 자동 생성합니다.',
        'feat.xai.highlight': '법적 증거 수준',

        'feat.adag.title': 'ADAG Red Team',
        'feat.adag.desc': '적대적 공격 시뮬레이션 프레임워크가 Red-Blue Team 피드백 루프로 탐지 모듈의 견고성을 자동 검증하고 강화합니다.',
        'feat.adag.highlight': '자동 견고성 검증',

        'feat.realtime.title': '실시간 스트림 탐지',
        'feat.realtime.desc': 'WebSocket 실시간 인프라, Send() 병렬 디스패치, vLLM 고속 추론으로 라이브 스트림 및 대용량 미디어 실시간 분석을 지원합니다.',
        'feat.realtime.highlight': '라이브 스트림',

        // Agents Section
        'agents.title': '멀티 에이전트 AI 프레임워크',
        'agents.subtitle': 'LangGraph + CrewAI + AutoGen + DSPy + vLLM + RAG — 8개 프레임워크 시너지',

        'agent.lg.title': 'LangGraph — 38노드 워크플로우 오케스트레이션',
        'agent.lg.desc': '38노드 비동기 StateGraph 파이프라인, 8단계 적응형 라우팅. Send() 병렬 디스패치로 5개 도메인 9개 분석 노드 동시 실행. MemorySaver 체크포인트 장애 복구. HITL 불확실 구간 검토.',
        'agent.lg.nodes': '노드',
        'agent.lg.parallel': '병렬',
        'agent.lg.parallel.val': '9개 에이전트',
        'agent.lg.phases': '단계',
        'agent.lg.speedup': '속도 향상',

        'agent.crew.title': 'CrewAI — 12명 전문가 합의 패널',
        'agent.crew.desc': '12명의 전문가 에이전트가 독립 분석 후 합의 판정. 공간포렌식, 시간포렌식, 주파수분석, 메타데이터, 적대적검증, 법률전문가, 보고서작성, 앙상블, 레드팀, QA 등 전문 역할 수행.',
        'agent.crew.experts': '전문가',
        'agent.crew.memory': '메모리',
        'agent.crew.model': '모델',
        'agent.crew.temporal': '시간 포렌식',
        'agent.crew.frequency': '주파수 분석',
        'agent.crew.metadata': '메타데이터',
        'agent.crew.adversarial': '적대적 검증',
        'agent.crew.legal': '법률 전문가',
        'agent.crew.report': '보고서 작성',
        'agent.crew.ensemble': '앙상블',
        'agent.crew.redteam': '레드팀',
        'agent.crew.qa': 'QA',
        'agent.crew.accuracy': '정확도+',

        'agent.crew.visual': '시각 포렌식',
        'agent.crew.audio': '오디오 포렌식',
        'agent.crew.chief': '수석 분석가',

        'agent.ag.title': 'AutoGen — 적대적 토론 시스템',
        'agent.ag.desc': '융합 점수가 불확실 구간(0.35~0.65)에 위치하면 적대적 토론이 자동 개시됩니다. 검사는 FAKE를, 변호인은 REAL을 주장하고, 판사가 최종 판결을 내립니다. 1v1 및 9인 GroupChat 모드를 지원합니다.',
        'agent.ag.trigger': '트리거',
        'agent.ag.avgtime': '평균 시간',
        'agent.ag.modes': '모드',
        'agent.ag.modes.val': '1v1 / 그룹',
        'agent.ag.agents': '에이전트',

        'agent.ag.prosecutor': '검사',
        'agent.ag.defense': '변호인',
        'agent.ag.judge': '판사',
        'agent.ag.verdict': '판결',

        // Dashboard Section
        'dash.title': 'React 대시보드',
        'dash.subtitle': '21개 페이지 · 실시간 BI · WebSocket · 41개 REST API',

        'dash.sidebar.detection': '탐지',
        'dash.sidebar.analyze': '분석',
        'dash.sidebar.history': '이력',
        'dash.sidebar.bi': 'BI 대시보드',
        'dash.sidebar.spatial': '공간 포렌식',
        'dash.sidebar.dm': '도메인 관리',
        'dash.sidebar.temporal': '시간 분석',
        'dash.sidebar.temporal.item': '시간 포렌식',
        'dash.sidebar.audioforensics': '오디오 포렌식',
        'dash.sidebar.audiodetect': '오디오 탐지',
        'dash.sidebar.forensictools': '포렌식 도구',
        'dash.sidebar.xai': 'XAI 설명',
        'dash.sidebar.report': '보고서',
        'dash.sidebar.threat': '위협 인텔',
        'dash.sidebar.defense': '방어 시스템',
        'dash.sidebar.threeclass': '3-Class 분류',
        'dash.sidebar.proactive': '선제적 방어',
        'dash.sidebar.realtimeinfra': '실시간 인프라',
        'dash.sidebar.realtime': '실시간 탐지',
        'dash.sidebar.management': '관리',
        'dash.sidebar.admin': '사용자 관리',
        'dash.sidebar.orgs': '조직',
        'dash.sidebar.apikeys': 'API 키',
        'dash.sidebar.agenticai': '에이전틱 AI',
        'dash.sidebar.agentsettings': '에이전트 설정',
        'dash.sidebar.autogen': 'AutoGen 토론',
        'dash.sidebar.llm': 'LLM / Ollama',
        'dash.sidebar.adag': 'ADAG Red Team',
        'dash.sidebar.mcfusion': 'MC Fusion Sim',
        'dash.sidebar.system': '시스템',
        'dash.sidebar.settings': '설정',
        'dash.sidebar.apidocs': 'API 문서',

        // Analyze Page
        'dash.analyze.title': '미디어 분석',
        'dash.analyze.rapid': 'Quick',
        'dash.analyze.standard': '표준',
        'dash.analyze.precise': 'Deep',
        'dash.analyze.dropzone': '미디어 파일을 여기에 드래그 앤 드롭하세요',
        'dash.analyze.formats': '비디오 (MP4, AVI, MOV) · 이미지 (JPG, PNG) · 오디오 (MP3, WAV)',
        'dash.analyze.maxsize': '최대 500MB',
        'dash.analyze.urlplaceholder': 'YouTube / 동영상 URL...',
        'dash.analyze.btn': '분석',
        'dash.analyze.video': '비디오',
        'dash.analyze.image': '이미지',
        'dash.analyze.audio': '오디오',

        // BI Page
        'dash.bi.title': 'BI 대시보드',
        'dash.bi.refresh': '자동 갱신: 10초',
        'dash.bi.total': '총 분석 건수',
        'dash.bi.fakes': 'FAKE 탐지',
        'dash.bi.avg': '평균 응답',
        'dash.bi.accuracy': '정확도',
        'dash.bi.dailychart': '일일 요청 (30일)',
        'dash.bi.verdictchart': '판정 분포',

        // History
        'dash.history.title': '분석 이력',
        'dash.history.search': '검색...',
        'dash.history.date': '날짜',
        'dash.history.type': '유형',
        'dash.history.verdict': '판정',
        'dash.history.confidence': '신뢰도',
        'dash.history.time': '시간',

        // Agent Settings
        'dash.agentsettings.title': '에이전트 설정',
        'dash.agentsettings.pipeline': '파이프라인',
        'dash.agentsettings.experts': '전문가',
        'dash.agentsettings.fusion': '융합',
        'dash.agentsettings.lgorch': 'LangGraph 파이프라인 오케스트레이션',
        'dash.agentsettings.checkpoint': '체크포인트 활성화',
        'dash.agentsettings.hitl': 'Human Review (HITL)',
        'dash.agentsettings.threshold': '검토 임계값',
        'dash.agentsettings.activenodes': '활성 노드 (12개)',

        // AutoGen
        'dash.autogen.title': 'AutoGen 토론 시스템',
        'dash.autogen.config': '토론 설정',
        'dash.autogen.model': '모델',
        'dash.autogen.maxrounds': '최대 라운드',
        'dash.autogen.mode': '모드',
        'dash.autogen.threshold': '임계값',
        'dash.autogen.always': '항상 토론',

        // LLM
        'dash.llm.title': 'LLM / Ollama 설정',
        'dash.llm.serverurl': '서버 URL',
        'dash.llm.status': '상태',
        'dash.llm.connected': '연결됨',
        'dash.llm.assignments': '모델 할당',
        'dash.llm.llmmodel': 'LLM 모델',
        'dash.llm.vlmmodel': 'VLM 모델',
        'dash.llm.embedding': '임베딩',
        'dash.llm.performance': '성능 설정',
        'dash.llm.temperature': 'Temperature',
        'dash.llm.context': '컨텍스트 윈도우',

        // ADAG
        'dash.adag.title': 'ADAG Red Team',
        'dash.adag.bio': '생체신호 주입기',
        'dash.adag.bio.desc': '가짜 rPPG + 눈깜빡임 패턴 주입',
        'dash.adag.gan': 'GAN Fingerprint 교란기',
        'dash.adag.gan.desc': 'FFT 마스킹 + 카메라 ISP 시뮬레이션',
        'dash.adag.temporal': '시간적 조작기',
        'dash.adag.temporal.desc': '미세 움직임 + 모션 블러 주입',
        'dash.adag.text': '텍스트 인간화기',
        'dash.adag.text.desc': '통계적 노이즈 + 오타 주입',
        'dash.adag.totaltests': '전체 테스트',
        'dash.adag.evasion': '우회율',
        'dash.adag.vulnerable': '최취약 모듈',

        // MC Fusion Simulation
        'dash.mcfusion.title': 'MC Fusion Simulation',
        'dash.mcfusion.methods': '최적화 방법',
        'dash.mcfusion.decision': 'Decision Engine',
        'dash.mcfusion.strategy': '전략',
        'dash.mcfusion.convergence': '수렴도',
        'dash.mcfusion.reliability': '신뢰도 점수',
        'dash.mcfusion.weights': '최적화 가중치',

        // Admin
        'dash.admin.title': '사용자 관리',
        'dash.admin.name': '이름',
        'dash.admin.email': '이메일',
        'dash.admin.role': '역할',

        // Organizations
        'dash.orgs.title': '조직 관리',
        'dash.orgs.quota': '월간 할당량',
        'dash.orgs.usage': '사용량',

        // API Keys
        'dash.apikeys.title': 'API 키 관리',
        'dash.apikeys.key': 'API 키',
        'dash.apikeys.created': '생성일',

        // Settings
        'dash.settings.title': '설정',
        'dash.settings.lang': '언어',
        'dash.settings.profile': '프로필',
        'dash.settings.name': '이름',
        'dash.settings.role': '역할',

        // API Docs
        'dash.apidocs.title': 'API 문서',
        'dash.apidocs.sdk': 'SDK 코드 예제',
        'dash.apidocs.endpoints': 'Endpoints (41)',

        // Detection Modules Section
        'detection.title': '38개 탐지 모듈',
        'detection.subtitle': '5개 도메인 · 6개 카테고리 · 다층 퓨전',

        'mod.spatial': '공간 포렌식',
        'mod.spatial.desc': 'GAN fingerprint, 압축 아티팩트, 얼굴 조작, 주파수 분석, 노이즈 패턴',
        'mod.spatial.weight': '도메인 1',

        'mod.temporal': '시간 포렌식',
        'mod.temporal.desc': '프레임 일관성, 모션 벡터, 시간적 아티팩트, 광학 흐름 분석',
        'mod.temporal.weight': '도메인 2',

        'mod.audiomod': '오디오 포렌식',
        'mod.audiomod.desc': 'TTS/음성 복제 탐지, 스펙트로그램 분석, 화자 검증, A/V 동기화',
        'mod.audiomod.weight': '도메인 3',

        'mod.metadata': '메타데이터 분석',
        'mod.metadata.desc': 'EXIF 검증, C2PA 출처 추적, 디지털 워터마크, 파일 무결성',
        'mod.metadata.weight': '도메인 4',

        'mod.defense': '방어 시스템',
        'mod.defense.desc': 'ADAG Red Team, 워터마크 삽입/검증, 위협 인텔리전스, 선제적 방어',
        'mod.defense.weight': '도메인 5',

        'mod.ensemble': '앙상블 퓨전',
        'mod.ensemble.desc': 'MC Fusion, 3-Class 분류, 적대적 토론, XAI 설명, 법적 보고서',
        'mod.ensemble.weight': '통합',

        'fusion.title': '다층 퓨전 엔진',
        'fusion.formula': 'final_score = MCFusion(Spatial, Temporal, Audio, Metadata, Defense) → 3-Class → XAI → Legal Report',

        // Architecture Section
        'arch.title': '아키텍처 & 기술 스택',
        'arch.subtitle': '18개 마이크로서비스 · 350+ 테스트 통과 · ~95,000 LOC',
        'arch.frontend': '프론트엔드',
        'arch.backend': '백엔드',
        'arch.aicore': 'AI 코어',
        'arch.mlcv': 'ML/CV',
        'arch.techstack': '핵심 기술 (8개 프레임워크)',

        'tech.langgraph': '38-Node StateGraph',
        'tech.crewai': '12-Expert Consensus',
        'tech.autogen': 'Court Debate (9 agents)',
        'tech.ollama': 'Local LLM + Production Serving',
        'tech.dspy': 'DSPy Optimization',
        'tech.rag': 'RAG Knowledge Base',
        'tech.react': '21-Page Dashboard',
        'tech.fastapi': '41 APIs + WebSocket',

        // Stats
        'stat.tests': '테스트 통과',
        'stat.modules': '탐지 모듈',
        'stat.experts': 'AI 전문가',
        'stat.tools': 'GenAI 도구 대응',
        'stat.services': '마이크로서비스',
        'stat.pages': '대시보드 페이지',
        'stat.apis': 'REST 엔드포인트',
        'stat.frameworks': '에이전트 프레임워크',

        // Quick Start
        'qs.title': '빠른 시작',
        'qs.subtitle': '몇 분 안에 시작하세요',
        'qs.step1': '클론 & 설치',
        'qs.step2': 'Ollama 모델',
        'qs.step3': '대시보드 실행',

        // Footer
        'footer.tagline': '엔터프라이즈 딥페이크 및 생성형 AI 탐지 포렌식 플랫폼',
        'footer.product': '제품',
        'footer.features': '핵심 기능',
        'footer.agents': '에이전틱 AI',
        'footer.dashboard': '대시보드',
        'footer.detection': '탐지 모듈',
        'footer.resources': '리소스',
        'footer.guide': '사용자 가이드',
        'footer.apidoc': 'API 문서',
        'footer.testreport': '테스트 리포트',
        'footer.technology': '기술',
        'footer.copyright': '\u00A9 2024-2026 TruthLens DeepFake Detection System. WDLAB License.',
        'footer.version': '버전 3.0 · Rev 4.0 · 편집: Brian Lee',
    },

    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.agents': 'Agentic AI',
        'nav.dashboard': 'Dashboard',
        'nav.detection': 'Detection',
        'nav.architecture': 'Architecture',
        'nav.btn.dashboard': 'Dashboard',

        // Hero
        'hero.badge': 'LangGraph + CrewAI + AutoGen + DSPy + vLLM + RAG + Ollama',
        'hero.title1': 'TruthLens',
        'hero.title2': 'DeepFake Detection',
        'hero.subtitle': 'Enterprise Forensic Platform — 38 Detection Modules · 12 AI Experts',
        'hero.subtitle2': '52 GenAI Tools Coverage · Real-time Stream Detection · Legal-grade Reports',
        'hero.btn.dashboard': 'Dashboard Preview',
        'hero.btn.agents': 'Agentic AI',
        'hero.trust.tests': '350+ Tests PASS',
        'hero.trust.modules': '38 Detection Modules',
        'hero.trust.pages': '21 Dashboard Pages',
        'hero.trust.apis': '41 REST APIs',

        // Features Section
        'features.title': 'Core Differentiators',
        'features.subtitle': 'TruthLens v3.0 - 8 Core Strengths',

        'feat.multimodule.title': '38 Multi-Domain Detection Modules',
        'feat.multimodule.desc': 'Spatial, Temporal, Audio, Metadata, Defense — 38 specialized analysis modules across 5 domains combined through multi-layer fusion.',
        'feat.multimodule.highlight': '5 Domains',

        'feat.multiagent.title': '8-Framework Multi-Agent',
        'feat.multiagent.desc': 'LangGraph + CrewAI + AutoGen + DSPy + vLLM + RAG + Ollama + HITL — 8 AI frameworks in synergy with 12 expert agents delivering consensus verdicts.',
        'feat.multiagent.highlight': '12 AI Experts',

        'feat.debate.title': 'Court-style Adversarial Debate',
        'feat.debate.desc': 'AutoGen-based 9-agent courtroom debate system. Prosecutor-Defense-Judge structure with 1v1 and GroupChat modes to maximize uncertain zone verdict accuracy.',
        'feat.debate.highlight': '9 Agents',

        'feat.coverage.title': '52 GenAI Tools Coverage',
        'feat.coverage.desc': 'Detects unique artifacts from 52 generative AI tools including Midjourney, DALL-E, Stable Diffusion, Sora, ElevenLabs and more.',
        'feat.coverage.highlight': '52 Tools',

        'feat.proactive.title': 'Proactive Defense System',
        'feat.proactive.desc': 'ADAG Red Team attack simulation, watermark embedding/verification, and threat intelligence feeds build a proactive defense posture.',
        'feat.proactive.highlight': 'Red-Blue Team',

        'feat.xai.title': 'Explainable AI (XAI)',
        'feat.xai.desc': 'Every verdict includes LLM-generated detailed explanation, evidence chain, and legal-grade forensic reports.',
        'feat.xai.highlight': 'Legal-grade Evidence',

        'feat.adag.title': 'ADAG Red Team',
        'feat.adag.desc': 'Adversarial attack simulation framework automatically verifies and hardens detection module robustness via Red-Blue Team feedback loop.',
        'feat.adag.highlight': 'Auto Robustness Testing',

        'feat.realtime.title': 'Real-time Stream Detection',
        'feat.realtime.desc': 'WebSocket real-time infrastructure, Send() parallel dispatch, vLLM high-speed inference for live stream and large media real-time analysis.',
        'feat.realtime.highlight': 'Live Stream',

        // Agents Section
        'agents.title': 'Multi-Agent AI Framework',
        'agents.subtitle': 'LangGraph + CrewAI + AutoGen + DSPy + vLLM + RAG — 8 frameworks in synergy',

        'agent.lg.title': 'LangGraph — 38-Node Workflow Orchestration',
        'agent.lg.desc': '38-node async StateGraph pipeline with 8-phase adaptive routing. Send() parallel dispatch runs 9 analysis nodes simultaneously across 5 domains. MemorySaver checkpoint enables fault recovery. Human-in-the-Loop (HITL) for uncertain zone review.',
        'agent.lg.nodes': 'Nodes',
        'agent.lg.parallel': 'Parallel',
        'agent.lg.parallel.val': '9 agents',
        'agent.lg.phases': 'Phases',
        'agent.lg.speedup': 'Speedup',

        'agent.crew.title': 'CrewAI — 12-Expert Consensus Panel',
        'agent.crew.desc': '12 specialized expert agents perform independent analysis then reach consensus verdict. Roles include Spatial Forensics, Temporal Forensics, Frequency Analysis, Metadata, Adversarial Verification, Legal Expert, Report Writer, Ensemble, Red Team, and QA.',
        'agent.crew.experts': 'Experts',
        'agent.crew.memory': 'Memory',
        'agent.crew.model': 'Model',
        'agent.crew.temporal': 'Temporal Forensics',
        'agent.crew.frequency': 'Frequency Analysis',
        'agent.crew.metadata': 'Metadata',
        'agent.crew.adversarial': 'Adversarial Verification',
        'agent.crew.legal': 'Legal Expert',
        'agent.crew.report': 'Report Writer',
        'agent.crew.ensemble': 'Ensemble',
        'agent.crew.redteam': 'Red Team',
        'agent.crew.qa': 'QA',
        'agent.crew.accuracy': 'Accuracy+',

        'agent.crew.visual': 'Visual Forensics',
        'agent.crew.audio': 'Audio Forensics',
        'agent.crew.chief': 'Chief Analyst',

        'agent.ag.title': 'AutoGen — Adversarial Debate System',
        'agent.ag.desc': 'When fusion scores fall in the uncertain zone (0.35~0.65), adversarial debate automatically triggers. Prosecutor argues FAKE, Defense argues REAL, and Judge renders the final verdict. Supports 1v1 and 9-person GroupChat modes.',
        'agent.ag.trigger': 'Trigger',
        'agent.ag.avgtime': 'Avg Time',
        'agent.ag.modes': 'Modes',
        'agent.ag.modes.val': '1v1 / Group',
        'agent.ag.agents': 'Agents',

        'agent.ag.prosecutor': 'Prosecutor',
        'agent.ag.defense': 'Defense',
        'agent.ag.judge': 'Judge',
        'agent.ag.verdict': 'VERDICT',

        // Dashboard Section
        'dash.title': 'React Dashboard',
        'dash.subtitle': '21 pages · Real-time BI · WebSocket · 41 REST APIs',

        'dash.sidebar.detection': 'Detection',
        'dash.sidebar.analyze': 'Analyze',
        'dash.sidebar.history': 'History',
        'dash.sidebar.bi': 'BI Dashboard',
        'dash.sidebar.spatial': 'Spatial Forensics',
        'dash.sidebar.dm': 'Domain Management',
        'dash.sidebar.temporal': 'Temporal Analysis',
        'dash.sidebar.temporal.item': 'Temporal Forensics',
        'dash.sidebar.audioforensics': 'Audio Forensics',
        'dash.sidebar.audiodetect': 'Audio Detection',
        'dash.sidebar.forensictools': 'Forensic Tools',
        'dash.sidebar.xai': 'XAI Explanation',
        'dash.sidebar.report': 'Reports',
        'dash.sidebar.threat': 'Threat Intel',
        'dash.sidebar.defense': 'Defense System',
        'dash.sidebar.threeclass': '3-Class Classification',
        'dash.sidebar.proactive': 'Proactive Defense',
        'dash.sidebar.realtimeinfra': 'Real-time Infra',
        'dash.sidebar.realtime': 'Real-time Detection',
        'dash.sidebar.management': 'Management',
        'dash.sidebar.admin': 'Admin',
        'dash.sidebar.orgs': 'Organizations',
        'dash.sidebar.apikeys': 'API Keys',
        'dash.sidebar.agenticai': 'Agentic AI',
        'dash.sidebar.agentsettings': 'Agent Settings',
        'dash.sidebar.autogen': 'AutoGen Debate',
        'dash.sidebar.llm': 'LLM / Ollama',
        'dash.sidebar.adag': 'ADAG Red Team',
        'dash.sidebar.mcfusion': 'MC Fusion Sim',
        'dash.sidebar.system': 'System',
        'dash.sidebar.settings': 'Settings',
        'dash.sidebar.apidocs': 'API Docs',

        // Analyze Page
        'dash.analyze.title': 'Media Analysis',
        'dash.analyze.rapid': 'Quick',
        'dash.analyze.standard': 'Standard',
        'dash.analyze.precise': 'Deep',
        'dash.analyze.dropzone': 'Drag & Drop media files here',
        'dash.analyze.formats': 'Video (MP4, AVI, MOV) · Image (JPG, PNG) · Audio (MP3, WAV)',
        'dash.analyze.maxsize': 'Max 500MB',
        'dash.analyze.urlplaceholder': 'YouTube / Video URL...',
        'dash.analyze.btn': 'Analyze',
        'dash.analyze.video': 'Video',
        'dash.analyze.image': 'Image',
        'dash.analyze.audio': 'Audio',

        // BI Page
        'dash.bi.title': 'BI Dashboard',
        'dash.bi.refresh': 'Auto-refresh: 10s',
        'dash.bi.total': 'Total Analyses',
        'dash.bi.fakes': 'Fakes Detected',
        'dash.bi.avg': 'Avg Response',
        'dash.bi.accuracy': 'Accuracy',
        'dash.bi.dailychart': 'Daily Requests (30 days)',
        'dash.bi.verdictchart': 'Verdict Distribution',

        // History
        'dash.history.title': 'Analysis History',
        'dash.history.search': 'Search...',
        'dash.history.date': 'Date',
        'dash.history.type': 'Type',
        'dash.history.verdict': 'Verdict',
        'dash.history.confidence': 'Confidence',
        'dash.history.time': 'Time',

        // Agent Settings
        'dash.agentsettings.title': 'Agent Settings',
        'dash.agentsettings.pipeline': 'Pipeline',
        'dash.agentsettings.experts': 'Experts',
        'dash.agentsettings.fusion': 'Fusion',
        'dash.agentsettings.lgorch': 'LangGraph Pipeline Orchestration',
        'dash.agentsettings.checkpoint': 'Enable Checkpoint',
        'dash.agentsettings.hitl': 'Human Review (HITL)',
        'dash.agentsettings.threshold': 'Review Threshold',
        'dash.agentsettings.activenodes': 'Active Nodes (12)',

        // AutoGen
        'dash.autogen.title': 'AutoGen Debate System',
        'dash.autogen.config': 'Debate Configuration',
        'dash.autogen.model': 'Model',
        'dash.autogen.maxrounds': 'Max Rounds',
        'dash.autogen.mode': 'Mode',
        'dash.autogen.threshold': 'Threshold',
        'dash.autogen.always': 'Always Debate',

        // LLM
        'dash.llm.title': 'LLM / Ollama Settings',
        'dash.llm.serverurl': 'Server URL',
        'dash.llm.status': 'Status',
        'dash.llm.connected': 'Connected',
        'dash.llm.assignments': 'Model Assignments',
        'dash.llm.llmmodel': 'LLM Model',
        'dash.llm.vlmmodel': 'VLM Model',
        'dash.llm.embedding': 'Embedding',
        'dash.llm.performance': 'Performance',
        'dash.llm.temperature': 'Temperature',
        'dash.llm.context': 'Context Window',

        // ADAG
        'dash.adag.title': 'ADAG Red Team',
        'dash.adag.bio': 'Biological Signal Injector',
        'dash.adag.bio.desc': 'Fake rPPG + blink pattern injection',
        'dash.adag.gan': 'GAN Fingerprint Disruptor',
        'dash.adag.gan.desc': 'FFT masking + camera ISP simulation',
        'dash.adag.temporal': 'Temporal Manipulator',
        'dash.adag.temporal.desc': 'Micro-motion + motion blur injection',
        'dash.adag.text': 'Text Humanizer',
        'dash.adag.text.desc': 'Statistical noise + typo injection',
        'dash.adag.totaltests': 'Total Tests',
        'dash.adag.evasion': 'Evasion Rate',
        'dash.adag.vulnerable': 'Most Vulnerable',

        // MC Fusion Simulation
        'dash.mcfusion.title': 'MC Fusion Simulation',
        'dash.mcfusion.methods': 'Optimization Methods',
        'dash.mcfusion.decision': 'Decision Engine',
        'dash.mcfusion.strategy': 'Strategy',
        'dash.mcfusion.convergence': 'Convergence',
        'dash.mcfusion.reliability': 'Reliability Score',
        'dash.mcfusion.weights': 'Optimized Weights',

        // Admin
        'dash.admin.title': 'User Management',
        'dash.admin.name': 'Name',
        'dash.admin.email': 'Email',
        'dash.admin.role': 'Role',

        // Organizations
        'dash.orgs.title': 'Organizations',
        'dash.orgs.quota': 'Monthly Quota',
        'dash.orgs.usage': 'Usage',

        // API Keys
        'dash.apikeys.title': 'API Keys',
        'dash.apikeys.key': 'API Key',
        'dash.apikeys.created': 'Created',

        // Settings
        'dash.settings.title': 'Settings',
        'dash.settings.lang': 'Language',
        'dash.settings.profile': 'Profile',
        'dash.settings.name': 'Name',
        'dash.settings.role': 'Role',

        // API Docs
        'dash.apidocs.title': 'API Documentation',
        'dash.apidocs.sdk': 'SDK Examples',
        'dash.apidocs.endpoints': 'Endpoints (41)',

        // Detection Modules Section
        'detection.title': '38 Detection Modules',
        'detection.subtitle': '5 domains · 6 categories · Multi-layer fusion',

        'mod.spatial': 'Spatial Forensics',
        'mod.spatial.desc': 'GAN fingerprint, compression artifacts, face manipulation, frequency analysis, noise patterns',
        'mod.spatial.weight': 'Domain 1',

        'mod.temporal': 'Temporal Forensics',
        'mod.temporal.desc': 'Frame consistency, motion vectors, temporal artifacts, optical flow analysis',
        'mod.temporal.weight': 'Domain 2',

        'mod.audiomod': 'Audio Forensics',
        'mod.audiomod.desc': 'TTS/voice cloning detection, spectrogram analysis, speaker verification, A/V sync',
        'mod.audiomod.weight': 'Domain 3',

        'mod.metadata': 'Metadata Analysis',
        'mod.metadata.desc': 'EXIF verification, C2PA provenance tracking, digital watermark, file integrity',
        'mod.metadata.weight': 'Domain 4',

        'mod.defense': 'Defense System',
        'mod.defense.desc': 'ADAG Red Team, watermark embedding/verification, threat intelligence, proactive defense',
        'mod.defense.weight': 'Domain 5',

        'mod.ensemble': 'Ensemble Fusion',
        'mod.ensemble.desc': 'MC Fusion, 3-Class classification, adversarial debate, XAI explanation, legal reports',
        'mod.ensemble.weight': 'Integration',

        'fusion.title': 'Multi-layer Fusion Engine',
        'fusion.formula': 'final_score = MCFusion(Spatial, Temporal, Audio, Metadata, Defense) → 3-Class → XAI → Legal Report',

        // Architecture Section
        'arch.title': 'Architecture & Tech Stack',
        'arch.subtitle': '18 microservices · 350+ tests passing · ~95,000 LOC',
        'arch.frontend': 'Frontend',
        'arch.backend': 'Backend',
        'arch.aicore': 'AI Core',
        'arch.mlcv': 'ML/CV',
        'arch.techstack': 'Core Technologies (8 Frameworks)',

        'tech.langgraph': '38-Node StateGraph',
        'tech.crewai': '12-Expert Consensus',
        'tech.autogen': 'Court Debate (9 agents)',
        'tech.ollama': 'Local LLM + Production Serving',
        'tech.dspy': 'DSPy Optimization',
        'tech.rag': 'RAG Knowledge Base',
        'tech.react': '21-Page Dashboard',
        'tech.fastapi': '41 APIs + WebSocket',

        // Stats
        'stat.tests': 'Tests PASS',
        'stat.modules': 'Detection Modules',
        'stat.experts': 'AI Experts',
        'stat.tools': 'GenAI Tools Coverage',
        'stat.services': 'Microservices',
        'stat.pages': 'Dashboard Pages',
        'stat.apis': 'REST Endpoints',
        'stat.frameworks': 'Agent Frameworks',

        // Quick Start
        'qs.title': 'Quick Start',
        'qs.subtitle': 'Get started in minutes',
        'qs.step1': 'Clone & Install',
        'qs.step2': 'Ollama Models',
        'qs.step3': 'Run Dashboard',

        // Footer
        'footer.tagline': 'Enterprise Forensic Platform for Deepfake & GenAI Detection',
        'footer.product': 'Product',
        'footer.features': 'Core Features',
        'footer.agents': 'Agentic AI',
        'footer.dashboard': 'Dashboard',
        'footer.detection': 'Detection',
        'footer.resources': 'Resources',
        'footer.guide': 'Users Guide',
        'footer.apidoc': 'API Documentation',
        'footer.testreport': 'Test Report',
        'footer.technology': 'Technology',
        'footer.copyright': '\u00A9 2024-2026 TruthLens DeepFake Detection System. WDLAB License.',
        'footer.version': 'Version 3.0 · Rev 4.0 · Editor: Brian Lee',
    }
};

// ========================================
// i18n Engine
// ========================================
let currentLang = localStorage.getItem('truthlens-lang') || 'ko';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('truthlens-lang', lang);

    const translations = i18nData[lang];
    if (!translations) return;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
            el.textContent = translations[key];
        }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[key]) {
            el.setAttribute('placeholder', translations[key]);
        }
    });

    // Update lang toggle buttons
    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Also update the in-dashboard lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.textContent === 'KO') btn.classList.toggle('active', lang === 'ko');
        if (btn.textContent === 'EN') btn.classList.toggle('active', lang === 'en');
    });

    // Update html lang attribute
    document.documentElement.lang = lang;
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
});
