import React from 'react'
import Button from './Button';
const AboutMe = () => {
    const noSelectCSS = {
        userSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        MozUserSelect: 'none'
      };
  return (
    <section id="home"  className="flex flex-col justify-center items-center h-screen space-y-10 " >
    <div className="w-40 h-40 rounded-full ">
      <img src="./bolu.jpeg" className="w-full h-full object-cover rounded-full" style={noSelectCSS}/>
    </div>
    <div className="font-bold text-center uppercase" style={noSelectCSS}>
      <p className="text-6xl max-sm:text-3xl pointer-events-none">hello i am bolu</p>
      <p className="text-5xl max-sm:text-2xl pointer-events-none">a backend web developer</p>
      {/* <Bubble /> */}
    </div>
    <Button name={"HIRE ME"} />
  </section> 
  )
}

export default AboutMe