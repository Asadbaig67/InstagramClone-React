import React from 'react'
import Instagram from './imagesLogos/instaLogo.png'
import Style from './StoriesStyle.module.css'
import StoryItem from './StoryItem';
// import { actionCreator } from '../state/index'
// import { useDispatch, useSelector } from 'react-redux'
import {
   Link
} from "react-router-dom";
const Stories = () => {

   // For Buttons To Scroll Right and Left
   const scrollleft = () => {
      let slider = document.getElementById('slider');
      slider.scrollLeft = slider.scrollLeft - 200;
   }
   const scrollright = () => {
      let slider = document.getElementById('slider');
      slider.scrollLeft = slider.scrollLeft + 200;
   }


   return (
      <div id="slider" className={`${Style.Height} container d-flex border border-secondary`}  >
         <Link className="text-center text-decoration-none text-light" to="/business">
            <img src={Instagram} alt="" width="50" height="50" />
            <label style={{ fontSize: 'small' }}  >Business</label>
         </Link>
         <Link className=" ms-3 text-center text-decoration-none text-light" to="/entertainment">
            <img src={Instagram} alt="" width="50" height="50" />
            <label style={{ fontSize: 'small' }}  >Fun</label>
         </Link>
         <Link className=" ms-3 text-center text-decoration-none text-light" to="/general">
            <img src={Instagram} alt="" width="50" height="50" />
            <label style={{ fontSize: 'small' }}  >General</label>
         </Link>
         <Link className=" ms-3 text-center text-decoration-none text-light" to="/health">
            <img src={Instagram} alt="" width="50" height="50" />
            <label style={{ fontSize: 'small' }}  >Health</label>
         </Link>
         <Link className=" ms-3 text-center text-decoration-none text-light" to="/science">
            <img src={Instagram} alt="" width="50" height="50" />
            <label style={{ fontSize: 'small' }}  >Science</label>
         </Link>
         <Link className=" ms-3 text-center text-decoration-none text-light" to="/sports">
            <img src={Instagram} alt="" width="50" height="50" />
            <label style={{ fontSize: 'small' }}  >Sports</label>
         </Link>
         <Link className=" ms-3 text-center text-decoration-none text-light" to="/technology">
            <img src={Instagram} alt="" width="50" height="50" />
            <label style={{ fontSize: 'small' }}  >Tech</label>
         </Link>
      </div>
   )
}

export default Stories

//


//
{/* <>
         {Userdata === [] ? <h1>Cannot Fetch data from backend</h1> : <div id="slider" className={`${Style.Height} container d-flex border border-secondary`}>
            {Userdata !== [] && Userdata.map((element) => {
               return <StoryItem img={element.urlToImage} username={element.author} />
            })
            }
         </div>
         }
      </> */}
//