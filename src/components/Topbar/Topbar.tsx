import "./Topbar.css"

export const Topbar = () => {

  return (
    <div className="topbar">
      <header>
      <nav className="navigation">
      <ul>
        <li>
          <a href="#about">Sobre mim</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
      </nav>
      </header>
    </div>
  );
};
