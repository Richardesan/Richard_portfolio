import React from "react";
import SquishyCard from "./SquishyCard";
const Services = () => {
  const allServices = [
    {
      name: "Database Management",
      description: `Design and optimize efficient, scalable data storage solutions.`,
    },
    {
      name: "Custom Backend Solution",
      description: `Implement strong security measures to protect your app.`,
    },
    {
      name: "API Development & Integration",
      description: `Build reliable and scalable APIs for smooth data exchange.`,
    },
    {
      name: "Security",
      description: `Implement strong security measures to protect your app.`,
    },
  ];
  return (
    <div id="services" className="pt-20">
          <h1 className="text-5xl font-bold text-center mb-9 ">Services</h1>
    
    <div  className="h-[120vh] max-md:h-screen  px-28 max-md:px-4 max-sm:px-2">
      
      <section className="flex items-start justify-between relative max-md:justify-center">
        <div className=" flex flex-col justify-between h-[120vh] max-md:h-screen">
          <div className="max-lg:hidden">
          <SquishyCard 
               name={"Database Management"}
               description={
                 "Design and optimize efficient, scalable data storage solutions."
               }
               />

          </div>
          <div className="pb-[10rem] max-lg:hidden">
          <SquishyCard 
               name={"Database Management"}
               description={
                 "Design and optimize efficient, scalable data storage solutions."
               }
               />
          </div>
          <div className="space-y-3 hidden max-lg:block mx-auto">
          {allServices.map((data)=> {
            return(
              <SquishyCard 
               name={data.name}
               description={data.description}
               />
            )
          })}
          </div>
      
        </div>
        
        <div className="relative">
          <div className="h-[120vh] max-md:h-screen max-lg:hidden">
            <img src="line.svg" className="h-full " />
          </div>
          <div className="h-20 w-20 rounded-full absolute bottom-1/2 -right-10 bg-white max-lg:hidden"></div>
        </div>
        <div className="h-[120vh] max-md:h-screen flex flex-col justify-between">
          <div className="pt-[10rem] max-lg:hidden">
          <SquishyCard 
               name={"Database Management"}
               description={
                 "Design and optimize efficient, scalable data storage solutions."
               }
               />
          </div>
          <div className="max-lg:hidden">

             <SquishyCard 
               name={"Database Management"}
               description={
                 "Design and optimize efficient, scalable data storage solutions."
               }
               />

          </div>
        </div>
      </section>
      
    </div>
    </div>
  );
};

export default Services;
