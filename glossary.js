// ========================================
// Technology Glossary Data - TruthLens v4.0
// ========================================
const glossaryData = {
    // === AI Agent Frameworks ===
    'LangGraph': {
        icon: '\u{1F504}',
        content: `
            <h3>LangGraph</h3>
            <p><strong>LangGraph</strong> is a workflow orchestration framework built on LangChain for creating complex, stateful multi-agent applications.</p>
            <p>In TruthLens v4.0, LangGraph manages a <strong>38-node async StateGraph</strong> pipeline across <strong>8 detection phases</strong>.</p>
            <h3>Key Features in TruthLens v4.0</h3>
            <ul>
                <li><strong>38-Node Pipeline</strong> - Spatial, DM, Frequency, Temporal, Bio, Audio, Multimodal, Defense, XAI, Fusion, Verdict nodes</li>
                <li><strong>Adaptive Router</strong> - 4-mode auto-selection (Rapid/Standard/Precise/Forensic) based on media characteristics</li>
                <li><strong>Send() Parallel Dispatch</strong> - Up to 9 analysis branches run simultaneously</li>
                <li><strong>MemorySaver Checkpoint</strong> - Automatic state saving for fault recovery</li>
                <li><strong>Human-in-the-Loop (HITL)</strong> - Expert review for uncertain zone results</li>
            </ul>
        `
    },
    'CrewAI': {
        icon: '\u{1F916}',
        content: `
            <h3>CrewAI</h3>
            <p><strong>CrewAI</strong> is a multi-agent collaboration framework. TruthLens v4.0 uses a <strong>12-expert consensus panel</strong>.</p>
            <h3>12 Expert Agents</h3>
            <ul>
                <li><strong>Visual Forensics Expert</strong> - CNN+ViT, blending boundaries, gaze analysis</li>
                <li><strong>Audio Forensics Expert</strong> - Basic audio analysis and synchronization</li>
                <li><strong>Biometric Analyst</strong> - rPPG v2, eye blink patterns</li>
                <li><strong>OCR/Document Expert</strong> - Subtitle/document forgery detection</li>
                <li><strong>A/V Sync Expert</strong> - Lip-sync and speaker consistency</li>
                <li><strong>DM Detection Expert</strong> - DIRE/SeDID/DiffusionFake interpretation</li>
                <li><strong>Voice Clone Expert</strong> - SSL/E2E/Vocoder analysis</li>
                <li><strong>Lip-Sync Expert</strong> - LipForensics and SAFF results</li>
                <li><strong>Frequency Domain Expert</strong> - SA3WT and GAN fingerprint analysis</li>
                <li><strong>Adversarial Defense Expert</strong> - 3-Class and ADAG pattern analysis</li>
                <li><strong>Legal Evidence Expert</strong> - SHAP contribution and forensic reports</li>
                <li><strong>Chief Analyst</strong> - Final synthesis (REAL/FAKE/ANTI-FORENSIC/UNCERTAIN)</li>
            </ul>
        `
    },
    'AutoGen': {
        icon: '\u{1F4AC}',
        content: `
            <h3>AutoGen (PyAutoGen)</h3>
            <p><strong>AutoGen</strong> is Microsoft's multi-agent conversational framework. TruthLens uses it for <strong>adversarial debate</strong> with up to <strong>9 specialized agents</strong>.</p>
            <h3>v4.0 Debate System</h3>
            <ul>
                <li><strong>1v1 Mode</strong> - Prosecutor vs Defense, Judge renders verdict</li>
                <li><strong>Group Chat Mode</strong> - 4 domain prosecutors (Visual/Audio/Bio/DM) vs 4 defense attorneys + Judge</li>
                <li><strong>Trigger</strong> - Uncertain score (0.35~0.65) or Anti-Forensic detection</li>
                <li><strong>Handoff Integration</strong> - v4.0 Guardrails for output validation</li>
            </ul>
        `
    },
    'Ollama': {
        icon: '\u{1F999}',
        content: `
            <h3>Ollama + vLLM</h3>
            <p><strong>Ollama</strong> and <strong>vLLM</strong> are local LLM inference engines ensuring 100% data privacy.</p>
            <h3>Models in TruthLens v4.0</h3>
            <ul>
                <li><strong>llava:7b</strong> - Visual analysis (VLM)</li>
                <li><strong>llama3.2:3b</strong> - XAI explanation + debate</li>
                <li><strong>deepseek-r1:8b</strong> - Reasoning and analysis</li>
                <li><strong>nomic-embed-text</strong> - Vector embeddings for RAG</li>
            </ul>
            <p><strong>vLLM</strong> provides high-throughput batch inference with PagedAttention for production workloads. Switch between Ollama and vLLM in real-time via the dashboard.</p>
        `
    },
    'DSPy': {
        icon: '\u{1F9EA}',
        content: `
            <h3>DSPy (Stanford NLP)</h3>
            <p>A framework for <strong>programmatic prompt optimization</strong>. In TruthLens v4.0, DSPy auto-tunes prompts for all 12 CrewAI experts and 9 AutoGen agents.</p>
            <ul>
                <li><strong>BootstrapFewShot</strong> - Few-shot example optimization</li>
                <li><strong>MIPROv2</strong> - Multi-objective instruction optimization</li>
                <li><strong>Impact</strong> - Accuracy improvement from 85% to 95%</li>
            </ul>
        `
    },
    'LlamaIndex': {
        icon: '\u{1F4DA}',
        content: `
            <h3>LlamaIndex</h3>
            <p>A RAG (Retrieval-Augmented Generation) engine providing <strong>threat intelligence</strong> with a 52-tool knowledge base.</p>
            <ul>
                <li><strong>ChromaDB Vector Index</strong> - Semantic search across 52 deepfake generation tools</li>
                <li><strong>6 Categories</strong> - Face Swap, Reenactment, Lip-Sync, DM Image, DM Video, Voice Clone</li>
                <li><strong>Real-time Context</strong> - Feeds tool-specific knowledge to CrewAI experts during analysis</li>
            </ul>
        `
    },
    'PydanticAI': {
        icon: '\u{1F4CB}',
        content: `
            <h3>PydanticAI</h3>
            <p>Provides <strong>type-safe structured output</strong> for all agent I/O in TruthLens v4.0.</p>
            <ul>
                <li><strong>Schema Validation</strong> - Ensures agent outputs conform to expected formats</li>
                <li><strong>Parsing Success Rate</strong> - Improved from 80% to 100%</li>
                <li><strong>Graceful Degradation</strong> - Falls back to regex parsing if unavailable</li>
            </ul>
        `
    },
    'A2A Protocol': {
        icon: '\u{1F310}',
        content: `
            <h3>A2A Protocol (Agent-to-Agent)</h3>
            <p>Enables <strong>distributed agent communication</strong> and external AI integration in TruthLens v4.0.</p>
            <ul>
                <li><strong>6 Exposed Capabilities</strong> - analyze_media, get_forensic_report, query_threat_intel, etc.</li>
                <li><strong>External AI Integration</strong> - Connect to third-party AI agents</li>
                <li><strong>Port 8001</strong> - Dedicated A2A protocol server</li>
            </ul>
        `
    },
    'Handoff Router': {
        icon: '\u{1F6E1}\u{FE0F}',
        content: `
            <h3>Handoff Router + Guardrails</h3>
            <p>Provides <strong>dynamic agent routing</strong> with I/O validation guardrails.</p>
            <ul>
                <li><strong>5 Guardrail Checks</strong> - Input validation, output validation, evidence citation, confidence calibration, hallucination detection</li>
                <li><strong>E2E Handoff Trace</strong> - Full traceability of agent handoffs</li>
                <li><strong>Hallucination Detection</strong> - Prevents fabricated evidence claims</li>
            </ul>
        `
    },
    'vLLM': {
        icon: '\u{26A1}',
        content: `
            <h3>vLLM</h3>
            <p>A high-performance LLM inference server using <strong>PagedAttention</strong> for efficient memory management and high-throughput batch processing.</p>
            <ul>
                <li><strong>PagedAttention</strong> - Efficient KV cache management</li>
                <li><strong>Batch Processing</strong> - Optimized for production workloads</li>
                <li><strong>Hot-swap</strong> - Switch between Ollama and vLLM in real-time</li>
            </ul>
        `
    },

    // === Diffusion Model Detection ===
    'DIRE': {
        icon: '\u{1F3A8}',
        content: `
            <h3>DIRE (Diffusion Reconstruction Error)</h3>
            <p>Detects DM-generated images by <strong>reconstructing</strong> the input through a pre-trained Diffusion Model and analyzing the error pattern.</p>
            <ul>
                <li><strong>Principle</strong> - Natural images show uniform reconstruction error; DM images show characteristic patterns</li>
                <li><strong>DistilDIRE</strong> - Lightweight version with 3.2x speed improvement via knowledge distillation</li>
                <li><strong>Multi-DM</strong> - Supports SD v1.5, SD XL, SD 3.0 reconstruction pipelines</li>
                <li><strong>Detection Rate</strong> - 96%+ when combined with SeDID</li>
            </ul>
        `
    },
    'SeDID': {
        icon: '\u{1F52C}',
        content: `
            <h3>SeDID (Step-wise Error of Denoising Image Diffusion)</h3>
            <p>Analyzes the <strong>step-by-step denoising process</strong> to detect DM-generated images.</p>
            <ul>
                <li><strong>Timestep Analysis</strong> - Examines error distribution at each denoising step</li>
                <li><strong>Hybrid Approach</strong> - Combines deep learning features with statistical anomaly detection</li>
                <li><strong>Multi-stage Scoring</strong> - Weighted scores from early/mid/late denoising stages</li>
            </ul>
        `
    },
    'DiffusionFake': {
        icon: '\u{1F50D}',
        content: `
            <h3>DiffusionFake</h3>
            <p>Detects Face Swap attacks that use Diffusion Models by <strong>reverse-tracking the generation process</strong>.</p>
            <ul>
                <li><strong>Reverse Generation</strong> - Traces the deepfake creation process backward</li>
                <li><strong>ID Mixing Analysis</strong> - Detects source+target identity blending vs single ID</li>
                <li><strong>Targets</strong> - Diff2Lip, HelloMeme, FLOAT, ComfyUI+DeepFuze hybrid attacks</li>
            </ul>
        `
    },

    // === Visual Detection ===
    'Swin V2': {
        icon: '\u{1F441}\u{FE0F}',
        content: `
            <h3>Swin Transformer V2</h3>
            <p>A multi-scale <strong>Vision Transformer</strong> that processes images in hierarchical patches for detecting global inconsistencies.</p>
            <ul>
                <li><strong>Multi-scale Patches</strong> - Captures both local and global manipulation artifacts</li>
                <li><strong>Cross-Efficient ViT</strong> - Hybrid CNN+ViT architecture for combined analysis</li>
                <li><strong>Patch Attention Heatmap</strong> - Visualizes suspected manipulation regions</li>
            </ul>
        `
    },
    'DINOv2': {
        icon: '\u{1F9E0}',
        content: `
            <h3>DINOv2</h3>
            <p>A self-supervised vision model by Meta, fine-tuned for deepfake detection in TruthLens.</p>
            <ul>
                <li><strong>Universal Features</strong> - Detects unknown generation models not in training data</li>
                <li><strong>UniFD</strong> - Universal Fake Detector for both GAN and DM</li>
                <li><strong>LNCLIP-DF</strong> - LoRA-based CLIP fine-tuning (0.03% parameters updated)</li>
            </ul>
        `
    },
    'SBI': {
        icon: '\u{1F50E}',
        content: `
            <h3>SBI (Self-Blended Images)</h3>
            <p>CVPR 2022 Oral paper technique for detecting <strong>blending boundaries</strong> in face-swapped videos.</p>
            <ul>
                <li><strong>Auto-generated Training</strong> - Creates training data by blending images</li>
                <li><strong>LAA-Net</strong> - Local Adversarial Attention Network for precise boundary detection</li>
                <li><strong>Color/Lighting Maps</strong> - Visualizes temperature and illumination inconsistencies</li>
            </ul>
        `
    },
    'FACS': {
        icon: '\u{1F610}',
        content: `
            <h3>FACS (Facial Action Coding System)</h3>
            <p>International standard for coding facial muscle movements using <strong>46 Action Units (AU)</strong>.</p>
            <ul>
                <li><strong>46 AU Analysis</strong> - Quantifies all facial muscle movements</li>
                <li><strong>AU Consistency</strong> - Compares against natural AU combination patterns</li>
                <li><strong>Micro-expressions</strong> - Detects 0.04~0.2 second duration micro-expressions</li>
                <li><strong>Emotion Transfer</strong> - Verifies temporal naturalness of expression changes</li>
            </ul>
        `
    },
    'DeepReversion': {
        icon: '\u{1F575}\u{FE0F}',
        content: `
            <h3>DeepReversion</h3>
            <p>Attempts to <strong>recover the original face</strong> from a deepfake video for forensic investigation.</p>
            <ul>
                <li><strong>UNet-based Recovery</strong> - Reconstructs original face features</li>
                <li><strong>Privacy Mode</strong> - Stores only hash values by default (no face images)</li>
                <li><strong>Legal Mode</strong> - Full recovery requires ADMIN approval + audit logging</li>
            </ul>
        `
    },

    // === Audio Detection ===
    'AASIST': {
        icon: '\u{1F3B5}',
        content: `
            <h3>AASIST</h3>
            <p><strong>Audio Anti-Spoofing using Integrated Spectro-Temporal</strong> graph attention network. Top performer in ASVspoof challenges.</p>
            <ul>
                <li><strong>Graph Attention</strong> - Analyzes spectro-temporal relationships</li>
                <li><strong>RawNet2</strong> - Direct raw waveform analysis without intermediate conversion</li>
                <li><strong>ASVspoof 5 Compatible</strong> - Latest benchmark protocol compliance</li>
            </ul>
        `
    },
    'Wav2Vec2': {
        icon: '\u{1F399}\u{FE0F}',
        content: `
            <h3>Wav2Vec2 / HuBERT / WavLM</h3>
            <p><strong>Self-Supervised Learning (SSL)</strong> speech models for voice clone detection.</p>
            <ul>
                <li><strong>Wav2Vec2</strong> - Self-supervised speech representation</li>
                <li><strong>HuBERT</strong> - Hidden-Unit BERT for speech features</li>
                <li><strong>WavLM</strong> - Robust to environmental noise</li>
                <li><strong>Target EER</strong> - 0.42% with NeXt-TDNN + AMFF fusion</li>
                <li><strong>Detects</strong> - xTTS, OpenVoice, VALL-E, Tortoise, Bark, ElevenLabs</li>
            </ul>
        `
    },
    'SAFF': {
        icon: '\u{1F444}',
        content: `
            <h3>SAFF (Speech-Audio-Face-Fusion)</h3>
            <p>Analyzes <strong>audio-visual temporal alignment</strong> with 98%+ accuracy.</p>
            <ul>
                <li><strong>Lip-sync Precision</strong> - Detects 10~50ms timing discrepancies</li>
                <li><strong>AVTS Framework</strong> - Audio-Visual Temporal Synchronization</li>
                <li><strong>Dubbing Tolerance</strong> - Adaptive thresholds prevent false positives on dubbed content</li>
                <li><strong>Real-time Support</strong> - Chunk-based progressive scoring for live streams</li>
            </ul>
        `
    },

    // === Video/Temporal Detection ===
    'VideoMAE': {
        icon: '\u{1F3AC}',
        content: `
            <h3>VideoMAE</h3>
            <p><strong>Masked Autoencoder</strong> for video representation learning. Captures spatiotemporal patterns across frames.</p>
            <ul>
                <li><strong>Temporal Inconsistency</strong> - Detects frame-to-frame artifacts invisible in single frames</li>
                <li><strong>VAST</strong> - Video Spatiotemporal integrated analysis</li>
                <li><strong>ResNeXt + LSTM</strong> - CNN features with sequential time-series analysis</li>
            </ul>
        `
    },
    'TALL': {
        icon: '\u{23F1}\u{FE0F}',
        content: `
            <h3>TALL (ICCV 2023)</h3>
            <p>Spatiotemporal attention mechanism for <strong>temporal inconsistency detection</strong> in deepfake videos.</p>
            <ul>
                <li><strong>Face Reenactment</strong> - Detection improvement: 72% → 93%+</li>
                <li><strong>Targets</strong> - Face2Face, NeuralTextures, First Order Motion, DaGAN</li>
                <li><strong>Optical Flow</strong> - FlowNet-based motion vector validation against physical laws</li>
            </ul>
        `
    },
    'LipForensics': {
        icon: '\u{1F5E3}\u{FE0F}',
        content: `
            <h3>LipForensics</h3>
            <p>Lip-sync specialized temporal forensics detecting <strong>10~50ms timing artifacts</strong>.</p>
            <ul>
                <li><strong>Vision Temporal Transformer</strong> - Micro-timing analysis of lip movements</li>
                <li><strong>SyncNet Scoring</strong> - Audio-visual synchronization precision</li>
                <li><strong>Tool Profiles</strong> - Specific artifact patterns for Wav2Lip, VideoRetalking, Diff2Lip</li>
                <li><strong>Wav2Lip Detection</strong> - 95%+ accuracy</li>
            </ul>
        `
    },

    // === XAI ===
    'SHAP': {
        icon: '\u{1F4CA}',
        content: `
            <h3>SHAP (SHapley Additive exPlanations)</h3>
            <p>Quantifies each detection module's <strong>contribution to the final verdict</strong> using game theory's Shapley values.</p>
            <ul>
                <li><strong>Waterfall Chart</strong> - Visual breakdown of each module's FAKE/REAL contribution</li>
                <li><strong>Legal Evidence</strong> - "rPPG contributed 45%, blending 30%..." becomes court-admissible evidence</li>
                <li><strong>Fair Attribution</strong> - Mathematically optimal contribution distribution</li>
            </ul>
        `
    },
    'Grad-CAM++': {
        icon: '\u{1F525}',
        content: `
            <h3>Grad-CAM++ (Gradient-weighted Class Activation Mapping++)</h3>
            <p>Visualizes which <strong>image regions the AI focused on</strong> when making its decision.</p>
            <ul>
                <li><strong>Multi-layer Heatmap</strong> - Improved gradient weighting for precise localization</li>
                <li><strong>ViT Attention Rollout</strong> - Transformer attention visualization</li>
                <li><strong>Interactive Layers</strong> - Toggle CNN/ViT/DM heatmap layers on dashboard</li>
                <li><strong>Bayesian Uncertainty</strong> - Per-region confidence intervals (F1 92%)</li>
            </ul>
        `
    },

    // === Provenance ===
    'C2PA': {
        icon: '\u{1F4DC}',
        content: `
            <h3>C2PA (Coalition for Content Provenance and Authenticity)</h3>
            <p>International standard for <strong>content provenance verification</strong>. TruthLens supports C2PA v2.2.</p>
            <ul>
                <li><strong>Metadata Verification</strong> - Validates content creation and edit history</li>
                <li><strong>Soft Binding</strong> - v2.2 enhanced binding for tamper detection</li>
                <li><strong>Adobe Firefly</strong> - C2PA metadata present in Adobe-generated content</li>
            </ul>
        `
    },
    'SynthID': {
        icon: '\u{1F4A7}',
        content: `
            <h3>SynthID</h3>
            <p>Google DeepMind's <strong>AI-generated content watermarking</strong> technology.</p>
            <ul>
                <li><strong>Invisible Watermark</strong> - Embedded during generation, imperceptible to humans</li>
                <li><strong>Detection</strong> - Identifies Google AI-generated images and videos</li>
                <li><strong>Robustness</strong> - Survives compression, resizing, and moderate editing</li>
            </ul>
        `
    },

    // === Infrastructure ===
    'TensorRT': {
        icon: '\u{1F680}',
        content: `
            <h3>TensorRT</h3>
            <p>NVIDIA's <strong>deep learning inference optimization</strong> toolkit for 2-5x speed improvement.</p>
            <ul>
                <li><strong>Model Optimization</strong> - Graph optimization, layer fusion, kernel auto-tuning</li>
                <li><strong>INT8/FP16 Quantization</strong> - 4-8x model size reduction</li>
                <li><strong>Edge Deployment</strong> - Jetson Nano/Xavier support for on-device detection</li>
            </ul>
        `
    },
    'WebRTC': {
        icon: '\u{1F4F9}',
        content: `
            <h3>WebRTC (Web Real-Time Communication)</h3>
            <p>Enables <strong>real-time video stream detection</strong> with &lt;500ms latency in TruthLens.</p>
            <ul>
                <li><strong>Live Stream Monitoring</strong> - WebRTC/RTSP stream input</li>
                <li><strong>Real-time Pipeline</strong> - Lightweight model chain for instant analysis</li>
                <li><strong>Multi-stream</strong> - Up to 4 streams on 24GB GPU, 8+ on 48GB GPU</li>
                <li><strong>Alert System</strong> - Instant notification on fake detection</li>
            </ul>
        `
    },

    // === Existing Detection Technologies (kept/updated) ===
    'rPPG': {
        icon: '\u{1F49C}',
        content: `
            <h3>rPPG v2 (Remote Photoplethysmography)</h3>
            <p>Remotely measures heart rate by detecting subtle skin color changes. v2 uses <strong>4 ROI with dual algorithm</strong>.</p>
            <h3>v2 Improvements</h3>
            <ul>
                <li><strong>Dual Algorithm</strong> - CHROM + POS for improved accuracy</li>
                <li><strong>4 ROI</strong> - Forehead, left cheek, right cheek, chin (independent analysis)</li>
                <li><strong>Consistency Check</strong> - Cross-validates heart rate across all 4 regions</li>
                <li><strong>Anti-injection</strong> - Detects ADAG BiologicalSignalInjector attacks</li>
                <li><strong>Real-time</strong> - Supports Deep-Live-Cam and live stream analysis</li>
            </ul>
        `
    },
    'MFCC': {
        icon: '\u{1F3B5}',
        content: `
            <h3>MFCC (Mel-Frequency Cepstral Coefficients)</h3>
            <p>Short-term power spectrum representation used in audio processing. TTS produces more uniform MFCC patterns (std dev &lt; 5.0).</p>
        `
    },
    'ZCR': {
        icon: '\u{1F3B5}',
        content: `
            <h3>ZCR (Zero Crossing Rate)</h3>
            <p>Rate of audio signal sign changes. Combined with MFCC, helps identify AI-generated audio.</p>
        `
    },
    'FFT': {
        icon: '\u{1F50D}',
        content: `
            <h3>FFT (Fast Fourier Transform)</h3>
            <p>Transforms signals to frequency domain. 2D FFT detects GAN-specific frequency patterns invisible to human eyes. v4.0 enhanced with SA3WT adaptive wavelet analysis.</p>
        `
    },
    'VLM': {
        icon: '\u{1F441}\u{FE0F}',
        content: `
            <h3>VLM (Vision Language Model)</h3>
            <p>Multimodal AI understanding both visual and textual information. TruthLens uses <strong>llava:7b</strong> for visual artifact analysis including DM fingerprint detection.</p>
        `
    },
    'MediaPipe': {
        icon: '\u{1F441}\u{FE0F}',
        content: `
            <h3>MediaPipe</h3>
            <p>Google's ML pipeline framework. TruthLens uses <strong>FaceMesh</strong> (468 landmarks) for:</p>
            <ul>
                <li>EAR blink detection</li>
                <li>Lip landmark extraction for LipForensics</li>
                <li>4-ROI selection for rPPG v2</li>
                <li>FACS 46 AU micro-expression analysis</li>
                <li>6DoF head pose estimation</li>
            </ul>
        `
    },
    'CHROM': {
        icon: '\u{1F49C}',
        content: `
            <h3>CHROM + POS</h3>
            <p><strong>CHROM</strong> (Chrominance-based) and <strong>POS</strong> (Plane Orthogonal to Skin) are dual rPPG algorithms used in v2 for improved pulse signal extraction, robust to motion artifacts.</p>
        `
    },
    'HeartPy': {
        icon: '\u{1F49C}',
        content: `
            <h3>HeartPy</h3>
            <p>Python toolkit for heart rate analysis from PPG signals. Validates extracted rPPG v2 signals across 4 ROI regions.</p>
        `
    },
    'Librosa': {
        icon: '\u{1F3B5}',
        content: `
            <h3>Librosa</h3>
            <p>Python audio analysis package providing MFCC, ZCR, spectral features. Used alongside SSL models (Wav2Vec2/HuBERT) in audio forensics.</p>
        `
    },
    'Resemblyzer': {
        icon: '\u{1F5E3}\u{FE0F}',
        content: `
            <h3>Resemblyzer</h3>
            <p>Speaker verification using embeddings. Cosine similarity &lt; 0.8 between segments indicates voice swap.</p>
        `
    },
    'PaddleOCR': {
        icon: '\u{1F4DD}',
        content: `
            <h3>PaddleOCR</h3>
            <p>High-performance OCR for text extraction. Detects subtitle manipulation and document forgery at 5-10 frames/sec.</p>
        `
    },
    'Whisper': {
        icon: '\u{1F3A4}',
        content: `
            <h3>OpenAI Whisper</h3>
            <p>ASR model for audio transcription. Compares with OCR subtitles for cross-modal manipulation detection.</p>
        `
    },
    'OpenCV': {
        icon: '\u{1F4F7}',
        content: `
            <h3>OpenCV</h3>
            <p>Computer Vision library for frame extraction, image processing, DCT analysis, compression artifact detection, and optical flow computation.</p>
        `
    },
    'Proto-Net': {
        icon: '\u{1F9E0}',
        content: `
            <h3>Prototypical Networks</h3>
            <p>Few-shot learning for classifying novel deepfake types with minimal training examples. Enhanced in v4.0 with Foundation Model features (UniFD/LNCLIP-DF/DINOv2).</p>
        `
    }
};
