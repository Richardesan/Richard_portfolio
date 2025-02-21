import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export const SmoothScrollHero = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // Adjust for smoothness (0.1 to 0.2 is best)
      smoothTouch: true,
      wheelMultiplier: 1.5, // Adjust speed
    });
  
    const update = (time) => {
      lenis.raf(time);
      requestAnimationFrame(update);
    };
  
    requestAnimationFrame(update);
  
    return () => {
      lenis.destroy(); // Cleanup to avoid memory leaks
    };
  }, []);
  

  return (
    <div className="bg-zinc-950">
      <ReactLenis root options={{ lerp: 0.025, smoothTouch: true, wheelMultiplier: 0.8 }}>
        <Nav />
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <SiSpacex className="text-3xl mix-blend-difference" />
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        LAUNCH SCHEDULE <FiArrowRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }} className="relative w-full">
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  
  // Optimized background scaling range
  const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT], ["120%", "100%"]);
  const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670" start={-150} end={150} className="w-1/3" />
      <ParallaxImg src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670" start={150} end={-200} className="mx-auto w-2/3" />
      <ParallaxImg src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670" start={-150} end={150} className="w-1/3 ml-auto" />
      <ParallaxImg src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670" start={-150} end={150} className="w-1/3 mr-auto" />

    </div>
  );
};

const ParallaxImg = ({ className, src, start, end }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: [`${start}px end`, `end ${end * -1}px`] });

  // Optimized motion properties
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return <motion.img src={src} className={className} ref={ref} style={{ transform, opacity }} />;
};

const Schedule = () => {
  return (
    <section id="launch-schedule" className="mx-auto max-w-5xl px-4 py-48 text-white">
      <motion.h1 initial={{ y: 48, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.75 }} className="mb-20 text-4xl font-black uppercase text-zinc-50">
        Launch Schedule
      </motion.h1>
      <ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
      <ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
    </section>
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div initial={{ y: 48, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.75 }} className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9">
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};
