import type { Project } from '../types';

/**
 * 포트폴리오에 표시할 웹사이트 목록입니다.
 * 새 사이트를 추가하려면 아래 배열에 항목을 하나 추가하세요.
 *
 * 썸네일 이미지는 public/thumbnails/ 폴더에 넣고
 * thumbnail: '/thumbnails/my-site.png' 처럼 경로를 적으면 됩니다.
 * (thumbnail 을 비워두면 사이트 이름으로 대체 이미지가 자동 생성됩니다.)
 */
export const PROJECTS: Project[] = [
  {
    id: 'nuga-record-helper',
    title: '누가기록 작성 도우미',
    description: '교사용 수업·관찰 기록 및 생활기록부 AI 요약 도구',
    url: 'https://student-log-taupe.vercel.app/',
    thumbnail: '/thumbnails/nuga-record-helper.webp',
  },
];
