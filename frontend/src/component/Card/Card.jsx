import React from "react";
import "./Card.css";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export const Card = ({ _id, src, brand, title, category, originalPrice, discountPrice, offer, }) => {
  const navigate = useNavigate()
  const handledata = () => {
    const product = { _id, src, brand, title, category, originalPrice, discountPrice, offer, quantity: 1 }
    console.log(product)
    localStorage.setItem("ProductsDetails", JSON.stringify(product))
    navigate(`/${category}/${_id}`)
  }

  return (
    <Box onClick={handledata}>
      <div className="card-cont">
        <div className="img-div">
          <img src={src} alt="" />
        </div>
        <div className="card-content-wrap">
          <div className="card-content">
            <div>{brand}</div>
            <div>{title}</div>
            <div> {originalPrice}</div>
            <div>Offer price {offer} </div>
          </div>
        </div>
      </div>
    </Box>
  );
};
