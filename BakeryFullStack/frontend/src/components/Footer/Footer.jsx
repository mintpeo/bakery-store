import React from 'react'
import './Footer.css'
import logow from '../../assets/images/logow.jpg'
import facebook from '../../assets/images/facebook.jpg'
import twitter from '../../assets/images/twitter.jpg'
import instagram from '../../assets/images/instagram.jpg'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={logow} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <div className="footer-social-icons"> {/* Sửa lại class name */}
                    <img src={facebook} alt="Facebook" />
                    <img src={twitter} alt="Twitter" />
                    <img src={instagram} alt="Instagram" />
                </div>
            </div>
            <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                      <li>Home</li>
                      <li>About us</li>
                      <li>Delivery</li>
                      <li>Privacy policy</li>
                    </ul>
            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                      <li>+84 762-333-773</li>
                      <li>contact@bakery.com</li>
                    </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">CopyRight 2024 @ Bakery.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer