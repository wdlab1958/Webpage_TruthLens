// ========================================
// Module Detail Modal — Data & Handler
// ========================================
(function () {
    'use strict';

    var D = {
        "1": {
            icon: "\uD83D\uDC41\uFE0F", title: "ViT Detector",
            file: "detectors/vit_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>비전 트랜스포머(Vision Transformer, ViT) 모델을 활용하여 이미지의 조작 흔적을 탐지합니다. ViT는 이미지를 작은 패치로 분할한 뒤 트랜스포머의 어텐션 메커니즘으로 파악하는 최신 아키텍처로, <strong>Swin-V2, CrossViT, TIMM</strong> 세 가지 ViT 변형 모델의 결과를 앙상블하여 탐지 정확도를 높입니다.</p>' +
                '<h3>화면 구성</h3><ul><li><strong>모델별 점수:</strong> Swin-V2 Score, CrossViT Score, TIMM Score, Ensemble Score</li>' +
                '<li><strong>어텐션 히트맵:</strong> 모델이 주목한 영역을 색상으로 표시 (파란색=정상, 빨간색=의심)</li>' +
                '<li><strong>조작 영역:</strong> 감지된 조작 의심 영역의 위치와 이상 점수</li></ul>' +
                '<h3>그래프 판독법</h3><p>어텐션 히트맵에서 빨간색이 얼굴 경계부, 머리카락-이마 경계, 턱선 주변에 집중되어 있으면 페이스스왑의 전형적인 패턴입니다. 세 모델의 앙상블 점수가 0.7 이상이면서 히트맵의 의심 영역이 일치하면 판정의 신뢰도가 매우 높습니다. 세 모델 간 점수 편차가 크면 해당 이미지에 대한 추가 전문가 검토가 필요합니다.</p>'
        },
        "2": {
            icon: "\uD83D\uDD2C", title: "DIRE Detector",
            file: "detectors/dire_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>Diffusion Reconstruction Error 기반 탐지. 확산 모델은 노이즈에서 시작하여 점진적으로 이미지를 복원하는 방식으로 동작하며, 이 과정에서 고유한 통계적 패턴(DIRE)이 내재됩니다. TruthLens는 이 패턴을 3단계 파이프라인(스크리닝 → 고속 → 정밀)으로 분석 깊이를 높여 탐지합니다.</p>' +
                '<h3>용어 해설</h3><ul><li><strong>확산 모델(Diffusion Model)</strong> — 이미지를 점진적으로 생성하는 AI 기법. Stable Diffusion, DALL-E 등이 대표적</li>' +
                '<li><strong>DIRE</strong> — Diffusion Reconstruction Error. 확산 모델이 남기는 고유한 오차 패턴을 탐지하는 기법</li>' +
                '<li><strong>스크리닝(Screening)</strong> — 대량의 이미지를 빠르게 1차 필터링하는 과정</li></ul>'
        },
        "3": {
            icon: "\uD83C\uDFA8", title: "Diffusion Fake Detector",
            file: "detectors/diffusion_fake_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>Stable Diffusion, Midjourney, DALL-E 등 확산 모델(Diffusion Model)로 생성된 이미지를 전문적으로 탐지합니다.</p>' +
                '<p>3단계 파이프라인으로 분석 깊이를 조절합니다:</p><ul>' +
                '<li><strong>스크리닝</strong> — 대량의 이미지를 빠르게 1차 필터링</li>' +
                '<li><strong>고속</strong> — 의심 이미지에 대한 중간 수준 분석</li>' +
                '<li><strong>정밀</strong> — 최고 정확도의 심층 분석</li></ul>' +
                '<p>DM 확률 점수가 0.7 이상이면 확산 모델 생성 의심도가 높고, 스테이지별 점수가 단계를 거칠수록 상승하는 패턴은 위조 가능성이 높은 신호입니다. 0.3~0.7 구간은 판단 유보 구간으로, 반드시 ViT 분석 및 주파수 분석 결과와 교차 검증이 필요합니다.</p>'
        },
        "4": {
            icon: "\uD83C\uDFAF", title: "DM Detection Orchestrator",
            file: "detectors/dm_detection_orchestrator.py", status: "done",
            body: '<h3>기능 개요</h3><p>Diffusion Model 3단계 파이프라인 오케스트레이터. 스크리닝에서 정밀 분석까지 자동으로 분석 깊이를 조절합니다. 각 단계의 결과에 따라 다음 단계로의 진행 여부를 자동 결정하여 불필요한 연산을 줄이고 필요한 경우에만 깊은 분석을 수행합니다.</p>' +
                '<h3>탐지 결과 카드</h3><ul><li>각 분석 건에 대한 판정, 신뢰도, 소요 시간</li><li>DM 확률 점수: 확산 모델로 생성되었을 확률 (0~1)</li><li>스테이지별 결과: 스크리닝/고속/정밀 각 단계의 점수</li></ul>'
        },
        "5": {
            icon: "\uD83E\uDDEA", title: "SeDID Detector",
            file: "detectors/sedid_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>Semantic Denoising Error 기반 탐지. 의미론적 노이즈 제거 과정의 오류 패턴을 분석하여 AI 생성 콘텐츠를 식별합니다. 확산 모델의 디노이징 과정에서 발생하는 의미론적 오류를 탐지하여 DIRE와 상호 보완적으로 작동합니다.</p>'
        },
        "6": {
            icon: "\uD83D\uDD0D", title: "Blending Boundary Detector",
            file: "detectors/blending_boundary_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>얼굴을 합성할 때 생기는 경계면의 부자연스러움을 탐지합니다. LAA(Learned Adaptive Attention) 기법으로 경계면의 이상 패턴을 감지하고, Poisson 블렌딩 알고리즘의 수학적 흔적을 역추적합니다. 색상 및 조명 불일치 점수를 교차 분석하여 조잡한 딥페이크와 정교한 딥페이크를 모두 탐지합니다.</p>' +
                '<h3>화면 구성</h3><ul>' +
                '<li><strong>LAA 점수:</strong> Learned Adaptive Attention — 학습된 적응적 주의력 점수</li>' +
                '<li><strong>Poisson 점수:</strong> 푸아송 블렌딩 흔적 점수</li>' +
                '<li><strong>색상 불일치:</strong> 합성된 얼굴과 원본 배경 사이의 색감 차이</li>' +
                '<li><strong>조명 불일치:</strong> 얼굴과 배경의 조명 방향 차이</li></ul>' +
                '<h3>그래프 판독법</h3><p>LAA 점수와 Poisson 점수가 동시에 0.6 이상이면 합성 경계가 존재할 가능성이 매우 높습니다. 색상·조명 불일치는 낮지만 LAA 점수만 높은 경우는 정교하게 처리된 고급 딥페이크를 의미하므로 오히려 더 위험한 케이스로 간주해야 합니다.</p>'
        },
        "7": {
            icon: "\uD83C\uDF10", title: "Frequency Analyzer",
            file: "detectors/frequency_analyzer.py", status: "done",
            body: '<h3>기능 개요</h3><p>이미지를 주파수 도메인으로 변환하여 AI 생성 이미지 특유의 패턴을 탐지합니다. FFT(고속 푸리에 변환), DCT(이산 코사인 변환), Wavelet 변환 세 가지 독립적인 수학적 변환을 병렬로 수행하여 교차 검증합니다.</p>' +
                '<h3>화면 구성</h3><ul>' +
                '<li><strong>FFT 점수:</strong> 고속 푸리에 변환 기반 이상 점수</li>' +
                '<li><strong>DCT 점수:</strong> 이산 코사인 변환 기반 이상 점수</li>' +
                '<li><strong>Wavelet 점수:</strong> 웨이블릿 변환 기반 이상 점수</li>' +
                '<li><strong>GAN 핑거프린트 점수:</strong> GAN 특유의 주파수 패턴 점수</li>' +
                '<li><strong>스펙트럼 이상치:</strong> 주파수 스펙트럼에서 발견된 비정상 패턴</li></ul>' +
                '<h3>그래프 판독법</h3><p>GAN 핑거프린트 점수가 0.7 이상이면 GAN으로 생성된 이미지일 가능성이 높습니다. FFT, DCT, Wavelet 세 점수가 모두 0.6 이상으로 높으면 여러 분석법에 의해 교차 검증된 것이므로 신뢰도가 크게 강화됩니다. GAN 계열 생성 모델은 업샘플링 과정에서 "체커보드(Checkerboard)" 패턴이라 불리는 격자형 주파수 아티팩트를 남깁니다.</p>'
        },
        "8": {
            icon: "\uD83D\uDC41\uFE0F", title: "Gaze Analyzer",
            file: "detectors/gaze_analyzer.py", status: "done",
            body: '<h3>기능 개요</h3><p>양쪽 눈의 시선 방향 일관성과 생체적 정상성을 분석합니다. 실제 사람의 양안은 하나의 신경 시스템에 의해 항상 동일한 지점을 주시하지만, 딥페이크에서는 두 눈을 독립적으로 합성하는 과정에서 시선이 미세하게 어긋나는 현상이 발생합니다.</p>' +
                '<h3>화면 구성</h3><ul>' +
                '<li><strong>시선 추적 궤적:</strong> 양쪽 눈의 시선 방향을 시간축으로 표시</li>' +
                '<li><strong>양안 편차:</strong> 왼쪽 눈과 오른쪽 눈의 시선 차이</li>' +
                '<li><strong>시선 일관성 점수:</strong> 전체 평균 일관성 (높을수록 정상)</li></ul>' +
                '<h3>그래프 판독법</h3><p>시선 추적 궤적 그래프에서 왼쪽 눈(파란 선)과 오른쪽 눈(빨간 선)이 밀착하여 겹쳐 보이면 정상적인 양안 동기화입니다. 양안 편차가 지속적으로 5도 이상이면 딥페이크의 강력한 증거로 해석됩니다. 시선 일관성 점수가 0.7 이상이면 양안 동기화가 자연스럽고, 0.4 이하이면 강한 의심 판정에 해당합니다.</p>'
        },
        "9": {
            icon: "\uD83E\uDDE0", title: "VLM Analyzer",
            file: "detectors/visual/vlm_analyzer.py", status: "v4.4 FIX",
            body: '<h3>기능 개요</h3><p>Vision-Language Model 멀티모달 분석. Chain-of-Thought 프롬프트 + Few-shot 예시 3가지로 카테고리별 독립 점수를 유도합니다.</p>' +
                '<h3>v4.4.0 개선 사항</h3><ul>' +
                '<li>VLM 모델 교체: deepseek-r1:8b (텍스트 전용) → <strong>minicpm-v:8b</strong> (비전 모델)</li>' +
                '<li>타임아웃 단축: 120s → 45s (프레임당), 샘플 프레임 증가: 5 → 8</li>' +
                '<li>실패 프레임 완전 제외: _fallback / _unanalyzed 마커, 성공 프레임만 집계</li>' +
                '<li>Sigmoid 점수 정규화: 균일 점수(std&lt;0.5) 감지 시 극단값 완화</li>' +
                '<li>텍스트 기반 점수 보정: VLM 설명 키워드로 수치 점수 상향 교정</li></ul>'
        },
        "10": {
            icon: "\uD83D\uDD17", title: "Ensemble Models",
            file: "detectors/visual/ensemble_models.py", status: "done",
            body: '<h3>기능 개요</h3><p>Xception / Biological 앙상블 조합으로 여러 모델의 판단을 동적 가중치로 최적화합니다. 각 모델의 강점을 결합하여 단일 모델보다 더 높은 정확도를 달성합니다. 분석 상황(이미지 해상도, 콘텐츠 유형 등)에 따라 가중치를 자동으로 조정합니다.</p>'
        },
        "11": {
            icon: "\u2699\uFE0F", title: "Ensemble Optimizer",
            file: "detectors/visual/ensemble_optimizer.py", status: "done",
            body: '<h3>기능 개요</h3><p>동적 가중치 앙상블 최적화. 분석 상황에 따라 각 모델의 기여도를 자동으로 조정하여 최적의 판정 결과를 도출합니다. 모달리티, 입력 파일 특성 등을 고려한 적응적 가중치 조정을 수행합니다.</p>'
        },
        "12": {
            icon: "\uD83C\uDF1F", title: "Few-Shot Learner",
            file: "detectors/visual/few_shot_learner.py", status: "done",
            body: '<h3>기능 개요</h3><p>Foundation Model + MAML(Model-Agnostic Meta-Learning) 기반 소수샘플 학습. <strong>UniFD</strong>(범용 위조 탐지), <strong>LNCLIP-DF</strong>(CLIP 기반 딥페이크 특화), <strong>DINOv2</strong>(Meta의 자기지도 학습 비전 모델)의 세 가지 이질적인 모델을 병렬로 실행하여 미지의 생성 방식도 포착할 수 있습니다.</p>' +
                '<p>세 모델의 점수가 모두 0.6 이상이면 여러 관점에서 교차 검증된 위조 가능성이 높습니다. UniFD만 높으면 전통적인 GAN 계열, LNCLIP-DF만 높으면 텍스트-이미지 생성 모델(Stable Diffusion, Midjourney 등) 계열일 가능성이 있습니다.</p>'
        },
        "13": {
            icon: "\uD83D\uDC84", title: "Beauty Filter Detector",
            file: "detectors/beauty_filters.py", status: "done",
            body: '<h3>기능 개요</h3><p>뷰티 필터 4종을 탐지합니다:</p><ul>' +
                '<li><strong>Mesh Warping</strong> — 얼굴 형태 변형 탐지</li>' +
                '<li><strong>Frequency</strong> — 주파수 도메인 이상 패턴</li>' +
                '<li><strong>Semantic Seg</strong> — 의미론적 분할 불일치</li>' +
                '<li><strong>GAN-lite</strong> — 경량 GAN 필터 흔적</li></ul>'
        },
        "14": {
            icon: "\uD83D\uDCCA", title: "3-Class Classifier",
            file: "detectors/three_class_classifier.py", status: "done",
            body: '<h3>기능 개요</h3><p>미디어를 <strong>REAL(진본) / FAKE(위조) / ANTI-FORENSIC(반포렌식)</strong>의 세 가지 클래스로 분류합니다. 기존 이진 분류에서는 감지되지 않는 반포렌식 조작 유형을 별도 클래스로 분리하여, 탐지 회피를 시도하는 고급 공격에 대한 조기 경보 기능을 제공합니다.</p>' +
                '<p>탐지 회피 시도가 감지된 경우 즉각적인 경고와 함께 ADAG 레드팀 분석을 권고합니다.</p>' +
                '<h3>용어 해설</h3><ul><li><strong>반포렌식(Anti-Forensic)</strong> — 딥페이크 탐지를 회피하기 위해 의도적으로 조작 흔적을 제거하는 기법</li></ul>'
        },
        // === Section 2: Audio Detection ===
        "15": {
            icon: "\uD83C\uDFB5", title: "Audio SSL Detector",
            file: "detectors/audio_ssl_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>자기지도 학습(Self-Supervised Learning, SSL) 기반 대규모 사전학습 모델을 활용하여 합성 음성을 탐지합니다. wav2vec 2.0, HuBERT, WavLM 등 Meta, Microsoft가 개발한 수억 개의 음성 데이터로 사전 학습된 모델이 고차원 특성을 자동으로 추출합니다. 특히 학습 데이터에 없던 신규 TTS 모델이나 보이스 클로닝 서비스에 대한 일반화 탐지 성능이 강점입니다.</p>' +
                '<h3>화면 구성</h3><ul><li><strong>SSL 점수:</strong> 자기지도 학습 모델의 위조 의심도</li><li><strong>클러스터 분석:</strong> 음성 특성의 분포 시각화</li></ul>'
        },
        "16": {
            icon: "\uD83D\uDD0A", title: "Audio E2E Detector",
            file: "detectors/audio_e2e_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>End-to-End 오디오 딥페이크 탐지. AASIST, RawNet2, RawGATST 모델을 활용하여 원시 오디오 신호에서 직접 딥페이크 여부를 판별합니다. 별도의 특징 추출 없이 원본 신호를 직접 분석하는 End-to-End 방식으로, 특징 추출 과정에서 손실되는 미세한 조작 흔적까지 포착합니다.</p>'
        },
        "17": {
            icon: "\uD83C\uDFB9", title: "Vocoder Fingerprint Detector",
            file: "detectors/vocoder_fingerprint_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>AI 음성 합성에 사용된 보코더(Vocoder)의 종류를 식별하는 역추적 분석 도구입니다. WaveNet, WaveGlow, HiFi-GAN, MelGAN, BigVGAN 등 <strong>20종 이상</strong>의 대표적인 보코더 모델에 대한 특성 데이터베이스를 보유하고 있으며, 식별된 보코더 정보는 수사기관이 음성 위조의 출처와 제작 도구를 추적하는 디지털 포렌식 과정에서 중요한 단서로 활용됩니다.</p>' +
                '<h3>그래프 판독법</h3><p>보코더별 유사도 바 차트에서 특정 보코더의 유사도가 0.7 이상이면 해당 보코더로 합성되었을 가능성이 매우 높습니다. 1순위와 2순위 보코더 간 유사도 격차가 0.3 이상이면 식별의 신뢰도가 높고, 격차가 0.1 미만이면 여러 보코더의 특성이 혼재하는 것으로 추가 분석이 필요합니다.</p>'
        },
        "18": {
            icon: "\uD83D\uDD04", title: "AV Sync Analyzer",
            file: "detectors/audio/av_sync_analyzer.py", status: "done",
            body: '<h3>기능 개요</h3><p>영상-음성 동기화 검증. 입술 움직임과 음성의 동기화 정확도를 밀리초 단위로 정밀 분석합니다. 음소별로 기대되는 입 모양 패턴과 실제 영상의 입 모양을 비교하는 음성-시각 상관 분석도 수행됩니다.</p>' +
                '<h3>그래프 판독법</h3><p>동기화 편차 그래프는 가로축이 시간(초), 세로축이 편차(밀리초, ms)로 표시됩니다. 자연스러운 영상에서는 편차가 ±20ms 이내에서 균일하게 분포하는 것이 정상입니다. 지속적으로 50ms 이상의 편차가 나타나면 음성 변조의 강력한 징후이며, 100ms 이상이면 거의 확실한 음성 교체의 증거입니다.</p>'
        },
        "19": {
            icon: "\uD83C\uDF0D", title: "Environment Consistency",
            file: "detectors/environment_consistency_analyzer.py", status: "done",
            body: '<h3>기능 개요</h3><p>환경 음향 일관성 분석. 배경 소음, 반향 특성 등의 일관성을 검증하여 음성이 동일한 환경에서 녹음되었는지 확인합니다. 다른 환경에서 녹음된 음성을 합성한 경우 환경 음향의 불일치가 탐지됩니다.</p>'
        },
        // === Section 3: Biological ===
        "20": {
            icon: "\uD83D\uDC93", title: "rPPG Analyzer",
            file: "detectors/biological/rppg_analyzer.py", status: "done",
            body: '<h3>기능 개요</h3><p>Remote Photoplethysmography — 원격 심박수 탐지 (CHROM/POS). 피부 색상의 미세 변화에서 심장 박동 신호를 추출합니다. 진본 영상에서는 일정한 심박수 패턴이 관찰되지만 딥페이크에서는 이 패턴이 누락되거나 비정상적으로 나타납니다. 딥페이크 생성 모델은 피부 아래의 혈류 변화까지 모사할 수 없기 때문입니다.</p>'
        },
        "21": {
            icon: "\uD83D\uDC41\uFE0F", title: "Blink Analyzer",
            file: "detectors/biological/blink_analyzer.py", status: "done",
            body: '<h3>기능 개요</h3><p>눈 깜빡임 패턴 분석 (KS-test). 정상적인 사람은 보통 3~5초 간격으로 깜빡이며, 깜빡임 지속 시간은 보통 150~300ms입니다. 딥페이크의 비정상적 깜빡임 빈도와 패턴을 통계적으로 검출합니다. 깜빡임이 지나치게 규칙적이거나, 전혀 없거나, 비정상적으로 빈번한 경우 딥페이크 의심 지표가 됩니다.</p>'
        },
        "22": {
            icon: "\uD83E\uDEC0", title: "Biological Signal Detector",
            file: "detectors/biological/biological_signal_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>rPPG + Blink + Heart Rate 통합 탐지. 여러 생체 신호를 종합하여 생리학적 일관성을 평가합니다. 딥페이크에 대한 가장 강력한 증거를 제공하며, Fusion 가중치에서 전체 모달리티 중 최대 비중(<strong>30%</strong>)을 차지합니다. 인간의 생체 신호를 완벽하게 모사하는 것은 현재 AI 기술로는 극히 어렵습니다.</p>'
        },
        // === Section 4: Temporal/Video ===
        "23": {
            icon: "\u23F1\uFE0F", title: "Temporal Advanced Detector",
            file: "detectors/temporal_advanced_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>영상의 연속된 프레임 간 시간적 일관성을 분석합니다. VideoMAE와 TALL 알고리즘을 활용하여 초당 30프레임으로 각 프레임의 시각적 이상도를 측정합니다. 딥페이크 제작 시 사용되는 프레임 스티칭(Frame Stitching) 기법은 특정 구간에서만 얼굴을 교체하므로, 교체 전후 프레임에서 급격한 점수 변동이 발생하는 것이 탐지의 핵심 단서가 됩니다.</p>' +
                '<h3>그래프 판독법</h3><p>가로축이 영상의 시간(초), 세로축이 위조 의심도(0~1)인 시계열 그래프입니다. 전체적으로 0.3 이하로 안정적인 흐름을 보이면 진본일 가능성이 높습니다. 갑작스러운 급등 구간은 해당 시점에서 얼굴 합성이 불안정하게 이루어진 것을 의미하며 해당 전후 프레임을 반드시 확인해야 합니다.</p>'
        },
        "24": {
            icon: "\uD83C\uDF0A", title: "Optical Flow Analyzer",
            file: "detectors/optical_flow_analyzer.py", status: "done",
            body: '<h3>기능 개요</h3><p>광학 흐름 분석으로 프레임 간 움직임의 자연스러움과 물리적 타당성을 검증합니다. 실제 물리 법칙에 부합하지 않는 움직임 패턴, 갑작스러운 방향 전환, 비연속적 움직임 등을 탐지합니다.</p>'
        },
        "25": {
            icon: "\uD83D\uDDE3\uFE0F", title: "Head Pose Dynamics",
            file: "detectors/head_pose_dynamics.py", status: "done",
            body: '<h3>기능 개요</h3><p>머리의 회전(Yaw), 기울임(Pitch), 좌우 기울기(Roll)의 역학적 자연스러움을 물리 법칙 기반으로 분석합니다. 딥페이크 영상에서는 생성 알고리즘의 한계로 인해 머리 움직임이 지나치게 부드럽거나, 반대로 물리적으로 불가능한 속도의 급격한 전환이 발생할 수 있습니다.</p>' +
                '<h3>그래프 판독법</h3><p>자연스러운 영상에서는 세 축 모두 완만하게 변화하며 미세한 떨림(noise)이 포함된 곡선을 보입니다. 물리적으로 불가능한 속도의 회전이 감지되면 합성 영상의 강력한 증거입니다. 반대로 세 그래프가 완벽하게 매끄러운 곡선을 그리면 딥페이크 생성 과정에서 노이즈가 제거된 것으로 강한 의심 징후입니다.</p>'
        },
        "26": {
            icon: "\uD83D\uDC44", title: "Lip Forensics Detector",
            file: "detectors/lip_forensics_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>입술 움직임과 음성의 동기화 정확도를 밀리초 단위로 정밀 분석합니다. Wav2Lip, VideoRetalking 등 주요 립싱크 생성 도구의 특성 패턴을 학습하여 어떤 도구가 사용되었는지를 역추적합니다. 음소별로 기대되는 입 모양 패턴과 실제 영상의 입 모양을 비교하는 음성-시각 상관 분석도 수행됩니다.</p>' +
                '<h3>용어 해설</h3><ul><li><strong>립싱크(Lip-Sync)</strong> — 입술 움직임과 음성의 동기화</li><li><strong>Wav2Lip</strong> — 음성에 맞춰 입술 움직임을 합성하는 딥러닝 모델</li><li><strong>동기화 편차(Sync Offset)</strong> — 입 모양과 실제 발음 사이의 시간 차이 (밀리초 단위)</li></ul>'
        },
        "27": {
            icon: "\uD83D\uDE10", title: "Micro Expression Analyzer",
            file: "detectors/micro_expression_analyzer.py", status: "done",
            body: '<h3>기능 개요</h3><p>FACS(Facial Action Coding System) 기반 <strong>43개 AU(Action Unit)</strong> 분석으로 0.04~0.5초 사이에 나타나는 미세 표정(Micro-Expression)의 자연스러움을 분석합니다. 각 AU의 발생 빈도, 지속 시간, 강도를 통계적으로 분석합니다.</p>' +
                '<h3>판독 기준</h3><ul>' +
                '<li>진본 영상: 분당 2~5회 미세 표정 (정상 범주)</li>' +
                '<li>분당 0~1회: 딥페이크로 인한 표정 억제 의심</li>' +
                '<li>분당 10회 이상: 딥페이크 생성 모델이 표정을 과도하게 렌더링한 경우</li></ul>' +
                '<h3>용어 해설</h3><ul><li><strong>미세 표정(Micro-Expression)</strong> — 무의식적으로 매우 짧은 시간 동안 나타나는 얼굴 표정</li><li><strong>AU(Action Unit)</strong> — 얼굴 근육의 개별 움직임 단위. FACS에서 정의</li></ul>'
        },
        "28": {
            icon: "\uD83D\uDD00", title: "Cross-Modal Verifier",
            file: "detectors/temporal/cross_modal_verifier.py", status: "done",
            body: '<h3>기능 개요</h3><p>ForgeFinder 기반 교차 모달리티 검증. 시각, 청각, 생체 신호 간의 일관성을 교차 검증하여 단일 모달리티로는 발견할 수 없는 불일치를 탐지합니다.</p>' +
                '<p>v4.4.0에서 CrossModal 이상 징후(critical anomalies)가 fake_probability에 직접 기여하도록 개선되었습니다.</p>'
        },
        "29": {
            icon: "\uD83D\uDD75\uFE0F", title: "Forensic Tracker",
            file: "detectors/temporal/forensic_tracker.py", status: "done",
            body: '<h3>기능 개요</h3><p>포렌식 추적 분석기. 조작 흔적의 시간적 흐름을 추적하여 조작 지점과 방법을 역추적합니다. 영상 타임라인을 따라가면서 각 프레임의 조작 의심 수준을 기록하고, 조작이 시작되고 끝나는 정확한 시점을 특정합니다.</p>'
        },
        "30": {
            icon: "\uD83D\uDCF9", title: "Stream Detector",
            file: "detectors/temporal/stream_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>스트리밍 비디오 탐지 (Webcam/RTSP). 실시간 화상 통화 및 라이브 스트리밍에서의 딥페이크를 탐지합니다. RTSP 프로토콜과 WebRTC를 지원하여 다양한 스트리밍 소스에서 실시간 분석이 가능합니다.</p>'
        },
        "31": {
            icon: "\u26A1", title: "Stream Enhanced",
            file: "detectors/temporal/stream_enhanced.py", status: "done",
            body: '<h3>기능 개요</h3><p>강화형 스트림 탐지기. 실시간 스트리밍 환경에 최적화된 경량화 탐지 파이프라인. ONNX + INT8 양자화로 모바일/엣지 환경에서도 빠른 추론이 가능합니다. Edge Optimizer 모듈과 연동되어 다양한 디바이스에서 배포할 수 있습니다.</p>'
        },
        // === Section 5: Text/Document/Metadata ===
        "32": {
            icon: "\uD83D\uDCDD", title: "OCR Analyzer",
            file: "detectors/text/ocr_analyzer.py", status: "done",
            body: '<h3>기능 개요</h3><p>PaddleOCR 기반 광학 문자 인식 분석기. 이미지/영상 내 텍스트의 AI 생성 여부를 분석합니다. 텍스트의 폰트, 배치, 스타일 일관성을 검증하고, AI 생성 이미지에서 흔히 발견되는 텍스트 왜곡(철자 오류, 비정상적 글리프)을 탐지합니다.</p>'
        },
        "33": {
            icon: "\uD83D\uDCC4", title: "Text Forensics",
            file: "detectors/text/text_forensics.py", status: "done",
            body: '<h3>기능 개요</h3><p>AI 생성 텍스트 포렌식 분석. 문체, 통계적 패턴, 어휘 분포 등을 분석하여 AI 작성 여부를 판별합니다. 프록시티(perplexity), 버스티니스(burstiness) 등의 통계적 지표를 활용하며, 인간 작성 텍스트와 AI 생성 텍스트의 미세한 차이를 포착합니다.</p>'
        },
        "34": {
            icon: "\uD83D\uDD10", title: "C2PA Analyzer",
            file: "detectors/c2pa_analyzer.py", status: "done",
            body: '<h3>기능 개요</h3><p>C2PA 콘텐츠 인증 메타데이터 분석. Trust Anchors, AI Assertions 등 C2PA 표준 기반으로 콘텐츠의 출처와 변조 이력을 검증합니다. Adobe, Microsoft 등이 주도하는 콘텐츠 인증 국제 표준으로, 카메라로 촬영된 원본인지 AI로 생성/편집된 것인지를 메타데이터 수준에서 검증합니다.</p>'
        },
        "35": {
            icon: "\uD83D\uDEE1\uFE0F", title: "SynthID Detector",
            file: "detectors/synthid_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>Google SynthID 워터마크 탐지 (이미지/오디오/텍스트). Google DeepMind가 개발한 비가시적 워터마킹 기술을 검출합니다. Google의 AI 생성 콘텐츠에 삽입된 디지털 서명을 탐지하여 AI 생성 여부를 확인합니다.</p>'
        },
        "36": {
            icon: "\uD83D\uDDB6\uFE0F", title: "Content Fingerprint",
            file: "detectors/content_fingerprint.py", status: "done",
            body: '<h3>기능 개요</h3><p>콘텐츠 핑거프린팅. 디지털 핑거프린트(Perceptual Hash)를 추출하여 원본 여부와 변조 이력을 추적합니다. 원본 딥페이크 파일이 약간 변형되더라도 동일 출처 콘텐츠를 추적할 수 있습니다. Fingerprint DB와 연동하여 동일/유사 콘텐츠의 재유포를 자동 모니터링합니다.</p>'
        },
        "37": {
            icon: "\u23F0", title: "Realtime Pipeline",
            file: "detectors/realtime_pipeline.py", status: "done",
            body: '<h3>기능 개요</h3><p>실시간 탐지 파이프라인. 대량의 미디어를 실시간으로 처리하는 스트리밍 아키텍처. Celery + Redis 기반 비동기 처리로 대규모 분석 요청을 효율적으로 처리합니다. WebSocket을 통해 분석 진행 상황을 실시간으로 클라이언트에 전송합니다.</p>'
        },
        "38": {
            icon: "\uD83E\uDEB6", title: "Lightweight Detector Chain",
            file: "detectors/realtime_pipeline.py", status: "done",
            body: '<h3>기능 개요</h3><p>경량 탐지기 체인. 실시간 주문용 경량화된 탐지 모듈 체인으로 빠른 응답을 제공합니다. Edge Optimizer(ONNX + INT8 양자화)와 연동되어 모바일 환경에서도 배포 가능합니다. Model Distillation 기능으로 대규모 모델을 경량화하여 API 파이프라인에 연동합니다.</p>'
        },
        "39": {
            icon: "\uD83D\uDCE1", title: "Streaming Detector",
            file: "detectors/temporal/streaming_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>스트리밍 탐지 변형. 연속적 데이터 스트림에 최적화된 탐지 알고리즘. WebSocket 기반 실시간 결과 전송을 지원하며, Stream Detector와 Stream Enhanced의 기반이 되는 핵심 스트리밍 엔진입니다.</p>'
        },
        // === Module #40: T-GD Sub-modules ===
        "40-1": {
            icon: "\uD83E\uDDE0", title: "T-GD Backbone",
            file: "detectors/tgd_enhanced_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>ViT-L/CLIP backbone + Fallback CNN. 대규모 사전학습 모델의 표현력을 활용하여 AI 생성 콘텐츠의 미세한 특징을 추출합니다. GPU 없는 환경에서는 Fallback CNN이 자동으로 활성화되어 환경에 무관하게 동작합니다.</p>' +
                '<p>ViT-L(Large) 모델의 어텐션 메커니즘이 AI 생성 이미지의 패턴을 효과적으로 포착하며, CLIP의 멀티모달 학습 능력을 활용하여 텍스트-이미지 생성 모델의 특성도 감지합니다.</p>'
        },
        "40-2": {
            icon: "\uD83C\uDFAF", title: "Detection Head",
            file: "detectors/tgd_enhanced_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>AUROC 95%+ 합성 판별. Temperature Scaling으로 교정된 확신도를 제공합니다. 이진 분류(Real/Fake)를 수행하며, 단순 확률이 아닌 교정된(calibrated) 확신도를 출력하여 신뢰할 수 있는 판정을 보장합니다.</p>' +
                '<p>Temperature Scaling은 모델의 과신(overconfidence)을 방지하여 실제 정확도와 출력 확률이 일치하도록 교정하는 기법입니다.</p>'
        },
        "40-3": {
            icon: "\uD83D\uDD0D", title: "Attribution Head",
            file: "detectors/tgd_enhanced_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>Prototype 기반 <strong>500개 모델 출처 특정</strong>. 각 AI 생성 모델의 고유한 특성을 학습하여 콘텐츠가 어떤 모델(Sora, Kling, Runway, SDXL 등)로 생성되었는지를 역추적합니다.</p>' +
                '<p>15개 모델 패밀리, 5개 모달리티를 커버하며, 상위 5개 후보 모델과 유사도를 제공합니다. 6단계 핑거프린팅 파이프라인(노이즈 추출→주파수 분석→인과 패턴→시간적 특성→위험도 평가→최종 귀속)을 거쳐 점진적으로 후보 모델 범위를 좁혀 나갑니다.</p>'
        },
        "40-4": {
            icon: "\u2696\uFE0F", title: "Legal Evidence Score",
            file: "core/legal_evidence_scorer.py", status: "done",
            body: '<h3>기능 개요</h3><p>법적 증거력 0~100점 산출 (4가지 구성요소):</p>' +
                '<table class="modal-table"><tr><td><strong>Detection 확신도</strong></td><td>최대 30점</td><td>T-GD Detection Head의 판별 확신도</td></tr>' +
                '<tr><td><strong>Attribution 확신도</strong></td><td>최대 35점</td><td>출처 모델 특정의 확신도</td></tr>' +
                '<tr><td><strong>Top-1/2 마진</strong></td><td>최대 20점</td><td>1순위와 2순위 후보 간 점수 격차</td></tr>' +
                '<tr><td><strong>다중 합의</strong></td><td>최대 15점</td><td>기존 모듈과의 판정 일치율</td></tr></table>' +
                '<p><strong>75점 이상</strong>이면 수사기관 제출 기준을 충족하여 법적 증거로 활용 가능합니다. 국과수(국립과학수사연구원) 제출 형식을 지원합니다.</p>'
        },
        "40-5": {
            icon: "\uD83D\uDD17", title: "Fusion Engine",
            file: "detectors/tgd_enhanced_detector.py", status: "done",
            body: '<h3>기능 개요</h3><p>T-GD 45% + Legacy 35% + Attribution 20% 앙상블 융합 엔진. 기존 탐지 모듈의 결과와 T-GD의 결과를 최적의 비율로 결합하여 최종 판정의 정확도를 극대화합니다.</p>' +
                '<p>각 구성 요소의 기여도가 자동으로 조정되며, 특정 모듈의 결과가 불안정한 경우 해당 모듈의 가중치를 동적으로 낮추는 적응적 융합을 수행합니다.</p>'
        },
        "40-6": {
            icon: "\uD83D\uDDC3\uFE0F", title: "Model Registry",
            file: "core/tgd_model_registry.py", status: "done",
            body: '<h3>기능 개요</h3><p>500개 생성 모델 DB (15개 패밀리, 5개 모달리티). 각 AI 생성 모델의 고유한 특성을 데이터베이스화하여 Attribution Head의 출처 특정에 활용합니다.</p>' +
                '<p>Qdrant 벡터 DB와 연동되어 벡터 유사도 검색 기반의 빠른 모델 매칭을 제공합니다. 새로운 AI 생성 모델이 등장하면 데이터베이스에 추가하여 지속적으로 커버리지를 확장합니다.</p>'
        }
    };

    // ---- Create single reusable modal ----
    var overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'module-detail-modal';
    overlay.innerHTML =
        '<div class="modal-panel">' +
            '<button class="modal-close" id="mdm-close">&times;</button>' +
            '<div class="modal-header">' +
                '<span class="modal-icon" id="mdm-icon"></span>' +
                '<div><h2 class="modal-title" id="mdm-title"></h2>' +
                '<div class="modal-file-path" id="mdm-file"></div></div>' +
            '</div>' +
            '<div class="modal-body" id="mdm-body"></div>' +
        '</div>';
    document.body.appendChild(overlay);

    function openModal(id) {
        var d = D[id];
        if (!d) return;
        document.getElementById('mdm-icon').textContent = d.icon;
        document.getElementById('mdm-title').textContent = '#' + id + '  ' + d.title;
        document.getElementById('mdm-file').innerHTML =
            '<span class="file-path-label">File:</span> <code>' + d.file + '</code> ' +
            '<span class="module-status ' + (d.status === 'v4.4 FIX' ? 'fix' : 'done') + '">' +
            (d.status === 'done' ? '\uAD6C\uD604\uC644\uB8CC' : d.status) + '</span>';
        document.getElementById('mdm-body').innerHTML = d.body;
        overlay.classList.add('open');
    }

    function closeModal() {
        overlay.classList.remove('open');
    }

    // Close handlers
    document.getElementById('mdm-close').addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
    });

    // ---- Attach to each module-card ----
    document.querySelectorAll('#detection-modules .module-card').forEach(function (card) {
        var numEl = card.querySelector('.module-number');
        if (!numEl) return;
        var id = numEl.textContent.trim().replace('#', '');
        if (!D[id]) return;

        card.setAttribute('data-module-id', id);
        card.style.cursor = 'pointer';

        var hint = document.createElement('span');
        hint.className = 'card-click-hint';
        hint.textContent = 'Click for details';
        card.appendChild(hint);

        card.addEventListener('click', function (e) {
            e.stopPropagation();
            openModal(id);
        });
    });
})();
