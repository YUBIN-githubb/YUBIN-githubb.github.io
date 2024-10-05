---
title: Node.js를 활용한 웹페이지 개발
summary: Node.js와 express를 활용해서 축구 커뮤니티 페이지를 만들어보자! 
date: 2023-04-01
authors:
  - admin
# tags:
#   - Hugo
#   - Hugo Blox
#   - Markdown
image: 
  caption: "nodejs.png"
---

축구를 좋아하는 사람이라면 자신만의 축구 커뮤니티를 만들고 싶다는 생각을 한 번쯤 해봤을 것입니다. 이번 글에서는 Node.js와 Express를 사용하여 축구 커뮤니티 페이지를 만드는 과정을 설명하려고 합니다. 기본적인 사용자 등록, 게시판 기능 등을 구현하며 Node.js와 Express의 기본 개념을 익힐 수 있습니다.

## 프로젝트 개요

우리가 만들 프로젝트는 축구 팬들이 소통할 수 있는 커뮤니티 페이지입니다. 다음과 같은 기능을 포함할 예정입니다:

회원가입 및 로그인: 사용자들이 커뮤니티에 참여할 수 있도록 계정을 만들고 로그인할 수 있게 합니다.

게시판: 축구와 관련된 글을 올리거나 댓글을 달아 서로 소통할 수 있는 공간을 만듭니다. 좋아요와 싫어요 기능이 있으며 게시글의 조회수도 표시됩니다.

프로필 관리: 사용자는 자신의 원하는 사진, 닉네임으로 프로필을 수정가능합니다.

이러한 기능을 중심으로 간단한 웹 애플리케이션을 구축해보겠습니다.


## 개발 환경 설정

우선 개발을 시작하기 전에 Node.js와 Express를 설치하고 프로젝트 환경을 구성해야 합니다.

Node.js 설치

Node.js는 서버 측 자바스크립트 환경으로, 비동기 처리를 통해 고성능 웹 애플리케이션을 만들 수 있습니다. 먼저 Node.js 공식 사이트에서 Node.js를 다운로드하고 설치하세요.

Express 설치

Express는 Node.js 위에서 돌아가는 웹 프레임워크로, 간단하게 서버를 설정하고 HTTP 요청을 처리할 수 있습니다. Express는 기본적인 웹 애플리케이션을 빠르게 구축하는 데 매우 유용합니다.

프로젝트 폴더를 생성한 후, 다음 명령어를 통해 Express를 설치합니다

```bash
npm init -y   # package.json 파일 생성
npm install express  # Express 설치
```

## 프로젝트 구조

프로젝트의 기본 구조는 다음과 같습니다

```bash
/soccer-community
  /public      # 정적 파일 (CSS, 이미지 등)
  /routes      # 라우팅 파일
  /views       # 템플릿 파일 (EJS 등)
  /controllers # 컨트롤러 파일
  app.js       # 메인 서버 파일
  package.json # npm 패키지 정보
```

메인 서버 설정 (app.js)

```javascript
const express = require('express');
const app = express();
const port = 3000;

// 정적 파일 제공
app.use(express.static('public'));

// 라우팅 설정
app.get('/', (req, res) => {
  res.send('축구 커뮤니티에 오신 것을 환영합니다!');
});

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
```

app.js는 프로젝트의 메인 파일로, Express 서버를 설정하고 기본적인 라우트를 정의합니다. 서버를 실행하려면 다음 명령어를 터미널에서 입력하세요.

```bash
node app.js
```

## 라우팅과 게시판 기능 구현

이제 축구 커뮤니티의 핵심 기능인 게시판을 구현하겠습니다. 사용자는 글을 작성하고, 다른 사용자의 글을 볼 수 있습니다. 이를 위해 게시판 라우트를 만들어보겠습니다.

게시판 라우트 (routes/board.js)

```javascript
const express = require('express');
const router = express.Router();

// 게시판 목록 페이지
router.get('/board', (req, res) => {
  res.render('board', { posts: [] });
});

// 글 작성 페이지
router.get('/board/new', (req, res) => {
  res.render('new-post');
});

module.exports = router;
```

뷰 템플릿 설정 (views/board.ejs)

게시판에서 사용자가 작성한 글을 보여주기 위해 뷰 템플릿을 사용합니다. 여기서는 EJS 템플릿 엔진을 사용합니다.

```html
<!DOCTYPE html>
<html>
<head>
  <title>축구 커뮤니티 게시판</title>
</head>
<body>
  <h1>축구 커뮤니티 게시판</h1>
  <% if (posts.length > 0) { %>
    <ul>
      <% posts.forEach(post => { %>
        <li><%= post.title %> - <%= post.author %></li>
      <% }) %>
    </ul>
  <% } else { %>
    <p>아직 게시물이 없습니다.</p>
  <% } %>
  <a href="/board/new">새 글 작성하기</a>
</body>
</html>
```

## 사용자 인증 (로그인/회원가입)

축구 커뮤니티에 참여하려면 사용자 인증이 필요합니다. 간단한 로그인 및 회원가입 기능을 구현해 보겠습니다.

Express에서 세션 기반 인증을 구현할 수 있지만, 여기서는 인증 로직을 단순화해서 사용자의 로그인 상태를 유지합니다. 추후 실제 서비스라면 JWT나 OAuth 같은 인증 방식을 적용하는 것이 좋습니다.

회원가입 라우트 (routes/auth.js)

```javascript
const express = require('express');
const router = express.Router();

// 회원가입 페이지
router.get('/signup', (req, res) => {
  res.render('signup');
});

// 로그인 페이지
router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
```

## 데이터베이스 연동

실제 커뮤니티에서는 데이터를 저장할 수 있는 데이터베이스가 필요합니다. 여기서는 간단하게 MongoDB를 사용해 게시물과 사용자 정보를 저장합니다.

MongoDB 설치 후, mongoose 라이브러리를 통해 데이터베이스와 연동할 수 있습니다.

```bash
npm install mongoose
```

MongoDB 연결 (app.js)

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/soccer-community', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB 연결 성공'))
  .catch(err => console.log('MongoDB 연결 실패', err));
```

Node.js와 Express를 사용해 축구 커뮤니티 웹 애플리케이션을 구축하는 과정을 간단하게 살펴봤습니다. 이번 프로젝트에서는 기본적인 회원가입, 게시판, 그리고 MongoDB를 이용한 데이터베이스 연동까지 다뤘습니다. 추가적으로 더 많은 기능을 넣어 발전시킬 수 있으며, 실제 배포 시에는 보안과 성능 최적화에 더욱 신경 써야 합니다.

축구 커뮤니티를 통해 팬들이 더욱 소통하고 정보를 교환할 수 있는 공간을 만들어 보세요!