<p align="center">
  <img src="public/Portfolio Site Banner.png" alt="Risk & Fraud Analytics Banner">
</p>

# Personal Portfolio Architecture

This repository houses the source code and configuration infrastructure for my personal portfolio website, deployed via GitHub Pages. The platform is designed to serve as a centralized hub showcasing my technical competencies, forensic data pipelines, and analytical environments tailored for the financial risk and fraud detection sectors.

## 🛠️ Built With

*   **[Astro](https://astro.build/)** – Static site generator optimizing performance and build compilation speeds.
*   **[Tailwind CSS v4](https://tailwindcss.com/)** – Utility-first structural styling framework.
*   **TypeScript** – Implemented for strict type-safe environment configuration.
*   **Tabler Icons** – System-wide open-source iconography layout components.

## 📁 Repository Structure

```text
portfolio/
├── public/
│   └── favicon.svg          # Custom site favicon
├── src/
│   ├── components/          # Modular Astro rendering layers
│   │   ├── About.astro      # Core professional positioning
│   │   ├── Education.astro  # Academic history metrics
│   │   ├── Experience.astro # Historical operational history
│   │   ├── Footer.astro     # Automated global page footer
│   │   ├── Header.astro     # Dynamic site navigation hooks
│   │   ├── Hero.astro       # Landing section & primary brand hooks
│   │   └── Projects.astro   # Specialized case study gallery
│   ├── pages/
│   │   └── index.astro      # Master layout compilation engine
│   ├── styles/
│   │   └── global.css       # Core Tailwind compilation rules
│   └── config.ts            # Type-safe parameter master configuration
├── .github/workflows/       # CI/CD deployment logic
│   └── deploy.yml           # Automated Astro build-to-pages pipeline (Node.js 24)
├── astro.config.mjs         # Global Astro environment specifications
└── package.json             # Core dependency manifest
