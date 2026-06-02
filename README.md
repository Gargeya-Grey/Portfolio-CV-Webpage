# 🌐 Gargeya Sharma — Digital Portfolio & CV
**The open-source codebase behind [sgargeya.com](https://sgargeya.com)**

Welcome to the repository for my personal brand and interactive digital CV. Built to showcase a unique professional journey bridging **Artificial Intelligence architecture** and **creative human dynamics (Theatre background)**, this site is engineered for fast performance, premium aesthetics, and responsive micro-interactions.

---

## ✨ Key Features & Design System
* **Premium Glassmorphic UI:** Smooth, unified dark/light translucent surfaces utilizing modern Tailwind CSS classes and vanilla backdrop filters.
* **Fluid Framer Motion Animations:** Curated, performant scroll-triggered transitions, custom scroll indicators, and ticker animations.
* **Dynamic Experience Timeline:** An interactive timeline tracing experience across AI architecture (Edudojo.ai), enterprise financial automation (RVS Consensus+), ML consulting (Imperial College London), and adaptability foundations.
* **The Lab Showcase:** A filterable and customizable grid showing public research projects, agentic framework MCP servers, and writing profiles.
* **Edge-Native Performance:** Optimized specifically for high-speed edge loading on global servers.

---

## 🛠️ Technology Stack
* **Framework:** [Next.js 15+](https://nextjs.org/) (React 19, App Router)
* **Styling:** [Tailwind CSS 4.x](https://tailwindcss.com/) & PostCSS
* **Animation:** [Framer Motion 12.x](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment/Hosting:** Cloudflare Pages with [@opennextjs/cloudflare](https://github.com/opennextjs/opennextjs-cloudflare)

---

## 🚀 Getting Started & Local Development

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Clone the Repository
```bash
git clone https://github.com/Gargeya-Grey/Portfolio-CV-Webpage.git
cd Portfolio-CV-Webpage
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### 4. Build for Production
```bash
npm run build
```

---

## ☁️ Deployment

This project is configured to build and deploy to **Cloudflare Pages** using OpenNext:

* **Preview builds:**
  ```bash
  npm run preview
  ```
* **Deploy to Cloudflare:**
  ```bash
  npm run deploy
  ```

---

## 📂 Repository Structure
```
├── app/                  # Next.js App Router (Layouts, pages, globals.css)
├── components/           # Custom React components (Hero, Ventures, Lab, Navigation)
├── lib/                  # Data structures, project sequences, and helper scripts
├── profiles/             # Trackable markdown files for GitHub/LinkedIn bios
├── public/               # Static assets (logos, images, favicons)
├── package.json          # Node dependencies and project scripts
├── tsconfig.json         # TypeScript compiler configuration
└── wrangler.jsonc        # Cloudflare Wrangler pages environment configuration
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
