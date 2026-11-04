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
    id: 'sample-site-1',
    title: '예시 사이트 1',
    description: '여기에 사이트 설명을 적어주세요. 이 항목을 실제 사이트 정보로 교체하면 됩니다.',
    url: 'https://example.com',
    tags: ['HTML', 'CSS'],
  },
  {
    id: 'sample-site-2',
    title: '예시 사이트 2',
    description: '이미지를 클릭하면 새 탭에서 해당 사이트가 열립니다.',
    url: 'https://example.org',
    tags: ['React', 'TypeScript'],
  },
  {
    id: 'sample-site-3',
    title: '예시 사이트 3',
    description: '썸네일이 없거나 이미지를 불러오지 못하면 대체 이미지가 표시됩니다.',
    url: 'https://example.net',
    tags: ['JavaScript'],
  },
];
