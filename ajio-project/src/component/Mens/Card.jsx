import React from 'react'
import "./Card.css"
import { useNavigate } from 'react-router-dom'

const Card = ({ id, src, brand, nameCls, price, discount, offer }) => {
    const navigate = useNavigate()

    const handleDetail = () => {
        navigate(`/singlecard/${id}`)

    }
    return (
        <div onClick={handleDetail} className='card-cont'>
            <div className='img-div'>
                <img src={src} alt="" />
            </div>
            <div className='card-content-wrap'>
                <div className="card-content">
                    <div>{brand}</div>
                    <div>{nameCls}</div>
                    <div> {price}</div>
                    <div>Offer price Rs {offer} </div>
                </div>

            </div>

        </div>
    )
}

export default Card