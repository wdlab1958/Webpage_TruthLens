// ========================================
// Technology Glossary Data
// ========================================
const glossaryData = {
    // AI Frameworks
    'LangGraph': {
        icon: '\u{1F504}',
        content: `
            <h3>LangGraph</h3>
            <p><strong>LangGraph</strong> is a workflow orchestration framework built on top of LangChain for creating complex, stateful multi-agent applications.</p>
            <p>In TruthLens, LangGraph manages a <strong>17-node async StateGraph</strong> pipeline that orchestrates the entire deepfake detection workflow.</p>
            <h3>Key Features in TruthLens</h3>
            <ul>
                <li><strong>Send() Parallel Dispatch</strong> - 5 analysis nodes run simultaneously, reducing processing time by 60%</li>
                <li><strong>MemorySaver Checkpoint</strong> - Automatic state saving for fault recovery</li>
                <li><strong>Human-in-the-Loop (HITL)</strong> - Expert review for uncertain zone results (0.35~0.65)</li>
                <li><strong>Conditional Routing</strong> - Media-type-based node activation (video/audio/image)</li>
            </ul>
        `
    },
    'CrewAI': {
        icon: '\u{1F916}',
        content: `
            <h3>CrewAI</h3>
            <p><strong>CrewAI</strong> is a multi-agent collaboration framework that enables role-based AI agent teams to work together on complex tasks.</p>
            <p>TruthLens uses CrewAI to run a <strong>6-expert consensus panel</strong> for deepfake verdict decisions.</p>
            <h3>6 Expert Agents</h3>
            <ul>
                <li><strong>Visual Forensics Expert</strong> - GAN fingerprint, compression anomalies</li>
                <li><strong>Audio Forensics Expert</strong> - Voice cloning, TTS artifacts</li>
                <li><strong>Biometric Analyst</strong> - rPPG heart rate, eye blink patterns</li>
                <li><strong>OCR/Document Expert</strong> - Subtitle manipulation, document forgery</li>
                <li><strong>A/V Sync Expert</strong> - Lip-sync accuracy, speaker consistency</li>
                <li><strong>Chief Analyst</strong> - Final synthesis and verdict (REAL/FAKE/UNCERTAIN)</li>
            </ul>
            <p>Supports <strong>Sequential</strong> and <strong>Hierarchical</strong> process modes with SQLite memory backend.</p>
        `
    },
    'AutoGen': {
        icon: '\u{1F4AC}',
        content: `
            <h3>AutoGen (PyAutoGen)</h3>
            <p><strong>AutoGen</strong> is Microsoft's framework for building multi-agent conversational systems. TruthLens uses it for <strong>adversarial debate</strong> when analysis results fall in the uncertain zone.</p>
            <h3>Debate System</h3>
            <ul>
                <li><strong>1v1 Mode</strong> - Prosecutor (argues FAKE) vs Defense (argues REAL), Judge renders verdict</li>
                <li><strong>GroupChat Mode</strong> - 6 specialists (Visual/Audio/Bio) debate with both prosecution and defense roles</li>
                <li><strong>Trigger</strong> - Automatically starts when fusion score is between 0.35~0.65</li>
                <li><strong>Average Debate Time</strong> - ~19 seconds using llama3.2:3b via Ollama</li>
            </ul>
        `
    },
    'Ollama': {
        icon: '\u{1F999}',
        content: `
            <h3>Ollama</h3>
            <p><strong>Ollama</strong> is a local LLM runtime that enables running large language models on local hardware without sending data to external servers.</p>
            <h3>Models Used in TruthLens</h3>
            <ul>
                <li><strong>llama3.2-vision:latest</strong> (7.8GB) - Visual analysis (VLM), required</li>
                <li><strong>llama3.2:3b</strong> (2.0GB) - XAI explanation + debate, required</li>
                <li><strong>qwen2.5:7b</strong> (4.7GB) - Korean report generation, optional</li>
                <li><strong>nomic-embed-text</strong> - Vector embeddings for RAG search</li>
            </ul>
            <p>All inference runs locally, ensuring <strong>100% data privacy</strong>.</p>
        `
    },

    // Detection Technologies
    'rPPG': {
        icon: '\u{1F49C}',
        content: `
            <h3>rPPG (Remote Photoplethysmography)</h3>
            <p>A technique for remotely measuring heart rate by detecting subtle skin color changes caused by blood flow.</p>
            <h3>How It Works</h3>
            <ul>
                <li><strong>Algorithm</strong>: CHROM (Chrominance-based method)</li>
                <li><strong>Frequency Range</strong>: 0.7-3.0 Hz (42-180 BPM)</li>
                <li><strong>Validation</strong>: SNR > -2.0 dB indicates genuine signal</li>
                <li><strong>Real video</strong>: SNR ~ -1.97 dB</li>
                <li><strong>Deepfake</strong>: SNR ~ -3.35 dB (weaker signal)</li>
            </ul>
            <p>Deepfakes cannot perfectly reproduce the subtle physiological signals present in real videos, making rPPG one of the most reliable detection methods.</p>
        `
    },
    'MFCC': {
        icon: '\u{1F3B5}',
        content: `
            <h3>MFCC (Mel-Frequency Cepstral Coefficients)</h3>
            <p>A representation of the short-term power spectrum of sound, widely used in audio processing and speech recognition.</p>
            <h3>Deepfake Detection</h3>
            <ul>
                <li>TTS and voice cloning produce more uniform MFCC characteristics</li>
                <li><strong>Suspicious threshold</strong>: Standard deviation < 5.0</li>
                <li>Natural human speech has more variation in MFCC features</li>
            </ul>
        `
    },
    'ZCR': {
        icon: '\u{1F3B5}',
        content: `
            <h3>ZCR (Zero Crossing Rate)</h3>
            <p>The rate at which an audio signal changes sign (crosses zero amplitude). Used as an additional feature for detecting synthetic speech.</p>
            <p>Combined with MFCC analysis, ZCR variation helps identify AI-generated audio.</p>
        `
    },
    'FFT': {
        icon: '\u{1F50D}',
        content: `
            <h3>FFT (Fast Fourier Transform)</h3>
            <p>An algorithm that transforms a signal from time domain to frequency domain, enabling spectral analysis.</p>
            <p>In TruthLens, <strong>2D FFT</strong> is used to detect GAN-specific frequency patterns that are invisible to the naked eye but present in GAN-generated images.</p>
        `
    },
    'VLM': {
        icon: '\u{1F441}\u{FE0F}',
        content: `
            <h3>VLM (Vision Language Model)</h3>
            <p>A multimodal AI model capable of understanding both visual (image/video) and textual information.</p>
            <p>TruthLens uses <strong>llama3.2-vision:latest</strong> to analyze video frames for visual artifacts, facial manipulation signs, and GAN fingerprints.</p>
        `
    },
    'MediaPipe': {
        icon: '\u{1F441}\u{FE0F}',
        content: `
            <h3>MediaPipe</h3>
            <p>Google's framework for building multimodal applied ML pipelines. TruthLens uses <strong>MediaPipe FaceMesh</strong> (468 facial landmarks) for:</p>
            <ul>
                <li>Eye Aspect Ratio (EAR) calculation for blink detection</li>
                <li>Lip landmark extraction for lip-sync verification</li>
                <li>ROI selection for rPPG signal extraction</li>
            </ul>
        `
    },
    'CHROM': {
        icon: '\u{1F49C}',
        content: `
            <h3>CHROM (Chrominance-based Method)</h3>
            <p>An algorithm for extracting pulse signals from facial video by analyzing chrominance changes in skin color. More robust to motion artifacts than other rPPG methods.</p>
        `
    },
    'HeartPy': {
        icon: '\u{1F49C}',
        content: `
            <h3>HeartPy</h3>
            <p>A Python toolkit for heart rate analysis from PPG signals. Used in TruthLens to validate extracted rPPG signals and compute heart rate metrics.</p>
        `
    },
    'Librosa': {
        icon: '\u{1F3B5}',
        content: `
            <h3>Librosa</h3>
            <p>A Python package for music and audio analysis. Provides feature extraction (MFCC, ZCR, spectral features) used in TruthLens audio forensics.</p>
        `
    },
    'Resemblyzer': {
        icon: '\u{1F5E3}\u{FE0F}',
        content: `
            <h3>Resemblyzer</h3>
            <p>A Python package for speaker verification using speaker embeddings. TruthLens uses it to verify <strong>speaker consistency</strong> throughout a video.</p>
            <p>Cosine similarity < 0.8 between segments indicates potential speaker change (voice swap).</p>
        `
    },
    'PaddleOCR': {
        icon: '\u{1F4DD}',
        content: `
            <h3>PaddleOCR</h3>
            <p>A high-performance OCR toolkit for text extraction from images. TruthLens uses it at 5-10 frames/sec for detecting subtitle manipulation and document forgery.</p>
        `
    },
    'Whisper': {
        icon: '\u{1F3A4}',
        content: `
            <h3>OpenAI Whisper</h3>
            <p>An automatic speech recognition (ASR) model used for audio transcription. TruthLens compares Whisper transcription with OCR-extracted subtitles to detect manipulation.</p>
        `
    },
    'OpenCV': {
        icon: '\u{1F4F7}',
        content: `
            <h3>OpenCV</h3>
            <p>Open Source Computer Vision Library. Used in TruthLens for frame extraction, image processing, DCT analysis, and compression artifact detection.</p>
        `
    },
    'Proto-Net': {
        icon: '\u{1F9E0}',
        content: `
            <h3>Prototypical Networks</h3>
            <p>A few-shot learning approach that learns to classify new examples by comparing them to prototype representations of each class.</p>
            <p>Enables TruthLens to adapt to novel deepfake techniques with minimal training examples.</p>
        `
    }
};
