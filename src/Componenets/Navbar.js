import React from 'react'
import logo from './imagesLogos/logo.png'
import Instagram from './imagesLogos/instaLogo.png'
import Style from './NavStyle.module.css'
const Navbar = () => {
   return (
      <div className={`d-flex justify-content-evenly fixed-top border-bottom border-secondary  ${Style.NavLen}`}>
         <div className="my-auto">
            <a href="#" >
               <img src={logo} className="mt-1" alt="" width="120" height="35" />
            </a>
         </div>
         <div className="my-auto">
            <input className={`${Style.Search} rounded-3`} type="search" placeholder="Search" aria-label="Search" />
         </div>
         <div className="d-flex my-auto">
            <a href="/" ><i className={`${Style.Icon} bi bi-house-door-fill me-4 fs-4`}></i></a>
            <a href="/" ><i className={`${Style.Icon} bi bi-messenger me-4 fs-4`}></i></a>
            <a href="/" ><i className={`${Style.Icon} bi bi-plus-square me-4 fs-4`}></i></a>
            <a href="/" ><i className={`${Style.Icon} bi bi-compass me-4 fs-4`}></i></a>
            <a href="/" ><i className={`${Style.Icon} bi bi-heart me-4 fs-4`}></i></a>
            <a className="navbar-brand me-4" href="#">
               <img src={Instagram} alt="" width="40" height="40" />
            </a>
         </div>
      </div>
   )
}

export default Navbar
