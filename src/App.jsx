import About from "./component/About";
import AboutMe from "./component/AboutMe";
import Button from "./component/Button";
import ContactMe from "./component/ContactMe";
import Navbar from "./component/Navbar";
import Portfolio from "./component/Portfolio";
import Services from "./component/Service";
import { SmoothScrollHero } from "./component/smoothScroll";
export default function App() {
  return (
    <section>
      {/* <Navbar />
      <AboutMe />
      <About />
      <Services />
      <Portfolio />
      <ContactMe /> */}
      <SmoothScrollHero />
    </section>
  );
}
