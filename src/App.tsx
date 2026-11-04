import { BackgroundBlobs } from './components/BackgroundBlobs';
import { BouncyTitle } from './components/BouncyTitle';
import { ProjectGrid } from './components/ProjectGrid';
import { PROJECTS } from './data/projects';

const SITE_TITLE = "InfluEunseo's Home";
const SITE_SUBTITLE = '하나씩 만들어온 작은 웹들의 집';

export function App() {
  return (
    <>
      <BackgroundBlobs />
      <header className="header">
        <BouncyTitle text={SITE_TITLE} />
        <p className="header__subtitle">{SITE_SUBTITLE}</p>
      </header>
      <main className="main">
        <ProjectGrid projects={PROJECTS} />
      </main>
      <footer className="footer">© {new Date().getFullYear()} InfluEunseo</footer>
    </>
  );
}
