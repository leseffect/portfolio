const PLACEHOLDER_GRADIENTS = [
  ['#6366f1', '#a855f7'],
  ['#0ea5e9', '#22d3ee'],
  ['#f97316', '#f43f5e'],
  ['#10b981', '#84cc16'],
  ['#ec4899', '#8b5cf6'],
  ['#14b8a6', '#3b82f6'],
] as const;

function hashString(value: string): number {
  let hash = 0;
  for (const char of value) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }
  return hash;
}

/** 썸네일이 없을 때 사용할 배경 그라디언트 (제목 기준으로 항상 같은 색) */
export function getPlaceholderGradient(seed: string): string {
  const [from, to] = PLACEHOLDER_GRADIENTS[hashString(seed) % PLACEHOLDER_GRADIENTS.length];
  return `linear-gradient(135deg, ${from}, ${to})`;
}

/** 대체 이미지에 표시할 첫 글자 */
export function getInitial(title: string): string {
  const trimmed = title.trim();
  return trimmed ? Array.from(trimmed)[0].toUpperCase() : '?';
}
