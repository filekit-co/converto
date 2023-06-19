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
        - [ ] x to text api 붙이기
        - [x] api list file 받기
    - 세현
        - [ ] 다운로드 / 미리 보기
- 17일
    - 민욱
      - [ ] x to text api 붙이기
      - [ ] pdf api 붙이기
    - 세현
      - [ ] 이미지 업로드 컴포넌트 이벤트 구현
      - [ ] 이미지 다운로드 => 페이지 라우팅해서   
- 18일
    - 민욱
      - [x] url to image remove
      - [ ] x to text
         - pdf to text
         - doc to text
         - csv to text
         - image to text
         - md to text
      - [ ] merge pdf
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
    - [ ] images -> pdf
    - [ ] pdf -> images
    - [ ] file comporess / decompress
    - [ ] pdf encrypt / decrypt
    - [ ] pdf merge, delete, arrange
  - 세현
    - [x] image URL 파일 데이터 입/출력
    - [x] 파일 업로드(버튼 액션 설정) - input 없이 button으로만 파일 선택, 서버에서 데이터 받아오도록 수정
    - [ ] 파일 업로드 이후(사진, 다운로드) ui 수정
    - [ ] git action 설정
    - [ ] i18n 동작 구현
