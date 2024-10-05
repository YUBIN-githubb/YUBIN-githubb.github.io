---
title: JavaScript 비동기 처리
summary: Promise, async/await 쉽게 이해하기
date: 2024-10-04

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  caption: '자바스크립트로고이미지.png'

authors:
  - admin

# tags:
#   - Academic
#   - Hugo Blox
#   - Markdown
---

# JavaScript 비동기 처리: Promise, async/await 쉽게 이해하기

JavaScript에서 비동기 처리는 중요한 개념입니다. 특히 웹 개발에서 서버와의 통신, 파일 처리 등에 자주 사용됩니다. 이 글에서는 Promise와 async/await에 대해 알아보겠습니다.

## Promise란?

Promise는 비동기 연산의 최종 완료 또는 실패를 나타내는 객체입니다.

### Promise의 상태
1. 대기(pending): 초기 상태
2. 이행(fulfilled): 연산 성공
3. 거부(rejected): 연산 실패

### Promise 사용 예시

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
      resolve("성공!");
    } else {
      reject("실패!");
    }
  }, 1000);
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

## async/await

async/await는 Promise를 더 쉽게 사용할 수 있게 해주는 문법적 설탕(syntactic sugar)입니다.

### async 함수

`async` 키워드를 사용하여 함수를 선언하면, 해당 함수는 항상 Promise를 반환합니다.

### await 키워드

`await` 키워드는 Promise가 처리될 때까지 함수의 실행을 일시 중지합니다.

### async/await 사용 예시

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);
  }
}

fetchData();
```

## 정리

Promise와 async/await는 JavaScript에서 비동기 처리를 더 쉽고 깔끔하게 만들어줍니다. Promise는 비동기 연산의 상태를 관리하고, async/await는 이를 더 동기적으로 보이는 코드로 작성할 수 있게 해줍니다. 이 두 가지 개념을 잘 이해하고 활용하면, 복잡한 비동기 로직도 효과적으로 다룰 수 있습니다.
