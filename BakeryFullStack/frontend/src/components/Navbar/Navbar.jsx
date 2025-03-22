import React, { useState } from 'react'
import './Navbar.css'
import logow from '../../assets/images/logow.jpg'
import giohang from '../../assets/images/giohang.jpg'
import search from '../../assets/images/search.jpg'

const Navbar = () => {

    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>  
      <img src={logow} alt=""  /> 
      <ul className='navbar-menu'>
        <li onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact-us</li>
      </ul>
      <nav className="navbar-right">
        <img src={giohang} alt="Cart" />
        <div className="navbar-search-icon">
          <img src={search} alt="Search" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </nav>
    </div>
  )
}

export default Navbar
