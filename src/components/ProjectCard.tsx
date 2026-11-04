import type { Project } from '../types';
import { getDisplayHost, toSafeUrl } from '../utils/url';
import { ProjectThumbnail } from './ProjectThumbnail';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const safeUrl = toSafeUrl(project.url);
  if (!safeUrl) return null;

  return (
    <li className="card">
      <a
        className="card__link"
        href={safeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} 사이트 열기 (새 탭)`}
      >
        <div className="card__media">
          <ProjectThumbnail title={project.title} src={project.thumbnail} />
          <span className="card__overlay" aria-hidden="true">
            사이트 방문 ↗
          </span>
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
          <span className="card__host">{getDisplayHost(safeUrl)}</span>
        </div>
      </a>
    </li>
  );
}
