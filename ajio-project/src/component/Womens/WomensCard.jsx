import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './WomensCard.css'

const CardPage = ({ id, src, brand, nameCls, price, discount, offer, orginalprice, offerpricess }, key) => {
    const navigate = useNavigate()
    const handledata = () => {
        const product = { id, src, brand, nameCls, price, discount, offer, quantity: 1 }
        navigate("/siglecard")
        localStorage.setItem("ProductsDetails", JSON.stringify(product))
    }
    return (
        <>

            <Box className="women-card" padding={{ base: "40px", lg: "10px" }} onClick={handledata} style={{ placeItems: "center" }} key={key}>
                <Image width={{ base: "170px", sm: "250px" }} src={src} alt={brand} />
                <Text fontSize={{ base: "16px", sm: "22px" }} style={{ color: "rgb(177, 153, 117)" }}>{brand}</Text>
                <Text fontSize={{ base: "12px", sm: "20px" }} >{nameCls}</Text>
                <Text fontSize={{ base: "10px", sm: "16px" }} style={{ padding: "5px", margin: "5px" }}>₹{price}
                    <span style={{ margin: "5px", textDecoration: "line-through" }}>
                        ₹{orginalprice}
                    </span>
                    <span style={{ margin: "5px" }}>
                        ({discount} %Off)
                    </span>
                </Text>
            </Box>
        </>
    )
}

export default CardPage