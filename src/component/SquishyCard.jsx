import { motion } from "framer-motion";

const SquishyCard = ({name , description}) => {
  return (
    <section className="">
      <div className="mx-auto w-fit">
        <Card name={name} description={description}/>
      </div>
    </section>
  );
};

const Card = ({name, description}) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative cursor-pointer  h-44 w-96 max-lg:w-[80vw] max-md:h-fit shrink-0 overflow-hidden rounded-xl bg-indigo-500 py-12 px-8  border-b-4 border-white"
    >
      <div className="relative z-10 text-white">

        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="mt-4  origin-top-left  text-3xl  font-black leading-[1.2]"
        >
                <h1 className='mb-2 font-semibold text-base'>{name}</h1>

        </motion.span>
        <p className='w-11/12 text-xs'>{description}</p>

      </div>
     

    
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

export default SquishyCard;