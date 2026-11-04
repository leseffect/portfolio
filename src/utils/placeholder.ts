const PLACEHOLDER_GRADIENTS = [
  ['#ff8fab', '#ffb86b'],
  ['#7cc6fe', '#a78bfa'],
  ['#5eead4', '#a3e635'],
  ['#fbbf24', '#fb7185'],
  ['#c084fc', '#f472b6'],
  ['#38bdf8', '#34d399'],
] as const;

const CARD_ACCENTS = ['#ff6b9a', '#ffb020', '#3fc1ff', '#7c5cff', '#2ed3a4', '#ff7a45'] as const;

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

/** 카드마다 돌아가며 쓰는 포인트 색상 */
export function getCardAccent(index: number): string {
  return CARD_ACCENTS[index % CARD_ACCENTS.length];
}

/** 대체 이미지에 표시할 첫 글자 */
export function getInitial(title: string): string {
  const trimmed = title.trim();
  return trimmed ? Array.from(trimmed)[0].toUpperCase() : '?';
}
