import React, { useState } from 'react'
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Fade, Radio, RadioGroup, ScaleFade, Slide, SlideFade, Stack, useDisclosure } from '@chakra-ui/react'
// import DrawerExample from './Drawer'
const SingleCardPage = () => {
    var product = JSON.parse(localStorage.getItem('ProductsDetails'))
    // console.log(user)
    const { isOpen, onToggle } = useDisclosure()
    // const { isopen, onToggle } = useDisclosure()
    const [size, setSize] = useState('');

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };


    return (<>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div >
                <img width={400} src={product.src} alt={product.brand} />
                <div style={{ textAlign: "left", }} >
                    <Button color={"grey"} border="1px solid grey" mt={4} padding="5px" onClick={onToggle}>Returns</Button>

                    {/* <Button onClick={onToggle}>Click Me</Button> */}
                    <Fade in={isOpen}>
                        <Box
                            p='20px'
                            color='black'
                            mt='4'
                            bg='white'
                            rounded='md'
                            shadow='md'
                            width={400}
                            fontSize="10px"
                        >
                            Easy 15 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies, please click here․
                        </Box>
                    </Fade>

                </div>
            </div>
            <div style={{ textAlign: "center" }} >
                <h5 style={{ color: "rgb(177, 153, 117)" }}>{product.brand}</h5>
                <h5 >{product.nameCls}</h5>
                <p style={{ padding: "5px" }}>₹{product.price}
                </p>
                <div style={{display:"flex ",gap:"10px",textAlign:"center",justifyContent:"center"}}>     
                <p style={{ color: "rgb(177, 153, 117)" ,textDecoration:"line-through" }}>
                    MRP ₹{product.orginalprice}
                </p>
                    <p style={{ color: "rgb(177, 153, 117)" }}> {product.discount} </p> 
                </div>

                <h5 style={{ color: "rgb(58,182,73)" }}>Offer Price ₹{product.offerpricess}</h5>
                <p>Price Inclusive Of All Taxes</p>
                <select style={{ border: "1px solid black", width: "200px", marginTop: "10px", padding: "10px" }} value={size} onChange={handleSizeChange}>
                    <option value="" disabled selected>Select Size</option>
                    <option value="xs">Extra small (xs)</option>
                    <option value="s">Small (s)</option>
                    <option value="l">Large</option>
                    <option value="el">Extra Large (xl)</option>
                    <option value="xxl"> xxl</option>
                </select>

                {/* <DrawerExample/> */}
            </div>
        </div>
    </>

    )
}


export default SingleCardPage