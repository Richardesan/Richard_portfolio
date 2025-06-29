import anime from "animejs";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative text-white h-screen flex justify-center items-center bg-black px-8 py-12">
      <section className="flex items-center justify-center max-md:justify-start">
        <section className="absolute -translate-x-1/2 ml-32 max-md:relative max-md:translate-x-0 max-md:ml-0">
          <div className="flex items-end gap-x-2">
            <h1 className="text-8xl tracking-tighter font-black rubik-dirt-regular max-md:text-6xl max-sm:text-5xl">
              Hi, I'm Esan
            </h1>
            <div className="w-5 h-5 bg-green-500 rounded-full mb-1" />
          </div>
          <div className="w-[36vw] max-md:w-full ">
            <p className="text-gray-400 font-bold text-4xl my-4 max-md:text-2xl">
              I'm a <span className="text-green-500 ">Frontend Developer </span>
            </p>
            <p className="mb-5 font-semibold text-gray-400 max-md:text-sm">
              I've spent the last 5 years building and scaling software for some
              pretty cool companies. It's been a rewarding journey, tackling complex challenges and driving impactful solution. Let's connect!
            </p>
            <a href="#contactme">
            <Button />

            </a>
            
          </div>
        </section>
        <div className="absolute translate-x-1/2 mr-20 max-md:hidden">
        <DotGrid />

        </div>
      </section>
    </div>
  );
};

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

const DotGrid = () => {
  const handleDotClick = (e) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-green-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};

export default Hero;
