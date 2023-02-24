import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleProd, postCart, postWishlist } from '../../redux/action';
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Fade, Radio, RadioGroup, ScaleFade, Slide, SlideFade, Stack, useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import {
    Text,
} from '@chakra-ui/react'

const MensSingleCard = () => {
    const store = useSelector(store => store)
    const dispatch = useDispatch()
    const { id } = useParams()

    
    const { isOpen, onToggle } = useDisclosure()
    // const { isopen, onToggle } = useDisclosure()
    const [size, setSize] = useState('');
    const [text, setText] = useState(true)
    const navigate = useNavigate()
    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };
    const handleWishlist = () => {
        const payload = store.singleProd
        dispatch(postWishlist(payload))
    }
    const addtobag = () => {
        const payload = store.singleProd
        dispatch(postCart(payload))
    }
    const navigateto = () => {
        navigate("/cart")
    }

    useEffect(() => {
        dispatch(getSingleProd(id))
    }, [])

    return (<>


        <div style={{ display: "flex", justifyContent: "space-evenly", width: "90%", margin: "auto" }}>
            <div >
                <img width={400} src={store.singleProd.src} alt={store.singleProd.brand} />
                <div style={{ textAlign: "left", }} >
                    <Button color={"grey"} border="1px solid grey" mt={4} padding="5px" onClick={onToggle}>Returns</Button>
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

            <div style={{ textAlign: "center", padding: "10px" }} >
                <div style={{ textAlign: "center", padding: "10px" }}>
                    <h5 style={{ color: "rgb(177, 153, 117)" }}>{store.singleProd.brand}</h5>
                    <h5 >{store.singleProd.nameCls}</h5>
                    <p style={{ padding: "5px" }}>₹{store.singleProd.price}
                    </p>
                    <div style={{ display: "flex ", gap: "10px", textAlign: "center", justifyContent: "center" }}>
                        <p style={{ color: "rgb(177, 153, 117)", textDecoration: "line-through" }}>
                            MRP ₹{store.singleProd.orginalprice}
                        </p>
                        <p style={{ color: "rgb(177, 153, 117)" }}> ({store.singleProd.discount} %off) </p>
                    </div>

                    <h5 style={{ color: "rgb(58,182,73)" }}>Offer Price ₹{store.singleProd.offerpricess}</h5>
                    <p>Price Inclusive Of All Taxes</p>
                    <select style={{ border: "1px solid black", width: "200px", marginTop: "10px", padding: "10px" }} value={size} onChange={handleSizeChange}>
                        <option value="" disabled selected>Select Size</option>
                        <option value="xs">Extra small (xs)</option>
                        <option value="s">Small (s)</option>
                        <option value="l">Large</option>
                        <option value="el">Extra Large (xl)</option>
                        <option value="xxl"> xxl</option>
                    </select>
                </div>

                {/* <DrawerExample/> */}
                <div style={{ display: "grid ", gap: "10px", justifyContent: "center" }}>
                    <Text bg={"rgb(253,248,235)"} width={300} fontSize="10px" padding={"5px"} margin="auto">Select your size to know your estimated delivery date.</Text>
                    <Button onClick={addtobag} bg={"rgb(213,162,73)"} width={300} padding={"5px"} margin="auto"> Add to Bag</Button>
                    <Text width={300} fontSize="10px" padding={"5px"} margin="auto" color={"grey"}>HANDPICKED STYLES | ASSURED QUALITY</Text>
                    <Button onClick={handleWishlist} bg={"rgb(213,162,73)"} width={300} padding={"5px"} margin="auto"> {text ? "Save To WishList" : "Remove From WishLIst"}</Button>

                </div>

                <div style={{ display: 'inline', float: 'left', textAlign: "left", marginTop: "50px", fontSize: "16px" }}>
                    <h1 style={{
                        fontFamily: "SourceSansPro", fontSize: "14px", fontWeight: "900", lineHeight: "normal", color: " rgb(64, 103, 134)"
                    }}>Product Details</h1>
                    <li>Brand:{store.singleProd.brand}</li>
                    <li>5-pocket styling</li>
                    <li>Package contains: {store.singleProd.nameCls}</li>
                    <li>Machine wash cold</li>
                    <li>High Rise</li>
                    <li>99% cotton, 1% elastane</li>
                    <li>Product Code:{Math.floor(Math.random() * 10000000)}</li>

                </div>
            </div>
        </div>

        <div style={{ width: "80%", margin: "auto", }}>

            <div >
                <div>

                    <h1 style={{
                        fontFamily: "Lora", fontSize: "26px", fontWeight: '700', lineHeight: "1.4px", color: "rgb(88, 88, 88)", marginTop: "100px",
                    }}>About {store.singleProd.brand}</h1>
                    <hr style={{ display: "block", marginLeft: "auto", marginRight: "auto", borderStyle: "inset", borderWidth: "1px" }} />
                </div>

                <div style={{ display: 'flex' }}>
                    <div style={{ marginTop: "30px", backgroundColor: "maroon", padding: "20px", color: "white", fontFamily: "sans-serif", borderRadius: "600px" }}>
                        <h1>{store.singleProd.brand}</h1>
                    </div>
                    <p style={{ marginTop: "100px", width: "80%", margin: "auto", fontFamily: "areal", fontSize: "16px", color: "grey", padding: "30px" }}>Every day is different, so should be your look! Avaasa brings a designer collection of women’s fusion wear and ethnic clothes to AJIO, including floral print kurtas, block print kurtis, colourful shrugs, churidar leggings and more in a range of hues.</p>
                </div>


            </div>

            <div>

                <h1 style={{
                    fontFamily: "Lora", fontSize: "26px", fontWeight: '700', lineHeight: "1.4px", color: "rgb(88, 88, 88)", marginTop: "100px",
                }}>Shop more</h1>
                <hr style={{ display: "block", marginLeft: "auto", marginRight: "auto", borderStyle: "inset", borderWidth: "1px" }} />
                <div style={{ display: "flex", justifyContent: "space-between", width: "60%", margin: "auto", marginTop: "50px" }}>
                    <div onClick={navigateto} style={{ padding: "30px", background: "rgb(248,248,248)" }}> <h1>View more</h1></div>
                    <div style={{ padding: "30px", background: "rgb(248,248,248)" }}> <h1>Style:view more</h1></div>
                    <div style={{ padding: "30px", background: "rgb(248,248,248)" }}> <h1>Brand:{store.singleProd.brand}</h1></div>
                </div>
            </div>
        </div>

    </>

    )
}

export default MensSingleCard