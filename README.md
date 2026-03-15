# Shayan Umair — AI & Data Science Portfolio

> **Portfolio website** · React · TypeScript · GSAP · Three.js · Vite

---

## ✨ Overview

Open-source portfolio for **Shayan Umair**, showcasing experience in **AI, Data Science, and Full-Stack Development**. Built with a modern stack, smooth scroll animations, and a responsive layout.

---

## 🛠 Tech Stack

| Category      | Technologies |
|---------------|--------------|
| **Frontend**  | React 18, TypeScript, Vite |
| **Styling**   | CSS3, CSS Variables |
| **Animation** | GSAP (ScrollTrigger, ScrollSmoother, SplitText) |
| **3D**        | Three.js, React Three Fiber, Drei |
| **Icons**     | React Icons |

---

## 📁 Project Structure

```
├── public/          # Static assets, images, models
├── src/
│   ├── components/   # React components (About, Career, Contact, Services, Work, etc.)
│   ├── context/     # React context (e.g. Loading)
│   ├── data/        # Static data
│   └── utils/       # GSAP helpers, section animations, split text
├── index.html
├── package.json
├── vite.config.ts
└── vercel.json      # Vercel deployment config
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and **npm** (or yarn/pnpm)

### Install & Run

```bash
# Clone the repository
git clone https://github.com/shayan9689/Umair-portfolio.git
cd Umair-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview   # Optional: preview production build locally
```

---

## 📧 Contact Form

The contact form sends messages to a custom backend. For local development or your own deployment:

- **Backend URL:** `https://shayan-personal-assistant.vercel.app/contact`
- **Method:** `POST` with JSON body: `name`, `email`, `subject`, `message`

No environment variables are required in this repo for the form to work with the default endpoint.

---

## 🌐 Deploy on Vercel

1. **Push your code** to GitHub (or connect another Git provider in Vercel).

2. **Import the project** in [Vercel](https://vercel.com):
   - **New Project** → Import your repository.
   - Vercel will use the existing **`vercel.json`** in the project (build command, output directory, SPA rewrites).

3. **Deploy:**
   - Click **Deploy**. Vercel runs `npm run build` and serves the `dist` folder.
   - Optional: add **Environment Variables** in **Project Settings** if you add any later.

4. **Custom domain (optional):** In **Project Settings → Domains**, add your domain.

---

## 📄 License

This project is open source under the **[MIT License](LICENSE)**.

---

## 👤 Author

**Shayan Umair**  
- Portfolio: [shayan-portfolio-lac.vercel.app](https://shayan-portfolio-lac.vercel.app/)  
- GitHub: [shayan9689](https://github.com/shayan9689)  
- LinkedIn: [Shayan Umair](https://www.linkedin.com/in/shayan-umair-3b2577225/)

---

*Built with React, TypeScript, GSAP, and Vite.*
