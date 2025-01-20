import React from 'react'

const Navbar = () => {
  return (
    <div className='mt-10'>
      <ul className='flex flex-col md:flex-row gap-x-20'>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#works">My Works</a>
        </li>
        <li>
          <a href="#works">Services</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
