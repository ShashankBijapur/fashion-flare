import React from 'react'
import "./Card.css"

const Card = ({id,title, image, des,price,offer}) => {
    return (
        <div className='card-cont'>
            <div className='img-div'>
                <img src={image} alt="" />
            </div>
            <div className='card-content-wrap'>
                <div className="card-content">
                    <div>{title}</div>
                    <div>{des}</div>
                    <div> {price} Rs</div>
                    <div>Offer price {offer} Rs</div>
                </div>

            </div>

        </div>
    )
}

export default Card