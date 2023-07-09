# Converto

## Work 

- 6월 
    - 시간
        - 8시간 / 민욱
        - 8시간 / 세현
    - scrum
        - 매일 오후 1시
    - 오픈라인 3번 만나기

## Strategy
> DBless service를 1주 단위로 배포


- App List
    - background removal
    - file size zip
    - image + merge -> pdf
    - sound to text (STT)
    - 번역 / langchain 아티클 작성
        - How TO
    - emoji
    - unsplash
    - 스토리 몰래보기

## Goal

- `민욱`: 23년 6월동안 2개 웹사이트 배포.
- `세현`: 6월 개발
    - [ ] background remove
    - [ ] image merge

## Timeline


- 6월
    - [x to text](https://convertio.co/kr/)
        - 1차: to text
        - 2차: x to y (pdf + pdf -> pdf)
    - [remove background](https://www.remove.bg/) (image edit)
    - `i18n`
        - 미국
        - 중국
        - 인도
        - 한국 / 일본
        - 동남아
    - svelte seo
    - vercel 배포
    - `api 서버`
        - /to text
        - /to y
        - /remove/png
    - api cloud run으로 배포
- 7월
    - 애드센스 신청
    - 새로운 프로젝트 시작

# 6월

- 3쨰주(15 - 17)
    - back
        - ocr
        - x to text
    - pdf front
        - 다운로드
    - image front
        - 파일 업로드
- 4째주 ( 18 -  24)
    - pdf front
        - 다운로드
    - image front
        - 다운로드
        - 
- 5째주 (25 - 30)
    - 프론트 배포
    - 백앤드 배포
    - httpsㄴ
    - nginx(?)

## 3째주
- 16일
    - 민욱
        - ~~[] x to text api 붙이기~~
        - [x] api list file 받기
    - 세현
        - [x] 다운로드 / 미리 보기
- 17일
    - 민욱
      - [x] pdf api 붙이기
    - 세현
      - [x] 이미지 업로드 컴포넌트 이벤트 구현
      - [x] 이미지 다운로드 => ~~페이지 라우팅~~
- 18일
    - 민욱
      - [x] url to image remove
      - ~~[ ] x to text~~
      - [x] merge pdf
      - [ ] compress pdf
      - [ ] images to pdf
    - 세현
      - [x] file drop event 함수 작성
      - [x] file drop event ui 만들기
      - [x] image download button
- 19일
  - 민욱
    - [x] pdf -> document
        - to-doc
            - [x] /epub-to-doc
            - [x] /pdf-to-doc
            - [x] /xps-to-doc
        - to-docx
            - [x] /epub-to-docx
            - [x] /pdf-to-docx
            - [x] /xps-to-docx

    - x -> pdf
        - [x] /xps-to-pdf
        - [x] /epub-to-pdf
        - [x] /oxps-to-pdf
        - [x] /cbz-to-pdf
        - [x] /fb2-to-pdf
    - [ ] pdf -> images
    - [ ] file comporess / decompress
    - [x] pdf encrypt / decrypt
    - [x] pdf merge ~~delete, arrange~~
  - 세현
    - [x] image URL 파일 데이터 입/출력
    - [x] 파일 업로드(버튼 액션 설정) - input 없이 button으로만 파일 선택, 서버에서 데이터 받아오도록 수정
    - [x] 파일 업로드 이후(사진, 다운로드) ui 수정
    - [ ] git action 설정
    - [x] i18n 동작 구현
- 20일
  - 민욱
    - [x] pdf encrypt / decrypt
    - [x] pdf logo / watermark
    - [x] join pdfs
    - [x] extract pages
    - [x] UI: svelte file convert page
    - [x] 스크럼 아침 7시
  - 세현
    - [x] 각 컴포넌트, 페이지 SEO 적용(p, h, meta 적극 활용)
    - [x] 파일 업로드 이후(사진, 다운로드) css 수정
    - [ ] git action 설정
    - [x] i18n 동작 구현
  - 재원
    - [x] [youtube to mp3](https://www.y2mate.com/en625)
    - [x] Research (금요일 부터 시작)
- 21일
  - 민욱
    - [x] svelte file convert page
    - [ ] API: pdf to image
  - 세현
    - [x] 페이지 별로 seo 적용
    - [x] css 마무리
  - 재원
    - ~~[ ] rgba to rgb~~
- 22일
  - 세현
    - [x] 배포
- 23일
  - 민욱
    - [ ] api 별 프론트 작업
    - [x] 서버 배포
  - 세현
    - [x] 메인 페이지 ( features) i18n 적용
- 24일
  - 세현
    - [x] i18n 마무리(html lang 변경 hook - getlang 함수 구현)
- 25일
  - 민욱
    - [x] cloud run server 2개 배포
    - [x] download page
  - 세현
    - [x] i18n ssr 적용
-26일
  - 민욱
    - [ ] lock pdf, pdf converter, pdf compress 페이지 만들기
    - [ ] 파일 변환 페이지 마다 html decription 작성
    - [ ] header, footer 정리
  - 세현
    - [x] 드래그 앤 드롭 영상 참고해서 css 정리
    - [ ] ~~다운로드 페이지 ( 이밎 결과물 왔을 때 네비게이션으로 다른 페이지 보여주고 + 다운로드 )~~
- 27일
    - 민욱
        - [ ] api 리팩토링
        - [x] unlcok ui
        - [ ] UI: lock pdf, pdf converter, pdf compress 페이지 만들기
        - [ ] header, footer 정리
    - 세현
        - [ ] sitemap.xml
        - [ ] 파일 변환 페이지 마다 html decription 작성
        - [ ] +page.ts remove/bg 용 만들기
- 29일
  - 민욱
    - [ ] api 별 페이지
    - [ ] vercel 구매 및 배포
    - [ ] https 적용
  - 세현
    - [ ] features 컴포넌트 템플릿으로 변환 -> props에 따라서
    - [ ] 다이나믹 라우팅 -> remove/jgp-to-png 이런식으로
    - [ ] 네비게이션, footer

# 7월
## 목표
- [ ] file kit 최적화
- [ ] 유튜브 to mp3
- [ ] 이모지 복사, 다운로드 사이트
- [ ] 케이팝 뉴스 사이트
- [ ] ai 기사 사이트

- 1쨰주
    - filekit 사이트 최대한 서비스 품질 향상.
      - [ ] api 기능 추가
      - [ ] i18n - pipeline && ssr
      - [ ] 사이트
- 2째주 
    - ytube.to.mp3.com
    - get emoji.com
- 3째주 
    - kpop.new.com
- 4,5 째주
    - ai 기사 사이트
 
- 4일
  - 민욱
    - [x] image file converter ( jpg to png ) api 붙이기
    - [x] 사이트 퍼포먼스 향상 - 이미지 캐싱
    - [x] 에러 해결 - 파일명 깨지는 문제 해결
    - [x] 메인페이지 -> convert 사이에 중간 페이지
  - 세현
    - [ ] url 바꾸기
    - [ ] 각 페이지마다 feature 붙이기
    - [ ] i18n ssr 테스트 및 작동 확인
    - [ ] feature 각 icon들 추가
    - [ ] image uploader import 이해하고 적용하기
- 5일
    - 민욱
      - [x] image 변경 마무리 (페이지)
      - [ ] 자동번역 파이프라인
    - 세현
      - [ ] [i18n /ko /en mozila와 같게](https://github.com/kaisermann/svelte-i18n/issues?q=ssr+is%3Aclosed)https://github.com/kaisermann/svelte-i18n/issues?q=ssr+is%3Aclosed
- 6일
    - 민욱
      - [x] fix: image function build error
      - [ ] i18n merge (세현 PR)
      - [ ] 자동번역 파이프라인
    - 세현
      - [ ] youtube 2 mp3
- 9일
    - 민욱
      - [x] deploy filekit.co version 1.0.0
    - 세현
      - [ ] Download 컴포넌트 수정 - 사용자 url 들어왔을 때 해당 영상 섬네일 보여주기
      - [ ] Download 컴포넌트 수정 - 사용자 select format에 따른 파일 타입, 사이즈, 다운로드로 수정
      - [ ] 모바일 사이즈 일때, search 햄버거로 바꾸고 사용자가 보기 편하게 수정
