# webpage_TruthLens 감사 보고서 (2026-05-31)

## 개요

본 문서는 `/home/ubuntu-02/ai_project/webpage_TruthLens` 프로젝트에 대한 읽기 전용·증거 기반 감사 결과이다. 대상은 정적(static) 웹 페이지로, 빌드 도구나 서버 사이드 구성 요소가 없다.

- 스택(확인): 순수 HTML/CSS/JavaScript 정적 사이트. `package.json` 없음, 번들러·프레임워크 없음. 배포는 GitHub Pages(`.github/workflows/deploy.yml`, `actions/deploy-pages@v4`)로 루트(`path: '.'`)를 그대로 업로드한다.
- 주요 파일(확인):
  - `index.html` (약 181KB, 진입점)
  - CSS: `styles.css`, `modal.css`
  - JS(로드됨): `animation3d.js`, `script.js`, `module-modals.js`
  - JS(미로드/고아): `i18n.js`, `glossary.js`
  - 정적 자산: `favicon.ico`, `QR_TruthLens.png`, PDF 3종(`TruthLens_Guide_Rev4-1.pdf`, `40_TruthLens_All_Feature_rev2.pdf`, `TruthLens_V4.4.pdf` — Git LFS 추적)
  - 문서: `README.md`
- `.git/` 및 디렉터리명은 변경하지 않았다.

## 실행·테스트 결과

- JS 구문 검사(확인): `node --check`를 5개 JS 파일 전체에 대해 실행, 모두 OK(구문 오류 없음).
  - `animation3d.js`, `glossary.js`, `i18n.js`, `module-modals.js`, `script.js`
- HTML 구조(확인): `div`(open 619/close 619), `section`(12/12), `span`(265/265) 태그 개폐 균형 일치. 단, 정규식 기반 근사 검사이므로 완전한 파서 검증은 아니다(추정 보강 필요 없음 수준).
- 로컬 자산/링크 참조(확인): `index.html` 내 모든 로컬 `src`/`href` 대상 파일이 실제로 존재한다.
  - `favicon.ico`, `styles.css`, `modal.css`, `QR_TruthLens.png`, PDF 3종, `animation3d.js`, `script.js`, `module-modals.js` → 전부 존재(MISSING 없음).
- DOM 훅 일치(확인): `script.js`/`module-modals.js`가 의존하는 핵심 요소 존재 확인.
  - `.nav-container`(1), `#mobileMenuToggle`(1), `#navMenu`(1), `#detection-modules`(1), `.module-card`(45) 모두 존재.
- 외부 링크(확인): `http://`(비 HTTPS) 하드코딩 링크 없음 → 혼합 콘텐츠 위험 없음.
- 브라우저 런타임 콘솔 에러는 실제 브라우저로 실행하지 않았으므로 정적 분석 기반(추정)이다.

## 발견된 문제점 (확인 vs 추정, 심각도)

### 1. `i18n.js` 미사용(고아 파일) — 확인 / 심각도: 낮음
- 근거: `index.html` 및 어느 JS에서도 `i18n.js`를 `<script>`로 로드하지 않음(`grep` 결과 참조 0건). 또한 `i18n.js`의 `applyLanguage()`가 요구하는 `data-i18n` 속성이 `index.html`에 0개 존재.
- 영향: 다국어(i18n) 기능이 실제로 동작하지 않음. 페이지 내 "i18next" 언급은 제품 설명 텍스트일 뿐 기능과 무관. 런타임 오류는 유발하지 않음(파일이 로드되지 않으므로).

### 2. `glossary.js` 미사용 + 용어집 모달 데드 코드 — 확인 / 심각도: 낮음
- 근거:
  - `glossary.js`(전역 `glossaryData` 정의)가 `index.html`에서 로드되지 않음(참조 0건).
  - `script.js`(약 200~243행)의 용어집 모달 로직이 의존하는 DOM 요소가 현재 HTML에 전무: `#glossaryModal`(0), `#modalClose`(0), `#modalTitle`(0), `#modalIcon`(0), `#modalBody`(0), `.tag`(0).
- 영향: 용어집 클릭 모달 기능이 동작하지 않음. 다만 `script.js`가 `if (element)` 및 `typeof glossaryData !== 'undefined'` 가드로 보호되어 있어 런타임 예외는 발생하지 않음(확인).
- 추정 원인: v4.4.0 대규모 개편 커밋(`53aa1f9`)에서 해당 HTML 요소가 제거되었으나 `script.js` 핸들러와 `glossary.js`/`i18n.js`가 잔존.

### 3. 브랜드 스크럽 무결성 — 확인 / 심각도: 해당 없음(문제 없음)
- 잔여 브랜드 문자열 검색(대소문자 무시: `wdlab`, `WDLAB@2023-2026`, `wdlab`, `WDLAB@2023-2026`, `wdlab`, `wdlab`) 결과 0건(확인, exit code 1 = no match).
- 일반 `\ba3\b` 토큰도 0건. 보존 대상 `A3DE`/`A3-ADE`는 본문에 등장하지 않음(원래 없던 것으로 보임, 추정).
- 치환 대상 `WDLAB@2023-2026`는 `index.html`(3), `README.md`(3), `script.js`(1), `i18n.js`(2)에 정상 적용. 깨진 텍스트(예: 단어 중간 치환으로 인한 비문)는 발견되지 않음.

## 조치한 내용

- 코드/콘텐츠 수정 없음.
- 사유: 브랜드 스크럽 잔여물이 0건으로, 저위험 수정(브랜드 치환) 대상이 존재하지 않았다. 발견된 다른 문제(고아 파일·데드 코드)는 런타임 오류를 일으키지 않으며, 파일 삭제/핸들러 제거는 의도된 정리인지 불명확하여 임의 변경 대신 아래 "권고"로 남긴다.

## 미해결·위험 항목

- (권고, 저위험) `i18n.js`, `glossary.js`는 현재 어디에서도 로드되지 않는 고아 파일이다. 향후 다국어/용어집 기능을 복원할 계획이 없다면 두 파일과 `script.js`의 용어집 모달 블록(약 200~243행)을 제거하여 코드와 실제 동작을 일치시킬 것을 권고. 즉시 위험은 없으므로 본 감사에서는 변경하지 않았다.
- (정보) 배포 워크플로는 루트 전체(`path: '.'`)를 업로드하므로 159MB `TruthLens_V4.4.pdf`(LFS)와 미사용 JS도 함께 게시된다. 대용량 PDF는 페이지 로드와 무관(직접 다운로드 링크)하나 저장소/대역폭 측면 참고.
- (한계) 실제 브라우저 렌더링·콘솔 런타임 검증은 수행하지 않았다(읽기 전용·서버 미기동 원칙). 콘솔 무오류는 정적 분석 기반 추정이다.

## 종합 판단

정적 사이트로서 구조적 무결성은 양호하다. 모든 JS가 구문 검사를 통과(확인)하고, 로드되는 자산·링크 참조가 모두 실재하며(확인), 의존 DOM 훅이 존재한다(확인). 브랜드 스크럽은 잔여물 0건으로 완전하다(확인). 발견된 문제는 두 건의 고아 파일과 그에 연동된 데드 코드(용어집·i18n)로, 모두 가드 처리되어 런타임 오류를 유발하지 않는 저위험 정리 대상이다. 배포·표시에 지장을 주는 결함은 확인되지 않았다.
