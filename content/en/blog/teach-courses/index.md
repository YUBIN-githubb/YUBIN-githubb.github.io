---
title: Next.js로 SSR(Server-Side Rendering) 적용하기
summary: Next.js를 사용하여 SSR을 적용하는 방법
date: 2023-10-24
# math: true
authors:
  - admin
# tags:
#   - Hugo
#   - Hugo Blox Builder
#   - Markdown
image:
  caption: 'nextjs.jpg'
---

# Next.js로 SSR(Server-Side Rendering) 적용하기

Next.js는 React 기반의 프레임워크로, 서버 사이드 렌더링(SSR)을 쉽게 구현할 수 있게 해줍니다. 이 글에서는 Next.js를 사용하여 SSR을 적용하는 방법에 대해 자세히 알아보겠습니다.

## 목차
1. [SSR이란?](#ssr이란)
2. [Next.js 소개](#nextjs-소개)
3. [Next.js 프로젝트 설정](#nextjs-프로젝트-설정)
4. [페이지 생성 및 라우팅](#페이지-생성-및-라우팅)
5. [getServerSideProps를 사용한 SSR](#getserversideprops를-사용한-ssr)
6. [동적 라우팅과 SSR](#동적-라우팅과-ssr)
7. [SSR과 SEO](#ssr과-seo)
8. [성능 최적화 팁](#성능-최적화-팁)

## SSR이란?

서버 사이드 렌더링(SSR)은 웹 페이지의 초기 로드를 서버에서 처리하는 기술입니다. 이는 다음과 같은 이점을 제공합니다:

- 초기 페이지 로드 시간 감소
- 검색 엔진 최적화(SEO) 향상
- 더 나은 사용자 경험

## Next.js 소개

Next.js는 React 애플리케이션을 위한 프레임워크로, 다음과 같은 기능을 제공합니다:

- 간편한 페이지 기반 라우팅
- 자동 코드 분할
- SSR 및 정적 사이트 생성(SSG) 지원
- TypeScript 지원
- 빠른 새로고침을 위한 개발 환경

## Next.js 프로젝트 설정

Next.js 프로젝트를 시작하려면 다음 명령어를 실행합니다:

```bash
npx create-next-app@latest my-ssr-app
cd my-ssr-app
npm run dev
```

이제 `http://localhost:3000`에서 애플리케이션을 확인할 수 있습니다.

## 페이지 생성 및 라우팅

Next.js에서는 `pages` 디렉토리 내의 파일 구조가 곧 라우팅 구조가 됩니다.

```jsx
// pages/index.js
export default function Home() {
  return <h1>Welcome to Next.js!</h1>
}

// pages/about.js
export default function About() {
  return <h1>About Us</h1>
}
```

위 코드는 자동으로 `/` 및 `/about` 경로를 생성합니다.

## getServerSideProps를 사용한 SSR

`getServerSideProps` 함수를 사용하여 서버 사이드 렌더링을 구현할 수 있습니다:

```jsx
// pages/ssr-example.js
export default function SSRPage({ data }) {
  return <div>서버에서 가져온 데이터: {data}</div>
}

export async function getServerSideProps() {
  // 서버 사이드에서 실행되는 코드
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return { props: { data } }
}
```

이 페이지는 매 요청마다 서버에서 렌더링되며, `data`는 서버에서 가져와 페이지 컴포넌트의 props로 전달됩니다.

## 동적 라우팅과 SSR

동적 라우팅을 사용하여 SSR을 구현할 수도 있습니다:

```jsx
// pages/posts/[id].js
export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://api.example.com/posts/${params.id}`)
  const post = await res.json()

  return { props: { post } }
}
```

이 코드는 `/posts/1`, `/posts/2` 등의 동적 경로를 처리할 수 있습니다.

## SSR과 SEO

SSR은 SEO에 큰 도움이 됩니다. Next.js에서는 `Head` 컴포넌트를 사용하여 메타 태그를 쉽게 관리할 수 있습니다:

```jsx
import Head from 'next/head'

export default function SEOFriendlyPage({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1>{title}</h1>
      {/* 페이지 내용 */}
    </>
  )
}

export async function getServerSideProps() {
  // SEO 데이터를 서버에서 가져오기
  return {
    props: {
      title: "SEO Friendly Title",
      description: "This is a SEO friendly description."
    }
  }
}
```

## 성능 최적화 팁

1. **캐싱 사용하기**: `getServerSideProps`에서 `res.setHeader`를 사용하여 캐시 제어 헤더를 설정할 수 있습니다.

```jsx
export async function getServerSideProps({ res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  // ... 데이터 페칭 로직
}
```

2. **증분 정적 재생성(ISR) 고려하기**: 자주 변경되지 않는 데이터의 경우, `getStaticProps`와 `revalidate` 옵션을 사용하여 ISR을 구현할 수 있습니다.

3. **코드 분할**: Next.js의 동적 import를 활용하여 필요한 컴포넌트만 로드하세요.

```jsx
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/DynamicComponent'))
```

4. **이미지 최적화**: Next.js의 `Image` 컴포넌트를 사용하여 자동 이미지 최적화를 구현하세요.

```jsx
import Image from 'next/image'

function OptimizedImage() {
  return <Image src="/profile.jpg" alt="Profile" width={500} height={500} />
}
```

## 결론

Next.js를 사용하면 SSR을 쉽게 구현할 수 있으며, 이는 웹 애플리케이션의 성능과 SEO를 크게 향상시킵니다. `getServerSideProps`, 동적 라우팅, SEO 최적화 등의 기능을 활용하여 강력한 서버 사이드 렌더링 애플리케이션을 만들 수 있습니다. 성능 최적화 기법을 적용하여 더욱 빠르고 효율적인 웹 애플리케이션을 구축해보세요.