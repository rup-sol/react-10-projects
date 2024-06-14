import React from 'react'

export default function Navgation() {
  return (
    <div>
        <nav className='container'>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li a href="#">
            Contact
          </li>
        </ul>
        <button className="login-button">Login</button>
      </nav>
      
    </div>
  )
}

