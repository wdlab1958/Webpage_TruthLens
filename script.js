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
        badge: 'v4.0 · 8 Phase · 적응형 라우터',
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
        title: 'CrewAI — 6인 전문가 에이전트 합의',
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
                <strong>왜 React + Vite인가?</strong> 딥페이크 분석은 17개 노드가 비동기로 실행되며 결과가 실시간으로 스트리밍됩니다. React의 상태 관리와 컴포넌트 모델은 이 동적 데이터 흐름을 UI에 즉각 반영하는 데 최적이며, Vite의 HMR로 개발 생산성도 극대화했습니다.
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
                    <div class="feature-metric-value">5개</div>
                    <div class="feature-metric-label">대시보드 페이지</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🎯 도입 이유</div>
                <ul>
                    <li><strong>실시간 상태 반영:</strong> LangGraph 노드 완료 이벤트를 WebSocket으로 수신하여 분석 진행 상황을 실시간 시각화</li>
                    <li><strong>컴포넌트 재사용:</strong> 7개 탐지 모듈 결과 카드, 신뢰도 게이지, 증거 타임라인 등 복잡한 UI를 독립 컴포넌트로 관리</li>
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
                    <li><strong>분석 대시보드:</strong> 7개 모듈 점수 레이더 차트, 가중치 퓨전 수식 실시간 계산 표시</li>
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
                    <div class="feature-metric-value">89/89</div>
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
                    <span class="feature-tag">pytest 89 tests</span>
                    <span class="feature-tag">Docker Compose</span>
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
        title: '공간 분석 (Spatial Analysis)',
        badge: 'Phase 1 · 7 modules · CNN+ViT+Foundation',
        content: `
            <div class="feature-highlight-box">
                <strong>GAN 지문, 압축 아티팩트, 얼굴 조작 흔적</strong>을 다층 분석합니다. VLM(Vision Language Model)이 픽셀 수준의 이상 징후를 자연어로 설명하며, FFT로 주파수 도메인 위변조 패턴을 검출합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">25%</div>
                    <div class="feature-metric-label">융합 가중치</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">98.2%</div>
                    <div class="feature-metric-label">GAN 아티팩트 검출률</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">4K</div>
                    <div class="feature-metric-label">최대 해상도 지원</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔬 GAN 지문 분석</div>
                <p>GAN(Generative Adversarial Network)으로 생성된 영상에는 생성기 아키텍처에 따른 고유 지문이 주파수 도메인에 남습니다. FFT(Fast Fourier Transform)로 이 패턴을 검출합니다.</p>
                <div class="feature-flow">
                    <span class="feature-flow-step">프레임 추출</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">FFT 변환</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">주파수 패턴 분석</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">GAN 지문 매칭</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🖼️ 압축 아티팩트 & 블록 경계 검출</div>
                <p>딥페이크 합성 후 JPEG/MP4 재압축 과정에서 생기는 특유의 블로킹 아티팩트, 링잉 현상, 색상 경계 불연속을 Error Level Analysis(ELA)와 블록 DCT 분석으로 검출합니다.</p>
                <ul>
                    <li><strong>ELA (Error Level Analysis):</strong> 재압축 수준 차이로 조작 영역 시각화</li>
                    <li><strong>DCT 계수 분석:</strong> 8×8 블록 단위 이산 코사인 변환 통계 이상 탐지</li>
                    <li><strong>PRNU 분석:</strong> 카메라 센서 고유 노이즈 패턴으로 원본 판별</li>
                    <li><strong>Copy-Move 검출:</strong> 동일 영역 복사-붙여넣기 조작 탐지</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🤖 VLM 시각 언어 모델 분석</div>
                <p>Ollama 기반 로컬 VLM(LLaVA, Qwen2-VL 등)이 이미지를 보고 자연어로 이상 징후를 설명합니다. "눈 주변 피부 텍스처가 인공적으로 매끄럽다", "목선 경계에 블러 처리 흔적" 등의 구체적 증거를 생성합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">LLaVA-1.6-34B</span>
                    <span class="feature-tag">Qwen2-VL-7B</span>
                    <span class="feature-tag">InternVL2</span>
                    <span class="feature-tag">GradCAM 히트맵</span>
                    <span class="feature-tag">CLIP 임베딩 유사도</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">👤 얼굴 조작 탐지</div>
                <p>FaceSwap, FaceRig, DeepFaceLab 등의 도구로 생성된 얼굴 합성 흔적을 탐지합니다. 얼굴 경계 블러, 조명 불일치, 3D 포즈 불자연스러움을 분석합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">EfficientNet-B4</span>
                    <span class="feature-tag">Xception</span>
                    <span class="feature-tag">FaceForensics++ 학습</span>
                    <span class="feature-tag">SBI (Self-Blended Images)</span>
                    <span class="feature-tag">LSDA 어텐션</span>
                </div>
            </div>
        `
    },
    audio: {
        icon: '🎵',
        title: '오디오 분석 (Audio Analysis)',
        badge: 'Weight: 20% · MFCC · ZCR · Librosa',
        content: `
            <div class="feature-highlight-box">
                <strong>TTS 음성 합성 및 보이스 클로닝 탐지</strong>에 특화된 스펙트럼 분석 모듈입니다. MFCC, ZCR, 스펙트럼 플럭스 등 다차원 음향 특징으로 인공 음성을 판별합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">20%</div>
                    <div class="feature-metric-label">융합 가중치</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">96.5%</div>
                    <div class="feature-metric-label">TTS 탐지 정확도</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">40+</div>
                    <div class="feature-metric-label">음향 특징 차원</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🎙️ MFCC 기반 특징 분석</div>
                <p>Mel-Frequency Cepstral Coefficients(MFCC)는 인간 청각 지각에 기반한 음성 특징입니다. TTS/클로닝 음성은 자연 발화와 다른 MFCC 분포를 보이며, 이를 딥러닝 분류기로 판별합니다.</p>
                <div class="feature-flow">
                    <span class="feature-flow-step">오디오 추출</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">STFT 변환</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Mel 필터뱅크</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">MFCC 추출</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">이상 판별</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">📊 다차원 스펙트럼 특징</div>
                <ul>
                    <li><strong>ZCR (Zero Crossing Rate):</strong> 파형의 영점 교차 빈도로 음성 vs 무음 구간, 유성음/무성음 분류</li>
                    <li><strong>스펙트럼 센트로이드:</strong> 주파수 분포의 무게 중심으로 음색 밝기 측정</li>
                    <li><strong>스펙트럼 플럭스:</strong> 연속 프레임 간 스펙트럼 변화량으로 음성 자연성 평가</li>
                    <li><strong>Chroma 특징:</strong> 12개 피치 클래스 에너지 분포로 발성 패턴 분석</li>
                    <li><strong>RMS 에너지:</strong> 발화 에너지 동적 범위로 인공 음성 균일성 탐지</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔊 보이스 클로닝 탐지</div>
                <p>ElevenLabs, VALL-E, YourTTS 등 최신 보이스 클로닝 도구로 생성된 음성의 고유 아티팩트를 탐지합니다. 화자 임베딩 일관성과 프로소디(억양, 리듬) 자연성을 분석합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">WaveRNN 패턴</span>
                    <span class="feature-tag">HiFi-GAN 지문</span>
                    <span class="feature-tag">SpeakerNet 임베딩</span>
                    <span class="feature-tag">Prosody 분석</span>
                    <span class="feature-tag">Librosa 2.0</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🎛️ 처리 파이프라인</div>
                <div class="feature-flow">
                    <span class="feature-flow-step">16kHz 리샘플링</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">노이즈 제거</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">VAD 음성 구간 검출</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">특징 추출</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">앙상블 분류</span>
                </div>
            </div>
        `
    },
    bio: {
        icon: '💜',
        title: '생체신호 분석 (Biological Signal)',
        badge: 'Weight: 30% (최고) · MediaPipe · CHROM · HeartPy',
        content: `
            <div class="feature-highlight-box">
                <strong>가중치 30% — 7개 모듈 중 최고 신뢰도</strong>. rPPG 심박수 추출과 눈 깜빡임 패턴 분석으로 생리학적으로 불가능한 패턴을 검출합니다. 딥페이크 위조가 가장 어려운 영역입니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">30%</div>
                    <div class="feature-metric-label">융합 가중치 (최고)</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">99.1%</div>
                    <div class="feature-metric-label">rPPG 검출 정확도</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">97.8%</div>
                    <div class="feature-metric-label">깜빡임 분석 정확도</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">💓 rPPG 원격 심박수 추출 (CHROM 알고리즘)</div>
                <p>CHROM(Chrominance-based rPPG) 알고리즘은 피부 픽셀의 RGB 색상 변화에서 혈류 맥동 신호를 추출합니다. 실제 인간 피부는 심장 박동에 따라 미세한 색 변화를 보이지만, 딥페이크는 이를 재현하지 못합니다.</p>
                <div class="feature-flow">
                    <span class="feature-flow-step">얼굴 ROI 추적</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">RGB 시계열 추출</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">CHROM 분리</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">BPM 산출</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">이상 판정</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">👁️ MediaPipe 눈 깜빡임 분석</div>
                <p>MediaPipe FaceMesh의 468개 랜드마크로 EAR(Eye Aspect Ratio)를 실시간 계산합니다. 정상 인간(분당 15~20회, 150~400ms)에서 벗어나는 패턴이 딥페이크의 주요 증거입니다.</p>
                <ul>
                    <li><strong>EAR 임계값:</strong> 0.25 이하를 깜빡임으로 판정, 연속 3프레임 기준</li>
                    <li><strong>자연성 점수:</strong> 깜빡임 간격, 지속시간, 속도 곡선의 종합 평가</li>
                    <li><strong>홍채 반사:</strong> 양안 반사광 일관성으로 CG 생성 눈 판별</li>
                    <li><strong>시선 방향:</strong> 두 눈의 시선 벡터 일치성 검증</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🫀 HeartPy 신호 품질 평가</div>
                <p>HeartPy 라이브러리로 추출된 rPPG 신호의 품질과 생리학적 타당성을 검증합니다. 정상 범위(40~180 BPM)를 벗어나거나 심박 변이도(HRV) 패턴이 비정상적인 경우 딥페이크로 판정합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">HRV 분석</span>
                    <span class="feature-tag">SDNN/RMSSD</span>
                    <span class="feature-tag">Poincaré 플롯</span>
                    <span class="feature-tag">주파수 도메인 HRV</span>
                    <span class="feature-tag">LF/HF 비율</span>
                </div>
            </div>
        `
    },
    avsync: {
        icon: '👄',
        title: 'A/V 동기화 검증 (Audio-Visual Sync)',
        badge: 'Weight: 15% · Resemblyzer · MediaPipe',
        content: `
            <div class="feature-highlight-box">
                <strong>입술 움직임과 음성의 시간적 동기화</strong>를 정밀 검증합니다. 딥페이크는 얼굴 교체 후 음성-입술 타이밍이 어긋나거나, 화자 특성이 불일치하는 경우가 많습니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">15%</div>
                    <div class="feature-metric-label">융합 가중치</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">±33ms</div>
                    <div class="feature-metric-label">동기화 허용 오차</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">95.3%</div>
                    <div class="feature-metric-label">립싱크 불일치 탐지율</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">👄 립싱크 검증</div>
                <p>MediaPipe FaceMesh로 입술 68개 랜드마크를 추적하여 음소(phoneme) 발화 타이밍과 입술 모양 변화의 동기화를 검증합니다. SYNCNET 기반 오디오-비주얼 동기화 점수를 산출합니다.</p>
                <div class="feature-flow">
                    <span class="feature-flow-step">음소 타임라인 추출</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">입술 동작 추적</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">시간 정렬 검증</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">동기화 점수</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔊 Resemblyzer 화자 일관성 검증</div>
                <p>Resemblyzer의 256차원 화자 임베딩으로 영상 전체에서 동일 화자의 음성이 일관되게 유지되는지 검증합니다. 음성 교체(Voice Swap) 딥페이크를 효과적으로 탐지합니다.</p>
                <ul>
                    <li><strong>화자 임베딩:</strong> 30초 단위 슬라이딩 윈도우로 임베딩 추출 후 코사인 유사도 비교</li>
                    <li><strong>화자 변화점 검출:</strong> 갑작스러운 임베딩 드리프트로 음성 교체 시점 특정</li>
                    <li><strong>감정 일관성:</strong> 얼굴 표정과 음성 감정 톤의 일치성 평가</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🎬 영상-음성 메타데이터 검증</div>
                <p>컨테이너 레벨에서 비디오 트랙과 오디오 트랙의 타임스탬프 일관성, 인코딩 파라미터 일치성을 검증합니다. 사후 편집 흔적을 메타데이터에서 탐지합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">FFmpeg 메타 분석</span>
                    <span class="feature-tag">PTS/DTS 검증</span>
                    <span class="feature-tag">코덱 불일치 탐지</span>
                    <span class="feature-tag">SyncNet-v2</span>
                    <span class="feature-tag">DTW 시계열 정렬</span>
                </div>
            </div>
        `
    },
    ocr: {
        icon: '📝',
        title: 'OCR / 문서 위변조 탐지 (OCR/Document)',
        badge: 'Weight: 10% · PaddleOCR',
        content: `
            <div class="feature-highlight-box">
                <strong>자막 조작, 문서 위변조, 텍스트 일관성</strong>을 분석합니다. 영상 내 텍스트(자막, 화면 속 문서, 현수막 등)의 조작 흔적을 OCR로 탐지하고, 맥락 불일치를 LLM으로 검증합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">10%</div>
                    <div class="feature-metric-label">융합 가중치</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">98.7%</div>
                    <div class="feature-metric-label">OCR 인식 정확도</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">100+</div>
                    <div class="feature-metric-label">지원 언어</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">📖 PaddleOCR 텍스트 인식</div>
                <p>PaddleOCR의 PP-OCRv4 엔진으로 영상 내 모든 텍스트를 추출합니다. 한국어, 영어, 중국어 등 100개 이상 언어를 지원하며, 기울어진 텍스트와 곡면 텍스트도 인식합니다.</p>
                <div class="feature-flow">
                    <span class="feature-flow-step">텍스트 영역 탐지</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">문자 인식</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">신뢰도 점수</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">맥락 검증</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">✂️ 자막 & 텍스트 조작 탐지</div>
                <ul>
                    <li><strong>폰트 불일치:</strong> 동일 장면 내 폰트 종류, 크기, 굵기 갑작스러운 변화 탐지</li>
                    <li><strong>렌더링 아티팩트:</strong> 합성 텍스트의 경계 블러, 해상도 불일치, 그림자 방향 오류</li>
                    <li><strong>시간적 일관성:</strong> 프레임 간 텍스트 내용의 비자연스러운 변화 탐지</li>
                    <li><strong>맥락 불일치:</strong> LLM으로 텍스트 내용의 논리적 일관성 검증</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">📄 문서 위변조 검증</div>
                <p>화면에 등장하는 공문서, 신분증, 증명서 등의 위변조를 탐지합니다. 공식 양식의 레이아웃 일관성, 인장/서명 위치, QR코드 유효성을 검증합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">PP-OCRv4</span>
                    <span class="feature-tag">PaddleDetection</span>
                    <span class="feature-tag">레이아웃 파서</span>
                    <span class="feature-tag">LLM 맥락 검증</span>
                    <span class="feature-tag">QR/바코드 검증</span>
                </div>
            </div>
        `
    },
    crossmodal: {
        icon: '🔄',
        title: '크로스모달 일관성 (Cross-Modal Consistency)',
        badge: 'Auxiliary · Whisper STT',
        content: `
            <div class="feature-highlight-box">
                <strong>Whisper 음성 전사 + 시각 맥락 비교</strong> — 음성에서 전사한 텍스트와 영상의 시각적 맥락(자막, 배경, 인물) 간의 의미적 일관성을 LLM으로 분석합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">보조</div>
                    <div class="feature-metric-label">역할 (Auxiliary)</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">99개</div>
                    <div class="feature-metric-label">Whisper 지원 언어</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">WER 3.0%</div>
                    <div class="feature-metric-label">음성 인식 오류율</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🗣️ Whisper 자동 음성 인식 (ASR)</div>
                <p>OpenAI Whisper large-v3 모델로 영상의 음성을 고정밀 텍스트로 전사합니다. 단어별 타임스탬프와 신뢰도 점수를 포함하며, 다국어 및 방언도 처리합니다.</p>
                <div class="feature-flow">
                    <span class="feature-flow-step">오디오 분리</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Whisper 전사</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">타임스탬프 정렬</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">시각 맥락 추출</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">LLM 일관성 검증</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🧩 크로스모달 이상 탐지 패턴</div>
                <ul>
                    <li><strong>발언-표정 불일치:</strong> 긍정적 발언 중 부정적 표정 등 감정 모달 불일치</li>
                    <li><strong>발언-배경 불일치:</strong> 말하는 내용과 배경 장소/환경이 논리적으로 모순</li>
                    <li><strong>발언-자막 불일치:</strong> 음성 전사 내용과 화면 자막 내용 불일치</li>
                    <li><strong>화자 전환 탐지:</strong> 입술 움직임 없는 발화, 여러 화자 음성 혼합</li>
                    <li><strong>타임라인 이상:</strong> 발언 내용과 실제 사건 시간순 모순</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔗 LLM 기반 의미 일관성 분석</div>
                <p>Ollama 로컬 LLM이 전사된 텍스트와 VLM이 추출한 시각 컨텍스트를 통합하여 전체 영상의 의미적 일관성을 심층 분석합니다. 정치인 딥페이크, 가짜 뉴스 영상 탐지에 특히 효과적입니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">Whisper large-v3</span>
                    <span class="feature-tag">faster-whisper</span>
                    <span class="feature-tag">감정 분석 NLP</span>
                    <span class="feature-tag">언어 모델 추론</span>
                    <span class="feature-tag">다국어 지원</span>
                </div>
            </div>
        `
    },
    fewshot: {
        icon: '🧠',
        title: '퓨샷 학습 탐지 (Few-Shot Learning)',
        badge: 'Auxiliary · Prototypical Networks',
        content: `
            <div class="feature-highlight-box">
                <strong>신규 딥페이크 기법 즉각 대응</strong> — Prototypical Networks 기반 퓨샷 학습으로 3~5개의 샘플만으로도 새로운 유형의 딥페이크를 탐지합니다. 기존 데이터셋에 없는 미지의 공격에 대한 제로데이 방어 능력을 제공합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">보조</div>
                    <div class="feature-metric-label">역할 (Auxiliary)</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">3~5장</div>
                    <div class="feature-metric-label">필요 샘플 수</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">89.4%</div>
                    <div class="feature-metric-label">신규 유형 탐지 정확도</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔬 Prototypical Networks 원리</div>
                <p>클래스 프로토타입(평균 임베딩)과의 거리를 기반으로 분류합니다. 기존 딥페이크 데이터셋으로 학습된 임베딩 공간에서 새로운 공격 유형의 프로토타입을 소수의 샘플로 즉시 구성합니다.</p>
                <div class="feature-flow">
                    <span class="feature-flow-step">서포트 셋 인코딩</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">프로토타입 계산</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">쿼리 임베딩</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">거리 기반 분류</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🎯 N-way K-shot 학습 설정</div>
                <ul>
                    <li><strong>5-way 1-shot:</strong> 5개 딥페이크 유형, 각 1개 샘플로 즉시 분류</li>
                    <li><strong>5-way 5-shot:</strong> 5개 샘플로 89.4% 탐지 정확도 달성</li>
                    <li><strong>Zero-shot:</strong> 텍스트 설명만으로 새 공격 유형 탐지 (CLIP 기반)</li>
                    <li><strong>Online 학습:</strong> 실시간 피드백으로 프로토타입 지속 업데이트</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🚀 대응 가능 신규 공격 유형</div>
                <p>현재까지 알려지지 않은 생성 AI 기반 딥페이크 기법에 빠르게 적응합니다. ADAG 레드팀과 연계하여 새로운 공격이 발견될 때마다 자동으로 프로토타입을 갱신합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">Sora 기반 영상</span>
                    <span class="feature-tag">신규 GAN 아키텍처</span>
                    <span class="feature-tag">확산 모델 기반 얼굴</span>
                    <span class="feature-tag">NeRF 아바타</span>
                    <span class="feature-tag">실시간 딥페이크</span>
                    <span class="feature-tag">Proto-Net + MAML</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔗 메타러닝 기반 빠른 적응</div>
                <p>MAML(Model-Agnostic Meta-Learning)과 결합하여 새로운 딥페이크 유형에 대해 5~10번의 그래디언트 업데이트만으로 적응합니다. ADAG 레드팀이 새 공격을 발견하면 자동으로 퓨샷 학습 파이프라인에 투입됩니다.</p>
            </div>
        `
    },
    // v4.0 new module keys (compact entries for new detection phase categories)
    dm: { icon: '🎨', title: 'DM 탐지 (Diffusion Model Detection)', badge: 'Phase 2 · 5 modules · DIRE/SeDID/DiffFake', content: `<div class="feature-highlight-box"><strong>Diffusion Model 전용 탐지 엔진.</strong> DIRE/DistilDIRE 재구성 오류 분석, SeDID 단계별 디노이징 오류, DiffusionFake 역생성 추적으로 Stable Diffusion, DALL-E 3, Midjourney, Sora 등 15종+ DM 기반 도구를 96%+ 탐지합니다.</div><div class="feature-section"><div class="feature-section-title">🔬 핵심 모듈</div><ul><li><strong>DIRE</strong> — 사전학습 DM으로 재구성 후 원본 대비 오류 패턴 분석</li><li><strong>DistilDIRE</strong> — 지식 증류 기반 3.2배 속도 향상 경량 버전</li><li><strong>SeDID</strong> — 각 타임스텝별 통계적 오류 분포 분석</li><li><strong>DiffusionFake</strong> — 역생성 과정 추적으로 ID 혼합도 판별</li><li><strong>소스 분류</strong> — Real→Synthetic→GAN/DM→구체 모델명 3단계 추정</li></ul></div>` },
    temporal: { icon: '⏱️', title: '시간/생체 분석 (Temporal & Biological)', badge: 'Phase 3 · 8 modules · VideoMAE/rPPG v2/FACS', content: `<div class="feature-highlight-box"><strong>비디오 시간축 + 생체 신호 분석.</strong> VideoMAE, TALL, 광학 흐름, LipForensics로 시간적 불일치를 탐지하고, rPPG v2 4-ROI, FACS 46 AU 미세표정, 6DoF 머리포즈 역학으로 생리학적 불가능 패턴을 검출합니다.</div><div class="feature-section"><div class="feature-section-title">🧬 생체 분석 (v2 확장)</div><ul><li><strong>rPPG v2</strong> — CHROM+POS 이중 알고리즘, 이마/양볼/턱 4개 ROI 독립 분석</li><li><strong>FACS</strong> — 46개 Action Unit 기반 미세표정(0.04~0.2초) 탐지</li><li><strong>머리 포즈</strong> — 6DoF 물리적 관성 검증</li><li><strong>VideoMAE</strong> — Masked Autoencoder 기반 시공간 패턴</li><li><strong>LipForensics</strong> — 립싱크 10~50ms 미세 시간차 탐지 (95%+ Wav2Lip)</li></ul></div>` },
    audiomod: { icon: '🎵', title: '오디오 포렌식 (Audio Forensics)', badge: 'Phase 4 · 6 modules · SSL/AASIST/Vocoder', content: `<div class="feature-highlight-box"><strong>음성 복제 6종 전용 탐지.</strong> SSL(Wav2Vec2/HuBERT/WavLM) + AASIST/RawNet2 원시 파형 분석 + 12종 보코더 핑거프린팅으로 xTTS, OpenVoice, VALL-E 등을 탐지합니다.</div><div class="feature-section"><div class="feature-section-title">🎤 핵심 모듈</div><ul><li><strong>SSL 탐지</strong> — Wav2Vec2/HuBERT/WavLM 사전학습 음성 표현 (EER 0.42% 목표)</li><li><strong>AASIST</strong> — 그래프 주의 기반 ASVspoof 5 호환 스푸핑 탐지</li><li><strong>보코더 식별</strong> — 12종 보코더(WaveGlow, HiFi-GAN 등) 핑거프린트 매칭</li><li><strong>SAFF</strong> — 음성-영상 시간적 정합성 98%+ 정확도</li></ul></div>` },
    defense: { icon: '🛡️', title: '적대적 방어 (Adversarial Defense)', badge: 'Phase 5 · 3 modules · 3-Class/ProactDef/DeepRev', content: `<div class="feature-highlight-box"><strong>공격자 우위를 방어자 우위로 전환.</strong> 3-Class 분류(Real/Fake/Anti-Forensic)로 탐지 회피 시도를 별도 식별하고, 사전 방어 교란으로 딥페이크 생성 품질을 80% 저하시키며, DeepReversion으로 원본 얼굴을 역추적합니다.</div><div class="feature-section"><div class="feature-section-title">🔰 핵심 모듈</div><ul><li><strong>3-Class 분류</strong> — Anti-Forensic 탐지 시 자동 강화 분석 모드</li><li><strong>사전 방어 교란</strong> — 비가시 교란 주입으로 Face Swap 품질 붕괴 유도</li><li><strong>DeepReversion</strong> — 원본 인물 얼굴 복원 (프라이버시 보호 모드 기본)</li></ul></div>` },
    xaimod: { icon: '⚖️', title: 'XAI & 출처 인증', badge: 'Phase 6 · 5 modules · SHAP/Grad-CAM++/C2PA', content: `<div class="feature-highlight-box"><strong>법적 증거 수준의 설명 가능성.</strong> SHAP 기여도 분석 + Grad-CAM++ 히트맵 + 베이지안 불확실성 정량화로 법원에서 활용 가능한 포렌식 보고서를 자동 생성합니다.</div><div class="feature-section"><div class="feature-section-title">⚖️ 핵심 모듈</div><ul><li><strong>SHAP</strong> — 각 모듈별 판정 기여도 폭포 차트</li><li><strong>Grad-CAM++</strong> — CNN+ViT+DM 다층 히트맵 시각화</li><li><strong>C2PA v2.2</strong> — 콘텐츠 출처 메타데이터 검증</li><li><strong>SynthID</strong> — Google AI 생성물 워터마크 탐지</li><li><strong>pHash</strong> — 핑거프린트 DB로 재배포/변형 실시간 탐지</li></ul></div>` },
    realtimemod: { icon: '⚡', title: '실시간 & 엣지 (Real-time & Edge)', badge: 'Phase 7 · 3 modules · WebRTC/<500ms/TensorRT', content: `<div class="feature-highlight-box"><strong>Deep-Live-Cam 등 실시간 딥페이크에 대응.</strong> WebRTC로 비디오 스트림을 수신하여 500ms 이내 탐지. 적응형 4단계 라우터, TensorRT/ONNX 모델 증류로 엣지 배포를 지원합니다.</div><div class="feature-section"><div class="feature-section-title">⚡ 핵심 모듈</div><ul><li><strong>WebRTC 파이프라인</strong> — 라이브 스트림 수신 + 경량 모델 체인</li><li><strong>적응형 라우터</strong> — 해상도/FPS/오디오 기반 분석 모드 자동 선택</li><li><strong>모델 증류</strong> — Teacher→Student, INT8/FP16 양자화</li><li><strong>동시 스트림</strong> — 24GB GPU: 4개, 48GB GPU: 8개+</li></ul></div>` },
    threatmod: { icon: '🌍', title: '위협 인텔리전스 (Threat Intelligence)', badge: 'Phase 8 · Integration · 52 Tools Matrix', content: `<div class="feature-highlight-box"><strong>52종 생성 도구별 위협 현황 매트릭스.</strong> Face Swap 12종, Reenactment 8종, Lip-Sync 7종, DM 이미지 8종, DM 비디오 5종, GAN 6종, Voice Clone 6종에 대한 38개 탐지 모듈 대응 현황을 시각화합니다.</div><div class="feature-section"><div class="feature-section-title">📊 대응 현황</div><ul><li><strong>완전 대응 44종 (84.6%)</strong> — 95%+ 탐지 가능</li><li><strong>부분 대응 8종 (15.4%)</strong> — 비공개 상용 (Sora, ElevenLabs 등)</li><li><strong>미대응 0종 (0.0%)</strong></li><li><strong>트렌드 분석</strong> — 30일간 생성 도구별 탐지 분포 시계열</li></ul></div>` }
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
    bio: {
        icon: '💜',
        title: '생체신호 검증 (Biological Signal Verification)',
        badge: 'Most Reliable Evidence',
        content: `
            <div class="feature-highlight-box">
                딥페이크 영상에서 <strong>생리학적으로 불가능한 패턴</strong>을 검출하는 가장 신뢰도 높은 증거. 실제 사람의 생체 반응은 위조가 극히 어렵습니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">99.1%</div>
                    <div class="feature-metric-label">rPPG 검출 정확도</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">97.8%</div>
                    <div class="feature-metric-label">눈 깜빡임 분석 정확도</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">96.3%</div>
                    <div class="feature-metric-label">미세표정 감지 정확도</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">💓 rPPG 심박수 추출</div>
                <p>원격 광용적맥파(Remote Photoplethysmography) 기술로 카메라만으로 피부 색상 미세 변화를 분석해 심박수를 실시간 추출합니다. 딥페이크 영상은 혈류 변화를 재현하지 못해 비정상적인 심박 패턴이 검출됩니다.</p>
                <div class="feature-flow">
                    <span class="feature-flow-step">피부 ROI 추출</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">RGB 채널 분석</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">FFT 주파수 분리</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">BPM 산출</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">이상 감지</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">👁️ 눈 깜빡임 패턴 분석</div>
                <p>정상 인간의 눈 깜빡임 빈도(분당 15~20회)와 지속 시간(150~400ms)을 기준으로, 딥페이크에서 흔히 나타나는 비자연적 깜빡임 패턴, 눈 가장자리 블러, 홍채 반사 불일치를 감지합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">EAR (Eye Aspect Ratio)</span>
                    <span class="feature-tag">Landmark 68점</span>
                    <span class="feature-tag">Dlib / MediaPipe</span>
                    <span class="feature-tag">Temporal Consistency</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">😮 미세표정 & 생체 불일치 감지</div>
                <p>Action Unit(AU) 분석으로 자연스러운 감정 표현과 딥페이크 특유의 경직된 표정 전환을 구분합니다. 피부 텍스처 변동, 조명 반사 불일치, 머리카락 경계 아티팩트도 함께 분석합니다.</p>
                <ul>
                    <li><strong>AU 분석:</strong> OpenFace 기반 43개 Action Unit 실시간 추적</li>
                    <li><strong>피부 텍스처:</strong> LBP(Local Binary Pattern) 미세 패턴 비교</li>
                    <li><strong>조명 일관성:</strong> 노멀 맵 기반 3D 조명 방향 검증</li>
                    <li><strong>두부 동작:</strong> 3DMM 헤드 포즈 추정으로 자연스러움 평가</li>
                </ul>
            </div>
        `
    },
    triple: {
        icon: '🤖',
        title: '트리플 에이전틱 AI (Triple Agentic AI)',
        badge: '3 AI Frameworks in Synergy',
        content: `
            <div class="feature-highlight-box">
                <strong>LangGraph + CrewAI + AutoGen</strong> — 세 개의 독립적인 AI 프레임워크가 협력하여 단일 시스템으로는 달성 불가능한 수준의 탐지 정확도를 구현합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">17</div>
                    <div class="feature-metric-label">LangGraph 노드 수</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">6</div>
                    <div class="feature-metric-label">CrewAI 전문가 에이전트</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">4</div>
                    <div class="feature-metric-label">AutoGen 토론 라운드</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔷 LangGraph — 워크플로우 오케스트레이션</div>
                <p>17노드 비동기 StateGraph 파이프라인으로 전체 분석 흐름을 지휘합니다. <code>Send()</code> 병렬 디스패치로 5개 분석 노드가 동시 실행되어 처리 속도가 극대화됩니다.</p>
                <div class="feature-flow">
                    <span class="feature-flow-step">입력 전처리</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Send() 분기</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">5노드 병렬 분석</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">결과 집계</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">최종 판정</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔶 CrewAI — 6인 전문가 합의</div>
                <p>6명의 전문화된 AI 에이전트가 각자의 도메인에서 독립적으로 분석 후 합의를 도출합니다. 단독 판단보다 훨씬 강건한 결과를 보장합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">🔬 생체신호 전문가</span>
                    <span class="feature-tag">🖼️ 시각 아티팩트 전문가</span>
                    <span class="feature-tag">🔉 오디오-비주얼 전문가</span>
                    <span class="feature-tag">🧠 딥러닝 특징 전문가</span>
                    <span class="feature-tag">📊 통계 패턴 전문가</span>
                    <span class="feature-tag">⚖️ 최종 판정 에이전트</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔴 AutoGen — 적대적 토론</div>
                <p>탐지 에이전트(Blue Team)와 반박 에이전트(Red Team)가 4라운드 토론을 통해 판정을 검증합니다. 이 과정에서 허위 양성(False Positive)과 허위 음성(False Negative)을 대폭 감소시킵니다.</p>
                <ul>
                    <li><strong>Round 1:</strong> Blue Team 초기 판정 제시</li>
                    <li><strong>Round 2:</strong> Red Team 반증 시도</li>
                    <li><strong>Round 3:</strong> Blue Team 방어 + 추가 증거</li>
                    <li><strong>Round 4:</strong> 중재 에이전트 최종 합의</li>
                </ul>
            </div>
        `
    },
    privacy: {
        icon: '🔒',
        title: '프라이버시 보장 (Privacy Guaranteed)',
        badge: '100% Local Processing',
        content: `
            <div class="feature-highlight-box">
                <strong>Ollama 기반 완전 로컬 처리</strong> — 분석 대상 데이터가 단 한 바이트도 외부 서버로 전송되지 않습니다. 민감한 개인 영상, 기업 기밀 자료도 안전하게 분석 가능합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">0</div>
                    <div class="feature-metric-label">외부 API 호출</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">100%</div>
                    <div class="feature-metric-label">로컬 추론</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">GDPR</div>
                    <div class="feature-metric-label">규정 준수</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🖥️ Ollama 로컬 LLM/VLM 추론</div>
                <p>모든 언어 모델 추론이 사용자 로컬 환경에서 실행됩니다. 인터넷 연결 없이도 완전한 분석이 가능하며, 에어갭(Air-gap) 환경에서도 운용 가능합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">Llama 3.2-Vision</span>
                    <span class="feature-tag">LLaVA-1.6</span>
                    <span class="feature-tag">Mistral-7B</span>
                    <span class="feature-tag">Qwen2-VL</span>
                    <span class="feature-tag">Gemma-2</span>
                    <span class="feature-tag">Custom GGUF</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🛡️ 보안 아키텍처</div>
                <ul>
                    <li><strong>제로 트랜스퍼:</strong> 영상 데이터는 로컬 메모리에서만 처리, 네트워크 경유 없음</li>
                    <li><strong>임시 파일 암호화:</strong> 분석 중 생성되는 임시 파일은 AES-256 암호화</li>
                    <li><strong>메모리 자동 해제:</strong> 분석 완료 후 모든 버퍼 즉시 초기화</li>
                    <li><strong>감사 로그:</strong> 접근 기록만 로컬 저장, 원본 데이터 미포함</li>
                    <li><strong>컨테이너 격리:</strong> Docker 기반 샌드박스 실행 환경</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">📋 규정 준수 & 인증</div>
                <p>데이터가 사용자 환경을 벗어나지 않으므로 다양한 개인정보 보호 규정을 자동으로 준수합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">EU GDPR</span>
                    <span class="feature-tag">한국 개인정보보호법</span>
                    <span class="feature-tag">HIPAA 호환</span>
                    <span class="feature-tag">ISO 27001 지원</span>
                    <span class="feature-tag">NIST AI RMF</span>
                </div>
            </div>
        `
    },
    xai: {
        icon: '💡',
        title: '설명 가능한 AI (Explainable AI / XAI)',
        badge: 'Evidence Chain & Transparency',
        content: `
            <div class="feature-highlight-box">
                <strong>"왜 딥페이크인가?"</strong> — 모든 판정에는 LLM이 생성한 상세 근거와 증거 체인이 포함됩니다. 블랙박스가 아닌, 인간이 검토 가능한 투명한 AI 판정입니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">5+</div>
                    <div class="feature-metric-label">증거 항목/판정</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">GradCAM</div>
                    <div class="feature-metric-label">시각적 근거 맵</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">3단계</div>
                    <div class="feature-metric-label">신뢰도 레벨</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔗 증거 체인 (Evidence Chain)</div>
                <p>단순 확률값이 아닌, 탐지에 기여한 각 요소와 그 가중치를 순차적으로 나열합니다. 법적 증거나 감사 목적으로도 활용 가능한 구조화된 리포트를 제공합니다.</p>
                <div class="feature-flow">
                    <span class="feature-flow-step">생체신호 이상</span>
                    <span class="feature-flow-arrow">+</span>
                    <span class="feature-flow-step">시각 아티팩트</span>
                    <span class="feature-flow-arrow">+</span>
                    <span class="feature-flow-step">오디오 불일치</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">종합 판정</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🗺️ GradCAM 시각화</div>
                <p>CNN 기반 탐지기의 판단 근거를 열지도(Heatmap)로 시각화합니다. 딥페이크 흔적이 가장 강하게 감지된 영상 영역을 직관적으로 표시합니다.</p>
                <ul>
                    <li><strong>Grad-CAM:</strong> 마지막 컨볼루션 레이어 그래디언트 기반</li>
                    <li><strong>Eigen-CAM:</strong> PCA 기반 다중 채널 시각화</li>
                    <li><strong>Score-CAM:</strong> 채널 가중치 기반 활성화 맵</li>
                    <li><strong>LIME / SHAP:</strong> 픽셀 단위 기여도 분석</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">📝 LLM 자연어 설명 생성</div>
                <p>Ollama 로컬 LLM이 기술적 분석 결과를 일반인도 이해 가능한 자연어 보고서로 변환합니다. 전문가용 상세 보고서와 요약본을 동시에 제공합니다.</p>
                <div class="feature-tag-list">
                    <span class="feature-tag">한국어 지원</span>
                    <span class="feature-tag">영어 지원</span>
                    <span class="feature-tag">JSON 구조화 출력</span>
                    <span class="feature-tag">PDF 리포트 내보내기</span>
                    <span class="feature-tag">HITL 검토 인터페이스</span>
                </div>
            </div>
        `
    },
    adag: {
        icon: '🛡️',
        title: 'ADAG 레드팀 (Adversarial Defense Agentic Guard)',
        badge: '4 Attack Modules · Red-Blue Team',
        content: `
            <div class="feature-highlight-box">
                <strong>공격으로 방어를 단련한다</strong> — 4가지 적대적 공격 모듈이 탐지 시스템을 지속적으로 시험하고, Red-Blue Team 피드백 루프가 탐지 모델을 자동 강화합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">4</div>
                    <div class="feature-metric-label">공격 모듈</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">∞</div>
                    <div class="feature-metric-label">피드백 루프</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">Auto</div>
                    <div class="feature-metric-label">자동 강화 학습</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">⚔️ 4대 공격 모듈</div>
                <ul>
                    <li><strong>Module 1 — Adversarial Perturbation:</strong> PGD, FGSM, C&W 기반 픽셀 단위 교란으로 탐지 회피 시도. ε=0.03 수준의 불가시 노이즈 생성</li>
                    <li><strong>Module 2 — GAN 기반 강화 딥페이크:</strong> StyleGAN3, FaceSwap-DF 기반으로 최신 딥페이크 생성 후 탐지 취약점 발견</li>
                    <li><strong>Module 3 — 압축 & 후처리 우회:</strong> JPEG 재압축, 색조 조정, 블러 처리로 아티팩트 은폐 후 탐지 성능 평가</li>
                    <li><strong>Module 4 — 시간적 일관성 공격:</strong> 프레임 간 생체신호 패턴을 조작해 rPPG 탐지를 우회하는 고급 공격</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🔄 Red-Blue Team 피드백 루프</div>
                <div class="feature-flow">
                    <span class="feature-flow-step">Red Team 공격</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Blue Team 탐지</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">취약점 분석</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">모델 재학습</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">강화 배포</span>
                </div>
                <p style="margin-top:0.8rem;">이 루프는 완전 자동화되어 새로운 딥페이크 기법이 등장할 때마다 즉시 대응 능력을 갱신합니다.</p>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">📈 강건성 벤치마크</div>
                <div class="feature-tag-list">
                    <span class="feature-tag">FaceForensics++ 평가</span>
                    <span class="feature-tag">DFDC 데이터셋</span>
                    <span class="feature-tag">Celeb-DF v2</span>
                    <span class="feature-tag">WildDeepfake</span>
                    <span class="feature-tag">교차 데이터셋 검증</span>
                </div>
            </div>
        `
    },
    realtime: {
        icon: '⚡',
        title: '실시간 처리 (Real-time Processing)',
        badge: '60% Faster · Async Architecture',
        content: `
            <div class="feature-highlight-box">
                <strong>Send() 병렬 디스패치 + 비동기 아키텍처</strong> — 기존 순차 처리 대비 60% 속도 향상. MemorySaver 체크포인트로 장애 복구까지 보장합니다.
            </div>

            <div class="feature-metrics">
                <div class="feature-metric">
                    <div class="feature-metric-value">60%</div>
                    <div class="feature-metric-label">처리 속도 향상</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">5노드</div>
                    <div class="feature-metric-label">동시 병렬 실행</div>
                </div>
                <div class="feature-metric">
                    <div class="feature-metric-value">&lt;2s</div>
                    <div class="feature-metric-label">이미지 분석 레이턴시</div>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">🚀 Send() 병렬 디스패치</div>
                <p>LangGraph의 <code>Send()</code> API를 사용해 5개의 독립 분석 노드를 동시에 실행합니다. 기존 순차 처리(약 12초)를 병렬화하여 평균 분석 시간을 5초 이하로 단축합니다.</p>
                <div class="feature-flow">
                    <span class="feature-flow-step">입력 수신</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">Send() 분기</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">5노드 동시 실행</span>
                    <span class="feature-flow-arrow">→</span>
                    <span class="feature-flow-step">결과 병합</span>
                </div>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">💾 MemorySaver 체크포인트</div>
                <p>분석 파이프라인의 각 단계를 자동으로 체크포인트에 저장합니다. 네트워크 오류, 모델 타임아웃 등 장애 발생 시 마지막 성공 지점부터 자동 재시작합니다.</p>
                <ul>
                    <li><strong>자동 저장:</strong> 각 LangGraph 노드 완료 시 상태 스냅샷 저장</li>
                    <li><strong>장애 복구:</strong> 최대 3회 자동 재시도, 실패 시 부분 결과 반환</li>
                    <li><strong>상태 직렬화:</strong> MessageState를 JSON으로 직렬화하여 영속화</li>
                    <li><strong>Human-in-the-Loop:</strong> 불확실 구간에서 인간 검토자에게 자동 에스컬레이션</li>
                </ul>
            </div>

            <div class="feature-section">
                <div class="feature-section-title">⚙️ 비동기 아키텍처 스택</div>
                <div class="feature-tag-list">
                    <span class="feature-tag">Python asyncio</span>
                    <span class="feature-tag">aiohttp</span>
                    <span class="feature-tag">LangGraph async</span>
                    <span class="feature-tag">FastAPI</span>
                    <span class="feature-tag">WebSocket 스트리밍</span>
                    <span class="feature-tag">Redis 캐시</span>
                    <span class="feature-tag">Celery 작업 큐</span>
                </div>
            </div>
        `
    },
    // v4.0 new feature keys
    multiagent: { icon: '🤖', title: '8중 멀티 에이전트 AI', badge: '8 Frameworks · 12 Experts · 38 Nodes', content: `<div class="feature-highlight-box"><strong>8개 AI 프레임워크가 협업하여 38개 탐지 노드와 12명 전문가를 오케스트레이션합니다.</strong></div><div class="feature-section"><div class="feature-section-title">🔧 프레임워크 구성</div><ul><li><strong>LangGraph</strong> — 38-노드 파이프라인 오케스트레이션, 8 Phase 적응형 라우터</li><li><strong>CrewAI</strong> — 12명 전문가 합의 판정 (기존 6 + 신규 6)</li><li><strong>AutoGen</strong> — 9-에이전트 적대적 토론 (도메인별 검찰/변호)</li><li><strong>DSPy</strong> — 에이전트 프롬프트 자동 최적화 (정확도 85%→95%)</li><li><strong>LlamaIndex</strong> — 52종 도구 RAG 위협 인텔리전스</li><li><strong>Handoff Router</strong> — I/O 가드레일 + 할루시네이션 탐지</li><li><strong>PydanticAI</strong> — 타입 안전 구조화 출력 (파싱 100%)</li><li><strong>A2A Protocol</strong> — 분산 에이전트 통신 + 외부 AI 연동</li></ul></div>` },
    dm: { icon: '🎨', title: 'Diffusion Model 탐지', badge: '15+ DM Tools · 96%+ Detection', content: `<div class="feature-highlight-box"><strong>v2.x의 최대 사각지대였던 DM 기반 생성물에 대한 전용 탐지 엔진.</strong> Stable Diffusion, DALL-E 3, Midjourney, Sora 등 15종+ DM 도구를 96%+ 탐지합니다.</div><div class="feature-section"><div class="feature-section-title">🔬 탐지 기법</div><ul><li><strong>DIRE</strong> — 사전학습 DM으로 이미지 재구성 후 오류 패턴 분석</li><li><strong>DistilDIRE</strong> — 3.2배 속도 향상 경량 버전 (12GB GPU)</li><li><strong>SeDID</strong> — 디노이징 단계별 통계적 오류 분포 분석</li><li><strong>DiffusionFake</strong> — DM+Face Swap 하이브리드 역생성 추적</li><li><strong>3단계 소스 추정</strong> — Real/Synthetic → GAN/DM → 구체적 모델명</li></ul></div>` },
    audio: { icon: '🎵', title: '오디오 포렌식 엔진', badge: '6 Voice Clones · 12 Vocoders', content: `<div class="feature-highlight-box"><strong>v2.x에서 전혀 대응하지 못하였던 음성 복제 6종에 대한 전용 탐지.</strong> Coqui xTTS, OpenVoice, Tortoise, VALL-E, Bark, ElevenLabs를 탐지합니다.</div><div class="feature-section"><div class="feature-section-title">🎤 탐지 모듈</div><ul><li><strong>SSL</strong> — Wav2Vec2/HuBERT/WavLM 사전학습 음성 표현 (EER 0.42%)</li><li><strong>E2E</strong> — AASIST/RawNet2 원시 파형 직접 분석</li><li><strong>보코더 식별</strong> — 12종 보코더 핑거프린트 → TTS 시스템 역추적</li><li><strong>SAFF</strong> — 음성-영상 정합성 98%+ 정확도 분석</li></ul></div>` }
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
console.log('%cVersion 4.0 | 38 Detection Modules | 12 CrewAI Experts | 52 Tools Coverage', 'font-size: 12px; color: #10b981;');
