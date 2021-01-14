# css-flex-screen

> 🍌 바닐라 자바스크립트를 사용한 CSS Flex 속성 실시간 조작 애플리케이션

<br>

## ⌗ Overview

- [데모 링크](https://hyunwoome.github.io/css-flex-screen/src/index.html)

- **사용된 언어 및 프레임 워크:** HTML, CSS, JavaScript

- **서버 배포:** Github Pages

- **제작 기간:** 4일

<br>

## 1. 실시간으로 조작가능한 CSS Flex 속성

![기능](https://media.giphy.com/media/c5hsY2jZyhfjhL7LIf/giphy.gif)

### 1-1 기능

- 주요 기능

  - **자바스크립트로 DOM을 직접 조작하여, CSS의 속성을 실시간으로 변환**
  - **변환에 조건이 필요한 부분은 마우스 호버시, 경고 팝업창 구현**

### 1-2 고민했던 부분

- **HTML과 CSS의 구조**

  - HTML 태그와 CSS의 클래스가 많아지면서 나조차도 헷갈리기 시작
  - 중복되는 부분은 (`operation`섹션의 각 박스들) CSS의 BEM방식을 사용하면서 최대한 구조적이고 재사용 가능하게 작성하려고 노력
  - 스크립트 작성시 가독성을 위해 각 함수의 역할 **주석** 작성

<br>

## ⌗ 로컬환경에서 실행방법

- 저장소 클론

```sh
$ git clone https://github.com/hyunwoome/css-live-screen.git
```

- 패키지 설치

```sh
$ cd css-flex-screen
$ npm install
```

- vscode의 [liveserver](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 익스텐션으로 개발용 서버 실행

<br>

## ⌗ 설치한 패키지

- `Footer` 로고를 사용하기 위해 `Bootstrap Icons`를 사용

| Package         | Desc        |
| --------------- | ----------- |
| Bootstrap icons | Using icons |

<br>

## ⌗ 느낀점

- **HTML과 CSS를 구조적으로 작성하자**

  - 겨우 하나의 웹페이지임에도 불구하고, 태그와 클래스가 많아지면서 제어하기가 힘들어졌다. 각각의 역할에 맞게 분리하고 가독성 좋은 네이밍 기법을 사용하여 첫 단추부터 잘 끼우는 것이 중요하다고 느꼈다.
  - 이 프로젝트는 스크립트보단 HTML과 CSS의 비중이 더 높았다고 생각되는데, 기억남는건 `브라우저를 새로고침할 때 경고창을 띄워주는` 함수가 존재한다는 것을 알게 되었다. 사용할 때는 당연한거라고 생각했었다.

<br>

## License

© 2021 Hyunwoo Lim

This repository is licensed under the MIT license. See `LICENSE` for details.
