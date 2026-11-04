import { useState } from 'react';
import { getInitial, getPlaceholderGradient } from '../utils/placeholder';

interface ProjectThumbnailProps {
  title: string;
  src?: string;
}

export function ProjectThumbnail({ title, src }: ProjectThumbnailProps) {
  const [hasError, setHasError] = useState(false);

  if (src && !hasError) {
    return (
      <img
        className="thumbnail"
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <div
      className="thumbnail thumbnail--placeholder"
      style={{ background: getPlaceholderGradient(title) }}
      aria-hidden="true"
    >
      {getInitial(title)}
    </div>
  );
}
