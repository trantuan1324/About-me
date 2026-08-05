# Quang Tuan Tran — Personal Portfolio & Technical Showcase

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-purple?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![next-intl](https://img.shields.io/badge/next--intl-i18n-emerald?style=for-the-badge&logo=googletranslate&logoColor=white)](https://next-intl.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> A modern, performance-first personal portfolio and technical showcase engineered with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, and `next-intl` (English & Vietnamese). Designed with an emphasis on minimalist aesthetics, smooth micro-interactions, robust architecture, and production-ready quality.

---

## 🔗 Live Demo & Preview

- **Live URL**: [https://about-me-six-kohl.vercel.app/](https://about-me-six-kohl.vercel.app/)
- **English Version**: `https://about-me-six-kohl.vercel.app/`
- **Vietnamese Version**: `https://about-me-six-kohl.vercel.app/vi`

## 💡 About The Project

This repository goes beyond a standard personal resume website. It is an end-to-end demonstration of modern frontend software architecture, component-driven engineering, and internationalization standards.

As a **Backend Developer** specializing in Java 21, Spring Boot 4, PostgreSQL, and scalable microservices, I built this application to showcase both my technical competencies and my engineering mindset:

- **Cooperative**: Clean codebase organization, intuitive component interfaces, contract-driven i18n message schemas, and effortless developer onboarding.
- **Steady**: High stability, zero hydration warnings, strict TypeScript static typing, defensive fallback handling, and SSG/SSR performance optimizations.
- **Flexible**: Modular feature-based folder structure, theme-agnostic design system, dynamic `next-intl` localization, and future-proof extensibility.

---

## ✨ Key Features

- ⚡ **Next.js 15 App Router & React 19**: Built with Turbopack for rapid compilation and static site generation (SSG).
- 🌐 **Full Multi-Language (i18n)**: Seamless locale switching between English (`/en`) and Vietnamese (`/vi`) powered by `next-intl` with route location preservation and cookie persistence.
- 🎨 **Developer-Centric Aesthetics**: Linear/Vercel-inspired UI featuring background developer grids, radial spotlight glows, custom glassmorphism panels, and side-by-side terminal code previews.
- 🌓 **Dark / Light Mode**: Instant theme switching powered by `next-themes` with zero flicker or flash of unstyled content (FOUC).
- 📱 **Fully Responsive Layout**: Fluid adaptation from mobile viewports (375px) up to ultra-wide displays (4K).
- 🚀 **Framer Motion Micro-Animations**: Smooth scroll reveals, layout transitions, typing terminal animations, and floating UI elements.
- 📊 **Visualized Competencies**: Tech stack breakdown featuring sub-technology pill badges, interactive category filters, and detailed case studies (replacing plain percentage bars).
- 🎓 **Comprehensive Experience & Projects**: Interactive vertical timeline (IT Center HNUE, VTI Academy, GHTK) and deep-dive case study for **E-Flow Learning**.
- 📬 **Interactive Contact Form**: Direct message UI with client validation, email/phone copy-to-clipboard functionality, and toast feedback.
- 🔍 **SEO & Accessibility Optimized**: Semantic HTML5 tags, full JSON-LD `Person` schema, Open Graph tags, Twitter cards, and screen-reader accessibility (`WCAG`).

---

## 🛠️ Tech Stack & Dependencies

### Core Technologies

| Category      | Technology                                                | Usage / Purpose                                                  |
| :------------ | :-------------------------------------------------------- | :--------------------------------------------------------------- |
| **Framework** | [Next.js 15](https://nextjs.org/)                         | App Router, SSG static page prerendering, Turbopack              |
| **Language**  | [TypeScript 5](https://www.typescriptlang.org/)           | Strict type safety, interface contracts, zero `any` policy       |
| **Styling**   | [Tailwind CSS v4](https://tailwindcss.com/)               | CSS variables, custom developer grid utility, responsive design  |
| **Animation** | [Framer Motion 12](https://www.framer.com/motion/)        | Scroll progress, layout animations, modal transitions            |
| **i18n**      | [next-intl](https://next-intl.dev/)                       | Localized routing (`/[locale]`), request config, message bundles |
| **Icons**     | [Lucide React](https://lucide.dev/)                       | Clean developer icons + custom SVG brand icons                   |
| **Theme**     | [next-themes](https://github.com/pacocoursey/next-themes) | Dark / Light theme provider & state persistence                  |

---

## 🏗️ Architecture & Design Principles

The application enforces a **Feature-Based Folder Structure** and **Clean Architecture** principles to separate concerns, improve testability, and isolate domain boundaries.

```
                  ┌───────────────────────────────┐
                  │      Root Layout & Config     │
                  │   (next-intl, ThemeProvider)  │
                  └──────────────┬────────────────┘
                                 │
                 ┌───────────────┴───────────────┐
                 │       App Router Routes       │
                 │   app/[locale]/ (en / vi)     │
                 └───────────────┬───────────────┘
                                 │
          ┌──────────────────────┼──────────────────────┐
          │                      │                      │
┌─────────┴──────────┐ ┌─────────┴──────────┐ ┌─────────┴──────────┐
│   Feature Modules  │ │  Layout Components │ │  Shared Components │
│  (Hero, About...)  │ │  (Navbar, Footer)  │ │ (Terminal, Badge) │
└─────────┬──────────┘ └────────────────────┘ └────────────────────┘
          │
┌─────────┴──────────┐
│  Message JSONs     │
│ (en.json, vi.json) │
└────────────────────┘
```

### Key Architectural Decisions

1. **Package-by-Feature Design**: Section implementations (`hero`, `about`, `experience`, `skills`, `project`, `education`, `certifications`, `contact`) are encapsulated within `features/` directory rather than scattered across monolithic folders.
2. **Localization Non-Literal Content**: Message bundles (`messages/en.json` and `messages/vi.json`) do not rely on direct word-for-word translation. English copy is written for international engineering managers, while Vietnamese copy is tailored naturally for local technical recruiters.
3. **Safe Dynamic Array Rendering**: Translatable arrays (such as responsibilities, achievements, and traits) are fetched safely via `t.raw()` to eliminate index out-of-bound errors across locales.

---

## 📂 Project Structure

```
my-profile/
├── app/
│   └── [locale]/                 # Localized Next.js App Router directory
│       ├── layout.tsx            # Root layout with ThemeProvider & next-intl
│       ├── page.tsx              # Main portfolio single-page application
│       └── not-found.tsx         # Developer-styled 404 error page
├── components/
│   ├── layout/                   # Layout wrappers (Navbar, Footer, ScrollProgress, BackToTop)
│   ├── providers/                # App-wide providers (ThemeProvider)
│   └── shared/                   # Shared UI primitives (TerminalWindow, SectionHeader, BrandIcons)
├── constants/
│   ├── profile.ts                # Structured profile data (experiences, skills, projects)
│   └── seo.ts                    # Metadata, OpenGraph & JSON-LD Person schema
├── features/                     # Self-contained feature section modules
│   ├── about/                    # AboutSection & CSF Philosophy cards
│   ├── certifications/           # CertificationsSection & Aptis ESOL score breakdown
│   ├── contact/                  # ContactSection & message form
│   ├── education/                # EducationSection
│   ├── experience/               # ExperienceTimeline & career cards
│   ├── hero/                     # HeroSection, typing text & Java terminal preview
│   ├── project/                  # ProjectSection & E-Flow Learning showcase
│   └── skills/                   # SkillsSection & sub-technology pill badges
├── i18n/
│   ├── request.ts                # Server message loader config for next-intl
│   └── routing.ts                # Locale routing configuration (en, vi)
├── messages/                     # Translation bundles
│   ├── en.json                   # English localized content
│   └── vi.json                   # Vietnamese localized content
├── types/
│   └── portfolio.ts              # TypeScript interface definitions
├── middleware.ts                 # next-intl localized routing middleware
├── next.config.ts                # Next.js configuration with next-intl plugin
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: `v20.0.0` or higher
- **npm**: `v10.0.0` or higher (or `pnpm` / `yarn`)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/trantuan1324/my-profile.git
   cd my-profile
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application in action.

---

## ⚙️ Available Scripts

In the project directory, you can run:

| Command         | Description                                                            |
| :-------------- | :--------------------------------------------------------------------- |
| `npm run dev`   | Starts the Next.js development server with hot-module reloading (HMR). |
| `npm run build` | Builds the production bundle using Next.js Turbopack compiler.         |
| `npm run start` | Starts the production server using the built bundle.                   |
| `npm run lint`  | Runs Next.js ESLint checker for code quality and syntax errors.        |

---

## 🛠️ Customization Guide

If you wish to use this codebase as a template for your own developer portfolio:

### 1. Update Personal Profile Content

Modify `constants/profile.ts` and update your personal details (name, email, social URLs, career history, education, and project details).

### 2. Update Localization Messages

Edit `messages/en.json` and `messages/vi.json` to update text content in both languages.

### 3. Add a New Locale (e.g. Japanese `ja` or French `fr`)

1. Open `i18n/routing.ts` and add the new locale to the array:
   ```ts
   export const routing = defineRouting({
     locales: ["en", "vi", "ja"],
     defaultLocale: "en",
   });
   ```
2. Create `messages/ja.json` with the corresponding translation keys.
3. Update `components/layout/LanguageSwitcher.tsx` to include the new flag badge.

---

## ⚡ Performance & Optimization Highlights

- **Zero-Flicker Dark Mode**: Configured `next-themes` with `suppressHydrationWarning` to eliminate theme toggle layout shifts.
- **Static Generation (SSG)**: Prerenders pages ahead of time for both `/en` and `/vi` routes, achieving near-instant Largest Contentful Paint (LCP).
- **Sub-100ms Interactions**: Light-weight animations powered by Framer Motion using hardware-accelerated CSS transforms.
- **Semantic HTML & WCAG Accessibility**: Form controls have explicit labels, screen-reader text (`aria-label`), keyboard focus rings, and contrast compliance.

---

## 🗺️ Roadmap & Future Enhancements

- [ ] **Technical Blog**: Markdown/MDX powered engineering articles on Spring Boot, PostgreSQL performance, and system design.
- [ ] **GitHub Activity Graph**: Real-time integration with GitHub REST API displaying active contribution heatmap.
- [ ] **Project Filtering**: Dynamic filtering for side projects by tag (`Spring Boot`, `Swift`, `Microservices`).
- [ ] **Interactive System Design Canvas**: Visual interactive diagrams for backend architecture breakdowns.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! In alignment with the **Cooperative** engineering philosophy:

1. Fork the Project repository.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author & Contact

**Quang Tuan Tran**  
_Backend Developer — Thanh Xuan, Hanoi, Vietnam_

- **Email**: [tranqt.work@gmail.com](mailto:tranqt.work@gmail.com)
- **Phone**: +84 355608896
- **GitHub**: [@trantuan1324](https://github.com/trantuan1324)
- **LinkedIn**: [trantuan224](https://www.linkedin.com/in/trantuan224/)

---

<p center align="center">
  Crafted with ❤️ by <a href="https://github.com/trantuan1324">Quang Tuan Tran</a>
</p>
