export type ProjectType = "repo" | "academic" | "writing";

export type Publication = {
    kind: "Journal paper" | "Book chapter";
    year: number;
    authors: string[];
    venue: string;
    details: string;
};

export type Project = {
    title: string;
    description: string;
    contribution?: string;
    tags: string[];
    href: string;
    isLatest: boolean;
    type: ProjectType;
    publication?: Publication;
};

export const projects: Project[] = [
    {
        title: "Odicto",
        description: "Free, open-source voice typing for Windows (with macOS and Linux X11 CI). Tap a hotkey, speak, and your words land at the cursor in any app.",
        contribution: "Built tap-hotkey dictation with local Whisper by default (zero telemetry), live captions, AI selection polish, thread memory, terminal-safe typing, and an auto-updating installer (v1.5.0).",
        tags: ["Dictation", "Whisper", "Python", "PySide6"],
        href: "https://github.com/Gargeya-Grey/Odicto",
        isLatest: true,
        type: "repo"
    },
    {
        title: "Odicto-Mobile",
        description: "Open-source Android voice keyboard that opens as a voice bar — dictate as spoken, ask AI to edit, or stream live transcription into any text field.",
        contribution: "Built Raw (Groq Whisper), AI (Gemini/OpenRouter), Live streaming, and Polish modes with a floating mic and BYO API keys in Android Keystore — zero backend server (v1.9.0 beta).",
        tags: ["Android", "Kotlin", "Capacitor", "Speech-to-Text"],
        href: "https://github.com/Gargeya-Grey/Odicto-Mobile",
        isLatest: true,
        type: "repo"
    },
    {
        title: "Harness Arena",
        description: "Run identical test cases across Claude Code, Codex, Gemini CLI, Command Code, OpenCode, and raw APIs, then compare models side by side in a zero-dependency local dashboard (Model Lab) on quality, cost, latency, tokens, and reliability.",
        tags: ["AI Evaluation", "Model Testing", "Node.js", "CLI Harnesses"],
        href: "https://github.com/Gargeya-Grey/harness-arena",
        isLatest: true,
        type: "repo"
    },
    {
        title: "AKM",
        description: "Local Windows API-key manager (desktop app and CLI) backed by standard KeePass/KDBX vaults — track project keys, environments, expiry, and rotation intervals with no account or server.",
        tags: ["Security", "KeePass / KDBX", "Windows", "CLI"],
        href: "https://github.com/Gargeya-Grey/akm-vault",
        isLatest: true,
        type: "repo"
    },
    {
        title: "proof",
        description: "A verification-first plugin for coding agents. One router (work) pairs pstack playbooks with Matt Pocock's skills (grilling, TDD, codebase design, writing for agents) across Claude Code, Codex, Grok, and other Agent Skills hosts.",
        tags: ["AI Agents", "Agent Skills", "Claude Code", "Verification"],
        href: "https://github.com/Gargeya-Grey/proof",
        isLatest: true,
        type: "repo"
    },
    {
        title: "Adversary-Planner-Loop",
        description: "A model-agnostic Adversary Framework using strict generator-and-evaluator loops (automated Python or manual mode) to refine engineering plans, code reviews, security audits, and architecture designs.",
        tags: ["AI Agents", "Game Theory", "Self-Refinement", "Python"],
        href: "https://github.com/Gargeya-Grey/Adversary-Planner-Loop",
        isLatest: false,
        type: "repo"
    },
    {
        title: "TwinAatma",
        description: "Local-first memory you own and carry between AI assistants. Notes stay as Markdown with a local SQLite search index exposed over MCP, and changes to your profile require your explicit approval.",
        tags: ["AI Agents", "MCP", "SQLite", "Local-first"],
        href: "https://github.com/Gargeya-Grey/TwinAatma",
        isLatest: false,
        type: "repo"
    },
    {
        title: "Portfolio-CV-Webpage",
        description: "The source for this digital CV: a responsive Next.js site with research citations, project filters, and a printable layout.",
        tags: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
        href: "https://github.com/Gargeya-Grey/Portfolio-CV-Webpage",
        isLatest: false,
        type: "repo"
    },
    {
        title: "Documenter-MCP",
        description: "An MCP server that checks a repository's documentation and says whether it needs fixing or writing.",
        tags: ["AI Agents", "MCP", "Python", "LLMs"],
        href: "https://github.com/Gargeya-Grey/Documenter-MCP",
        isLatest: false,
        type: "repo"
    },
    {
        title: "DataCleanOpenEnv",
        description: "Reinforcement-learning environment for the OpenEnv Hackathon (Scaler School × Meta × Hugging Face), grading AI agents on safely cleaning a live SQLite database across four difficulty tiers.",
        tags: ["Hackathon", "OpenEnv", "Python", "SQLite"],
        href: "https://github.com/Gargeya-Grey/DataCleanOpenEnv",
        isLatest: false,
        type: "repo"
    },
    {
        title: "Automatic surface crack detection using segmentation-based deep-learning approach",
        description: "Pixel-level surface crack detection using deep learning, with a manually annotated dataset of 3,000 images.",
        tags: ["Computer Vision", "Image Segmentation", "Deep Learning"],
        href: "https://doi.org/10.1016/j.engfracmech.2022.108467",
        isLatest: false,
        type: "academic",
        publication: {
            kind: "Journal paper",
            year: 2022,
            authors: ["Deepa Joshi", "Thipendra P. Singh", "Gargeya Sharma"],
            venue: "Engineering Fracture Mechanics",
            details: "Vol. 268 · Article 108467",
        },
    },
    {
        title: "Object Detection Frameworks and Services in Computer Vision",
        description: "A coauthored guide to the frameworks and services used to build object detection systems in computer vision.",
        tags: ["Computer Vision", "Object Detection", "Deep Learning"],
        href: "https://doi.org/10.1201/9781003206736-2",
        isLatest: false,
        type: "academic",
        publication: {
            kind: "Book chapter",
            year: 2022,
            authors: ["Sachi Choudhary", "Rashmi Sharma", "Gargeya Sharma"],
            venue: "Object Detection with Deep Learning Models: Principles and Applications",
            details: "Chapter 2 · pp. 23–47 · Chapman & Hall/CRC",
        },
    },
    {
        title: "MSc AI Research",
        description: "Research code from an AI master’s completed with Distinction at QMUL, exploring reinforcement learning and computer vision.",
        tags: ["Research", "PyTorch", "RL", "Computer Vision"],
        href: "https://github.com/Gargeya-Grey/MSc-Artificial-Intelligence",
        isLatest: false,
        type: "academic"
    },
    {
        title: "Analytics Vidhya",
        description: "17 articles on data science and machine learning.",
        tags: ["Writing", "Data Science", "Machine Learning"],
        href: "https://www.analyticsvidhya.com/blog/author/gargeya/",
        isLatest: false,
        type: "writing"
    }
];
