import React from 'react'
// import Instagram from './imagesLogos/instaLogo.png'
// import Style from './StoriesStyle.module.css'
const StoryItem = (props) => {
   // if (props.username !== null) {
   //    const [first] = props.username.split(' ');

   // }
   return (
      <>
         <div className="d-flex ms-3 flex-column">
            <a className="text-center text-decoration-none text-light" href="#">
               <img src={props.img} className='rounded-circle' alt="" width="50" height="50" />
            </a>
            <label className='text-center text-light' style={{ fontSize: 'small' }} htmlFor='username'>{props.username}</label>
         </div>
      </>
   )
}

export default StoryItem
