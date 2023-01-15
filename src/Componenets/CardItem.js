import React from 'react'
import Instagram from './imagesLogos/instaLogo.png'

const CardItem = (props) => {
    return (
        <div className="card border-secondary mb-3" style={{ width: '500px', backgroundColor: 'black' }} >
            <div className="card-header bg-transparent border-success">
                <a className="navbar-brand text-light" href="/">
                    <img src={props.img} alt="" width="40" height="34" className="rounded-circle d-inline-block align-text-top" />
                    <label className='text-light ms-2 my-auto'>{props.username}</label>
                </a>
            </div>
            <img src={props.img} className="card-img-top" height="500" alt="..."></img>
            <div className="card-body text-light">
                <div className="d-flex m-0" >
                    <div className="pt-2 pb-2 pe-2 fs-5"><i className="bi bi-heart"></i></div>
                    <div className="p-2 fs-5"><i className="bi bi-messenger"></i></div>
                    <div className="p-2 fs-5"><i className="bi bi-send"></i></div>
                    <div className="ms-auto p-2 fs-5"><i className="bi bi-bookmark"></i></div>
                </div>
                <small className="card-title">45 likes</small>
                <p className="card-text ">{props.username}{props.caption}</p>
                <small className="text-muted">3 mins ago</small>
            </div>
            <div className="card-footer bg-transparent text-light border-secondary">
                <div className="input-group " >
                    <i className="bi bi-emoji-smile fs-5 me-2"></i>
                    <input type="text" className="form-control " placeholder='Add a comment...' style={{ backgroundColor: 'black', border: 'none' }} aria-label="Amount (to the nearest dollar)" />
                    <span className="input-group-text text-light" style={{ backgroundColor: 'black', border: 'none' }}>Post</span>
                </div>
            </div>
        </div>
    )


}

export default CardItem