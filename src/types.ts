export interface Project {
  /** 고유 식별자 (React key 용) */
  id: string;
  /** 카드에 표시될 사이트 이름 */
  title: string;
  /** 짧은 설명 */
  description: string;
  /** 클릭 시 이동할 사이트 주소 (http/https 만 허용) */
  url: string;
  /** 썸네일 이미지 경로. public/thumbnails/ 에 넣고 '/thumbnails/파일명' 형식으로 작성. 없으면 자동 대체 이미지 표시 */
  thumbnail?: string;
  /** 사용 기술 등 태그 */
  tags?: string[];
}
