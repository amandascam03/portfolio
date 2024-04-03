import { Topbar } from "./components/Topbar/Topbar";
import { About } from "./pages/About/About";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Skills } from "./pages/Skills/Skills";
import "./main.css"
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Topbar />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
