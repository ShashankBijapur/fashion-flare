import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react';
import CartCard from '../Components/CartCard';
const Cart = () => {
    const [cart, setcart] = useState([])
    const getcartdata = () => {
        // fet
        axios.get("http://localhost:8080/cart")
            // .then(res=>res.json())
            .then(res => setcart(res.data))
    }
    useEffect(() => {
        getcartdata()
    }, []);

    console.log(cart)
    return (
        <>
            <Box width={"80%"} justifyContent="space-around" margin={"auto"}>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/28032021-D-cartpagebanner-relianceones.jpg" alt="" />
                <Box style={{ textAlign: "center" }}>
                    {cart.map((item,index) =>
                       <CartCard item={item }  key={index}/> )}
                </Box>
            </Box>
        </>
    )
}

export default Cart