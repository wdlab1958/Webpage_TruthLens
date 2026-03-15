# TruthLens v2.9.0 Introduction Webpage

> **TruthLens** - 차세대 멀티모달 에이전틱 AI 기반 딥페이크 탐지 시스템 소개 웹페이지

[![GitHub Pages](https://img.shields.io/badge/Live-GitHub%20Pages-blue?style=flat-square&logo=github)](https://wdlab1958.github.io/Webpage_TruthLens/)
[![License: WDLAB](https://img.shields.io/badge/License-WDLAB-blue.svg?style=flat-square)](https://github.com/wdlab1958/TruthLens)

**Live Demo**: [https://wdlab1958.github.io/Webpage_TruthLens/](https://wdlab1958.github.io/Webpage_TruthLens/)

---

## Overview

TruthLens v2.9.0 프로젝트의 기능과 아키텍처를 시각적으로 소개하는 **정적 웹페이지**입니다. 다크 테마 글래스 카드 디자인과 Three.js 3D 애니메이션을 활용하며, 한국어/영어 실시간 전환을 지원합니다.

### TruthLens란?

TruthLens는 **3중 멀티 에이전틱 AI 프레임워크**(LangGraph + CrewAI + AutoGen)와 **Ollama 로컬 LLM**을 결합하여 영상, 이미지, 오디오의 딥페이크를 탐지하는 시스템입니다.

- **LangGraph**: 17-노드 비동기 StateGraph 파이프라인 오케스트레이션
- **CrewAI**: 6인 전문가 합의 패널 (Visual/Audio/Bio/OCR/A-V Sync/Chief)
- **AutoGen**: 불확실 구간(0.35~0.65) 자동 적대적 토론 시스템
- **Ollama**: 100% 로컬 LLM/VLM 추론 (데이터 외부 전송 없음)

> TruthLens 본체 프로젝트: [https://github.com/wdlab1958/TruthLens](https://github.com/wdlab1958/TruthLens)

---

## What's New in v2.9.0

### MC Fusion Simulation + PDF 보고서 강화 + False Positive 수정

1. **MC Fusion Simulation** — 4가지 최적화 방법 (Grid Search, Bayesian/Optuna TPE, Differential Evolution, Monte Carlo) + Decision Engine 5가지 전략 + 신뢰도 5축 평가 (A~F 등급)
2. **PDF 보고서 관리 강화** — 서버 자동 저장, 이력 페이지 미리보기 모달
3. **분석 이력 CRUD 완성** — 추가/편집/삭제/전체삭제 + 관리자 CRUD
4. **XAI 보고서 개선** — 증거 기반 자연어 설명 강화, YouTube URL 썸네일 미리보기, False Positive 수정
5. **테스트: 67/67 PASS (100%)** — MC Fusion 13개 테스트 추가

---

## Screenshots

### Hero Section & 3D Animation
다크 테마 히어로 영역에 Three.js 기반 1000개 파티클 + 10개 기하학 도형 애니메이션이 렌더링됩니다.

### Dashboard Preview
React 대시보드의 13개 워크스페이스 페이지를 사이드바 내비게이션으로 전환하며 미리볼 수 있습니다.

### Language Switcher
네비게이션 바의 KO/EN 토글로 전체 페이지의 200개 이상 텍스트 요소가 실시간 전환됩니다.

---

## Page Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | 프로젝트 소개, 신뢰 배지 (67/67 Tests, 7 Modules, 15 Pages, 47 APIs), Three.js 3D 애니메이션 |
| 2 | **Core Differentiators** | 6대 핵심 차별화 요소 (생체신호 검증, 3중 AI, 프라이버시, XAI, ADAG Red Team, 실시간 처리) |
| 3 | **Triple Agentic AI** | LangGraph 파이프라인 시각화, CrewAI 6인 전문가 패널, AutoGen 적대적 토론 시스템 상세 설명 |
| 4 | **Dashboard Preview** | 인터랙티브 사이드바 + 13개 워크스페이스 페이지 (Analyze, BI, History, Agent Settings, AutoGen, LLM, ADAG, MC Fusion Sim, Admin, Organizations, API Keys, Settings, API Docs) |
| 5 | **7 Detection Modules** | Visual, Audio, Biological Signal, A/V Sync, OCR, Cross-Modal, Few-Shot 모듈 상세 + 가중치 융합 공식 |
| 6 | **Architecture & Tech Stack** | 4계층 아키텍처 다이어그램 (Frontend → Backend → AI Core → ML/CV) + 핵심 기술 스택 |
| 7 | **Statistics** | 주요 수치 카운트 애니메이션 (67 Tests, 7 Modules, 15 Pages, 47 APIs, 3 Frameworks, 100% Local) |
| 8 | **Quick Start** | 3단계 설치 가이드 (Clone, Ollama Models, Run Dashboard) |
| 9 | **Footer** | 제품 링크, 리소스, 기술 스택 정보, 저작권 |

---

## Features

### Bilingual Support (한국어 / English)
- `data-i18n` 속성 기반 국제화(i18n) 시스템
- 200개 이상 번역 키 (KO/EN)
- `localStorage`로 언어 설정 유지
- 기본 언어: **한국어**

### Interactive Dashboard Preview
- 13개 워크스페이스 페이지 전환
- 사이드바 클릭으로 실시간 페이지 스위칭
- 각 페이지별 실제 대시보드와 유사한 UI 미리보기
  - **Analyze**: 미디어 파일 드롭존, URL 입력, 분석 모드 선택
  - **BI Dashboard**: KPI 카드, 일별 요청 차트, 판정 분포
  - **History**: 분석 이력 테이블
  - **Agent Settings**: LangGraph 파이프라인 설정, 노드 활성화
  - **AutoGen Debate**: 토론 설정 (모델, 라운드, 모드, 임계값)
  - **LLM / Ollama**: 서버 URL, 모델 할당, 성능 파라미터
  - **ADAG Red Team**: 4개 공격 모듈 상태, 테스트 결과 메트릭
  - **MC Fusion Sim**: 4가지 최적화 방법 토글, Decision Engine, 최적화 가중치
  - **Admin**: 사용자 관리 테이블
  - **Organizations**: 조직 정보, 월별 할당량
  - **API Keys**: 키 관리
  - **Settings**: 언어, 프로필 설정
  - **API Docs**: SDK 코드 예제, 47개 엔드포인트 목록

### Technology Glossary
- 기술 용어 태그 클릭 시 모달 팝업으로 상세 설명 표시
- 16개 기술 항목: LangGraph, CrewAI, AutoGen, Ollama, rPPG, MFCC, ZCR, FFT, VLM, MediaPipe, CHROM, HeartPy, Librosa, Resemblyzer, PaddleOCR, Whisper, OpenCV, Proto-Net

### 3D Animation & Visual Effects
- **Three.js Hero Animation**: 1000개 별 파티클 + 10개 기하학 도형 + 마우스 패럴랙스
- **Glass Card Tilt Effect**: 카드 호버 시 3D 틸트 효과
- **Scroll Animations**: Intersection Observer 기반 fade-in 애니메이션
- **Counter Animation**: 통계 수치 카운트업 효과
- **Gradient & Glow Effects**: CSS 그라디언트 + 글로우 효과

---

## Project Structure

```
Webpage_TruthLens/
├── index.html           # 메인 HTML - 전체 페이지 구조 및 콘텐츠
├── styles.css           # CSS 스타일시트 (850+줄) - 다크 테마, 글래스 카드, 반응형
├── modal.css            # 용어 모달 스타일
├── script.js            # 핵심 인터랙션 스크립트
│                        #   - 스무스 스크롤, 모바일 메뉴
│                        #   - Intersection Observer (스크롤 애니메이션)
│                        #   - 대시보드 사이드바 네비게이션
│                        #   - 통계 카운터 애니메이션
│                        #   - 용어 모달 (클릭 이벤트)
├── animation3d.js       # Three.js 3D 애니메이션
│                        #   - HeroAnimation 클래스 (파티클, 도형, 패럴랙스)
│                        #   - CardTilt 클래스 (3D 틸트 효과)
├── i18n.js              # 국제화 시스템 (KO/EN)
│                        #   - 200+ 번역 키
│                        #   - applyLanguage() 함수
│                        #   - localStorage 언어 설정 유지
├── glossary.js          # 기술 용어 데이터 (16개 항목)
├── favicon.ico          # 파비콘 (16x16 ICO)
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Pages 자동 배포 워크플로우
└── README.md            # 이 문서
```

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Markup** | HTML5, Semantic HTML |
| **Styling** | CSS3 (CSS Variables, Grid, Flexbox, Glass-morphism, Gradients) |
| **3D Graphics** | Three.js r128 (WebGL, Particle System) |
| **Typography** | Google Fonts (Inter) |
| **i18n** | Custom `data-i18n` attribute system + `localStorage` |
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
- **Gradient Primary**: `linear-gradient(135deg, #4f91ff, #8b5cf6)` (블루→퍼플)
- **Glass Card**: `rgba(255,255,255,0.05)` 배경 + `blur(10px)` + `1px solid rgba(255,255,255,0.1)` 보더
- **Responsive**: 1024px / 768px / 480px 브레이크포인트 3단계 반응형

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

**배포 URL**: [https://wdlab1958.github.io/Webpage_TruthLens/](https://wdlab1958.github.io/Webpage_TruthLens/)

### Local Development

```bash
# 저장소 클론
git clone https://github.com/wdlab1958/Webpage_TruthLens.git
cd Webpage_TruthLens

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
| **TruthLens** | 멀티 에이전틱 AI 딥페이크 탐지 시스템 본체 | [github.com/wdlab1958/TruthLens](https://github.com/wdlab1958/TruthLens) |

---

## Content Source

이 웹페이지의 콘텐츠는 아래 문서를 기반으로 작성되었습니다:

- **TruthLens README.md** - 프로젝트 전체 기술 문서 (v2.9.0)
- **TruthLens_Users_Guide_Rev2.md** - React 대시보드 사용자 가이드 (15 페이지)

---

## License

WDLAB License

Copyright (c) 2024-2026 WDLAB / TruthLens Team

---

## Author

**A3 Security AITF Working Group**

- Editor: Brian Lee
- Version: 2.9.0
