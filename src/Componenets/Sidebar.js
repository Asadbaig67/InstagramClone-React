import React from 'react'
import Instagram from './imagesLogos/instaLogo.png'
const Sidebar = () => {
   return (
      <div className='container' style={{ marginTop: '90px', maxWidth: '300px', position: 'absolute', left: '860px', top: '10px' }}>
         <div className="d-flex my-1 text-light">
            <a className="navbar-brand text-light" href="/">
               <img src={Instagram} alt="" width="30" height="24" className="d-inline-block align-text-top" />
               <label className='ms-2' htmlFor="username">Username</label>
            </a>
            <small className='ms-auto' style={{ color: 'rgba(32,167,255,1)' }}>Switch </small>
         </div>
         <div className="d-flex mt-2 text-light">
            <small className=' fw-bold' style={{ color: 'rgba(161,152,140,1)', fontSize: 'small' }}>Suggestions For You</small>
            <small className='ms-auto'><p>See All</p> </small>
         </div>
         <div className="d-flex my-1 text-light">
            <a className="navbar-brand text-light" href="/">
               <img src={Instagram} alt="" width="30" height="24" className="d-inline-block align-text-top" />
               <label className='ms-2' htmlFor="username"  >Username</label>
            </a>
            <small className='ms-auto' style={{ color: 'rgba(32,167,255,1)' }}>Follow </small>
         </div>
         <div className="d-flex my-1 text-light">
            <a className="navbar-brand text-light" href="/">
               <img src={Instagram} alt="" width="30" height="24" className="d-inline-block align-text-top" />
               <label className='ms-2' htmlFor="username"  >Username</label>
            </a>
            <small className='ms-auto' style={{ color: 'rgba(32,167,255,1)' }}>Follow </small>
         </div>
         <div className="d-flex my-1 text-light">
            <a className="navbar-brand text-light" href="/">
               <img src={Instagram} alt="" width="30" height="24" className="d-inline-block align-text-top" />
               <label className='ms-2' htmlFor="username"  >Username</label>
            </a>
            <small className='ms-auto' style={{ color: 'rgba(32,167,255,1)' }}>Follow </small>

         </div>
         <div className="d-flex my-1 text-light">
            <a className="navbar-brand text-light" href="/">
               <img src={Instagram} alt="" width="30" height="24" className="d-inline-block align-text-top" />
               <label className='ms-2' htmlFor="username"  >Username</label>
            </a>
            <small className='ms-auto' style={{ color: 'rgba(32,167,255,1)' }}>Follow </small>

         </div>
         <div className="d-flex my-1 text-light">
            <a className="navbar-brand text-light" href="/">
               <img src={Instagram} alt="" width="30" height="24" className="d-inline-block align-text-top" />
               <label className='ms-2' htmlFor="username"  >Username</label>
            </a>
            <small className='ms-auto' style={{ color: 'rgba(32,167,255,1)' }}>Follow </small>

         </div>
         <small style={{ color: 'rgba(161,152,140,1)', fontSize: 'small' }} >
            About.Help.Press.API.Jobs.Privacy.Terms.Language
         </small>
         <p className='text-uppercase' style={{ color: 'rgba(161,152,140,1)', fontSize: 'small' }} >
            &copy; 2022 instagram form meta
         </p>

      </div>
   )
}

export default Sidebar
