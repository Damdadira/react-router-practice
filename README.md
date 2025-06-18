# React Router

### 📚 학습 내용
- `React Router v6` 기반으로 라우팅 구성
- 주요 페이지와 하위 페이지 간 이동
- `Link` 컴포넌트를 사용해 네비게이션 구현
<br/>

### 🛠 기술 스택
<div>
  <img src="https://img.shields.io/badge/React-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB" />&nbsp;
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white" />&nbsp;
  <img src="https://img.shields.io/badge/Vite-%23646CFF.svg?style=flat-square&logo=vite&logoColor=white" />&nbsp;
</div>
<br/>

### 🧩 폴더 구조
```
📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┗ 📜Navbar.jsx          // Navbar 컴포넌트
 ┣ 📂pages
 ┃ ┣ 📜Home.jsx            // 메인 페이지
 ┃ ┣ 📜NotFound.jsx        // 404 오류 페이지
 ┃ ┣ 📜Root.jsx            // 전체 레이아웃 구성(Navbar + Outlet)
 ┃ ┣ 📜VideoDetail.jsx     // 비디오 상세 페이지
 ┃ ┗ 📜Videos.jsx          // 비디오 페이지
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```
<br/>

### 🎯 실행 방법

- **Node.js 18 이상 권장**

```bash
# 패키지 설치
npm install   # 또는 npm i

# 개발 서버 실행
npm run dev
```
