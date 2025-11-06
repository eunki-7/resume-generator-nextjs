
<div align="center">
  <h2><b>Eunki7 – Next.js Static Resume</b></h2>
  <p>📌 한글 / 영어 이력서를 자동으로 정적 페이지로 생성하는 Next.js 기반 Resume 템플릿</p>
  <p>✅ Docker 빌드 • ✅ GitHub Actions 자동 배포 • ✅ GitHub Pages 운영</p>
  <hr/>
</div>

## ✅ Introduce

이 프로젝트는 **Next.js + Static HTML Export** 기반으로 동작하는 개인 Resume 템플릿입니다.

✔ `payload/` 폴더의 TypeScript 파일만 수정하면 → 디자인 수정 없이 개인화된 이력서 자동 생성  
✔ `ko`, `en` 두 언어 버전을 자동으로 빌드 및 배포  
✔ GitHub Pages, 별도 Repo 모두 지원  
✔ 개발자의 프로젝트/경험/스킬을 깔끔한 UI로 표현하도록 구성됨

## ✅ Demo Links
| 언어 | URL |
|------|-----|
| 🇰🇷 Korean | https://eunki-7.github.io/resume_ko |
| 🇺🇸 English | https://eunki-7.github.io/resume_en |
| 🔗 Main Source | https://github.com/eunki-7/resume_main |

## ✅ Build & Develop

```bash
npm install

npm run dev:ko   # 한글 미리보기
npm run dev:en   # 영어 미리보기

npm run build:ko
npm run build:en
```

## ✅ GitHub Pages 운영 방식 추천

| Repo | 역할 |
|------|------|
| resume_main | 소스코드 + Docker + GitHub Actions |
| resume_ko | 한글 정적 HTML 레포 |
| resume_en | 영어 정적 HTML 레포 |

---

## ✅ License & Credit

MIT License  
© 2025 Eunki7

## ✅ 원작자
> 🙏 **Special Thanks to [Yowu (uyu423)](https://github.com/uyu423/resume-nextjs)**  
> 본 프로젝트는 [`resume-nextjs`](https://github.com/uyu423/resume-nextjs) 템플릿을 기반으로 커스터마이징하여 제작되었습니다.
