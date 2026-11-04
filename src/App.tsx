import { ProjectGrid } from './components/ProjectGrid';
import { PROJECTS } from './data/projects';

export function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">My Websites</h1>
        <p className="header__subtitle">
          제가 만든 웹사이트들을 한곳에 모았습니다. 이미지를 클릭하면 해당 사이트로 이동합니다.
        </p>
      </header>
      <main className="main">
        <ProjectGrid projects={PROJECTS} />
      </main>
      <footer className="footer">© {new Date().getFullYear()} Portfolio</footer>
    </>
  );
}
