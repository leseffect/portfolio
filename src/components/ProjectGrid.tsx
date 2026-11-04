import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return <p className="empty">아직 등록된 사이트가 없어요. 곧 채워질 거예요!</p>;
  }

  return (
    <ul className="grid">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </ul>
  );
}
