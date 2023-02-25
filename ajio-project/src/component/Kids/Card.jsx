import React from 'react'
import "./Card.css"

const Card = ({ id, src, brand, nameCls, price, discount, offer }) => {
    return (
        <div className='card-cont'>
            <div className='img-div'>
                <img src={src} alt="" />
            </div>
            <div className='card-content-wrap'>
                <div className="card-content">
                    <div>{brand}</div>
                    <div>{nameCls}</div>
                    <div> {price}</div>
                    <div>Offer price {offer}</div>
                </div>

            </div>

        </div>
    )
}

export default Card