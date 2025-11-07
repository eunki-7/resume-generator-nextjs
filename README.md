
<div align="center">
  <h2><b>Next.js Static Resume / CV Generator (Multi-Language | Developer Portfolio)</b></h2>
  <p>📌 A modern static resume & CV template built with Next.js and TypeScript — supports Korean, English, and any additional languages from a single codebase.</p>
  <p>✅ Docker Build • ✅ GitHub Actions CI/CD • ✅ Deploy to GitHub Pages • ✅ Perfect for Developer Portfolios</p>
  <p><i>A fully open-source static resume & developer CV generator using Next.js and TypeScript — ideal for software, cloud, DevOps, and AI engineers.</i></p>
  <br/>

  <!-- Badges -->
  <img src="https://img.shields.io/badge/Next.js-Static%20Export-blue" />
  <img src="https://img.shields.io/badge/TypeScript-Strict%20Mode-informational" />
  <img src="https://img.shields.io/badge/Docker-Build%20Ready-success" />
  <img src="https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-green" />
  <img src="https://img.shields.io/badge/License-MIT-yellow" />
  <hr/>
</div>

## ✅ Overview

This project is a **Next.js + Static Export** based resume generator.

- Modify only TypeScript data inside `payload/` — no CSS/HTML editing required  
- Independent Korean & English builds  
- Deployable to **GitHub Pages** or any static hosting service  
- Designed for developers who want a clean, modern, maintainable resume

---

## ✅ Demo

| Version | URL |
|--------|-----|
| 🇰🇷 Korean Live Demo | **https://eunki-7.github.io/resume_ko/** |
| 🇺🇸 English Live Demo | **https://eunki-7.github.io/resume_en/** |
| 🌍 Other Languages | Host your own version at `https://<your-github-username>.github.io/resume_<lang>/` |

---

## ✅ Preview Screenshots

> *(Add your own screenshots here — recommended size: 1280×720)*

```
/assets
  ├── preview_ko.png
  ├── preview_en.png
  └── preview_other.png # (Optional) For any additional language
```

Example usage in README:

```markdown
![Korean Preview](assets/preview.png)
![English Preview](assets/preview.png)
![Other Language Preview](assets/preview_other.png)  <!-- Optional -->
```

---

## ✅ PDF Download (Optional Feature)

You may add a PDF download button that links to a generated resume PDF.

Example Button:

```html
<a href="/resume.pdf" download>
  <img src="https://img.shields.io/badge/Download-PDF-red?style=for-the-badge" />
</a>
```

PDF can be created manually or using `puppeteer`, `wkhtmltopdf`, or GitHub Actions workflow.

---

## ✅ Tech Stack

- **Next.js** (Static HTML Export)
- **TypeScript**
- **Docker**
- **GitHub Actions**

---

## ✅ Development & Run

```bash
npm install

# Korean dev mode
npm run dev:ko

# English dev mode
npm run dev:en

# Korean static build
npm run build:ko

# English static build
npm run build:en

# Other language static build (optional)
# Example: French / Japanese / Spanish
npm run build:<lang>
```

Build output:

```
docs/ko
docs/en
docs/<lang> # Other language (optional)
```

---

## ✅ Docker Build

```bash
docker build -t resume .
docker run resume
```

Outputs static HTML inside `/app/docs`

---

## ✅ CI/CD – GitHub Actions

This project includes a fully automated deployment pipeline.

✅ On every push to `main`:

1. Docker builds project
2. Static HTML exported
3. Korean → Pushed to `resume_ko`
4. English → Pushed to `resume_en`
5. GitHub Pages updates automatically

### ✅ Required Secrets

| Secret | Purpose |
|--------|---------|
| `KO_REPO_TOKEN` | Push access to `resume_ko` |
| `EN_REPO_TOKEN` | Push access to `resume_en` |
| `OTHER_REPO_TOKEN`  (optional) | Push access to additional language repos such as `resume_jp`, `resume_fr`, etc. |
| `SLACK_WEBHOOK_URL` (optional) | Slack notifications |

---

## ✅ Recommended Repository Setup

| Repository | Description |
|------------|-------------|
| `resume_main` | Source + Build + CI/CD |
| `resume_ko`   | Korean static export |
| `resume_en`   | English static export |
| `resume_<lang>` (optional) | Static export for any additional language (ex: `resume_jp`, `resume_fr`, ...) |

---

## ✅ Project Structure

```
.
├── payload/        # Resume data (edit only this)
├── components/
├── pages/
├── public/
└── docs/           # Generated static site
```

---

## ✅ License

MIT License  
© 2025 Eunki7

---

## ✅ Acknowledgments

Special thanks to **Yowu (uyu423)** for sharing the original open-source template:  
https://github.com/uyu423/resume-nextjs
