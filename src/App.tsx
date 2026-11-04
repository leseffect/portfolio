import { ProjectGrid } from './components/ProjectGrid';
import { PROJECTS } from './data/projects';

export function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">InfluEunseo&apos;s Home</h1>
        <p className="header__subtitle">
          하나씩 만들어온 작은 웹들의 집
        </p>
      </header>
      <main className="main">
        <ProjectGrid projects={PROJECTS} />
      </main>
      <footer className="footer">© {new Date().getFullYear()} InfluEunseo</footer>
    </>
  );
}
