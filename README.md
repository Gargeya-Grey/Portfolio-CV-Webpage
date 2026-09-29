# 🌐 Gargeya Sharma — Digital Portfolio & CV
**The open-source codebase behind [cv.sgargeya.com](https://cv.sgargeya.com)**

Welcome to the repository for my personal brand and interactive digital CV. Built to showcase a unique professional journey bridging **Artificial Intelligence architecture** and **creative human dynamics (Theatre background)**, this site is engineered for fast performance, premium aesthetics, and responsive micro-interactions.

---

## ✨ Key Features & Design System
* **Preserved Glass Hero:** The original mint and blue light field, fluted columns, grain, and ambient motion remain the visual signature.
* **A Shared Personal Identity:** Instrument Serif, Manrope, navy ink, and teal connect the CV with [sgargeya.com](https://sgargeya.com). See [DESIGN.md](DESIGN.md) for the design direction.
* **Readable Career History:** A continuous experience chronology, a distinct current role, and compact academic records. The content remains readable without JavaScript.
* **Evidence First:** Linked publication credits, Imperial research, and a scoped RVS automation result follow the introduction.
* **Project Index:** Featured voice tools explain their practical use and the engineering contribution; publications lead the filterable index of research, code, and writing.
* **Accessible Navigation and Contact:** A persistent section index, keyboard-accessible mobile dialog, reduced-motion support, direct email, and copy feedback.
* **Print / Save PDF:** A separate print layout includes the complete CV even when the project index is filtered.

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
