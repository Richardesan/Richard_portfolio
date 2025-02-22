import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {

  const porfolio_data = [
    {
      heading: "E-commerce API",
      subheading: "Developed APIs for product catalog, cart management and order processing",
      stack: "Node.js Express, MongoDb",
      imgSrc: "/api.png",
      href:"https://youtube.com/"
    },
    {
      heading: "E-commerce API",
      subheading: "Developed APIs for product catalog, cart management and order processing",
      stack: "Node.js Express, MongoDb",
      imgSrc: "/api.png",
      href:"https://youtube.com/"
    },
    {
      heading: "E-commerce API",
      subheading: "Developed APIs for product catalog, cart management and order processing",
      stack: "Node.js Express, MongoDb",
      imgSrc: "/api.png",
      href:"https://youtube.com/"
    },
    {
      heading: "E-commerce API",
      subheading: "Developed APIs for product catalog, cart management and order processing",
      stack: "Node.js Express, MongoDb",
      imgSrc: "/api.png",
      href:"https://youtube.com/"
    },
  ]
  return (
    <section className="bg-black">
      <div className="mx-auto px-10">
       {
        porfolio_data.map((data, index)=> {
          const {heading, subheading, stack, imgSrc, href} = data
          return (
            <Link
            key={index}
            index={index}
            heading={heading}
            subheading={subheading}
            imgSrc={imgSrc}
            stack={stack}
            href={href}
          />
          )
        })
       }
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href, stack, index }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
    
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className={`group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50  `}
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-2xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 "
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>

        <span className="relative z-10 mt-2 block text-sm text-neutral-500 transition-colors duration-500 font-semibold group-hover:text-neutral-50">
          {subheading}
        </span>
        <span className="relative z-10  block text-sm text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {stack}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-24 rounded-lg object-cover"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-3xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};