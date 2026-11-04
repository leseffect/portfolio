import type { CSSProperties } from 'react';

const PUNCTUATION_PATTERN = /['’.,!?]/;

function getCharClassName(character: string): string {
  if (character === ' ') return 'title__space';
  if (PUNCTUATION_PATTERN.test(character)) return 'title__char title__char--punct';
  return 'title__char';
}

interface BouncyTitleProps {
  text: string;
}

/** 글자마다 색이 다르고, 마우스를 올리면 한 글자씩 통통 튀는 제목 */
export function BouncyTitle({ text }: BouncyTitleProps) {
  const characters = Array.from(text);

  return (
    <h1 className="title" aria-label={text}>
      {characters.map((character, index) => (
        <span
          key={index}
          className={getCharClassName(character)}
          style={{ '--char-index': index } as CSSProperties}
          aria-hidden="true"
        >
          {character}
        </span>
      ))}
    </h1>
  );
}
