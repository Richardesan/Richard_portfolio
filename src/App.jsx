import ContactUs from "./component/ContactMe";
import Footer from "./component/footer";
import Hero from "./component/Hero";
import { HoverImageLinks } from "./component/hoverImageLinks";
import Skills from "./component/skills";

import { SmoothScrollHero } from "./component/smoothScroll";
export default function App() {
  return (
    <section>
      <Hero />
      <SmoothScrollHero />
      <Skills />
      <Footer />
    </section>
  );
}
