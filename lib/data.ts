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
        description: "Speak into any desktop app. Your words appear at the cursor, without switching away from your work.",
        contribution: "Built a hold-to-talk workflow with local Whisper or cloud transcription, plus optional AI replies.",
        tags: ["Dictation", "Whisper", "Python", "Desktop"],
        href: "https://github.com/Gargeya-Grey/Odicto",
        isLatest: true,
        type: "repo"
    },
    {
        title: "Odicto-Mobile",
        description: "Dictate directly into Android text fields, with transcription running through the phone and no desktop connection.",
        contribution: "Built a voice keyboard with streaming text, a floating microphone control, and a choice of AI providers.",
        tags: ["Android", "Kotlin", "Capacitor", "Speech-to-Text"],
        href: "https://github.com/Gargeya-Grey/Odicto-Mobile",
        isLatest: true,
        type: "repo"
    },
    {
        title: "proof",
        description: "A verification-first plugin for coding agents. One router sends each task to a matching workflow (grilling, test-driven development, codebase design, writing for agents) and treats done as passing checks. It works the same on Claude Code, Codex, Grok and other Agent Skills hosts.",
        tags: ["AI Agents", "Agent Skills", "Claude Code", "Verification"],
        href: "https://github.com/Gargeya-Grey/proof",
        isLatest: true,
        type: "repo"
    },
    {
        title: "Adversary-Planner-Loop",
        description: "A model-agnostic generator-and-evaluator loop that sharpens engineering plans. It writes the prompts and JSON schemas, and your agent runs them.",
        tags: ["AI Agents", "Game Theory", "Self-Refinement", "Python"],
        href: "https://github.com/Gargeya-Grey/Adversary-Planner-Loop",
        isLatest: false,
        type: "repo"
    },
    {
        title: "TwinAatma",
        description: "Local-first memory for AI agents. Notes stay as markdown you own, an MCP server lets any agent search them, and changes to your profile need your explicit yes.",
        tags: ["AI Agents", "MCP", "Memory", "Local-first"],
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
        description: "Automated data-cleaning submission for the OpenEnv Hackathon organized by Scaler School, Meta, and Hugging Face.",
        tags: ["Hackathon", "Data Science", "Python", "Automation"],
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
