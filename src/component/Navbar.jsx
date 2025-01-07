import React from 'react'
import Button from './Button'
const Navbar = () => {
  return (
    <nav className="capitalize flex justify-center items-center space-x-10 font-bold text-lg fixed w-full glass pt-3 z-50 max-sm:space-x-4 max-sm:text-xs max-sm:px-2">
    <a href="#home">
      <li>home</li>
    </a>
    <a href="#about">
      <li>about</li>
    </a>
    {/* <a href="#about">
      <li>Skills</li>
    </a> */}
    <a href="#services">
      <li>Services</li>
    </a>
    <a href="#portfolio">
      <li>Portfolio</li>
    </a>
    <a href='#contact'>
    <Button name={"Contact"} />

    </a>
  </nav>
  )
}

export default Navbar