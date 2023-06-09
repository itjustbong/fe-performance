# 프론트엔드 성능 최적화 #1 블로그 최적화

# HOW TO 최적화

### 이미지 사이즈 최적화

- 적절한 사이즈로 리사이징

### 코드 분할

- SPA특성상 모든 리액트 코드가 하나의 JS파일로 번들링되어 로드됨.
- 첫 진입시, 당장 사용하지 않는 코드가 다소 포함되어 있음.
- 코드 분할을 통해 당장은 필요없는 코드를 떼어내고, 해당 코드를 필요한 시점에 따로 로드.

### 텍스트 압축

- HTML, CSS, JS등의 파일을 다운로드 전에 서버에서 압축.

### 병목 코드 최적화

- 특정 JS코드 때문에 서비스가 너무 느리게 다운로드되거나 하는 함수를 찾기.
- 어떻게 그런 병목 코드를 찾고, 어떻게 개선할지 알아보기.

### 도구들

- 크롬개발자 도구 - 네트워크
- 크롬개발자 도구 - Performance
  - 리소스가 로드되는 타이밍
  - 브라우저의 메인 스레드에서 실행되는 JS를 차트 형태로 보여줌 ⇒ 어느 JS코드가 느린지 확인 가능.
- 크롬개발자 도구 - Lighthouse
  - 웹 사이트의 성능을 측정하고 개선 방향을 제시해주는 자동화 툴.
- webpack-bunble-analyzer
  - 번들링된 파일이 어떤 코드를 담고 있는지 보여줌.

# Lighthouse

## Pre-Info

- Mode
  - Navigation: 초기 페이지 로딩 시, 발생하는 성능 문제를 분석
  - Timespan: 사용자가 정의한 시간 동안 발생한 성능 문제를 분석
  - Snapshot: 현재 성능 상태를 분석
- Categories
  - Performance: 웹 페이지의 로딩 과정에서 발생하는 성능 문제를 분석
  - Accessibility: 전급성
  - Best Practices: 보안 측면과 최신 표준에 중점을 두고 분석
  - SEO: 검색 엔진에서 얼마나 잘 크롤링되고 검색 결과에 표시되는지 분석
  - PWA: 서비스 워커와 오프라인 동작 등.

## 실습

[https://github.com/performance-lecture/lecture-1](https://github.com/performance-lecture/lecture-1)

### 지표

- FCP 10%
  - First Contentful Paint
  - DOM 컨텐츠의 첫 번쨰 부분을 렌더링 하는데 걸리는 시간
- Speed Index 10%
  - 페이지 로드 중에 콘텐츠가 시각적으로 표시되는 속도를 나타내는 지표
- LCP 25%
  - Largest Contentful Paint
  - 화면 내에 가장 큰 이미지나 텍스트 요소가 렌더링되기까지 걸리는 시간
- TBT 30%
  - Total Blocking Time
  - 페이지가 클릭, 키보드 입력 등의 사용자 입력에 응답하지 않도록 차단된 시간.
  - 메인 스레드를 독점하여 다른 동작을 방해하는 작업에 걸린 시간을 종합
- CLS 15%
  - Cumulative Layout Shift
  - 페이지 로드 과정에서 발생하는 예기치 못한 레이아웃 이동을 측정한 지표
  - 레이아웃 이동이란 화면상에서 요소의 위치나 크기가 순간적으로 변하는 것을 의미
- TTI 10% (현재 측정목록에서는 보이지 않음)
  - Time To Interactive
  - 사용자가 페이지와 상호 작용이 가능한 시점까지 걸리는 시간

![스크린샷 2023-04-22 오후 8.51.39.png](md-src/01.png)

### 추천 & 진단

- 추천: 페이지를 더욱 빨리 로드하는데 잠재적으로 도움되는 제안
- 진단: 로드 속도와 직접적인 관계는 없지마, 성능과 관련된 기타 정보를 보여줌.

![스크린샷 2023-04-22 오후 8.55.31.png](md-src/02.png)

# 최적화

## 이미지 사이즈

<aside>
💡 **용어**
KiB : 키비바이트 2**10
KB: 킬로바이트 2**3
혼용하는 경우 많음.

</aside>

- 기존에 1200px \* 1200px로 내려받는 이미지 크기를 줄이자.
  화면에 표시되는 썸네일의 크기는 120px 이지만,
  고성능 디스플레이를 고려하여 보이는 것에 2배 크기로 설정하자.
- 이미지 CDN을 활용하는 것도 방법
  - Contens Delivery Network
  - 이미지 CDN은 사용자에게 보내기 전에 특정 형태로 가공하여 전달할 수 있음
    (리사이징, 특정 포맷으로 변경 등)
    [Image and Video Upload, Storage, Optimization and CDN](https://cloudinary.com/)
    [imgix - The End-to-End Visual Media Solution](https://imgix.com/)

### 이미지 사이즈 최적화 적용

- Unsplash에서 제공하는 리사이징 기능을 활용
  1200px → 240px 이미지 가져오기
- 성과
  - LCP 가 2.5초에서 2.3초로 단축

![스크린샷 2023-04-22 오후 9.15.26.png](md-src/03.png)

# Performance

## CPU, Network, 스크린샷

![스크린샷 2023-04-22 오후 9.45.03.png](md-src/04.png)

- 최상단 CPU 관련
  - CPU 차트는 시간에 따라 CPU가 어떤 작업에 리소스를 사용하고 있는지 비율로 보여줌.
  - 노란색: JS 실행
    보라색: 렌더링 / 레이아웃 작업
    초록색: 페인팅 작업
    회색: 기타 시스템 작업
    빨간색 선: 병목이 발생하는 지점 (특정 작업이 메인 스레드를 오랫동안 잡아두고 있다는 뜻)
- 중간 네트워크 차트
  - 위쪽의 진한 막대: 우선순위가 높은 네크워크 리소스
    아래쪽 옅은 막대: 우선순위가 낮은 네크워크 리소스
- 스크린샷 리스트
  - 서비스가 로드되는 과정

## Network 타임라인

![스크린샷 2023-04-22 오후 9.49.48.png](md-src/05.png)

- 서비스 로드과정에서의 네트워크 요청을 시간 순서에 따라 보여줌.
- 왼쪽의 회색 선: 초기 연결 시간
  막대의 옅은 색 영역: 요청을 보낸 시점부터 응답을 기다리는 시점까지의 시간 (TTFB: Time to First Bite)
  막대의 짙은 색 영역: 컨텐츠 다운로드 시간
  오른쪽 회색 선: 해당 요청에 대한 메인 쓰레드의 작업 시간

## Frames, Timings, Main

- 프레임: 화면에 변화가 있을 때마다

![스크린샷 2023-04-22 오후 9.56.35.png](md-src/06.png)

- User Timing API를 통해 기록된 정보 기록.
  리액트에서 각 컴포넌트의 렌더링 시간 측정
  (리액트 버전 17이후로는 사용 불가.)

![스크린샷 2023-04-22 오후 9.58.31.png](md-src/07.png)

- 메인쓰레드에서 실행되는 작업을 플레임 차트로.

![스크린샷 2023-04-22 오후 9.59.30.png](md-src/08.png)

## 실습

- 네크워크 [localhost](http://localhost) 요청
  ⇒ HTML파일에 대한 요청

![스크린샷 2023-04-22 오후 10.01.48.png](md-src/09.png)

- 0.chunk.js의 로드 시간이 매우 길어

![스크린샷 2023-04-22 오후 10.02.40.png](md-src/10.png)

- HTML이 다운로드된 시점에,
  메인 쓰레드에서 HTML 분석 시작

![스크린샷 2023-04-22 오후 10.10.31.png](md-src/11.png)

- 0.chunk.js의 다운로드가 끝나면 이어서 JS실행

- Performance 탭에서 실행 중인 함수 블럭 확인 가능 ⇒ 병목 코드

![스크린샷 2023-04-22 오후 10.46.17.png](md-src/12.png)

### removeSpecialChar 병목 해결

- 중첩 for문 없애기
- 정규식을 활용한 특수문자 제거

![적용 전](md-src/13.png)

적용 전

![적용 후](md-src/14.png)

적용 후

### 성능개선 결과

![스크린샷 2023-04-22 오후 11.05.13.png](md-src/15.png)

## 코드 분할 & 지연 로딩

- 번들 파일을 분석해보자
- react-syntax-highlighter 패키지 용량이 커
  ![스크린샷 2023-04-22 오후 11.11.58.png](md-src/16.png)
- 코드 분할을 통해서 페이지별 코드를 분리하는 것.
- 분할된 코드는 사용자가 서비스를 이용하는 중 필요해지는 시점에 로드되어 실행됨.
  ⇒ 이것을 지연 로딩이라고 함.
- 코드 분할 기법에는 여러가지 방법 존재
  - 페이지별, 모듈 별

### Dynamic Import

```jsx
// 빌드할 때가 아니라 런타임에 해당 모듈을 로드함

setTimeout(() => {
  import('../../util/math').then((module) => {
    const { add } = module;
    console.log(add(1, 2));
  });
}, 1000);
```

- 웹팩은 동적 import구문을 만나면 코드를 분할하여 번들링함.

### React with Dynamic Import

- 동적 import구문은 Promise 형태로 모듈을 반환함.
- 여기서 import 하려는 모듈은 컴포넌트이기 때문에 Promise내부에서 로드된 컴포넌트를 Promise밖으로 빼내야함.
- 리액트는 이런 문제를 해결하기 위해 **lazy**와 **Suspense**를 제공함.

```jsx
import React, { Suspense } from 'react';
...
const ArticleList = React.lazy(() => import('../../components/ArticleList'));

function ListPage(props) {
  return (
    <BasicTemplates>
      <div style={{ width: '700px', margin: 'auto' }}>
        <Suspense fallback={<div>...안녕</div>}>
          <ArticleList />
        </Suspense>
      </div>
    </BasicTemplates>
  );
}

export default ListPage;
```

- lazy함수는 동적 import를 호출하여 그 결과인 Promise를 반환하는 인자를 인자로 받음.
- 그렇게 import한 컴포넌트는 Suspense안에서 렌더링.
- 동적 import를 하는 동안 Fallback Prop에 정의된 내용으로 렌더링 됨.
- 페이지별로 코드를 분할하는 예제 ⇒ Router에서 코드를 적용가능.

```jsx
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
// import ListPage from './pages/ListPage/index'
// import ViewPage from './pages/ViewPage/index'

const ListPage = React.lazy(() => import('./pages/ListPage/index'));
const ViewPage = React.lazy(() => import('./pages/ViewPage/index'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>...로딩 중!</div>}>
        <Switch>
          <Route path="/" component={ListPage} exact />
          <Route path="/view/:id" component={ViewPage} exact />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
```

### 적용 후 성능

- 절반 가까이 줄어든 용량

![적용 전](md-src/17.png)

적용 전

![적용 후](md-src/18.png)

적용 후

![스크린샷 2023-04-23 오전 12.29.05.png](md-src/19.png)

## 텍스트 압축

### 배포 환견 VS 개발환경

- CRA에서는 개발환경과 배포환경이 달라.
- 배포환경에서는 난독화 + 경량화 작업 추가

### 압축

- 서버에서 HTML, CSS, JS 등의 파일을 압축하고, 사용할 때 다시 압출을 풀어서 사용.
- 압축여부를 살펴보기 위해서, HTTP 헤더를 살펴보자.
- Content-Encoding: gzip ⇒ gzip 방식으로 압축 전송되었다는 뜻.

### 압축의 두가지 방법

- deflate
- gzip
  - 블록화, 헤더와 체크섬 등 내무적으로 deflate를 사용하여 압축.
