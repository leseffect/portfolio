# Portfolio

내가 만든 웹사이트들을 한곳에 모아 보여주는 포트폴리오 사이트입니다.
카드의 이미지를 클릭하면 해당 사이트가 새 탭에서 열립니다.

## 실행

```bash
npm install
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 프로덕션 빌드 (dist/)
npm run preview  # 빌드 결과 미리보기
```

## 사이트 추가하기

1. 썸네일 이미지(스크린샷 등)를 `public/thumbnails/` 폴더에 넣습니다. (예: `my-site.png`, 16:10 비율 권장)
2. `src/data/projects.ts`의 `PROJECTS` 배열에 항목을 추가합니다.

```ts
{
  id: 'my-site',
  title: '내 사이트',
  description: '사이트 설명',
  url: 'https://my-site.example.com',
  thumbnail: '/thumbnails/my-site.png', // 생략하면 대체 이미지 자동 표시
  tags: ['React', 'TypeScript'],
},
```

> 보안상 `http://` 또는 `https://` 주소만 링크로 표시됩니다.

## 기술 스택

- Vite + React + TypeScript
