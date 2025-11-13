import React from 'react'
import { Link } from 'react-router'
import logoNav from './logoNav.png'



export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src={logoNav}/>
      </div>
      <div className='links'> 
        <Link to={"/"}>Home</Link>
        <Link to={"/Quiz"}>Quiz</Link>
        <Link to={"/Result"}>Score</Link>
      </div>
    </nav>
  )
}
