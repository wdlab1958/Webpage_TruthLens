# TruthLens v4.4.0 Introduction Webpage

> **TruthLens** - 40개 독립 탐지 모듈, 8개 멀티 에이전트 AI 프레임워크, OWL 온톨로지 기반 차세대 멀티모달 딥페이크 탐지 플랫폼 소개 웹페이지

[![GitHub Pages](https://img.shields.io/badge/Live-GitHub%20Pages-blue?style=flat-square&logo=github)](https://wdlab1958.github.io/webpage_TruthLens/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**Live Demo**: [https://wdlab1958.github.io/webpage_TruthLens/](https://wdlab1958.github.io/webpage_TruthLens/)

---

## Overview

TruthLens v4.4.0 프로젝트의 전체 기능, 아키텍처, 170개 기능 구현 현황을 상세하게 소개하는 **정적 웹페이지**입니다. 다크 테마 글래스 카드 디자인과 Three.js 3D 애니메이션을 활용하며, 모든 카드를 클릭하면 모달 팝업으로 상세 정보를 확인할 수 있습니다.

### TruthLens란?

TruthLens는 영상, 음성, 이미지, 문서 등 다양한 형식의 미디어에 대해 AI 생성 또는 조작 여부를 자동으로 판별하는 **딥페이크 탐지 플랫폼**입니다.

- **40개 독립 탐지 모듈** - Visual 14 + Audio 5 + Bio 3 + Temporal 9 + Text 8 + T-GD Module #40
- **8개 멀티 에이전트 AI** - LangGraph, CrewAI, AutoGen, ADAG Red Team, A2A Protocol, DSPy, LlamaIndex RAG, Graph-of-Thought
- **OWL Ontology** - OWL 2.0 Turtle 기반 환각 최소화, SWRL 6개 규칙 (All PASS)
- **T-GD Enhanced Detection** - 500개 AI 생성 모델 DB, AUROC 95%+, LES 법적 증거력 산출
- **100% 로컬 처리** - Ollama 기반 LLM/VLM (minicpm-v:8b, Qwen2.5:7b)
- **한국 AI 기본법 제15조 준수** - XAI 시각화 + SHA-256 해시 체인 감사 로그
- **170/170 기능 구현 완료** (100% 구현률)

> TruthLens 본체 프로젝트: [https://github.com/wdlab1958/TruthLens](https://github.com/wdlab1958/TruthLens)

---

## Page Sections

| # | Section | Description | 모달 |
|---|---------|-------------|------|
| 1 | **Hero** | 프로젝트 소개, 신뢰 배지 (40 Modules, 170 Features, 8 Agents, OWL Ontology), Three.js 3D 애니메이션 | - |
| 2 | **Why DeepFake Detection** | 딥페이크 위협 현황, 340% 증가율, 500+ 모델 DB, 95%+ AUROC 통계 | - |
| 3 | **Core Differentiators** | 9대 핵심 차별화 요소 (40 Modules, 8 Agents, OWL Ontology, T-GD, Bio Signal, Privacy, XAI, ADAG, 3 Modes) | **9개 모달** |
| 4 | **40 Detection Modules** | 5개 섹션 + T-GD Module #40 전체 45개 카드 상세 | **45개 모달** |
| 5 | **8 Multi-Agent AI** | LangGraph 14-Node, CrewAI 12-Expert, AutoGen Debate 상세 + Framework #4~#8 카드 | **5개 모달** |
| 6 | **System Architecture** | Full-stack 아키텍처 다이어그램 (Frontend → Gateway → Backend → Infra) + Technology Stack 테이블 | - |
| 7 | **OWL Ontology System** | v4.4 NEW 10개 구성요소 + SWRL 6 Rules (All PASS) | - |
| 8 | **React Dashboard** | 10 Sections / 42 Workspaces 메뉴 구조, Verdict System (3-Class), Analysis Modes, Fusion Weights, User Roles | - |
| 9 | **Forensic & Compliance** | 8개 포렌식/컴플라이언스 도구 | **8개 모달** |
| 10 | **Platform Infrastructure** | API/Core/Gateway/Dashboard/SDK/DevOps 93개 기능 | **6개 모달** |
| 11 | **Document Downloads** | QR 코드 + 3종 PDF 다운로드 (User Guide, All Features, Full Package) | - |
| 12 | **v4.4.0 Changes** | v4.3.0 대비 +13 기능 (신규 10 + 개선 7) | **6개 모달** |
| 13 | **Footer** | A3 Security Co.,Ltd. 정보, Compliance, 저작권 | - |

**총 모달 수: 79개** (Core 9 + Modules 45 + Frameworks 5 + Forensic 8 + Platform 6 + Changes 6)

---

## Interactive Modal System

모든 주요 카드를 클릭하면 모달 팝업으로 상세 정보를 확인할 수 있습니다.

### 모달 지원 섹션

| Section | 카드 수 | 모달 ID 패턴 | 상세 내용 |
|---------|--------|-------------|---------|
| **Core Differentiators** | 9 | `modal-detection`, `modal-agents`, ... | PDF 기반 상세 설명, 기술 스택, 용어 해설 |
| **40 Detection Modules** | 45 | JavaScript 동적 생성 | 기능 개요, 화면 구성, 그래프 판독법, 파일 경로 |
| **Multi-Agent #4~#8** | 5 | `fw-modal-adag`, `fw-modal-a2a`, ... | 프레임워크별 아키텍처, 구성 요소, 활용 방식 |
| **Forensic & Compliance** | 8 | `fc-report`, `fc-fingerprint`, ... | 도구별 상세 기능, 화면 구성, 판독법 |
| **Platform Infrastructure** | 6 | `pf-api`, `pf-core`, ... | 모듈 번호, 파일 경로, 기술 스택 |
| **v4.4.0 Changes** | 6 | `ch-ontology`, `ch-vlm`, ... | 변경 전/후 비교, 영향 분석 |

### 모달 닫기 (3가지 방법)
- X 버튼 클릭
- 배경(backdrop) 클릭
- ESC 키

---

## QR Code & Document Downloads

AI Expo 2026 부스 방문자용 QR 코드 기반 문서 다운로드 시스템이 구현되어 있습니다.

### 다운로드 가능 문서

| 문서 | 파일명 | 내용 |
|------|--------|------|
| **User Guide** | `TruthLens_Guide_Rev4-1.pdf` | AI 기반 딥페이크 탐지 플랫폼 운영 매뉴얼 (Rev 4.1) |
| **All Features** | `40_TruthLens_All_Feature_rev2.pdf` | 전체 기능 목록 및 구현 상태 분석 — 170개 기능 |
| **Full Package** | `TruthLens_V4.4.pdf` | TruthLens v4.4 전체 패키지 문서 |

### QR 코드 동작 방식
- QR 코드(`QR_TruthLens.png`) 스캔 시 `#downloads` 해시로 자동 이동
- 사용자 confirm 대화상자로 승인 후 3개 PDF 순차 자동 다운로드
- 개별 다운로드 버튼도 제공

---

## Project Structure

```
webpage_TruthLens/
├── index.html              # 메인 HTML — 전체 페이지 구조, 79개 모달 포함
├── styles.css              # CSS 스타일시트 — 다크 테마, 글래스 카드, 반응형
├── modal.css               # 모달 시스템 전용 CSS (modal-overlay / modal-panel)
├── script.js               # 핵심 인터랙션 스크립트
│                           #   - 섹션별 staggered fade-in 애니메이션
│                           #   - 스무스 스크롤, 모바일 메뉴
│                           #   - 네비게이션 활성 상태 추적
├── module-modals.js        # 40 Detection Modules 모달 데이터 & 핸들러
│                           #   - 45개 모듈 상세 데이터 (한국어)
│                           #   - 동적 모달 생성 (단일 재사용 modal-overlay)
│                           #   - 자동 카드 바인딩 (data-module-id)
├── animation3d.js          # Three.js 3D 애니메이션
│                           #   - HeroAnimation (파티클, 도형, 패럴랙스)
│                           #   - CardTilt (3D 틸트 효과)
├── i18n.js                 # 국제화 시스템
├── glossary.js             # 기술 용어 데이터
├── QR_TruthLens.png        # QR 코드 이미지 (→ #downloads 해시)
├── TruthLens_Guide_Rev4-1.pdf    # 사용자 가이드 (Rev 4.1)
├── 40_TruthLens_All_Feature_rev2.pdf  # 전체 기능 목록 (Rev.2)
├── TruthLens_V4.4.pdf      # V4.4 전체 패키지 문서
├── favicon.ico             # 파비콘
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages 자동 배포 워크플로우
└── README.md               # 이 문서
```

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Markup** | HTML5, Semantic HTML |
| **Styling** | CSS3 (CSS Variables, Grid, Flexbox, Glass-morphism, Gradients) |
| **3D Graphics** | Three.js r128 (WebGL, Particle System) |
| **Typography** | Google Fonts (Inter) |
| **Modal System** | Vanilla JS — `modal-overlay` / `modal-panel` 구조, `glass-card` 비사용 |
| **Deployment** | GitHub Pages + GitHub Actions |

### External Dependencies

| Library | CDN | Purpose |
|---------|-----|---------|
| **Three.js** r128 | cdnjs | 3D Hero 애니메이션 (파티클, 기하 도형) |
| **Inter** (Google Fonts) | Google Fonts | 웹 폰트 |

> 별도 빌드 도구(Webpack, Vite 등) 없이 순수 HTML/CSS/JS로 구성된 정적 웹페이지입니다.

---

## Design System

### Color Palette

| Variable | Color | Usage |
|----------|-------|-------|
| `--color-nebula-navy` | `#0a0b0d` | 배경 |
| `--color-quantum-blue` | `#4f91ff` | 주요 강조색 |
| `--color-cosmic-purple` | `#8b5cf6` | 보조 강조색 |
| `--color-neon-emerald` | `#10b981` | 성공/REAL 판정 |
| `--color-warm-red` | `#ef4444` | 경고/FAKE 판정 |
| `--color-amber` | `#f59e0b` | 주의/UNCERTAIN 판정 |

### Design Principles
- **Dark Theme**: 다크 네이비 배경 위 글래스-모피즘 카드
- **Gradient Primary**: `linear-gradient(135deg, #4f91ff, #8b5cf6)` (블루 → 퍼플)
- **Glass Card**: `rgba(255,255,255,0.05)` 배경 + `blur(10px)` + 보더
- **Modal Panel**: `#12131a` 배경 (glass-card 비사용) — overflow/backdrop-filter 충돌 방지
- **Responsive**: 1024px / 768px / 480px 브레이크포인트 3단계 반응형

---

## Modal Architecture

### 문제 해결 이력

기존 `glass-card` 클래스를 모달 콘텐츠에 사용하면 다음 문제가 발생:

| 문제 | 원인 | 해결 |
|------|------|------|
| 화면 프리징 | `glass-card`의 `overflow: hidden`이 모달 스크롤 차단 | 전용 `modal-panel` 클래스 사용 |
| 스크롤 잠금 | `body.style.overflow = 'hidden'` 설정 후 모달 미표시 | `overflow` 미설정, 모달 자체 `position: fixed`로 처리 |
| 렌더링 병목 | 모달 + glass-card 이중 `backdrop-filter: blur()` | 모달에서 backdrop-filter 제거 |
| 모달 미표시 | `modal.css` link 누락 | `<head>`에 `modal.css` link 추가 |

### 최종 구조

```
.modal-overlay          — display:none → display:flex (class="open")
  └── .modal-panel      — #12131a 배경, 독립 스타일 (glass-card 비사용)
        ├── .modal-close — X 버튼
        ├── .modal-header — 아이콘 + 타이틀
        └── .modal-body  — 상세 콘텐츠
```

---

## Content Sources

이 웹페이지의 콘텐츠는 아래 문서를 기반으로 작성되었습니다:

| 문서 | 버전 | 내용 |
|------|------|------|
| **TruthLens_Guide_Rev4-1.pdf** | Rev 4.1 (2026-04-14) | v4.4 사용자 가이드 — 13개 섹션, 판정 기준 및 해석 가이드 |
| **40_TruthLens_All_Feature_rev2.pdf** | Rev.2 (2026-04-14) | 전체 기능 목록 — 170개 기능, 10개 섹션, 12개 하위 분류, 구현 상태 분석 |

---

## Deployment

### GitHub Pages (자동 배포)

`main` 브랜치에 push하면 GitHub Actions 워크플로우가 자동으로 GitHub Pages에 배포합니다.

```yaml
# .github/workflows/deploy.yml
on:
  push:
    branches: ["main"]
```

**배포 URL**: [https://wdlab1958.github.io/webpage_TruthLens/](https://wdlab1958.github.io/webpage_TruthLens/)

### Local Development

```bash
# 저장소 클론
git clone https://github.com/wdlab1958/webpage_TruthLens.git
cd webpage_TruthLens

# 로컬 서버 실행 (Python)
python3 -m http.server 8080

# 또는 Node.js
npx serve .
```

브라우저에서 `http://localhost:8080` 접속

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | Full |
| Firefox 90+ | Full |
| Safari 15+ | Full |
| Edge 90+ | Full |
| Mobile Chrome/Safari | Responsive |

> WebGL 지원이 필요합니다 (Three.js 3D 애니메이션). WebGL 미지원 브라우저에서는 3D 애니메이션 없이 콘텐츠만 표시됩니다.

---

## Related Projects

| Project | Description | Link |
|---------|-------------|------|
| **TruthLens** | 멀티 에이전트 AI 딥페이크 탐지 시스템 본체 | [github.com/wdlab1958/TruthLens](https://github.com/wdlab1958/TruthLens) |

---

## License

MIT License

Copyright (c) 2024-2026 A3 Security Co.,Ltd. TruthLens DeepFake Detection System

---

## Author

**A3 Security Co.,Ltd. — AI R&D Center**

- Editor: Brian Lee
- System Version: TruthLens v4.4.0
- Document Version: Rev 4.1 (2026-04-14)
- Webpage Updated: 2026-04-15
