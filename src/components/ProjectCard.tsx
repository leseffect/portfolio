import type { CSSProperties } from 'react';
import type { Project } from '../types';
import { toSafeUrl } from '../utils/url';
import { ProjectThumbnail } from './ProjectThumbnail';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const safeUrl = toSafeUrl(project.url);
  if (!safeUrl) return null;

  const cardStyle = { '--card-index': index } as CSSProperties;

  return (
    <li className="card" style={cardStyle}>
      <a
        className="card__link"
        href={safeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} 사이트 열기 (새 탭)`}
      >
        <div className="card__media">
          <ProjectThumbnail title={project.title} src={project.thumbnail} />
        </div>
        <div className="card__body">
          <h2 className="card__title">{project.title}</h2>
          <p className="card__description">{project.description}</p>
          {project.tags && project.tags.length > 0 && (
            <ul className="card__tags" aria-label="사용 기술">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          )}
          <div className="card__footer">
            <span className="card__cta" aria-hidden="true">
              놀러가기 →
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}
