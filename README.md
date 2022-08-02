# GameUs

## 프로젝트 소개

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f4998c12-4909-417f-ad82-036de22cbd4b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T145225Z&X-Amz-Expires=86400&X-Amz-Signature=14dc10df0c6dd111ff2b7f2f6148ddfa9ca3378f57bd977f5bcf57bd47287f57&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" >

> **게임과 관련된 모든 것, 게임어스**는 게임 칩, 게임기 등 게임에 관련된 물품을 사고 파는 중고거래 커뮤니티입니다.
> 

**배포 URL** : (Link) (예정)

**프로젝트 레포지토리** : https://github.com/FEeasy404/GameUs

**팀 워크스페이스** :  https://fe-easy-404.notion.site/FEeasy-404-9ec13d43d919406ca2bf77e0475a5489 

**디자인 피그마** : https://www.figma.com/file/G8BCaVEKRner3TmluDxvOX/GameUs?node-id=0%3A1

### 1. 팀원 소개 및 역할 분담

| 이름 | 역할 |  | 깃허브 |
| --- | --- | --- | --- |
| 김도희 | 일정 관리자 & 디자인 | 일정 등록 및 작업보드 관리, 리마인드 | Github |
| 김보람 | 깃허브 관리자 | PR, 이슈, 프로젝트 등 전반적인 깃허브 태스크와 리드미 관리(URL) | Github |
| 여다희 | 워크스페이스 관리자 & 스크럼 진행 | 노션 템플릿 자동화, 매일 오전 데일리 스크럼을 진행 (URL) | Github |
| 이혜원 | 문서 관리자 | 회의록, 컨벤션 등 팀내 문서화 담당(URL) | Github |

**☺️ 김도희** 

- 프로젝트 전반적인 디자인 및 스타일링
- 프로필 수정 페이지 마크업
- 채팅 방 페이지 마크업
- 404 페이지 마크업 및 기능 구현

**😆 김보람**

- 상품 등록 페이지 마크업 및 상품 등록, 수정, 삭제 기능 구현
- 게시글 등록 페이지 마크업 및 게시글 등록, 수정, 삭제, 신고 기능 구현
- 댓글 등록, 삭제, 신고 기능 구현
- 이미지 리사이즈 및 이미지 업로드 기능 구현
- 모달 마크업 및 기능 구현

**😛 여다희** 

- 로그인, 검색, 채팅 목록 페이지 마크업
- 홈 피드 페이지 마크업 및 팔로우하는 사용자 게시글 불러오는 기능 구현
- 좋아요 및 좋아요 취소 기능 구현
- 하단 탭 네비게이션 바 마크업 및 기능 구현

**😎 이혜원**

- Splash 페이지 마크업 및 기능 구현
- 로그인, 로그아웃 기능 및 유효성 검사 구현
- 회원가입 기능 및 유효성 검사 구현
- 사용자의 프로필 페이지 마크업 및 프로필 수정 기능 구현
- 팔로잉/팔로워 목록 페이지 마크업 및 팔로우, 언팔로우 기능 구현

### 2. 개발환경 및 기술스택

<div style="display: flex; gap: 10px;">
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/087589e0-7d68-4b93-b82d-f62d27b10f83/html5.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T145451Z&X-Amz-Expires=86400&X-Amz-Signature=6df8613761703280cfa11d475a722b8d563744d2d7d09ff9ce3027e54f31b362&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22html5.svg%22&x-id=GetObject" width="100">
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/715ce50b-76c4-45d9-8377-72a202630a70/cssmodules.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T145541Z&X-Amz-Expires=86400&X-Amz-Signature=42280db028e1c72099364a456a70861c5ce6a94086345499a09704c51ec868a8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22cssmodules.svg%22&x-id=GetObject" width="100">
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17f7e9e6-5fa9-4843-9ca2-5759c2e228cd/react.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T145556Z&X-Amz-Expires=86400&X-Amz-Signature=54c35c78465aaa078b37ec3aa34ac252a33fab0c74e04e664483ff663915c1f8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22react.svg%22&x-id=GetObject" width="100">
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/500460ac-db5a-4527-8f04-1d347023e8eb/git.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T145610Z&X-Amz-Expires=86400&X-Amz-Signature=6925c6e0785471250a8b82a9c5cd6f9c37acf09e5acebfffc56b4cfff1604165&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22git.svg%22&x-id=GetObject" width="100">
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/97a327d1-1273-4853-a44f-d7d5645dfb42/github.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T145621Z&X-Amz-Expires=86400&X-Amz-Signature=e2a404f5552a18f41942c9cdeebb74003eb0c51d98166e32630122724847b5e6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22github.svg%22&x-id=GetObject" width="100">
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/81445402-2522-4811-a86b-cf7a3120b200/notion.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T145632Z&X-Amz-Expires=86400&X-Amz-Signature=e2fbb63b976a1eeb2c11c948c06bc225c8f0f7a6d956cf2c652d9d54a2f05a2b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22notion.svg%22&x-id=GetObject" width="100">
</div>

- **Front-End**
    - `HTML Living Standard`
    - `CSS Modules`
    - `React`
- **Back-End**
    - API 제공됨
- **버전 및 이슈관리**
    - `Git`, `Github`
    - `Notion`


> 📌 **Styled components  vs  CSS Modules**

팀원들 모두 이 프로젝트를 통해 리액트를 능숙하게 다루고 싶다는 공통적인 목표가 있었습니다.  
하지만 네 명 모두 리액트를 사용해본 경험이 없었기 때문에, 기존의 CSS와 사용법이 유사한 CSS Modules를 사용해 학습비용 줄이기를 선택하였습니다.



> 📌 **Git-flow  vs  Github-flow**

깃 브랜치 전략으로 깃허브 플로우를 채택했습니다.  
짧은 호흡으로 개발하기 때문에 적응하는 데 시간이 많이 들지 않았으면 했고, 팀원들 간의 작업 내용을 빨리 주고 받기에 유용할 것 같다는 판단 하에 깃 플로우에 비해 브랜치 구조가 단순한 깃허브 플로우를 사용했습니다.


### 3. 사용한 패키지 **모듈**

- **`create-react-app`** : 개발환경 세팅
- **`eslint`, `prettier`** : 코드 포맷팅, 개발단위에서의 코드 품질 관리
- **`react-router-dom`** : 라우팅 처리
- **`browser-image-compression`** : 대용량 이미지가 서버에 업로드되기 전 리사이징 (이미지 용량 수정되기 전에 1MB까지만 올라가던 문제를 해결하려 사용)

### 4. 디렉터리 구조

```
assets : 프로젝트에 사용되는 이미지 및 폰트
common : 여러 컴포넌트가 사용하는 js 파일
contexts : useContext를 이용한 context 파일

컴포넌트 분리
	atoms : button, CommentIcon, ImageBox 등 최소 단위의 컴포넌트
	molecules : atom을 조합해 헤더, 네비게이션 바 등 목적을 가진 UI 컴포넌트
	organisms : 리스트나 폼 등 molecules가 여러 개 모인 컴포넌트
	pages : 라우팅 되는 단위, 아래로 props를 내려주는 페이지 컴포넌트

------------------------------------

📁public
	├─📄favicon.ico
	└─📄index.html
📁src
	├─📁assets
	│		├─📁fonts
	│		├─📁icons
	│		└─📁images
	├─📁common
	├─📁components
	│		├─📁atoms
	│		│		├─📁Author
	│		│		├─📁Button
	│		│		├─📁Comment
	│		│		└─ ...
	│		├─📁molecules
	│		│		├─📁BottomNavigateBar
	│		│		├─📁ChatRoom
	│		│		└─ ...
	│		└─📁organisms
	│		 		├─📁CommentList
	│		 		├─📁EmailPasswordForm
	│				└─ ...
	├─📁pages
	│		├─📁ChatListPage
	│		├─📁ChatRoomPage
	│		├─📁ErrorPage
	│		└─ ...
	├─📁contexts
	├─📄App.jsx
	├─📄index.js
	├─🎨font.css
	├─🎨global.css
	└─🎨reset.css
📄.eslintrc
📄.prettierrc
📄package-lock.json
📄package.json
📄README.md
```


## 핵심 기능

### 1) 홈

|**splash**|**로그인**|**회원 가입**|
|---|---|---|
|![splash](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1fc86bf-3308-4751-a99d-cfde618ba51b/splash.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T150313Z&X-Amz-Expires=86400&X-Amz-Signature=878f9e5e3329e4a2279bd07d6ceee5e9def2a82c3323ab9b194f89c230d5fd2e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22splash.gif%22&x-id=GetObject)|![로그인](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/26e177d8-95b2-4672-b0de-8c176129ce2f/.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T150437Z&X-Amz-Expires=86400&X-Amz-Signature=e3c87ce358aca33527fd038cfe93f75803599531d36f6821676b5627e17c51d9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25A1%259C%25EA%25B7%25B8%25EC%259D%25B8.gif%22&x-id=GetObject)|![회원가입](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2c494714-0954-4027-812d-935d566cdb62/.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T150537Z&X-Amz-Expires=86400&X-Amz-Signature=dc0b13d7270bca28b964cdbadd0d761fd32f98ab4db1d5c7164fa3c12941ed9d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25ED%259A%258C%25EC%259B%2590%25EA%25B0%2580%25EC%259E%2585.gif%22&x-id=GetObject)|

|**홈 피드**|**검색**|
|---|---|
|![홈피드](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/04b08cf3-2395-4d0c-82de-3aef281078ab/.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T151006Z&X-Amz-Expires=86400&X-Amz-Signature=55d8dcd62b86cf68b8ad056e153a98265cfd495a7197b7bf83e003f742a151b7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25ED%2599%2588%25ED%2594%25BC%25EB%2593%259C.gif%22&x-id=GetObject)|![검색](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9ac8fdf1-76b5-40c5-bfa9-9e2274aacdc3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T151022Z&X-Amz-Expires=86400&X-Amz-Signature=0712990b48ef90bdeef0ac28221a05c256651eed2cd7b3fa33724999918fb3cc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)|

|**채팅**|**404 페이지**|
|---|---|
|![채팅](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/34407259-fb19-4d4b-a5a7-fc20706444cc/.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T151040Z&X-Amz-Expires=86400&X-Amz-Signature=219393bf69cfc9af8e4b4aac65a5adea4d6c5bf8c23c80b060daebaec07457a3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%25B1%2584%25ED%258C%2585.gif%22&x-id=GetObject)|![404](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9e3e88db-72be-474a-9378-b4c28e2cfbe4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T151052Z&X-Amz-Expires=86400&X-Amz-Signature=dadf5cf918d201d76c2999a22cc2b73c6c2aff46030e99091ffdf4a308421f0a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)|

### 2) 게시글

|**게시글 작성**|**게시글 수정**|**게시글 삭제**|
|---|---|---|
|![게시물작성](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3e6157d0-064b-4689-a257-186eb5b27002/.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T151623Z&X-Amz-Expires=86400&X-Amz-Signature=8498ea638231cd98c21fb5e535468c7865de190666381542260ec35b44d83eb9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B2%258C%25EC%258B%259C%25EB%25AC%25BC%25EC%259E%2591%25EC%2584%25B1.gif%22&x-id=GetObject)|![게시글 수정](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3d9ae4a1-7168-4e86-8ae7-e087bfd10be7/_.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T151637Z&X-Amz-Expires=86400&X-Amz-Signature=0760613315de2e9fe42d2ffa0c242ba0a9ef54f5b69b33933bd0e547407ef64a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B2%258C%25EC%258B%259C%25EA%25B8%2580%2520%25EC%2588%2598%25EC%25A0%2595.gif%22&x-id=GetObject)|![게시글 삭제](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/39c2dab3-47ab-473d-ad1a-29dcdcc9fc2a/_.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T151709Z&X-Amz-Expires=86400&X-Amz-Signature=3bd62b0831775569d9860665fde5dab65af9331e76716a38aade0789a94439b2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B2%258C%25EC%258B%259C%25EA%25B8%2580%2520%25EC%2582%25AD%25EC%25A0%259C.gif%22&x-id=GetObject)|


|**게시글 상세 및 댓글**|**댓글 삭제**|**댓글 신고**|
|---|---|---|
![게시글 상세 및 댓글](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9308a4ee-fa33-48e5-9e07-4dc2e1d22729/__.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T151929Z&X-Amz-Expires=86400&X-Amz-Signature=f0e05718ba154d46e47ce27ceb520684ce35d2c975b1aba3c0e8a95a14065e98&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B2%258C%25EC%258B%259C%25EB%25AC%25BC%25EC%2583%2581%25EC%2584%25B8%2520%25EB%25B0%258F%2520%25EB%258C%2593%25EA%25B8%2580.gif%22&x-id=GetObject)|![댓글 삭제](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7e644eed-cfba-4d44-a871-a92dba20e8cd/_.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T151948Z&X-Amz-Expires=86400&X-Amz-Signature=d52f6503ff9a05cb031e22100e7ce776bb8fd603428a4d1f8b5ee84c9b601765&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%258C%2593%25EA%25B8%2580%2520%25EC%2582%25AD%25EC%25A0%259C.gif%22&x-id=GetObject)|![댓글 신고](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1155afb6-11b2-496a-b907-0ad2a85fe1a4/_.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T152002Z&X-Amz-Expires=86400&X-Amz-Signature=c94536d033bb732b9ed8a44d148678ad949ba9a0d6a86c423fe7eabbd8a971d5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%258C%2593%25EA%25B8%2580%2520%25EC%258B%25A0%25EA%25B3%25A0.gif%22&x-id=GetObject)|

|**게시글 신고**|**좋아요, 좋아요 취소**|
|---|---|
|![게시글 신고](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b198641a-1ed6-4d10-a8e0-b5eec9c802f6/_.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T152019Z&X-Amz-Expires=86400&X-Amz-Signature=3206ff3b80d86cae907afb139e276b7c19e4b233c3e583ccac3a1d2ae40fce3a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B2%258C%25EC%258B%259C%25EA%25B8%2580%2520%25EC%258B%25A0%25EA%25B3%25A0.gif%22&x-id=GetObject)|![좋아요 및 좋아요 취소](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5e33f8e2-20a9-437c-8540-20e2cdfaab24/_.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T152029Z&X-Amz-Expires=86400&X-Amz-Signature=df84585b2c38d2ce2d1d96d67f066ee6c2ba980f4b3509246f319f2a252c71ae&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%25A2%258B%25EC%2595%2584%25EC%259A%2594%2520%25EC%25A2%258B%25EC%2595%2584%25EC%259A%2594%25EC%25B7%25A8%25EC%2586%258C.gif%22&x-id=GetObject)|


### 3) 프로필

|**내 프로필**|**프로필 수정**|
|---|---|
|![내 프로필](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/78f5bdd3-828a-4b4d-a9cb-c1d956ddf727/_.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T152230Z&X-Amz-Expires=86400&X-Amz-Signature=3a2128485f60d8b2c09878d9771ab9456ef541b1c269bfc6fbd7fc91762a049a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%2582%25B4%2520%25ED%2594%2584%25EB%25A1%259C%25ED%2595%2584.gif%22&x-id=GetObject)|![프로필 수정](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c6952a9a-6b1e-451d-a3dc-7182b49675e7/.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T152241Z&X-Amz-Expires=86400&X-Amz-Signature=b2b2b0c0b783b56feb5379b3a97f3e86ed12ddd74c125cd32083f671bd731b18&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25ED%2594%2584%25EB%25A1%259C%25ED%2595%2584%25EC%2588%2598%25EC%25A0%2595.gif%22&x-id=GetObject)|

|**팔로워, 팔로잉**|**타 유저 프로필 및 팔로우, 언팔로우**|
|---|---|
|![팔로워 및 팔로잉](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/22ce241a-53b5-4d0f-a84a-d25ba0ed062c/_.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T152337Z&X-Amz-Expires=86400&X-Amz-Signature=aa9c0de6ffdff2af4ff738c16817eed59d0923ce67d2705c824d6948b6235871&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25ED%258C%2594%25EB%25A1%259C%25EC%259B%258C%2520%25ED%258C%2594%25EB%25A1%259C%25EC%259E%2589.gif%22&x-id=GetObject)|![유저 프로필 및 팔로우 및 언팔로우](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/73f87e91-53f5-45a4-942a-728f502218f4/__.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T152351Z&X-Amz-Expires=86400&X-Amz-Signature=bdf2073a601a4b6ee89ca7c00b8aa13ba29ecc522f28f9c8c82ab12297176c72&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%259C%25A0%25EC%25A0%2580%25ED%2594%2584%25EB%25A1%259C%25ED%2595%2584%2520%25ED%258C%2594%25EB%25A1%259C%25EC%259A%25B0%2520%25EC%2596%25B8%25ED%258C%2594%25EB%25A1%259C%25EC%259A%25B0.gif%22&x-id=GetObject)|



### 4) 판매 상품

|**상품 등록**|**상품 수정**|**상품 삭제**|
|---|---|---|
|![상품 등록](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f77101cc-ea18-40f0-8450-8fc424b0db68/.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T152554Z&X-Amz-Expires=86400&X-Amz-Signature=e340b23e5cf96207504fbb94236e06e2de42f2d50781f89ef622e977cb4c1c3e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%2583%2581%25ED%2592%2588%25EB%2593%25B1%25EB%25A1%259D.gif%22&x-id=GetObject)|![상품 수정](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/10e3edc1-bf7f-4c00-b330-93c63053e866/_.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T152606Z&X-Amz-Expires=86400&X-Amz-Signature=7c8aad5ad6861dfec70ade2f91070db8f1bd688186b98855e858e79420a2d65f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%2583%2581%25ED%2592%2588%2520%25EC%2588%2598%25EC%25A0%2595.gif%22&x-id=GetObject)|![상품 삭제](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/60b48fd4-22e8-4b22-bea5-e163737cddbd/_.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T152617Z&X-Amz-Expires=86400&X-Amz-Signature=3fa7cfde1e0eec83c4b166effaa5c20d980165766a85218ab531d7b3f3100dd8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%2583%2581%25ED%2592%2588%2520%25EC%2582%25AD%25EC%25A0%259C.gif%22&x-id=GetObject)|



## 핵심 코드

### 데이터가 로드되었는지 상태 확인

useEffect를 통해서 데이터를 가져오는 fetch 함수를 수행하고, 그렇게 받아온 데이터를 컴포넌트에 보여주고자 하였지만, 렌더링보다 늦게 가져와져 컴포넌트에 원하는 데이터가 제대로 표시되지 않거나 화면이 깜빡거리는 이슈가 있었습니다.

이를 해결하기 위해, 아직 데이터를 받아오지 못하였다먼 로딩 컴포넌트를 보여주고, 데이터를 받아왔을 경우에만 원래의 컴포넌트를 보여주도록 하였습니다

**이전 코드**

```jsx
const [post, setPost] = useState();
const [comments, setComments] = useState([]);
useEffect(() => {
    getPostComment(user.token, postId, setComments);
    getPostData(user.token, postId, setPost);
  }, [postId]);

return(
	<section>
		<h2 className="a11y-hidden">게시글 상세 페이지</h2>
		<HeaderForm />
	  <div className="wrapper-contents">
	    <PostCard post={post} />
	    <CommentList comments={comments}/>
	    <MessageInpu/>
	  </div>
	</section>
)
```

**해결 코드**

```jsx
const [post, setPost] = useState();
const [comments, setComments] = useState([]);
useEffect(() => {
    getPostComment(user.token, postId, setComments);
    getPostData(user.token, postId, setPost);
  }, [postId]);

return(
	<section>
		<h2 className="a11y-hidden">게시글 상세 페이지</h2>
		<HeaderForm />
		{post && comments ? (
		  <div className="wrapper-contents">
		    <PostCard post={post} />
		    <CommentList comments={comments}/>
		    <MessageInput/>
		  </div>
		) : (
		  <Loading />
		)}
	</section>
)
```

### 아토믹 디자인 패턴

컴포넌트를 단위별로 쪼갠 후 필요한 부분에 조합하는 형식으로 페이지를 구성했습니다.

atom, molecule, organism을 활용해 UI는 최대한 재활용하고, API로 받아온 정보 등은 page에서부터 아래로 내려주었습니다.

```jsx
...
return (
    <section>
      <h2 className="a11y-hidden">게시글 상세 페이지</h2>
      <HeaderForm backButton={true} menuButton={true} /> // molecule
      {post && comments ? (
        <div className="wrapper-contents">
          <PostCard post={post} /> // molecule
          <CommentList // organism
            comments={comments}
            handleDelete={handleDelete}
            handleReport={handleReport}
          />
          <MessageInput // molecule
            type="comment"
            src={user.image}
            title="댓글"
            placeholder="댓글 입력하기..."
            buttonText="게시"
            inputRef={inputRef}
            onClick={handleTextInput}
          />
        </div>
      ) : (
        <Loading /> // molecule
      )}
    </section>
  );
```

### 웹 접근성을 높이기 위한 노력

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/806b35be-42ba-44ab-83cb-2f55ad778ec5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T152702Z&X-Amz-Expires=86400&X-Amz-Signature=2e53bfe44a58e8effe0d1ca74819385fb61aa21b297f6b0ea51186d1439463a9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

상단에 텍스트가 없는 디자인의 페이지의 경우에는 **`a11y-hidden`** 클래스를 이용하여 페이지 설명을 숨겨주었습니다.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4b721dec-89e7-4d6c-9d4d-3b5650e9963c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T152725Z&X-Amz-Expires=86400&X-Amz-Signature=5bbd4213247a7311587c807068b7d92093c9903bed75c9e45d3a8ffbfeb0ea57&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
```jsx
...
<span className={styles["product_name"]} title={product.itemName}>
  {product.itemName}
</span>
...
```
텍스트가 너무 길 경우 말줄임표로 줄이되 **`title`** 속성을 이용하여 마우스를 올리면 전체 텍스트를  보여주도록 하였습니다.

## 스페셜 포인트

### ✨ **프로젝트를 시작하기 전 필요한 지식들에 관해 스터디를 진행했습니다. ([URL](https://github.com/FEeasy404/FE-Easy-DevNote))**

**GitHub-flow 브랜치 전략, Github Issues와 Project, React 프로젝트의 디렉터리 구조, 피그마 사용법이나 StoryBook 사용 방법** 등의 주제로 **실습 위주의 스터디**를 진행했습니다.

다른 프로젝트들을 분석해서 발견한 툴이나 전략을 스터디를 통해 직접 사용해보고 그것을 우리 프로젝트에 어떻게 적용시킬 지 의논하였습니다. 그 결과 하나의 **주제에 대한 팀원 전반의 이해도를 높일 수 있었습니다.**

### ✨ **아토믹 디자인 패턴을 기반으로 컴포넌트를 분리하였습니다.**

스터디를 통해 학습한 아토믹 디자인 패턴을 프로젝트에 적용했습니다. 

**아토믹 디자인 패턴은** atoms - molecules - organisms - templates - pages 5단계로 컴포넌트를 분리하지만, 프로젝트 규모에 비해 지나치게 단계를 분리하면 작업 속도가 느려지고 복잡할 것이라 예상해 **4단계(atoms - molecules - organisms - pages)로** **패턴을 변형해** 컴포넌트를 분리하였습니다.

아토믹 디자인 패턴을 적용함으로써 **bottom-top 개발 방식에서 어떻게 컴포넌트를 나눌 수 있을지 많이 고민해볼 수 있었습니다**. 

하지만 atoms를 모두 개발한 뒤 페이지를 구성한 것이 아니라 작업단위를 페이지 단위로 설정해, 팀원간에 같은 컴포넌트를 개발하고 있는 등의 헤프닝이 있었습니다. 이러한 문제를 **매일 [데일리 스크럼](https://fe-easy-404.notion.site/8a938873168c49ce8c0534005c06669b)을 진행**해 서로의 작업상황을 공유함으로써 해결했고, **아토믹 컴포넌트 개발을 진행할 때는 그에 알맞게 컴포넌트 단위의 작업분담이 필요하다는 레슨을 얻었습니다.**

### ✨ 태스크, 이슈, PR 관리 등에 깃허브를 적극적으로 활용하였습니다.

저희의 팀 규칙 중 하나는, **누군가 이슈를 발견했을 때 “해당 이슈를 발견하게 된 상황”, “왜 이 이슈를 해결해야 하는 지” 등 문제에 대해서 팀원들이 이해하고 공감할 수 있도록 최대한 자세히 설명하기**입니다.

예를 들어 버그를 발견했을 때는 해당 버그가 나타난 상황에 대해서 공유하고, 자신이 생각했을 때의 해결방법 등 **전달받는 사람이 이해하기 쉽게 전달하려고 노력**했습니다. 


- 이슈를 생성할 때는 버그 발생 상황에 대해 설명하며 캡쳐나 gif를 첨부하는 등 최대한 정보를 전달하였습니다.

![이슈](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e40de854-8e5c-45c7-91e8-b1e5ac6eb33a/.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T153044Z&X-Amz-Expires=86400&X-Amz-Signature=6991110b2478704898d115e97a67ba9be52eba9a34c9c08f97934f61451c3ef8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%259D%25B4%25EC%258A%2588.gif%22&x-id=GetObject)



- PR에는 이슈를 링크해 어떻게 해결했는지, 어떤 글을 참고했는 지에 대한 설명과 중점적으로 봐주었으면 하는 부분을 명시해 효율적인 코드 리뷰를 유도하였습니다.

![PR](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3bd929dd-1743-4ffb-b26d-9db80fb962dd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T153134Z&X-Amz-Expires=86400&X-Amz-Signature=2c2ef7ef29d15b3f4670d3bd742f20d893a989ff87d57c5e62b9e0f945e59968&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)


- **깃허브의 Issue와 Pull Request에 템플릿을 적용**함으로써 이런 커뮤니케이션에 사용되는 비용을 줄이고자 하였습니다.

![Issue 템플릿](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/870ad4c6-6cdf-4685-9466-2f8d5ab8b24b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T153224Z&X-Amz-Expires=86400&X-Amz-Signature=8a4f5f446cd6eb069fa16dfb045315929d3d15cc13c3d4030f52fe407873595b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

BUG, CUSTOM, FEATURE 세 가지 Issue 템플릿을 사용하고 있습니다.

- 생성한 이슈는 [깃허브 프로젝트](https://github.com/FEeasy404/GameUs/projects/1)와 연결하여 진행 상황을 한눈에 볼 수 있도록 하였습니다.


- [깃허브 위키](https://github.com/FEeasy404/GameUs/wiki)에 코딩, 커밋, PR 컨벤션을 정리해 두어 편하게 볼 수 있도록 하였습니다.


- PR을 작성하면 **최소 2명에게 코드 리뷰를 받은 뒤 머지**하도록 규칙을 설정해서, 디스코드 채널에 **Github 웹훅**을 연동해 PR이나 변경사항 커밋이 있을 경우 **빠르게 알림을 받을 수 있도록** 하였습니다. 

![깃허브 웹훅](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e86a472f-f7e8-47a5-a099-d3ece6a3033e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T153546Z&X-Amz-Expires=86400&X-Amz-Signature=6d6093b6ab6c13a951fe9ebcd89859b0241e0a6f5407863af68c24a73e4d5c27&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## 고생담, 레슨런

### 🎮 **아토믹 디자인 패턴은 많은 작업시간과 에너지를 요구한다**

- props가 계속 컴포넌트를 타고 전달되기 때문에 **여러 컴포넌트를 동시에 관리하기 복잡**했고, 각각의 **컴포넌트가 잘 동작하는지 확인하기가 까다로웠습니다**.
- 기존의 5단계 구조에서 atom, molecules, organisms, pages 4단계 구조로 변형해 사용했지만, 좀더 단순화할 필요가 있었던 것 같습니다.
- 이러한 문제를 예상해서 프로젝트 전 **스터디**를 통해서 **StoryBook**을 사용해봤지만, 리액트에도 익숙하지 않았었기 때문에 **학습 비용이 높다고 판단해 도입하지 않았습니다.**
- 하지만 이번 프로젝트를 통해서 **시각적 테스트의 어려움을 크게 느꼈고**, **아토믹 디자인 패턴을 기반으로 컴포넌트를 분리할 때는 StoryBook을 적극적으로 쓰는 편이 좋겠다**는 의견에 모두 공감했습니다.

### 🎮 **편리한 UI 재사용 `vs` 기능 추가의 어려움**

- 컴포넌트를 **확장성있게, 재사용 가능하게** 만들면서 **기능을 추가**하기가 까다로웠습니다. **UI의 재사용은 편리했지만,** State를 사용하는 등 **동작을 추가하면 기대와 다르게 동작**하는 경우가 많았습니다.
- 그래서 이벤트 핸들러나 상태 등은 **재사용되지 않는 컴포넌트나, page 단위에서 props로 전달**할 수 있도록 만들어주었습니다.
- 하지만 props를 아래로 전달하고 또 전달하는 구조는, **컴포넌트를 사용할 때마다 props의 형식을 매번 확인해야 하는 번거로움이 있었습니다**. 이 부분은 props의 타입을 강제하거나 default 값을 정의해줌으로써 개선할 수 있을 것 같습니다.

### 🎮 **커뮤니케이션으로 만드는 적극적인 팀**

- 개발 프로젝트 경험이 많이 없다보니까 고민도 불안도 많았습니다. 잘하고 싶고, **어떤 논제에 대해 의견을 주고 받고, 실행을 해보고는 싶은데 아이디어가 쉽게 나오지 않았습니다**. 오랜만에 처음 프로그래밍 공부를 시작할 때 같은 막막함을 느꼈습니다.
- 저는 이러한 문제가 **지식의 격차로부터 발생된다고 생각**했습니다. 어떠한 문제에 대해서 의견을 내려면 최소한의 지식이나 경험이 있어야 자신감을 가지고 제시할 수 있을 것 같았습니다.
- 그래서 정보를 긁어모았습니다. 다른 프로젝트들을 분석하고, 협업 주제의 블로그 글을 읽고 다른 개발자분들께 질문을 던져가며 정보를 얻은 다음, 적용할 수 있을 법한 키워드들을 가져와 스터디를 시작했습니다.
- 3~4일에 한번씩 회의하면서 스터디를 진행하기 힘들었지만, **자신이 맡은 주제에 대해서는 팀 내에서 나름의 스페셜리스트가 되어 그 분야를 리드할 수 있게 되었습니다**. 부족한 정보들을 채우고 나니 자신감이 생겼고, 자신의 분야가 정해지며 오너십을 나눠가지고 이전보다 활발하게 의견을 주고받았습니다.
- 이 경험으로 우리는 **소식을, 문제를 공유하는 것이 곧 적극적인 팀을 만든다**는 교훈을 얻었고, 이후로도 노션 워크스페이스 활용, 데일리 스크럼, 깃허브, 페어프로그래밍 등 원활한 커뮤니케이션을 위한 노력을 해나가며 “**문제에 대해서 팀원들이 이해하고 공감할 수 있도록 최대한 자세히 설명하기**”라는 규칙을 지켜왔습니다.

## 프로젝트 후기

### 앞으로의 도전과제

- 아토믹 디자인 패턴을 적용하며 헤메면서 중복코드가 많이 생겼는데, 제거하는 것에 어려움을 느끼고 있습니다. API 코드를 분리하고 Custom Hook을 만들어 지금의 코드보다 가시적이고 효율적인 코드를 만들 수 있을 것 같습니다.
- setState의 비동기적 실행에 대해 더욱 공부하여 버벅임을 고쳐보도록 하겠습니다.
- 홈 피드, 팔로워/팔로잉 목록, 댓글 등의 데이터를 불러올 때 개수 제한이 있습니다. 무한스크롤 또는 페이지네이션을 추가해 전체 목록을 보여주도록 개선하고 싶습니다.
- 아직 배포를 안 했는데, 빠른 시일 내에 배포하고 싶습니다!
