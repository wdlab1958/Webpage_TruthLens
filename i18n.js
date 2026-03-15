// ========================================
// Internationalization (i18n) - KO / EN
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
        'hero.badge': 'LangGraph + CrewAI + AutoGen + Ollama',
        'hero.title1': 'TruthLens',
        'hero.title2': 'DeepFake Detection',
        'hero.subtitle': '3중 멀티 에이전틱 AI 프레임워크',
        'hero.subtitle2': 'React 대시보드 \u00B7 MC Fusion Simulation \u00B7 ADAG Red Team',
        'hero.btn.dashboard': '대시보드 미리보기',
        'hero.btn.agents': '에이전틱 AI',
        'hero.trust.tests': '67/67 테스트 PASS',
        'hero.trust.modules': '7개 탐지 모듈',
        'hero.trust.pages': '15개 대시보드 페이지',
        'hero.trust.apis': '47개 REST API',

        // Features Section
        'features.title': '핵심 차별화 요소',
        'features.subtitle': 'TruthLens v2.9.0 — 6대 핵심 강점',

        'feat.bio.title': '생체신호 기반 검증',
        'feat.bio.desc': 'rPPG 심박 추출과 눈 깜빡임 패턴 분석으로 생리학적으로 불가능한 패턴을 탐지합니다 — 딥페이크에 대한 가장 강력한 증거입니다.',
        'feat.bio.highlight': '최고 신뢰도 증거',

        'feat.triple.title': '3중 에이전틱 AI',
        'feat.triple.desc': 'LangGraph 오케스트레이션 + CrewAI 6인 전문가 합의 + AutoGen 적대적 토론 — 3개 프레임워크가 협업합니다.',
        'feat.triple.highlight': '3개 AI 프레임워크',

        'feat.privacy.title': '완벽한 프라이버시 보장',
        'feat.privacy.desc': 'Ollama 기반 로컬 LLM/VLM 추론으로 데이터가 외부 서버로 전송되지 않습니다. 민감 데이터 분석에 안전합니다.',
        'feat.privacy.highlight': '100% 로컬 처리',

        'feat.xai.title': '설명 가능한 AI (XAI)',
        'feat.xai.desc': '모든 판정에 대해 LLM 기반 상세 설명과 증거 체인을 자동 생성하여 완전한 투명성을 제공합니다.',
        'feat.xai.highlight': '증거 체인',

        'feat.adag.title': 'ADAG Red Team',
        'feat.adag.desc': '4개 공격 모듈을 갖춘 적대적 테스트 프레임워크가 Red-Blue Team 피드백 루프로 탐지 견고성을 자동 검증합니다.',
        'feat.adag.highlight': '4개 공격 모듈',

        'feat.realtime.title': '실시간 처리',
        'feat.realtime.desc': 'Send() 병렬 디스패치, 비동기 아키텍처, MemorySaver 체크포인트로 장애 허용 실시간 분석을 제공합니다.',
        'feat.realtime.highlight': '60% 속도 향상',

        // Agents Section
        'agents.title': '3중 에이전틱 AI',
        'agents.subtitle': 'LangGraph + CrewAI + AutoGen — 3개 프레임워크 시너지',

        'agent.lg.title': 'LangGraph \u2014 워크플로우 오케스트레이션',
        'agent.lg.desc': '17-노드 비동기 StateGraph 파이프라인으로 Send() 병렬 디스패치를 통해 5개 분석 노드가 동시 실행됩니다. MemorySaver 체크포인트로 장애 복구가 가능하며, Human-in-the-Loop(HITL)로 불확실 구간 결과를 전문가가 검토합니다.',
        'agent.lg.nodes': '노드',
        'agent.lg.parallel': '병렬',
        'agent.lg.parallel.val': '5개 에이전트',
        'agent.lg.speedup': '속도 향상',

        'agent.crew.title': 'CrewAI \u2014 6인 전문가 합의 판정',
        'agent.crew.desc': '6명의 전문가 에이전트가 독립적으로 증거를 분석한 후, 수석 분석가가 모든 결과를 종합하여 최종 판정을 내립니다. Sequential/Hierarchical 프로세스 모드와 SQLite 메모리 백엔드를 지원합니다.',
        'agent.crew.experts': '전문가',
        'agent.crew.memory': '메모리',
        'agent.crew.model': '모델',

        'agent.crew.visual': '시각 포렌식',
        'agent.crew.audio': '오디오 포렌식',
        'agent.crew.bio': '생체 인식',
        'agent.crew.ocr': 'OCR/문서',
        'agent.crew.avsync': 'A/V 동기화',
        'agent.crew.chief': '수석 분석가',

        'agent.ag.title': 'AutoGen \u2014 적대적 토론 시스템',
        'agent.ag.desc': '융합 점수가 불확실 구간(0.35~0.65)에 위치하면 적대적 토론이 자동 개시됩니다. 검사는 FAKE를, 변호인은 REAL을 주장하고, 판사가 최종 판결을 내립니다. 1v1 및 6인 GroupChat 모드를 지원합니다.',
        'agent.ag.trigger': '트리거',
        'agent.ag.avgtime': '평균 시간',
        'agent.ag.modes': '모드',
        'agent.ag.modes.val': '1v1 / 그룹',

        'agent.ag.prosecutor': '검사',
        'agent.ag.defense': '변호인',
        'agent.ag.judge': '판사',
        'agent.ag.verdict': '판결',

        // Dashboard Section
        'dash.title': 'React 대시보드',
        'dash.subtitle': '15개 페이지 \u00B7 실시간 BI \u00B7 WebSocket \u00B7 47개 REST API',

        'dash.sidebar.detection': '탐지',
        'dash.sidebar.analyze': '분석',
        'dash.sidebar.history': '이력',
        'dash.sidebar.bi': 'BI 대시보드',
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
        'dash.analyze.rapid': '신속',
        'dash.analyze.standard': '표준',
        'dash.analyze.precise': '정밀',
        'dash.analyze.dropzone': '미디어 파일을 여기에 드래그 앤 드롭하세요',
        'dash.analyze.formats': '비디오 (MP4, AVI, MOV) \u00B7 이미지 (JPG, PNG) \u00B7 오디오 (MP3, WAV)',
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
        'dash.apidocs.endpoints': '엔드포인트 (47개)',

        // Detection Modules Section
        'detection.title': '7개 탐지 모듈',
        'detection.subtitle': '가중치 융합 기반 멀티모달 분석',

        'mod.visual': '시각적 포렌식',
        'mod.visual.desc': 'GAN fingerprint, 압축 아티팩트, 얼굴 조작 탐지',
        'mod.visual.weight': '가중치: 25%',

        'mod.audio': '오디오 분석',
        'mod.audio.desc': 'TTS/음성 복제 탐지, 스펙트럼 분석',
        'mod.audio.weight': '가중치: 20%',

        'mod.bio': '생체신호',
        'mod.bio.desc': 'rPPG 심박 추출, 눈 깜빡임 패턴 분석',
        'mod.bio.weight': '가중치: 30% (최고)',

        'mod.avsync': 'A/V 동기화',
        'mod.avsync.desc': '립싱크 검증, 화자 일관성',
        'mod.avsync.weight': '가중치: 15%',

        'mod.ocr': 'OCR/문서',
        'mod.ocr.desc': '자막 조작 탐지, 문서 위조, 텍스트 일관성',
        'mod.ocr.weight': '가중치: 10%',

        'mod.crossmodal': '크로스 모달',
        'mod.crossmodal.desc': 'Whisper 전사를 통한 크로스 모달 이상 탐지',
        'mod.crossmodal.weight': '보조',

        'mod.fewshot': 'Few-Shot',
        'mod.fewshot.desc': '새로운 딥페이크 유형 학습을 위한 Prototypical Networks',
        'mod.fewshot.weight': '보조',

        'fusion.title': '동적 가중치 융합',
        'fusion.formula': 'final_score = (Visual \u00D7 0.25 + Audio \u00D7 0.20 + Bio \u00D7 0.30 + AV_Sync \u00D7 0.15 + OCR \u00D7 0.10) / \u03A3weights',

        // Architecture Section
        'arch.title': '아키텍처 & 기술 스택',
        'arch.subtitle': '67/67 테스트 통과 — 프로덕션 레디 시스템',
        'arch.frontend': '프론트엔드',
        'arch.backend': '백엔드',
        'arch.aicore': 'AI 코어',
        'arch.mlcv': 'ML/CV',
        'arch.techstack': '핵심 기술',

        'tech.langgraph': '17-노드 StateGraph',
        'tech.crewai': '6-에이전트 합의',
        'tech.autogen': '적대적 토론',
        'tech.ollama': '로컬 LLM/VLM',
        'tech.react': '대시보드 UI',
        'tech.fastapi': 'REST + WebSocket',

        // Stats
        'stat.tests': '테스트 PASS',
        'stat.modules': '탐지 모듈',
        'stat.pages': '대시보드 페이지',
        'stat.apis': 'REST 엔드포인트',
        'stat.frameworks': '에이전트 프레임워크',
        'stat.local': '로컬 처리',

        // Quick Start
        'qs.title': '빠른 시작',
        'qs.subtitle': '몇 분 안에 시작하세요',
        'qs.step1': '클론 & 설치',
        'qs.step2': 'Ollama 모델',
        'qs.step3': '대시보드 실행',

        // Footer
        'footer.tagline': '차세대 멀티 에이전틱 AI 딥페이크 탐지 시스템',
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
        'footer.version': 'Version 2.9.0 \u00B7 Editor: Brian Lee',
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
        'hero.badge': 'LangGraph + CrewAI + AutoGen + Ollama',
        'hero.title1': 'TruthLens',
        'hero.title2': 'DeepFake Detection',
        'hero.subtitle': '3-Triple Multi-Agentic AI Framework',
        'hero.subtitle2': 'React Dashboard \u00B7 MC Fusion Simulation \u00B7 ADAG Red Team',
        'hero.btn.dashboard': 'Dashboard Preview',
        'hero.btn.agents': 'Agentic AI',
        'hero.trust.tests': '67/67 Tests PASS',
        'hero.trust.modules': '7 Detection Modules',
        'hero.trust.pages': '15 Dashboard Pages',
        'hero.trust.apis': '47 REST APIs',

        // Features Section
        'features.title': 'Core Differentiators',
        'features.subtitle': 'TruthLens v2.9.0 \u2014 6 Core Strengths',

        'feat.bio.title': 'Biological Signal Verification',
        'feat.bio.desc': 'rPPG heart rate extraction and eye blink pattern analysis detect physiologically impossible patterns \u2014 the strongest evidence against deepfakes.',
        'feat.bio.highlight': 'Most reliable evidence',

        'feat.triple.title': 'Triple Agentic AI',
        'feat.triple.desc': 'LangGraph orchestration + CrewAI 6-expert consensus + AutoGen adversarial debate \u2014 three frameworks working in concert.',
        'feat.triple.highlight': '3 AI Frameworks',

        'feat.privacy.title': 'Privacy Guaranteed',
        'feat.privacy.desc': 'Ollama-based local LLM/VLM inference ensures zero data transmission to external servers. Safe for sensitive data.',
        'feat.privacy.highlight': '100% Local Processing',

        'feat.xai.title': 'Explainable AI (XAI)',
        'feat.xai.desc': 'Every verdict includes LLM-generated detailed explanation and evidence chain for full transparency.',
        'feat.xai.highlight': 'Evidence Chain',

        'feat.adag.title': 'ADAG Red Team',
        'feat.adag.desc': 'Adversarial testing framework with 4 attack modules automatically verifies detection robustness via Red-Blue Team feedback loop.',
        'feat.adag.highlight': '4 Attack Modules',

        'feat.realtime.title': 'Real-time Processing',
        'feat.realtime.desc': 'Send() parallel dispatch, async architecture, MemorySaver checkpoint for fault-tolerant real-time analysis.',
        'feat.realtime.highlight': '60% faster',

        // Agents Section
        'agents.title': 'Triple Agentic AI',
        'agents.subtitle': 'LangGraph + CrewAI + AutoGen \u2014 3 frameworks in synergy',

        'agent.lg.title': 'LangGraph \u2014 Workflow Orchestration',
        'agent.lg.desc': '17-node async StateGraph pipeline with Send() parallel dispatch for 5 analysis nodes running simultaneously. MemorySaver checkpoint enables fault recovery. Human-in-the-Loop (HITL) for uncertain zone review.',
        'agent.lg.nodes': 'Nodes',
        'agent.lg.parallel': 'Parallel',
        'agent.lg.parallel.val': '5 agents',
        'agent.lg.speedup': 'Speedup',

        'agent.crew.title': 'CrewAI \u2014 6-Expert Consensus Panel',
        'agent.crew.desc': '6 specialized expert agents analyze evidence independently, then the Chief Analyst synthesizes all findings for the final verdict. Supports Sequential and Hierarchical process modes with SQLite memory backend.',
        'agent.crew.experts': 'Experts',
        'agent.crew.memory': 'Memory',
        'agent.crew.model': 'Model',

        'agent.crew.visual': 'Visual Forensics',
        'agent.crew.audio': 'Audio Forensics',
        'agent.crew.bio': 'Biometric',
        'agent.crew.ocr': 'OCR/Document',
        'agent.crew.avsync': 'A/V Sync',
        'agent.crew.chief': 'Chief Analyst',

        'agent.ag.title': 'AutoGen \u2014 Adversarial Debate System',
        'agent.ag.desc': 'When fusion scores fall in the uncertain zone (0.35~0.65), adversarial debate automatically triggers. Prosecutor argues FAKE, Defense argues REAL, and Judge renders the final verdict. Supports 1v1 and 6-person GroupChat modes.',
        'agent.ag.trigger': 'Trigger',
        'agent.ag.avgtime': 'Avg Time',
        'agent.ag.modes': 'Modes',
        'agent.ag.modes.val': '1v1 / Group',

        'agent.ag.prosecutor': 'Prosecutor',
        'agent.ag.defense': 'Defense',
        'agent.ag.judge': 'Judge',
        'agent.ag.verdict': 'VERDICT',

        // Dashboard Section
        'dash.title': 'React Dashboard',
        'dash.subtitle': '15 pages \u00B7 Real-time BI \u00B7 WebSocket \u00B7 47 REST APIs',

        'dash.sidebar.detection': 'Detection',
        'dash.sidebar.analyze': 'Analyze',
        'dash.sidebar.history': 'History',
        'dash.sidebar.bi': 'BI Dashboard',
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
        'dash.analyze.rapid': 'Rapid',
        'dash.analyze.standard': 'Standard',
        'dash.analyze.precise': 'Precise',
        'dash.analyze.dropzone': 'Drag & Drop media files here',
        'dash.analyze.formats': 'Video (MP4, AVI, MOV) \u00B7 Image (JPG, PNG) \u00B7 Audio (MP3, WAV)',
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
        'dash.apidocs.endpoints': 'Endpoints (47)',

        // Detection Modules Section
        'detection.title': '7 Detection Modules',
        'detection.subtitle': 'Multimodal analysis with weighted fusion',

        'mod.visual': 'Visual Forensics',
        'mod.visual.desc': 'GAN fingerprint, compression artifacts, face manipulation',
        'mod.visual.weight': 'Weight: 25%',

        'mod.audio': 'Audio Analysis',
        'mod.audio.desc': 'TTS/voice cloning detection, spectrum analysis',
        'mod.audio.weight': 'Weight: 20%',

        'mod.bio': 'Biological Signal',
        'mod.bio.desc': 'rPPG heart rate extraction, eye blink pattern analysis',
        'mod.bio.weight': 'Weight: 30% (Highest)',

        'mod.avsync': 'A/V Sync',
        'mod.avsync.desc': 'Lip-sync verification, speaker consistency',
        'mod.avsync.weight': 'Weight: 15%',

        'mod.ocr': 'OCR/Document',
        'mod.ocr.desc': 'Subtitle manipulation, document forgery, text consistency',
        'mod.ocr.weight': 'Weight: 10%',

        'mod.crossmodal': 'Cross-Modal',
        'mod.crossmodal.desc': 'Cross-modal anomaly detection via Whisper transcription',
        'mod.crossmodal.weight': 'Auxiliary',

        'mod.fewshot': 'Few-Shot',
        'mod.fewshot.desc': 'Prototypical Networks for novel deepfake type learning',
        'mod.fewshot.weight': 'Auxiliary',

        'fusion.title': 'Dynamic Weighted Fusion',
        'fusion.formula': 'final_score = (Visual \u00D7 0.25 + Audio \u00D7 0.20 + Bio \u00D7 0.30 + AV_Sync \u00D7 0.15 + OCR \u00D7 0.10) / \u03A3weights',

        // Architecture Section
        'arch.title': 'Architecture & Tech Stack',
        'arch.subtitle': '67/67 tests passing \u2014 production-ready system',
        'arch.frontend': 'Frontend',
        'arch.backend': 'Backend',
        'arch.aicore': 'AI Core',
        'arch.mlcv': 'ML/CV',
        'arch.techstack': 'Core Technologies',

        'tech.langgraph': '17-Node StateGraph',
        'tech.crewai': '6-Agent Consensus',
        'tech.autogen': 'Adversarial Debate',
        'tech.ollama': 'Local LLM/VLM',
        'tech.react': 'Dashboard UI',
        'tech.fastapi': 'REST + WebSocket',

        // Stats
        'stat.tests': 'Tests PASS',
        'stat.modules': 'Detection Modules',
        'stat.pages': 'Dashboard Pages',
        'stat.apis': 'REST Endpoints',
        'stat.frameworks': 'Agent Frameworks',
        'stat.local': 'Local Processing',

        // Quick Start
        'qs.title': 'Quick Start',
        'qs.subtitle': 'Get started in minutes',
        'qs.step1': 'Clone & Install',
        'qs.step2': 'Ollama Models',
        'qs.step3': 'Run Dashboard',

        // Footer
        'footer.tagline': 'Next-Gen Multi-Agentic AI DeepFake Detection System',
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
        'footer.version': 'Version 2.9.0 \u00B7 Editor: Brian Lee',
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
