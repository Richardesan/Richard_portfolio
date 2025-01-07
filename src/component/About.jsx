import React from "react";
import Button from "./Button";
const About = () => {
  const mySkills = [
    "javascript",
    "typescript",
    "node js",
    "c",
    "C++",
    "MySQL",
    "HTML",
    "CSS",
    "Phyton",
    "Next.js",
  ];
  return (
    <section id="about" className="h-screen flex justify-center items-center   py-10">
      <section className="px-10 max-sm:px-2">
        <article>
          <h2 className="text-center text-5xl font-bold mb-7 max-sm:mb-2 max-sm:text-3xl">ABOUT ME</h2>
          <p className="text-center text-base mb-20 max-sm:mb-10 leading-snug max-sm:text-sm">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </article>
        <article className="flex items-start justify-center max-md:block max-md:text-center gap-x-10">
          <div className="flex-1 max-md:mb-10 max-sm:mb-5">
            <h1 className="uppercase text-center font-bold text-2xl mb-3">
              Know more about me
            </h1>
            <p className="text-lg leading-snug max-sm:text-sm">
              "I'm a Bolu a dedicated backend developer with a passion for
              creating robust and scalable server-side applications With a keen
              eye for optimizing performance and security. I enjoy building
              systems that solve real-world problems. " i am passionate about
              building efficient and continually learn new technologies to
              improve my craft . i enjoy collaborating with teams to solve
              complex and deliver impactful solution.
            </p>
          </div>

          <div className="flex-1 ">
            <h1 className="text-2xl font-bold uppercase text-center mb-3">My skills</h1>
            <div className="flex-wrap flex gap-2 max-sm:text-sm justify-center">
              {mySkills.map((data, index) => {
                return <Button key={index} name={data} />;
              })}
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default About;
