
<div align="center">
  <h2><b>Eunki7 – Next.js Static Resume</b></h2>
  <p>📌 한글 / 영어 이력서를 자동으로 정적 페이지로 생성하는 Next.js 기반 Resume 템플릿</p>
  <p>✅ Docker 빌드 • ✅ GitHub Actions 자동 배포 • ✅ GitHub Pages 운영</p>
  <hr/>
</div>

## ✅ 소개

이 프로젝트는 **Next.js + Static HTML Export** 기반으로 동작하는 개인 Resume 템플릿입니다.

✔ `payload/` 폴더의 TypeScript 파일만 수정하면 → 디자인 수정 없이 개인 이력서 자동 생성  
✔ 한글/영문 버전 개별 빌드  
✔ GitHub Pages 또는 개별 Repo에 정적 배포 가능  
✔ 개발자의 경력·스킬·프로젝트를 깔끔한 UI로 표현하도록 구성됨

---

## ✅ 데모 링크

| 언어 | URL |
|------|-----|
| 🇰🇷 Korean | https://eunki-7.github.io/resume_ko |
| 🇺🇸 English | https://eunki-7.github.io/resume_en |
| 🔗 Main Source | https://github.com/eunki-7/resume_main |

---

## ✅ 개발 & 빌드

```bash
npm install

# 한글 개발 모드
npm run dev:ko

# 영어 개발 모드
npm run dev:en

# 한글 정적 빌드
npm run build:ko

# 영어 정적 빌드
npm run build:en
```

빌드 결과물:

```
docs/ko
docs/en
```

---

## ✅ Docker 자동 빌드

Docker가 소스코드를 기반으로 한글/영문 정적 사이트를 생성합니다.

- Node 환경 설치 불필요
- 컨테이너 내부에서 빌드 후 `/app/docs`에 결과 저장
- 로컬 또는 GitHub Actions 어디서든 동일하게 사용

---

## ✅ GitHub Actions 자동 배포

`main`에 push → 자동 실행

1. Docker로 빌드
2. `docs/ko`, `docs/en` 생성
3. 해당 폴더를 별도 Repo 또는 Pages 브랜치로 push

✅ 개발자는 **commit & push**만 하면 사이트 자동 업데이트

---

## ✅ GitHub Pages 구조 (추천)

| Repo 이름 | 역할 |
|-----------|------|
| `resume_main` | 소스코드 + 빌드/배포 자동화 |
| `resume_ko`   | 한글 정적 리소스 |
| `resume_en`   | 영어 정적 리소스 |

---

## ✅ 프로젝트 구조

```
.
├── payload/     # 이력서 데이터 (여기만 수정하면 개인화 완성)
├── component/
├── pages/
├── public/
└── docs/        # 빌드 결과물
```

---

## ✅ 라이선스 & Thanks

MIT License  
© 2025 Eunki7

## ✅ 원작자
> 🙏 **Special Thanks to [Yowu (uyu423)](https://github.com/uyu423/resume-nextjs)**  
> 본 프로젝트는 `resume-nextjs` 템플릿을 기반으로 커스터마이징하여 제작되었습니다.
