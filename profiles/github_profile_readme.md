# Hi, I'm Gargeya Sharma 👋

### AI engineer and founder. I build AI that coaches thinking, not answers.

> *AI made answers cheap. I build for the part that isn't: the thinking.*

Based in Jaipur, India. Founder of [Edudojo](https://edudojo.ai), an AI writing coach for students and teachers. I also build open-source tools for voice typing, AI agent memory and agent verification.

[Website](https://sgargeya.com) · [Edudojo](https://edudojo.ai) · [X](https://x.com/GargeyaS) · [YouTube](https://www.youtube.com/@GargeyaS) · [LinkedIn](https://www.linkedin.com/in/gargeya-sharma) · [Email](mailto:gargeya.sharma@gmail.com)

---

## 💡 The idea, in one minute

Picture a student who pastes a prompt into a chatbot, gets a polished essay, and hands it in. The teacher gets clean work and no way to tell whether any thinking happened.

The usual fix is an AI detector, and it brings its own problem. In a 2023 study, seven widely-used detectors labelled 61% of human-written TOEFL essays by non-native English writers as AI-generated, on average ([Liang et al.](https://arxiv.org/abs/2304.02819); 91 essays, so a small sample, and the detectors were the ones available then). It's a smoke alarm that goes off whenever someone cooks dinner: loud, but it doesn't make anyone safer.

I'm working on the other path. A coach that asks the next question instead of writing the answer, and a record of the drafts, so a teacher can see the thinking instead of guessing at it.

---

## 🧠 What I'm building

### [Edudojo](https://edudojo.ai): a Socratic AI coach (beta)

The coach asks students questions until the thinking is theirs. Teachers can replay the drafts and the coach chat, and decide the grade themselves.

- **Coach, not ghostwriter.** It questions weak reasoning instead of rewriting it.
- **Draft history and teacher Replay.** Every version is kept, so you assess the process, not only the final text.
- **Red Team mode.** Now and then the coach slips in one small weak step, unannounced, and the student has to catch it.
- **Built for English and Hindi**, which is what the pilot tests.

**Where it stands today:** Edudojo is in beta. I'm working with Parishkar College, Jaipur, as our research partner, and the [pilot page](https://edudojo.ai/pilot) always has the current status. The pilot tests usability in English and Hindi, reliability, teacher workload and running cost. I don't claim learning gains, authorship verification or valid grades.

**Under the hood:** the coach agents are built with Google ADK, with Supabase for data, Vercel and Google Cloud for hosting and services, and models routed through OpenRouter.

Guides for teachers: [process-based assessment of AI-assisted work](https://edudojo.ai/learn/process-based-assessment) · [what to do instead of an AI detector score](https://edudojo.ai/learn/ai-detection-alternatives)

### 🎙️ Speech first: Odicto and Odicto Mobile

Learning tools shouldn't assume every learner types comfortably. Odicto is my speech-to-text project, built on that belief, and I use it every day. Both apps are open source under Apache-2.0.

| | **[Odicto](https://github.com/Gargeya-Grey/Odicto)** (desktop) | **[Odicto Mobile](https://github.com/Gargeya-Grey/Odicto-Mobile)** (Android) |
|---|---|---|
| **What it does** | Voice typing for Windows. Tap a hotkey, speak, tap again, and your words land where your cursor is. | An Android keyboard with a built-in microphone, plus an optional floating button. |
| **Speech engine** | Local Whisper by default, so your voice stays on your PC. The default model is English-only. Cloud engines and AI replies are optional. | Bring your own keys: Groq Whisper for speech, Gemini or OpenRouter for AI modes. Audio goes straight from the phone to the provider you pick, and keys stay in Android Keystore. |
| **Status** | Tested on Windows 10/11. macOS and Linux code exists but is untested. | Beta. Hands-on testing so far on a Samsung Galaxy S24 Ultra, so expect rough edges on other phones. |
| **Get it** | [Releases](https://github.com/Gargeya-Grey/Odicto/releases) | [Releases](https://github.com/Gargeya-Grey/Odicto-Mobile/releases) |

---

## 🔓 More projects

| Project | What it is |
|---|---|
| **[TwinAatma](https://github.com/Gargeya-Grey/TwinAatma)** | Local-first memory for AI agents. Your notes stay as markdown you own, an MCP server lets any agent search them, and changes to your profile need your explicit yes. MIT. |
| **[proof](https://github.com/Gargeya-Grey/proof)** | A verification-first workflow plugin for coding agents (Claude Code, Codex, Grok). Built on [pstack](https://github.com/cursor/plugins/tree/main/pstack) by Lauren Tan and [Matt Pocock's skills](https://github.com/mattpocock/skills), with credit. MIT. |
| **[Adversary-Planner-Loop](https://github.com/Gargeya-Grey/Adversary-Planner-Loop)** | A model-agnostic generator-and-evaluator loop that sharpens engineering plans. It writes the prompts and JSON schemas, and your agent runs them. |
| **[Documenter-MCP](https://github.com/Gargeya-Grey/Documenter-MCP)** | An MCP server that checks a repository's documentation and says whether it needs fixing or writing. |
| **[DataCleanOpenEnv](https://github.com/Gargeya-Grey/DataCleanOpenEnv)** | My submission to the OpenEnv Hackathon (Scaler School x Meta x Hugging Face), on automated data cleaning. |

The code behind my sites is public too: [Personal-Brand-Website](https://github.com/Gargeya-Grey/Personal-Brand-Website) (sgargeya.com) and [Portfolio-CV-Webpage](https://github.com/Gargeya-Grey/Portfolio-CV-Webpage) (my online CV, cv.sgargeya.com).

---

## 🧭 Topics I work on

AI tutoring that asks instead of tells · process-based assessment · alternatives to AI detection · speech-first learning · voice typing and speech-to-text · memory and verification for AI agents.

---

## 🛤️ Background

- **2026 to now:** Founder, [Edudojo](https://edudojo.ai).
- **2025 to 2026:** Founding AI Engineer at Evvolv. Built multi-agent "AI workers" that automate everyday workflows for small and medium businesses.
- **2024 to 2025:** Data Scientist and Automation Specialist at RVS Consensus+. Data pipelines and live dashboards (Dash, Plotly, SQL) over 10M+ rows of transaction data for 15+ global Tier-1 banks, plus automation that saved 5+ hours a day.
- **2023:** Machine Learning Consultant at Imperial College London, on data-driven flight control for flapping-wing micro air vehicles.
- **2022 to 2023:** MSc in Artificial Intelligence, Queen Mary University of London (Distinction).
- **2018 to 2022:** B.Tech in Computer Science, UPES (Honors).
- **Along the way:** three years of bartending in London, which taught me more about reading people than any textbook. I also wrote [17 articles on data science and machine learning on Analytics Vidhya](https://www.analyticsvidhya.com/blog/author/gargeya/).

**Toolkit:** Python, SQL, TypeScript, PyTorch, TensorFlow, LLMs and agents (MCP, n8n), computer vision, reinforcement learning, Next.js, Android (Kotlin), Docker, Git, CI/CD.

---

## 📬 Say hello

I'm especially glad to hear from **teachers, schools and training providers** who are working out how to assess student work now that AI exists. If you'd like to see Edudojo in action, [email me](mailto:gargeya.sharma@gmail.com).

I write about AI, coding agents and learning in the journal at [sgargeya.com](https://sgargeya.com). You'll also find me on [X](https://x.com/GargeyaS) and [YouTube](https://www.youtube.com/@GargeyaS).
