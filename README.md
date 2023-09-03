# 원티드 프론트엔드 프리온보딩 12차 2주차 과제 (개인)

## 실행 영상 
 <img width="600" height='600' alt="issueList_gif" src="https://github.com/owen970517/wanted-pre-onboarding-frontend-12th-2nd/assets/75247323/06108ad0-4d21-4270-88eb-8e268af9dadb" />

## 실행 방법
- git clone https://github.com/owen970517/wanted-pre-onboarding-frontend-12th-2nd.git
- npm install
- npm start

## 사용한 라이브러리
- React
- Typescript
- axios
- styled-components
- context-api
- react-markdown
- react-router-dom

## 디렉토리 구조
```
📦src
 ┣ 📂apis
 ┣ 📂assets
 ┣ 📂components
 ┣ 📂constants
 ┣ 📂containers
 ┣ 📂contexts
 ┣ 📂pages
 ┣ 📂styles
 ┣ 📂types
 ```


## 주요 기능

### `이슈 목록`
> - 오픈 상태의 이슈를 코멘트 순으로 정렬하여 제공합니다.
> - 각 이슈에서는 `이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수` 정보를 제공합니다.
> - 5번째 셀마다 광고가 삽입되며, 광고는 새페이지에서 확인할 수 있습니다.
> - 화면을 아래로 스크롤할 경우 30개의 이슈를 추가로 제공합니다.
> - 이슈를 클릭하면 이슈 상세페이지로 이동합니다.

### `이슈 상세`
> - 이슈와 함께 작성자의 프로필 이미지, 본문 정보를 제공합니다.
> - 본문에서는 마크다운 문법을 제공합니다.


## 추가로 개선한 것 
- 팀원들과 협업을 통해 찾은 Best Practice를 추가할 예정입니다.
- axios interceptor를 사용
- react-mardown 대신 react-markdown-preview 사용
- date 변환 시 slice 대신 format 함수를 사용하여 구현
- 첫 렌더링 및 상세 페이지 불러올 때 스켈레톤 UI 추가
