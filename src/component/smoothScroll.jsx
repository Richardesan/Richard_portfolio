import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
export const SmoothScrollHero = () => {
  return (
    <div className="">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
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
<p></p>      <button
        
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        <a href="https://github.com/Richardesan">
        <FaGithub className="text-3xl hover:text-green-500 transition-all"/>  
        </a>
    </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-black" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 text-white h-screen justify-center bg-neutral-950 items-center flex  w-full"
      style={{
        clipPath,
        backgroundSize,
        // backgroundImage: "url('/2.jpg')",
        opacity,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
 <div className="flex items-end gap-x-2">
            <h1 className="text-6xl max-md:text-5xl tracking-tighter font-black rubik-dirt-regular">
              My Services
            </h1>
            <div className="w-5 h-5 bg-green-500 rounded-full mb-2" />
          </div>      </motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="/service4.svg"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="/service.svg"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="/service5.svg"
        alt="services"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="/service3.svg"
        alt="services"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white "
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase rubik-dirt-regular text-zinc-50"
      >
        My Projects
      </motion.h1>
      <ScheduleItem title="The Chills Room" date="The Chills Room is a vibrant, inclusive hub for creators, gamers, and crypto lovers" tools="react.js, tailwind, framer-motion" link="https://mychills-update.vercel.app/" />
      <ScheduleItem title="Pacetopper" date="Pacetopper is a technology services for banks, fintechs, and mobile networks" tools="next.js" link={"https://new.pacetopper.com/"}/>
      <ScheduleItem title="Acces" date="Acees is a fashion e-commerce site that provides you with an effortless and enjoyable shopping experience." tools="React.js,framer-motion, tailwind" link={"https://github.com/Pr3c10us/Ecommerce"}  />
      <ScheduleItem title="GoZapper" date="Developed APIs for product catalog, cart management and order processing" tools="typescript, tailwind" link={"https://github.com/Pr3c10us/GoZapper-Client"}/>
      <ScheduleItem title="Leashtash" date="Developed APIs for product catalog, cart management and order processing" tools="react.js, tailwind, framer-motion" />
      
    </section>
  );
};

const ScheduleItem = ({ title, date, tools, location, link }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9 cursor-pointer group"
    >
      <a href={link} target="blank">
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
        <p className="text-xs uppercase text-zinc-500">{tools}</p>
      </div>
      </a>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FaArrowRight className="group-hover:text-white duration-200"/>      </div>
    </motion.div>
  );
}