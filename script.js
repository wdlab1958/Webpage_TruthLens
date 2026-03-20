// ========================================
// Smooth Scroll Navigation
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav-container').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// ========================================
// Mobile Menu Toggle
// ========================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// ========================================
// Intersection Observer for Scroll Animations
// ========================================
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Staggered animation for cards
document.querySelectorAll('.diff-card, .module-card, .tech-item, .qs-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cardObserver.observe(card);
});

// ========================================
// Animated Statistics Counter
// ========================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        if (target % 1 !== 0) {
            element.textContent = current.toFixed(1);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const statCards = document.querySelectorAll('.stat-card');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValue = entry.target.querySelector('.stat-value');
            const target = parseFloat(statValue.getAttribute('data-target'));

            if (statValue.textContent === '0') {
                animateCounter(statValue, target);
            }

            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statCards.forEach(card => statsObserver.observe(card));

// ========================================
// Dashboard Sidebar Navigation
// ========================================
const sidebarItems = document.querySelectorAll('.sidebar-item');
const workspacePages = document.querySelectorAll('.workspace-page');

sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        const pageName = item.getAttribute('data-page');

        // Update sidebar active state
        sidebarItems.forEach(si => si.classList.remove('active'));
        item.classList.add('active');

        // Show corresponding workspace page
        workspacePages.forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById('page-' + pageName);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    });
});

// ========================================
// Active Navigation Link on Scroll
// ========================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    const navHeight = document.querySelector('.nav-container').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// Navbar Background on Scroll
// ========================================
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-container');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 11, 13, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 11, 13, 0.8)';
    }
});

// ========================================
// Parallax Effect for Hero Background
// ========================================
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.scrollY;
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ========================================
// Chart Bar Animation
// ========================================
const chartBars = document.querySelectorAll('.chart-bar');
const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.chart-bar');
            bars.forEach((bar, i) => {
                const height = bar.style.height;
                bar.style.height = '0';
                setTimeout(() => {
                    bar.style.height = height;
                }, i * 100);
            });
            chartObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.chart-bars').forEach(container => {
    chartObserver.observe(container);
});

// ========================================
// Glossary Modal (Tag Click)
// ========================================
const glossaryModal = document.getElementById('glossaryModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalIcon = document.getElementById('modalIcon');
const modalBody = document.getElementById('modalBody');

if (modalClose) {
    modalClose.addEventListener('click', () => {
        glossaryModal.classList.remove('active');
    });
}

if (glossaryModal) {
    glossaryModal.addEventListener('click', (e) => {
        if (e.target === glossaryModal) {
            glossaryModal.classList.remove('active');
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && glossaryModal && glossaryModal.classList.contains('active')) {
        glossaryModal.classList.remove('active');
    }
});

// Tag click handler
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
        const term = tag.textContent.trim();
        if (typeof glossaryData !== 'undefined' && glossaryData[term]) {
            const data = glossaryData[term];
            modalIcon.textContent = data.icon || '\u{1F4D6}';
            modalTitle.textContent = term;
            modalBody.innerHTML = data.content;
            glossaryModal.classList.add('active');
        }
    });
});

// ========================================
// Tech Detail Modal (6 Core Technologies)
// ========================================
const techModalData = {
    langgraph: {
        icon: '🔄',
        title: 'LangGraph — 38-노드 파이프라인 오케스트레이션',
        badge: 'v3.0 · 8 Phase · 적응형 라우터',
        content: `
            <div class="feature-highlight-box">
                <strong>왜 LangGraph인가?</strong> 38개 탐지 모듈이 8개 Phase에 걸쳐 조건 분기와 병렬 실행을 하며 협력해야 합니다. LangGraph의 StateGraph는 공간/DM/시간/생체/오디오/멀티모달/방어/XAI 등 이질적인 분석 노드들의 복잡한 흐름을 그래프로 직관적 표현하고 적응형 라우터(Rapid/Standard/Precise/Forensic)로 최적 경로를 자동 선택합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">38</div>
                    <div class="feature-metric-label">StateGraph 노드</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">8</div>
                    <div class="feature-metric-label">Detection Phases</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">4</div>
                    <div class="feature-metric-label">분석 모드</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🎯 도입 이유</div>
                <ul>
                    <li><strong>복잡한 조건 분기 제어:</strong> 분석 결과에 따라 다음 노드를 동적으로 선택하는 로직을 그래프 구조로 직관적 표현</li>
                    <li><strong>병렬 처리 내장:</strong> <code>Send()</code> API로 독립 분석 노드를 동시 실행 — 기존 순차 처리 대비 60% 속도 향상</li>
                    <li><strong>상태 영속성:</strong> <code>MemorySaver</code>로 각 노드 완료 시 체크포인트 저장 → 장애 시 자동 재시작</li>
                    <li><strong>HITL 지원:</strong> 판정 불확실 구간에서 Human-in-the-Loop 개입 지점을 그래프 노드로 자연스럽게 삽입</li>
                    <li><strong>가시성:</strong> 전체 분석 파이프라인을 DAG(방향 비순환 그래프)로 시각화 가능</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">⚙️ 플랫폼 내 실제 작동 방식</div>
                <p>사용자가 영상을 업로드하면 LangGraph StateGraph가 즉시 실행됩니다.</p>
                <div class="feature-flow">
                    <span class="feature-flow-step">① input_node<br><small>영상 파싱·분할</small></span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">② dispatch_node<br><small>Send() 5방향 분기</small></span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">③ 5노드 병렬<br><small>visual·audio·bio·avsync·ocr</small></span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">④ aggregate_node<br><small>결과 수집·가중치 계산</small></span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">⑤ verdict_node<br><small>CrewAI·AutoGen 연계</small></span>
                </div>
                <ul style="margin-top:1rem;">
                    <li><strong>MessageState 공유:</strong> 모든 노드가 동일 State 객체를 읽고 쓰며, 분석 결과가 자동으로 누적</li>
                    <li><strong>조건부 엣지:</strong> 생체신호 점수 ≥ 0.8이면 fast-track 판정, 그 외 전체 분석 진행</li>
                    <li><strong>타임아웃 처리:</strong> 노드별 30초 타임아웃 설정, 초과 시 부분 결과로 계속 진행</li>
                    <li><strong>불확실 구간 HITL:</strong> 0.35~0.65 사이 점수는 검토 요청 노드로 라우팅</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔧 핵심 코드 패턴</div>
                <p><code>workflow = StateGraph(TruthLensState)</code><br>
                <code>workflow.add_node("dispatch", dispatch_analysis)</code><br>
                <code>workflow.add_conditional_edges("dispatch", route_by_confidence)</code><br>
                <code>app = workflow.compile(checkpointer=MemorySaver())</code></p>
                <div class="feature-tag-list">
                    <span class="feature-tag">Python 3.11+</span>
                    <span class="feature-tag">langgraph 0.2.x</span>
                    <span class="feature-tag">asyncio 기반</span>
                    <span class="feature-tag">TypedDict State</span>
                    <span class="feature-tag">MemorySaver</span>
                </div>
            </div>
        `
    },
    crewai: {
        icon: '🤖',
        title: 'CrewAI — 12인 전문가 에이전트 합의',
        badge: '도입 이유 · 실제 작동 방식',
        content: `
            <div class="feature-highlight-box">
                <strong>왜 CrewAI인가?</strong> 딥페이크 판정은 단일 AI의 판단보다 각 도메인 전문가들이 독립적으로 분석 후 합의하는 방식이 훨씬 강건합니다. CrewAI는 역할·목표·도구가 분리된 전문가 에이전트를 쉽게 구성하고 협업시키는 최적의 멀티에이전트 프레임워크입니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">6명</div>
                    <div class="feature-metric-label">전문가 에이전트</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">+8.3%p</div>
                    <div class="feature-metric-label">단독 대비 정확도 향상</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">합의제</div>
                    <div class="feature-metric-label">최종 판정 방식</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🎯 도입 이유</div>
                <ul>
                    <li><strong>도메인 전문화:</strong> 생체신호·시각·오디오·문서·통계 각 분야 전문 에이전트가 해당 분야만 깊이 분석 → 범용 모델보다 정확</li>
                    <li><strong>확증 편향 방지:</strong> 에이전트 간 독립성 보장으로 한 에이전트의 오판이 전체에 전파되지 않음</li>
                    <li><strong>역할 기반 도구 할당:</strong> 각 에이전트에게 필요한 분석 도구(rPPG, FFT, MFCC 등)만 선택적 부여</li>
                    <li><strong>자연어 협업:</strong> 에이전트 간 분석 결과를 자연어로 공유하여 상호 검증 가능</li>
                    <li><strong>유연한 확장:</strong> 새 딥페이크 유형 등장 시 새 전문가 에이전트 추가만으로 대응</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">👥 6인 전문가 에이전트 구성</div>
                <div class="feature-tag-list">
                    <span class="feature-tag">🔬 BioSignalAgent — rPPG·EAR 분석</span>
                    <span class="feature-tag">🖼️ VisualForensicAgent — GAN지문·아티팩트</span>
                    <span class="feature-tag">🎵 AudioAnalysisAgent — MFCC·클로닝탐지</span>
                    <span class="feature-tag">👄 AVSyncAgent — 립싱크·화자일관성</span>
                    <span class="feature-tag">📊 StatisticalAgent — 앙상블·이상값분석</span>
                    <span class="feature-tag">⚖️ VerdictAgent — 합의·최종판정</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">⚙️ 플랫폼 내 실제 작동 방식</div>
                <p>LangGraph의 <code>aggregate_node</code>에서 각 모듈 점수가 수집되면, CrewAI Crew가 활성화됩니다.</p>
                <div class="feature-flow">
                    <span class="feature-flow-step">① LangGraph 결과 수신</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">② 5개 전문가 병렬 분석</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">③ 에이전트 간 교차 검토</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">④ VerdictAgent 합의 도출</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">⑤ AutoGen으로 전달</span>
                </div>
                <ul style="margin-top:1rem;">
                    <li><strong>Task 체인:</strong> 각 에이전트는 이전 에이전트의 분석 리포트를 컨텍스트로 받아 자신의 분석 수행</li>
                    <li><strong>이견 처리:</strong> 두 에이전트가 상반된 결론 낼 경우 VerdictAgent가 가중치 기반 중재</li>
                    <li><strong>자연어 근거 생성:</strong> 각 에이전트가 자신의 판단 근거를 자연어로 기술 → 최종 XAI 리포트에 포함</li>
                </ul>
            </div>
        `
    },
    autogen: {
        icon: '💬',
        title: 'AutoGen — 적대적 토론 검증',
        badge: '도입 이유 · 실제 작동 방식',
        content: `
            <div class="feature-highlight-box">
                <strong>왜 AutoGen인가?</strong> CrewAI가 합의한 판정도 오류 가능성이 있습니다. AutoGen의 멀티에이전트 대화 프레임워크로 탐지 에이전트(Blue)와 반박 에이전트(Red)가 4라운드 토론을 벌여 판정의 신뢰도를 최종 검증합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">4</div>
                    <div class="feature-metric-label">토론 라운드</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">-62%</div>
                    <div class="feature-metric-label">False Positive 감소</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">-48%</div>
                    <div class="feature-metric-label">False Negative 감소</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🎯 도입 이유</div>
                <ul>
                    <li><strong>2차 오류 검증:</strong> CrewAI 합의 결과조차 단일 관점일 수 있음 — 반대 입장에서의 검증이 필수</li>
                    <li><strong>자유 형식 대화:</strong> AutoGen의 ConversableAgent는 구조화된 태스크 없이도 자유롭게 논증을 교환 가능</li>
                    <li><strong>자동 토론 종료:</strong> 합의 도달 또는 최대 라운드 초과 시 자동 종료, 부분 합의도 처리</li>
                    <li><strong>허위 양성 최소화:</strong> 실제 영상을 딥페이크로 오판하는 비율을 62% 감소시켜 신뢰도 확보</li>
                    <li><strong>증거 기반 논증:</strong> 각 에이전트가 구체적 수치·근거를 제시해야 논점 인정 → 근거 없는 판정 방지</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">⚙️ 플랫폼 내 4라운드 토론 방식</div>
                <div class="feature-flow">
                    <span class="feature-flow-step">R1: Blue Team<br><small>탐지 근거 제시</small></span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">R2: Red Team<br><small>반증 시도</small></span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">R3: Blue Team<br><small>재반박·추가 증거</small></span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">R4: 중재 에이전트<br><small>최종 합의 도출</small></span>
                </div>
                <ul style="margin-top:1rem;">
                    <li><strong>Blue Team Agent:</strong> CrewAI 판정 결과와 모든 증거를 제시하며 딥페이크임을 논증</li>
                    <li><strong>Red Team Agent:</strong> 각 증거의 신뢰도를 공격하고 정상 영상에서도 나타날 수 있는 반례 제시</li>
                    <li><strong>Mediator Agent:</strong> 양측 논점의 강도를 0~1로 수치화해 최종 신뢰도 점수 재산출</li>
                    <li><strong>합의 실패 처리:</strong> 4라운드 후 미합의 시 "UNCERTAIN" 판정으로 HITL 에스컬레이션</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔧 에이전트 구성</div>
                <div class="feature-tag-list">
                    <span class="feature-tag">ConversableAgent</span>
                    <span class="feature-tag">GroupChat</span>
                    <span class="feature-tag">GroupChatManager</span>
                    <span class="feature-tag">Ollama LLM 백엔드</span>
                    <span class="feature-tag">max_turns=4</span>
                    <span class="feature-tag">terminate_msg 패턴</span>
                </div>
            </div>
        `
    },
    ollama: {
        icon: '🦙',
        title: 'Ollama — 완전 로컬 LLM/VLM 추론',
        badge: '도입 이유 · 실제 작동 방식',
        content: `
            <div class="feature-highlight-box">
                <strong>왜 Ollama인가?</strong> 분석 대상 영상은 기업 기밀·개인 정보를 담을 수 있습니다. OpenAI API 등 외부 서비스는 데이터가 서버로 전송되지만, Ollama는 모든 LLM/VLM 추론을 로컬에서 실행하여 <strong>제로 데이터 유출</strong>을 보장합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">0건</div>
                    <div class="feature-metric-label">외부 전송 데이터</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">6+</div>
                    <div class="feature-metric-label">지원 VLM 모델</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">오프라인</div>
                    <div class="feature-metric-label">인터넷 없이 작동</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🎯 도입 이유</div>
                <ul>
                    <li><strong>프라이버시 절대 보장:</strong> 영상 프레임, 음성 데이터가 로컬 메모리에서만 처리 — 네트워크 패킷 캡처로도 확인 불가</li>
                    <li><strong>규정 준수 자동화:</strong> GDPR, 한국 개인정보보호법, HIPAA 등 데이터 국외 이전 규제를 구조적으로 회피</li>
                    <li><strong>비용 제로:</strong> OpenAI GPT-4V 기준 이미지 분석 건당 약 $0.01 → 대용량 처리 시 수천만 원 절감</li>
                    <li><strong>에어갭 환경 지원:</strong> 군사·금융·의료 시설의 인터넷 차단 환경에서도 완전 작동</li>
                    <li><strong>모델 커스터마이징:</strong> 딥페이크 탐지 도메인으로 파인튜닝한 GGUF 모델 직접 탑재 가능</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">⚙️ 플랫폼 내 실제 작동 방식</div>
                <p>Ollama 서버는 플랫폼 시작 시 백그라운드에서 자동 실행되며, 모든 에이전트는 <code>http://localhost:11434</code>를 통해 추론을 요청합니다.</p>
                <div class="feature-flow">
                    <span class="feature-flow-step">프레임 캡처</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Base64 인코딩</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Ollama API 호출<br><small>(localhost only)</small></span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">VLM 추론</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">자연어 분석 결과</span>
                </div>
                <ul style="margin-top:1rem;">
                    <li><strong>VLM 용도:</strong> 프레임별 시각 이상 탐지, GradCAM 해석, 아티팩트 설명 생성</li>
                    <li><strong>LLM 용도:</strong> CrewAI 에이전트 두뇌, AutoGen 토론 참여, XAI 보고서 생성</li>
                    <li><strong>모델 자동 선택:</strong> GPU VRAM에 따라 7B/13B/34B 모델 자동 전환</li>
                    <li><strong>스트리밍 응답:</strong> WebSocket으로 분석 진행 상황 실시간 대시보드 표시</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🦙 TruthLens 검증 모델 목록</div>
                <div class="feature-tag-list">
                    <span class="feature-tag">llava:34b (VLM 고정밀)</span>
                    <span class="feature-tag">qwen2-vl:7b (VLM 고속)</span>
                    <span class="feature-tag">llama3.2-vision (VLM)</span>
                    <span class="feature-tag">mistral:7b (LLM 토론)</span>
                    <span class="feature-tag">gemma2:9b (LLM 보고서)</span>
                    <span class="feature-tag">custom-deepfake-7b (파인튜닝)</span>
                </div>
            </div>
        `
    },
    react: {
        icon: '⚛️',
        title: 'React / Vite — 실시간 분석 대시보드 UI',
        badge: '도입 이유 · 실제 작동 방식',
        content: `
            <div class="feature-highlight-box">
                <strong>왜 React + Vite인가?</strong> 딥페이크 분석은 38개 노드가 비동기로 실행되며 결과가 실시간으로 스트리밍됩니다. React의 상태 관리와 컴포넌트 모델은 이 동적 데이터 흐름을 UI에 즉각 반영하는 데 최적이며, Vite의 HMR로 개발 생산성도 극대화했습니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">&lt;100ms</div>
                    <div class="feature-metric-label">UI 업데이트 레이턴시</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">WebSocket</div>
                    <div class="feature-metric-label">실시간 연결 방식</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">21개</div>
                    <div class="feature-metric-label">대시보드 페이지</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🎯 도입 이유</div>
                <ul>
                    <li><strong>실시간 상태 반영:</strong> LangGraph 노드 완료 이벤트를 WebSocket으로 수신하여 분석 진행 상황을 실시간 시각화</li>
                    <li><strong>컴포넌트 재사용:</strong> 38개 탐지 모듈 결과 카드, 신뢰도 게이지, 증거 타임라인 등 복잡한 UI를 독립 컴포넌트로 관리</li>
                    <li><strong>Vite 빠른 빌드:</strong> esbuild 기반으로 콜드 스타트 300ms 이하, HMR로 변경 즉시 반영</li>
                    <li><strong>상태 관리:</strong> Zustand로 분석 상태, 이력, 설정을 전역 관리 — props drilling 없이 어디서나 접근</li>
                    <li><strong>차트 라이브러리 생태계:</strong> Recharts, D3.js 통합으로 rPPG 파형, 스펙트럼 히트맵 등 전문 시각화 구현</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">⚙️ 플랫폼 내 실제 작동 방식</div>
                <p>사용자가 영상을 업로드하면 React 앱이 FastAPI로 분석을 요청하고, WebSocket을 통해 실시간 진행 상황을 수신합니다.</p>
                <div class="feature-flow">
                    <span class="feature-flow-step">영상 업로드<br><small>드래그&드롭 UI</small></span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">FastAPI 요청</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">WebSocket 구독</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">노드별 진행률 표시</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">최종 판정 렌더링</span>
                </div>
                <ul style="margin-top:1rem;">
                    <li><strong>분석 대시보드:</strong> 38개 모듈 점수 레이더 차트, 가중치 퓨전 수식 실시간 계산 표시</li>
                    <li><strong>GradCAM 오버레이:</strong> Canvas API로 원본 프레임 위에 히트맵 실시간 합성</li>
                    <li><strong>토론 로그:</strong> AutoGen 4라운드 대화를 채팅 UI로 실시간 스트리밍</li>
                    <li><strong>PDF 내보내기:</strong> react-pdf로 XAI 분석 보고서 원클릭 생성</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🛠️ 프론트엔드 기술 스택</div>
                <div class="feature-tag-list">
                    <span class="feature-tag">React 18</span>
                    <span class="feature-tag">Vite 5</span>
                    <span class="feature-tag">TypeScript</span>
                    <span class="feature-tag">Zustand</span>
                    <span class="feature-tag">Recharts</span>
                    <span class="feature-tag">TailwindCSS</span>
                    <span class="feature-tag">react-dropzone</span>
                    <span class="feature-tag">react-pdf</span>
                </div>
            </div>
        `
    },
    fastapi: {
        icon: '⚡',
        title: 'FastAPI — REST API & WebSocket 서버',
        badge: '도입 이유 · 실제 작동 방식',
        content: `
            <div class="feature-highlight-box">
                <strong>왜 FastAPI인가?</strong> LangGraph 비동기 파이프라인과 Ollama 스트리밍 응답을 클라이언트에 실시간 전달하려면 완전한 비동기 서버가 필수입니다. FastAPI는 Python asyncio를 완전히 지원하며, WebSocket과 REST를 동일 서버에서 처리하는 가장 현대적인 Python 웹 프레임워크입니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">350+</div>
                    <div class="feature-metric-label">테스트 통과</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">async</div>
                    <div class="feature-metric-label">완전 비동기 처리</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">OpenAPI</div>
                    <div class="feature-metric-label">자동 문서화</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🎯 도입 이유</div>
                <ul>
                    <li><strong>완전 비동기:</strong> <code>async def</code> 기반으로 LangGraph 파이프라인 실행 중 다른 요청도 블로킹 없이 처리</li>
                    <li><strong>WebSocket 내장:</strong> 분석 진행 이벤트를 클라이언트에 실시간 푸시 — 기존 폴링 방식 대비 네트워크 부하 90% 감소</li>
                    <li><strong>타입 안전성:</strong> Pydantic v2 모델로 요청/응답 데이터 자동 검증 → 런타임 오류 방지</li>
                    <li><strong>자동 API 문서:</strong> Swagger UI(/docs)와 ReDoc(/redoc) 자동 생성 → 프론트엔드 팀과 API 계약 즉시 공유</li>
                    <li><strong>고성능:</strong> Starlette + uvicorn 기반으로 Node.js와 동등한 처리량, Python 생태계(NumPy, OpenCV) 직접 활용</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">⚙️ 플랫폼 내 실제 작동 방식</div>
                <p>FastAPI 서버는 React 대시보드와 LangGraph 백엔드 사이의 게이트웨이 역할을 합니다.</p>
                <div class="feature-flow">
                    <span class="feature-flow-step">POST /analyze<br><small>영상 업로드</small></span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Background Task<br><small>LangGraph 실행</small></span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">WS /ws/{job_id}<br><small>진행 이벤트 스트림</small></span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">GET /result/{id}<br><small>최종 보고서</small></span>
                </div>
                <ul style="margin-top:1rem;">
                    <li><strong>파일 업로드:</strong> <code>UploadFile</code>로 영상 수신 → 임시 저장 → LangGraph 파이프라인에 경로 전달</li>
                    <li><strong>진행 이벤트:</strong> 각 LangGraph 노드 완료 시 <code>await websocket.send_json(event)</code>로 즉시 클라이언트 전송</li>
                    <li><strong>Ollama 프록시:</strong> VLM 스트리밍 응답을 SSE(Server-Sent Events)로 클라이언트에 실시간 중계</li>
                    <li><strong>작업 큐:</strong> Celery + Redis로 대용량 영상의 비동기 처리 및 우선순위 관리</li>
                    <li><strong>캐싱:</strong> 동일 영상 해시 탐지 시 Redis 캐시에서 즉시 반환 (중복 분석 방지)</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🛠️ 백엔드 기술 스택</div>
                <div class="feature-tag-list">
                    <span class="feature-tag">FastAPI 0.111</span>
                    <span class="feature-tag">uvicorn (ASGI)</span>
                    <span class="feature-tag">Pydantic v2</span>
                    <span class="feature-tag">Celery + Redis</span>
                    <span class="feature-tag">SQLAlchemy (이력 DB)</span>
                    <span class="feature-tag">pytest 350+ tests</span>
                    <span class="feature-tag">Docker Compose</span>
                </div>
            </div>
        `
    },
    dspy: {
        icon: '🧠',
        title: 'DSPy — Auto Prompt Optimization',
        badge: '도입 이유 · 실제 작동 방식',
        content: `
            <div class="feature-highlight-box">
                <strong>왜 DSPy인가?</strong> 모든 LLM 호출에 대한 자동 프롬프트 엔지니어링. CrewAI 전문가 프롬프트와 AutoGen 토론 프롬프트를 자동으로 최적화하여 수동 프롬프트 튜닝을 제거합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">Auto</div>
                    <div class="feature-metric-label">프롬프트 최적화</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">12</div>
                    <div class="feature-metric-label">최적화 대상 에이전트</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">0</div>
                    <div class="feature-metric-label">수동 프롬프트 튜닝</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🎯 도입 이유</div>
                <ul>
                    <li><strong>수동 프롬프트 제거:</strong> 12명 CrewAI 전문가 + AutoGen 토론 에이전트의 프롬프트를 자동 최적화</li>
                    <li><strong>성능 일관성:</strong> LLM 모델 변경 시에도 프롬프트 자동 재최적화로 성능 유지</li>
                    <li><strong>메트릭 기반 최적화:</strong> 탐지 정확도, F1 점수 등 실제 지표 기반으로 프롬프트 자동 개선</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">⚙️ 플랫폼 내 실제 작동 방식</div>
                <div class="feature-flow">
                    <span class="feature-flow-step">초기 프롬프트</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">DSPy 컴파일</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">자동 최적화</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">에이전트 배포</span>
                </div>
                <div class="feature-tag-list">
                    <span class="feature-tag">DSPy Compiler</span>
                    <span class="feature-tag">Auto Prompt Engineering</span>
                    <span class="feature-tag">CrewAI Integration</span>
                    <span class="feature-tag">AutoGen Integration</span>
                </div>
            </div>
        `
    },
    rag: {
        icon: '📚',
        title: 'LlamaIndex — RAG Knowledge Base',
        badge: '500+ Papers · 52 Tool Docs · Hybrid Search',
        content: `
            <div class="feature-highlight-box">
                <strong>왜 LlamaIndex RAG인가?</strong> 500+ 딥페이크 연구 논문과 52종 도구 문서를 지식 베이스로 구축. 하이브리드 검색(BM25 + Dense Vector) + Cross-Encoder 리랭킹으로 AI 전문가에게 증거 기반 추론을 제공합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">500+</div>
                    <div class="feature-metric-label">연구 논문</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">52</div>
                    <div class="feature-metric-label">도구 문서</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">Hybrid</div>
                    <div class="feature-metric-label">검색 방식</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🎯 도입 이유</div>
                <ul>
                    <li><strong>증거 기반 추론:</strong> AI 전문가가 최신 연구 결과를 근거로 판정</li>
                    <li><strong>도구 지식:</strong> 52종 생성 도구의 특성, 취약점, 탐지 방법 문서화</li>
                    <li><strong>최신성 유지:</strong> 새 논문 및 도구 문서 추가로 지식 베이스 지속 갱신</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">⚙️ 검색 아키텍처</div>
                <div class="feature-flow">
                    <span class="feature-flow-step">Query</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">BM25 + Dense Vector</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Cross-Encoder Reranking</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Evidence Context</span>
                </div>
                <div class="feature-tag-list">
                    <span class="feature-tag">LlamaIndex</span>
                    <span class="feature-tag">BM25 Sparse</span>
                    <span class="feature-tag">Dense Vector</span>
                    <span class="feature-tag">Cross-Encoder Reranking</span>
                    <span class="feature-tag">Evidence-Based Reasoning</span>
                </div>
            </div>
        `
    }
};

const techModal = document.getElementById('techModal');
const techModalClose = document.getElementById('techModalClose');
const techModalIcon = document.getElementById('techModalIcon');
const techModalTitle = document.getElementById('techModalTitle');
const techModalBadge = document.getElementById('techModalBadge');
const techModalBody = document.getElementById('techModalBody');

function openTechModal(techKey) {
    const data = techModalData[techKey];
    if (!data || !techModal) return;
    techModalIcon.textContent = data.icon;
    techModalTitle.textContent = data.title;
    techModalBadge.textContent = data.badge;
    techModalBody.innerHTML = data.content;
    techModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTechModal() {
    if (techModal) {
        techModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (techModalClose) {
    techModalClose.addEventListener('click', closeTechModal);
}

if (techModal) {
    techModal.addEventListener('click', (e) => {
        if (e.target === techModal) closeTechModal();
    });
}

document.querySelectorAll('.tech-item[data-tech]').forEach(card => {
    card.addEventListener('click', () => {
        openTechModal(card.getAttribute('data-tech'));
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && techModal && techModal.classList.contains('active')) {
        closeTechModal();
    }
});

// ========================================
// Module Detail Modal (7 Detection Modules)
// ========================================
const moduleModalData = {
    spatial: {
        icon: '👁️',
        title: 'Spatial / Frequency Detection (14 Modules)',
        badge: 'Phase 1 · 14 modules · GAN+DM Detection',
        content: `
            <div class="feature-highlight-box">
                <strong>GAN과 Diffusion Model을 모두 탐지하는 14개 공간/주파수 분석 모듈.</strong> DIRE, SeDID, DiffusionFake, Swin-V2 ViT, Cross-Efficient ViT, SBI, LAA-Net, SA3WT, FFT Analysis, DCT Analysis, GAN Fingerprint, UniFD, LNCLIP-DF, DINOv2. 추론 시간 FFT 10ms ~ DiffusionFake 180ms.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">14</div>
                    <div class="feature-metric-label">탐지 모듈</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">99.1%</div>
                    <div class="feature-metric-label">AUC FF++ c23</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">97.8%</div>
                    <div class="feature-metric-label">AUC Celeb-DF</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔬 GAN 탐지 모듈</div>
                <ul>
                    <li><strong>FFT Analysis (10ms)</strong> — 주파수 도메인에서 GAN 고유 지문 패턴 검출</li>
                    <li><strong>DCT Analysis</strong> — 8x8 블록 이산 코사인 변환 통계 이상 탐지</li>
                    <li><strong>GAN Fingerprint</strong> — 생성기 아키텍처별 고유 핑거프린트 매칭</li>
                    <li><strong>SBI (Self-Blended Images)</strong> — 자체 블렌딩 기반 얼굴 합성 탐지</li>
                    <li><strong>Cross-Efficient ViT</strong> — 효율적 교차 어텐션 비전 트랜스포머</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🎨 Diffusion Model 탐지 모듈</div>
                <ul>
                    <li><strong>DIRE</strong> — 사전학습 DM으로 재구성 후 오류 패턴 분석</li>
                    <li><strong>SeDID</strong> — 각 타임스텝별 통계적 디노이징 오류 분포</li>
                    <li><strong>DiffusionFake (180ms)</strong> — DM 역생성 과정 추적으로 ID 혼합도 판별</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🧠 Foundation Model 탐지</div>
                <ul>
                    <li><strong>Swin-V2 ViT</strong> — 대규모 사전학습 비전 트랜스포머</li>
                    <li><strong>LAA-Net</strong> — 로컬 적응 어텐션 네트워크</li>
                    <li><strong>SA3WT</strong> — 자기 주의 3-Way 트랜스포머</li>
                    <li><strong>UniFD</strong> — 범용 딥페이크 탐지 프레임워크</li>
                    <li><strong>LNCLIP-DF</strong> — CLIP 기반 언어-비전 딥페이크 탐지</li>
                    <li><strong>DINOv2</strong> — 자기 지도 학습 기반 범용 비전 특징</li>
                </ul>
                <div class="feature-tag-list">
                    <span class="feature-tag">GAN Detection</span>
                    <span class="feature-tag">DM Detection</span>
                    <span class="feature-tag">Foundation Models</span>
                    <span class="feature-tag">FFT 10ms</span>
                    <span class="feature-tag">DiffusionFake 180ms</span>
                </div>
            </div>
        `
    },
    temporal: {
        icon: '⏱️',
        title: 'Temporal / Biometric Analysis (12 Modules)',
        badge: 'Phase 2 · 12 modules · 5-Layer Biometric',
        content: `
            <div class="feature-highlight-box">
                <strong>비디오 시간축 불일치 + 5계층 생체신호 분석.</strong> VideoMAE, TALL, VAST, ResNeXt+LSTM, LipForensics, VTT, SyncNet으로 시간적 불일치를 탐지하고, FACS AU(46 AU), rPPG CHROM, rPPG POS, Eye Analysis, Head Pose 6DoF로 물리 법칙 위반과 미세표정 이상을 검출합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">12</div>
                    <div class="feature-metric-label">탐지 모듈</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">5</div>
                    <div class="feature-metric-label">생체 분석 계층</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">46 AU</div>
                    <div class="feature-metric-label">FACS Action Units</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">⏱️ 시간적 분석 모듈</div>
                <ul>
                    <li><strong>VideoMAE</strong> — Masked Autoencoder 기반 시공간 패턴 학습</li>
                    <li><strong>TALL</strong> — Temporal Action Localization 기반 이상 구간 탐지</li>
                    <li><strong>VAST</strong> — Video-Audio Spatiotemporal 통합 분석</li>
                    <li><strong>ResNeXt+LSTM</strong> — CNN-RNN 시계열 특징 추출</li>
                    <li><strong>LipForensics</strong> — 립싱크 미세 시간차 탐지</li>
                    <li><strong>VTT</strong> — Video Temporal Transformer</li>
                    <li><strong>SyncNet</strong> — 오디오-비주얼 동기화 점수</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🧬 5계층 생체 분석</div>
                <ul>
                    <li><strong>FACS AU Analysis</strong> — 46개 Action Unit 미세표정 탐지 (0.04~0.2초)</li>
                    <li><strong>rPPG CHROM</strong> — Chrominance 기반 원격 심박 추출</li>
                    <li><strong>rPPG POS</strong> — Plane-Orthogonal-to-Skin 이중 검증</li>
                    <li><strong>Eye Analysis</strong> — EAR 깜빡임 + 홍채 반사 + 시선 벡터</li>
                    <li><strong>Head Pose 6DoF</strong> — 머리 포즈 물리적 관성 역학 검증</li>
                </ul>
                <div class="feature-tag-list">
                    <span class="feature-tag">Physics Violations</span>
                    <span class="feature-tag">Micro-Expression</span>
                    <span class="feature-tag">Lip-Sync Mismatch</span>
                    <span class="feature-tag">5-Layer Biometric</span>
                </div>
            </div>
        `
    },
    audiomod: {
        icon: '🎵',
        title: 'Audio Forensics (6 Modules)',
        badge: 'Phase 3 · 6 modules · SSL + E2E + Vocoder ID',
        content: `
            <div class="feature-highlight-box">
                <strong>SSL 백본 기반 미지 도구 일반화 + 12종 보코더 식별.</strong> Wav2Vec2, HuBERT, AASIST (EER 0.83%), NeXt-TDNN+AMFF, CNN-LSTM-GRU, 12-Vocoder ID. 0%에서 97%로 음성 복제 탐지 성능 향상.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">6</div>
                    <div class="feature-metric-label">탐지 모듈</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">0.83%</div>
                    <div class="feature-metric-label">AASIST EER</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">12</div>
                    <div class="feature-metric-label">보코더 식별</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🎤 SSL (Self-Supervised Learning) 모듈</div>
                <ul>
                    <li><strong>Wav2Vec2</strong> — 대규모 비지도 음성 표현 학습, 미지 도구 일반화</li>
                    <li><strong>HuBERT</strong> — 숨겨진 유닛 BERT, 음성 클러스터링 기반 특징</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔊 End-to-End 탐지 모듈</div>
                <ul>
                    <li><strong>AASIST (EER 0.83%)</strong> — 그래프 주의 기반 ASVspoof 호환 스푸핑 탐지</li>
                    <li><strong>NeXt-TDNN+AMFF</strong> — 시간 지연 신경망 + 적응적 다중 특징 융합</li>
                    <li><strong>CNN-LSTM-GRU</strong> — 다층 순환 신경망 기반 시계열 음성 분석</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔍 보코더 식별</div>
                <p>12종 보코더(WaveGlow, HiFi-GAN, WaveRNN, MelGAN, Multi-Band MelGAN, Parallel WaveGAN, WaveGrad, DiffWave, WORLD, Griffin-Lim, LPCNet, Vocos) 핑거프린트로 TTS 시스템을 역추적합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">SSL Backbone</span>
                    <span class="feature-tag">Unknown Tool Generalization</span>
                    <span class="feature-tag">0% → 97% Voice Clone Detection</span>
                    <span class="feature-tag">12 Vocoder Types</span>
                </div>
            </div>
        `
    },
    metadata: {
        icon: '📋',
        title: 'Metadata / Provenance (2 Modules)',
        badge: 'Phase 4 · 2 modules · C2PA + SynthID',
        content: `
            <div class="feature-highlight-box">
                <strong>콘텐츠 출처 인증과 AI 워터마크 탐지.</strong> C2PA 콘텐츠 크리덴셜 검증(개방형 표준)과 Google DeepMind SynthID AI 워터마크 탐지로 AI 생성 콘텐츠의 출처를 추적합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">2</div>
                    <div class="feature-metric-label">탐지 모듈</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">C2PA</div>
                    <div class="feature-metric-label">Open Standard</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">SynthID</div>
                    <div class="feature-metric-label">Google DeepMind</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">📜 C2PA 콘텐츠 크리덴셜 검증</div>
                <p>C2PA(Coalition for Content Provenance and Authenticity) 개방형 표준에 따라 콘텐츠의 생성·편집·배포 이력을 검증합니다. 디지털 서명 체인으로 원본 출처를 추적하고 변조 여부를 확인합니다.</p>
                <ul>
                    <li><strong>매니페스트 검증:</strong> C2PA 매니페스트의 디지털 서명 무결성 확인</li>
                    <li><strong>편집 이력:</strong> 콘텐츠 생성부터 현재까지의 전체 수정 이력 추적</li>
                    <li><strong>도구 식별:</strong> 생성에 사용된 소프트웨어/AI 모델 정보 확인</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔍 SynthID AI 워터마크 탐지</div>
                <p>Google DeepMind의 SynthID 기술로 AI가 생성한 이미지, 오디오, 텍스트에 삽입된 비가시 워터마크를 탐지합니다. AI 생성 콘텐츠의 출처 추적을 지원합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">C2PA v2.2</span>
                    <span class="feature-tag">SynthID Detection</span>
                    <span class="feature-tag">Provenance Tracking</span>
                    <span class="feature-tag">AI Content Identification</span>
                </div>
            </div>
        `
    },
    defense: {
        icon: '🛡️',
        title: 'Defense / Classification (2 Modules)',
        badge: 'Phase 5 · 2 modules · ADAG + 3-Class',
        content: `
            <div class="feature-highlight-box">
                <strong>공격자 우위를 방어자 우위로 전환.</strong> ADAG 적대적 공격 탐지기가 FGSM/PGD/C&W/DeepFool 교란을 식별하고, 3-Class 분류기가 Real/Fake/Anti-forensic을 분리합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">2</div>
                    <div class="feature-metric-label">탐지 모듈</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">4</div>
                    <div class="feature-metric-label">공격 유형 탐지</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">3-Class</div>
                    <div class="feature-metric-label">Real/Fake/Anti-forensic</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">⚔️ ADAG 적대적 공격 탐지</div>
                <ul>
                    <li><strong>FGSM</strong> — Fast Gradient Sign Method 교란 탐지</li>
                    <li><strong>PGD</strong> — Projected Gradient Descent 반복 공격 탐지</li>
                    <li><strong>C&W</strong> — Carlini & Wagner 최적화 공격 탐지</li>
                    <li><strong>DeepFool</strong> — 최소 교란 공격 탐지</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔰 3-Class 분류기</div>
                <p>기존 2-Class(Real/Fake)를 넘어 Anti-forensic(탐지 회피 시도)을 별도 클래스로 분리합니다. Anti-forensic 탐지 시 자동으로 강화 분석 모드로 전환하여 공격자의 이점을 방어자 이점으로 변환합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">FGSM Detection</span>
                    <span class="feature-tag">PGD Detection</span>
                    <span class="feature-tag">C&W Detection</span>
                    <span class="feature-tag">DeepFool Detection</span>
                    <span class="feature-tag">Attacker→Defender Advantage</span>
                </div>
            </div>
        `
    },
    ensemble: {
        icon: '🔗',
        title: 'Ensemble / Fusion (2 Modules)',
        badge: 'Phase 6 · 2 modules · MC Fusion + Bayesian',
        content: `
            <div class="feature-highlight-box">
                <strong>다중 모델 합의 기반 최종 판정.</strong> MC Fusion이 4가지 최적화 방법(MC-Dropout, BMA, Stacking, DST)으로 모듈 결과를 융합하고, Bayesian Fusion이 신뢰 구간을 제공합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">2</div>
                    <div class="feature-metric-label">퓨전 모듈</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">4</div>
                    <div class="feature-metric-label">최적화 방법</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">95% CI</div>
                    <div class="feature-metric-label">베이지안 신뢰 구간</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔀 MC Fusion 4중 최적화</div>
                <ul>
                    <li><strong>MC-Dropout</strong> — 몬테카를로 드롭아웃 기반 불확실성 추정</li>
                    <li><strong>BMA (Bayesian Model Averaging)</strong> — 베이지안 모델 평균화</li>
                    <li><strong>Stacking</strong> — 메타 학습기 기반 모델 결합</li>
                    <li><strong>DST (Dempster-Shafer Theory)</strong> — 증거 이론 기반 불확실성 융합</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">📊 Bayesian Fusion 신뢰 구간</div>
                <p>베이지안 추론으로 최종 판정에 95% 신뢰 구간을 부여합니다. 단순 점 추정이 아닌 확률 분포를 제공하여 판정의 불확실성을 정량화합니다. 다중 모델 합의로 강건한 최종 판정을 도출합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">MC-Dropout</span>
                    <span class="feature-tag">BMA</span>
                    <span class="feature-tag">Stacking</span>
                    <span class="feature-tag">DST</span>
                    <span class="feature-tag">Bayesian Confidence</span>
                    <span class="feature-tag">Multi-Model Consensus</span>
                </div>
            </div>
        `
    }
};

const moduleModal = document.getElementById('moduleModal');
const moduleModalClose = document.getElementById('moduleModalClose');
const moduleModalIcon = document.getElementById('moduleModalIcon');
const moduleModalTitle = document.getElementById('moduleModalTitle');
const moduleModalBadge = document.getElementById('moduleModalBadge');
const moduleModalBody = document.getElementById('moduleModalBody');

function openModuleModal(moduleKey) {
    const data = moduleModalData[moduleKey];
    if (!data || !moduleModal) return;
    moduleModalIcon.textContent = data.icon;
    moduleModalTitle.textContent = data.title;
    moduleModalBadge.textContent = data.badge;
    moduleModalBody.innerHTML = data.content;
    moduleModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModuleModal() {
    if (moduleModal) {
        moduleModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (moduleModalClose) {
    moduleModalClose.addEventListener('click', closeModuleModal);
}

if (moduleModal) {
    moduleModal.addEventListener('click', (e) => {
        if (e.target === moduleModal) closeModuleModal();
    });
}

document.querySelectorAll('.module-card[data-module]').forEach(card => {
    card.addEventListener('click', () => {
        const key = card.getAttribute('data-module');
        openModuleModal(key);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && moduleModal && moduleModal.classList.contains('active')) {
        closeModuleModal();
    }
});

// ========================================
// Feature Detail Modal (6 Core Strengths)
// ========================================
const featureModalData = {
    multimodule: {
        icon: '🔬',
        title: '38-Module Defense-in-Depth',
        badge: '5 Domains · 38 Independent Modules',
        content: `
            <div class="feature-highlight-box">
                <strong>5개 도메인, 38개 독립 탐지 모듈.</strong> 14 Spatial/Frequency + 12 Temporal/Biometric + 6 Audio + 2 Metadata + 2 Defense + 2 Ensemble. v2.13 대비 +90% 확장 (20→38). 각 모듈이 독립 실행되어 적대적 공격에 대한 최대 회복력을 보장합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">38</div>
                    <div class="feature-metric-label">탐지 모듈</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">5</div>
                    <div class="feature-metric-label">분석 도메인</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">+90%</div>
                    <div class="feature-metric-label">v2.13 대비 확장</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔬 도메인별 모듈 구성</div>
                <ul>
                    <li><strong>Spatial / Frequency (14):</strong> DIRE, SeDID, DiffusionFake, Swin-V2 ViT, Cross-Efficient ViT, SBI, LAA-Net, SA3WT, FFT, DCT, GAN Fingerprint, UniFD, LNCLIP-DF, DINOv2</li>
                    <li><strong>Temporal / Biometric (12):</strong> VideoMAE, TALL, VAST, ResNeXt+LSTM, LipForensics, VTT, SyncNet, FACS AU, rPPG CHROM, rPPG POS, Eye Analysis, Head Pose 6DoF</li>
                    <li><strong>Audio (6):</strong> Wav2Vec2, HuBERT, AASIST, NeXt-TDNN+AMFF, CNN-LSTM-GRU, 12-Vocoder ID</li>
                    <li><strong>Metadata (2):</strong> C2PA, SynthID</li>
                    <li><strong>Defense (2):</strong> ADAG, 3-Class Classifier</li>
                    <li><strong>Ensemble (2):</strong> MC Fusion, Bayesian Fusion</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🛡️ 독립 실행 아키텍처</div>
                <p>각 모듈이 독립적으로 실행되므로 단일 모듈 장애가 전체 시스템에 전파되지 않습니다. 적대적 공격으로 일부 모듈이 무력화되더라도 나머지 모듈이 탐지를 유지합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">Independent Execution</span>
                    <span class="feature-tag">Maximum Adversarial Resilience</span>
                    <span class="feature-tag">Fault Tolerance</span>
                    <span class="feature-tag">20→38 Modules (+90%)</span>
                </div>
            </div>
        `
    },
    multiagent: {
        icon: '🤖',
        title: '12 CrewAI Expert Consensus',
        badge: '12 Experts · Parallel Execution · +12-15% Accuracy',
        content: `
            <div class="feature-highlight-box">
                <strong>12명의 전문가 에이전트가 합의 판정.</strong> Visual Forensics, Audio Forensics, Temporal Analysis, Biometric, Frequency Analysis, Metadata, Adversarial, Legal Compliance, Report Generator, Ensemble Optimizer, Red Team Leader, Quality Assurance. 12-15% 정확도 향상.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">12</div>
                    <div class="feature-metric-label">전문가 에이전트</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">+12-15%</div>
                    <div class="feature-metric-label">정확도 향상</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">6 Phase</div>
                    <div class="feature-metric-label">병렬 실행 순서</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">👥 12인 전문가 구성</div>
                <div class="feature-tag-list">
                    <span class="feature-tag">1. Visual Forensics</span>
                    <span class="feature-tag">2. Audio Forensics</span>
                    <span class="feature-tag">3. Temporal Analysis</span>
                    <span class="feature-tag">4. Biometric</span>
                    <span class="feature-tag">5. Frequency Analysis</span>
                    <span class="feature-tag">6. Metadata</span>
                    <span class="feature-tag">7. Adversarial</span>
                    <span class="feature-tag">8. Legal Compliance</span>
                    <span class="feature-tag">9. Report Generator</span>
                    <span class="feature-tag">10. Ensemble Optimizer</span>
                    <span class="feature-tag">11. Red Team Leader</span>
                    <span class="feature-tag">12. Quality Assurance</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">⚙️ 병렬 실행 순서</div>
                <div class="feature-flow">
                    <span class="feature-flow-step">Analysis (1-6)</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Integration (10)</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Defense (7)</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Verification (8+12)</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Reporting (9)</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Red Team (11)</span>
                </div>
            </div>
        `
    },
    debate: {
        icon: '💬',
        title: 'AutoGen Court Debate System',
        badge: '1v1 + 6-Person Group · Citation · PDF Export',
        content: `
            <div class="feature-highlight-box">
                <strong>법정식 적대적 토론 검증 시스템.</strong> 1v1 모드: Prosecutor vs Defense → Judge. 6인 그룹: Visual/Audio/Bio 각 Prosecutor/Defense → Judge. 인용 강조 표시, PDF 내보내기. 불확실 구간 0.35~0.65에서 자동 트리거.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">2</div>
                    <div class="feature-metric-label">토론 모드</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">0.35~0.65</div>
                    <div class="feature-metric-label">트리거 구간</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">PDF</div>
                    <div class="feature-metric-label">내보내기 지원</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">⚖️ 1v1 모드</div>
                <div class="feature-flow">
                    <span class="feature-flow-step">Prosecutor<br><small>탐지 근거 제시</small></span>
                    <span class="feature-flow-arrow">vs</span>
                    <span class="feature-flow-step">Defense<br><small>반증 시도</small></span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Judge<br><small>최종 판결</small></span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">👥 6인 그룹 토론</div>
                <ul>
                    <li><strong>Visual Prosecutor / Defense:</strong> 시각 증거 공방</li>
                    <li><strong>Audio Prosecutor / Defense:</strong> 오디오 증거 공방</li>
                    <li><strong>Bio Prosecutor / Defense:</strong> 생체신호 증거 공방</li>
                    <li><strong>Judge:</strong> 양측 논점 평가 후 최종 판결</li>
                </ul>
                <div class="feature-tag-list">
                    <span class="feature-tag">Citation Highlighting</span>
                    <span class="feature-tag">PDF Export</span>
                    <span class="feature-tag">Uncertain Zone Trigger</span>
                    <span class="feature-tag">Evidence-Based Debate</span>
                </div>
            </div>
        `
    },
    xai: {
        icon: '💡',
        title: 'Legal-grade XAI',
        badge: 'SHAP + Grad-CAM++ + Bayesian CI · 3 Templates',
        content: `
            <div class="feature-highlight-box">
                <strong>법적 증거 수준의 설명 가능한 AI.</strong> SHAP values, Grad-CAM++ 히트맵, 베이지안 신뢰 구간(95% CI). 3종 보고서 템플릿: Standard (3-5 pages), Legal (10-20 pages, 법원 제출용), Technical (15-30 pages). 한국 AI 기본법 제15조 준수. 해시 체인 무결성 검증.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">3</div>
                    <div class="feature-metric-label">보고서 템플릿</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">95% CI</div>
                    <div class="feature-metric-label">베이지안 신뢰 구간</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">Art.15</div>
                    <div class="feature-metric-label">AI 기본법 준수</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔗 XAI 분석 도구</div>
                <ul>
                    <li><strong>SHAP Values:</strong> 각 모듈별 판정 기여도 폭포 차트</li>
                    <li><strong>Grad-CAM++:</strong> CNN+ViT+DM 다층 히트맵 시각화</li>
                    <li><strong>Bayesian CI:</strong> 95% 신뢰 구간으로 불확실성 정량화</li>
                    <li><strong>Hash Chain:</strong> 분석 과정 전체의 무결성 검증</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">📄 보고서 템플릿</div>
                <ul>
                    <li><strong>Standard (3-5 pages):</strong> 일반 사용자를 위한 요약 보고서</li>
                    <li><strong>Legal (10-20 pages):</strong> 법원 제출용 상세 포렌식 보고서</li>
                    <li><strong>Technical (15-30 pages):</strong> 기술 전문가를 위한 전체 분석 보고서</li>
                </ul>
                <div class="feature-tag-list">
                    <span class="feature-tag">SHAP</span>
                    <span class="feature-tag">Grad-CAM++</span>
                    <span class="feature-tag">Bayesian 95% CI</span>
                    <span class="feature-tag">Korea AI Basic Act Art.15</span>
                    <span class="feature-tag">Hash Chain Integrity</span>
                </div>
            </div>
        `
    },
    coverage: {
        icon: '🌍',
        title: '52 GenAI Tools Coverage',
        badge: '6 Categories · 44 Full + 8 Partial',
        content: `
            <div class="feature-highlight-box">
                <strong>52종 생성 AI 도구 대응.</strong> 6개 카테고리: Face Swap (12), Face Reenactment (8), Image Generation (10), Video Generation (10), Voice Generation (8), Lip Sync (4). 44종 완전 대응 + 8종 부분 대응.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">52</div>
                    <div class="feature-metric-label">대응 도구</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">44</div>
                    <div class="feature-metric-label">완전 대응</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">99.4%</div>
                    <div class="feature-metric-label">Top AUC (ProGAN)</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">📊 카테고리별 대응 현황</div>
                <ul>
                    <li><strong>Face Swap (12):</strong> DeepFaceLab, InsightFace, SimSwap, FaceSwap, Roop 등</li>
                    <li><strong>Face Reenactment (8):</strong> LivePortrait, First Order Motion 등</li>
                    <li><strong>Image Generation (10):</strong> Stable Diffusion, DALL-E 3, Midjourney 등</li>
                    <li><strong>Video Generation (10):</strong> Sora, Runway, Pika 등</li>
                    <li><strong>Voice Generation (8):</strong> ElevenLabs, Coqui xTTS, VALL-E 등</li>
                    <li><strong>Lip Sync (4):</strong> Wav2Lip, SadTalker 등</li>
                </ul>
                <div class="feature-tag-list">
                    <span class="feature-tag">ProGAN AUC 99.4%</span>
                    <span class="feature-tag">DeepFaceLab AUC 99.3%</span>
                    <span class="feature-tag">44 Full Coverage</span>
                    <span class="feature-tag">8 Partial Coverage</span>
                </div>
            </div>
        `
    },
    realtime: {
        icon: '⚡',
        title: 'Real-time Stream Detection',
        badge: 'WebRTC/RTSP · 500ms · 25-30 FPS',
        content: `
            <div class="feature-highlight-box">
                <strong>실시간 스트림 딥페이크 탐지.</strong> WebRTC/RTSP 입력, 500ms 레이턴시, 25-30 FPS (GPU RTX 4090, 1080p). 5단계 알림 시스템. 영상 통화, 방송, CCTV 모니터링 지원. 타임라인 뷰 + 신뢰도 시각화.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">500ms</div>
                    <div class="feature-metric-label">레이턴시</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">25-30</div>
                    <div class="feature-metric-label">FPS (RTX 4090)</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">5</div>
                    <div class="feature-metric-label">알림 레벨</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">📡 스트림 입력 방식</div>
                <ul>
                    <li><strong>WebRTC:</strong> 브라우저 기반 실시간 영상 통화 모니터링</li>
                    <li><strong>RTSP:</strong> CCTV, IP 카메라, 방송 스트림 수신</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🚨 5단계 알림 시스템</div>
                <p>탐지 신뢰도에 따라 5단계 알림을 제공합니다. 타임라인 뷰에서 신뢰도 변화를 실시간으로 시각화하며, 의심 구간을 즉시 하이라이트합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">WebRTC Input</span>
                    <span class="feature-tag">RTSP Input</span>
                    <span class="feature-tag">500ms Latency</span>
                    <span class="feature-tag">RTX 4090 1080p</span>
                    <span class="feature-tag">Timeline View</span>
                    <span class="feature-tag">Confidence Visualization</span>
                </div>
            </div>
        `
    },
    adag: {
        icon: '🛡️',
        title: 'ADAG Auto Red Team',
        badge: '4 Attacks · Auto Vulnerability Discovery',
        content: `
            <div class="feature-highlight-box">
                <strong>자동 레드팀 취약점 발견.</strong> 4가지 공격 유형: FGSM, PGD, C&W, DeepFool. 자동 취약점 발견 + 자동 보고서 생성 + 모델 재학습 파이프라인 연동. 공격자 이점을 방어자 이점으로 전환.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">4</div>
                    <div class="feature-metric-label">공격 유형</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">Auto</div>
                    <div class="feature-metric-label">취약점 발견</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">Auto</div>
                    <div class="feature-metric-label">보고서 생성</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">⚔️ 4대 공격 유형</div>
                <ul>
                    <li><strong>FGSM:</strong> Fast Gradient Sign Method — 단일 스텝 그래디언트 공격</li>
                    <li><strong>PGD:</strong> Projected Gradient Descent — 반복적 제한 교란 공격</li>
                    <li><strong>C&W:</strong> Carlini & Wagner — 최적화 기반 정밀 공격</li>
                    <li><strong>DeepFool:</strong> 최소 교란으로 결정 경계 이탈 공격</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔄 자동화 파이프라인</div>
                <div class="feature-flow">
                    <span class="feature-flow-step">Auto Attack</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Vulnerability Discovery</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Auto Report</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Model Retraining</span>
                </div>
                <div class="feature-tag-list">
                    <span class="feature-tag">FGSM</span>
                    <span class="feature-tag">PGD</span>
                    <span class="feature-tag">C&W</span>
                    <span class="feature-tag">DeepFool</span>
                    <span class="feature-tag">Attacker→Defender Advantage</span>
                </div>
            </div>
        `
    },
    proactive: {
        icon: '🔒',
        title: 'Proactive Defense',
        badge: 'Imperceptible Perturbation · 6 Target Models',
        content: `
            <div class="feature-highlight-box">
                <strong>비가시적 교란 주입으로 사전 방어.</strong> PSNR >=38dB, SSIM 0.99 수준의 비인지 교란. 6개 대상 모델: DeepFaceLab, InsightFace, LivePortrait, SimSwap, FaceSwap, Roop. 최대 100개 파일 배치 처리. ZIP 다운로드 지원.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">PSNR>=38dB</div>
                    <div class="feature-metric-label">비가시성 보장</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">6</div>
                    <div class="feature-metric-label">대상 모델</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">100</div>
                    <div class="feature-metric-label">배치 파일 수</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🎯 대상 모델</div>
                <ul>
                    <li><strong>DeepFaceLab</strong> — 가장 널리 사용되는 Face Swap 도구</li>
                    <li><strong>InsightFace</strong> — 고성능 얼굴 인식/교체 엔진</li>
                    <li><strong>LivePortrait</strong> — 실시간 포트레이트 애니메이션</li>
                    <li><strong>SimSwap</strong> — 단일 이미지 Face Swap</li>
                    <li><strong>FaceSwap</strong> — 오픈소스 딥페이크 도구</li>
                    <li><strong>Roop</strong> — 원클릭 Face Swap</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">⚙️ 처리 방식</div>
                <p>비가시적 교란을 이미지에 주입하여 딥페이크 생성 도구가 고품질 합성물을 만들 수 없게 합니다. PSNR >=38dB, SSIM 0.99로 육안으로 원본과 구분 불가합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">PSNR >=38dB</span>
                    <span class="feature-tag">SSIM 0.99</span>
                    <span class="feature-tag">Batch up to 100 files</span>
                    <span class="feature-tag">ZIP Download</span>
                    <span class="feature-tag">Imperceptible Perturbation</span>
                </div>
            </div>
        `
    }
};

const featureModal = document.getElementById('featureModal');
const featureModalClose = document.getElementById('featureModalClose');
const featureModalIcon = document.getElementById('featureModalIcon');
const featureModalTitle = document.getElementById('featureModalTitle');
const featureModalBadge = document.getElementById('featureModalBadge');
const featureModalBody = document.getElementById('featureModalBody');

function openFeatureModal(featureKey) {
    const data = featureModalData[featureKey];
    if (!data || !featureModal) return;
    featureModalIcon.textContent = data.icon;
    featureModalTitle.textContent = data.title;
    featureModalBadge.textContent = data.badge;
    featureModalBody.innerHTML = data.content;
    featureModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFeatureModal() {
    if (featureModal) {
        featureModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (featureModalClose) {
    featureModalClose.addEventListener('click', closeFeatureModal);
}

if (featureModal) {
    featureModal.addEventListener('click', (e) => {
        if (e.target === featureModal) closeFeatureModal();
    });
}

document.querySelectorAll('.diff-card[data-feature]').forEach(card => {
    card.addEventListener('click', () => {
        const key = card.getAttribute('data-feature');
        openFeatureModal(key);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && featureModal && featureModal.classList.contains('active')) {
        closeFeatureModal();
    }
});

// ========================================
// Console Welcome Message
// ========================================
console.log('%c\u{1F50D} TruthLens DeepFake Detection System', 'font-size: 20px; font-weight: bold; color: #4f91ff;');
console.log('%cPowered by 8-Framework Multi-Agent AI (LangGraph + CrewAI + AutoGen + DSPy + LlamaIndex + PydanticAI + Handoff + A2A)', 'font-size: 14px; color: #8b5cf6;');
console.log('%cVersion 3.0 | 38 Detection Modules | 12 CrewAI Experts | 52 Tools Coverage', 'font-size: 12px; color: #10b981;');
