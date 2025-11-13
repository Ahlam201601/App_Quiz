import React from 'react'
import logoNav from './logoNav.png'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='logo-footer'>
            <img src={logoNav}/>
        </div>
        <div>
            <p className='footer-p'>TechEdu Learning Center © 2025</p>
        </div>
    </footer>
  )
}
