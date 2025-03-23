import React, { useState } from 'react'
import './Navbar.css'
import logow from '../../assets/images/logow.jpg'
import giohang from '../../assets/images/giohang.jpg'
import search from '../../assets/images/search.jpg'
import { Link } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>  
      <Link to='/'><img src={logow} alt="Logo" /> </Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact-us</a>
      </ul>
      <nav className="navbar-right">
        <img src={giohang} alt="Cart" />
        <div className="navbar-search-icon">
          <img src={search} alt="Search" />
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </nav>
    </div>
  )
}

export default Navbar