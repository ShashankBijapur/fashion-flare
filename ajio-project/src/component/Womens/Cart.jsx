import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import CartCard from './CartCard';

const Cart = () => {
    const store = useSelector(store => store.cart)
    return (
        <>
            <Box width={"80%"} justifyContent="space-around" margin={"auto"}>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/28032021-D-cartpagebanner-relianceones.jpg" alt="" />
                <Box style={{ textAlign: "center" }}>
                    {store?.map((item, index) =>
                        <CartCard item={item} key={index} />)}
                </Box>
            </Box>
        </>
    )
}

export default Cart