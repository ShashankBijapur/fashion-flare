import React, { useState, useEffect } from 'react'
import { Fade, Image, Text, } from '@chakra-ui/react'
import { Box, Button, useDisclosure } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Carousel from './Caurosal'
import { useToast } from '@chakra-ui/react'
import Navbar from '../Navbar/Navbar';
import MobileNav from '../Navbar/MobileNav';
import { useMediaQuery } from '@chakra-ui/react'
const SingleCardPage = () => {
    var product = JSON.parse(localStorage.getItem('ProductsDetails'))


    const toast = useToast()
    const { isOpen, onToggle } = useDisclosure()
    const [size, setSize] = useState('');
    const [text, setText] = useState(true)
    const navigate = useNavigate()
    const [data, setData] = React.useState([])
    let [count, setcount] = useState(0)
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
    const getdata = () => {
        axios.get("https://magnificent-bass-suit.cyclic.app/similar")
            .then(r => setData(r.data))
    }

    useEffect(() => {
        getdata()
    }, []);

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };
    const handletext = () => {
        setText(!text)
        if (text === true) {
            axios.post("https://dizzy-plum-donkey.cyclic.app/wishlist/add", product)

            toast({
                title: `Product Added to Wishlist Successfully`,
                position: "top",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    const addtobag = () => {
        setcount(count++)
        axios.post("https://dizzy-plum-donkey.cyclic.app/cart/add", product)
        toast({
            title: `Product Added to Cart Successfully`,
            position: "top",
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
    }

    const navigateto = () => {
        navigate("/womens")
    }

    return (<>

        {isLargerThan800 ? <Navbar /> : <MobileNav />}
        <Image width="80%" margin="auto" src="https://assets.ajio.com/cms/AJIO/WEB/28032021-D-cartpagebanner-relianceones.jpg"/>
        <Box display={{ base: "grid", md: "flex", lg: "flex", }} justifyContent="space-evenly" width="90%" margin="auto" >

            <div >
                <div style={{ placeItems: "center" }}>
                    <Image marginLeft={"60px"} placeItems={"center"} style={{ padding: "30px", }} width={{ base: "250px", md: "350px", lg: "400px" }} src={product.src} alt={product.brand} />

                    <div style={{ textAlign: "center", }} >
                        <Button color={"grey"} border="1px solid grey" mt={4} padding="5px" onClick={onToggle}>Returns Details</Button>
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
            </div>

            <div style={{ textAlign: "center", padding: "10px" }} >
                <div style={{ textAlign: "center", padding: "10px" }}>
                    <h5 style={{ color: "rgb(177, 153, 117)" }}>{product.brand}</h5>
                    <h5 style={{ fontSize: "16px", width: "300px", margin: "auto" }}>{product.title}</h5>

                    <div style={{ display: "flex ", gap: "10px", textAlign: "center", justifyContent: "center" }}>
                        <div style={{ color: "rgb(177, 153, 117)" }}>{product.discountPrice.includes("₹") ? product.discountPrice : `₹${product.discountPrice}`} <span style={{ textDecoration: "line-through" }}>{product.orginalPrice.includes("₹") ? product.orginalPrice : `₹${product.orginalPrice}`} </span> </div>
                        <p style={{ color: "rgb(177, 153, 117)" }}>{product.discount} </p>
                    </div>

                    <h5 style={{ color: "rgb(58,182,73)" }}>Offer Price ₹{product.offer}</h5>
                    <p>Price Inclusive Of All Taxes</p>
                    <select style={{ border: "1px solid black", width: "200px", marginTop: "10px", padding: "10px" }} value={size} onChange={handleSizeChange}>
                        <option value="" >Select Size</option>
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
                    <Button disabled={count <= 1} onClick={addtobag} bg={"rgb(213,162,73)"} width={300} padding={"5px"} margin="auto"> Add to Bag</Button>
                    <Text width={300} fontSize="10px" padding={"5px"} margin="auto" color={"grey"}>HANDPICKED STYLES | ASSURED QUALITY</Text>
                    <Button bg={text ? "rgb(213,162,73)" : "red.600"} onClick={handletext} width={300} padding={"5px"} margin="auto"> {text ? "Save To WishList" : "Added To WishList"}</Button>

                </div>

                <div style={{ display: 'inline', float: 'left', textAlign: "left", marginTop: "50px", fontSize: "16px" }}>
                    <h1 style={{
                        fontFamily: "SourceSansPro", fontSize: "14px", fontWeight: "900", lineHeight: "normal", color: " rgb(64, 103, 134)"
                    }}>Product Details</h1>
                    <li>Brand:{product.brand}</li>
                    <li>5-pocket styling</li>
                    <li style={{ fontSize: "16px", width: "300px", margin: "auto" }}>Package contains: <span> {product.nameCls}</span> </li>
                    <li>Machine wash cold</li>
                    <li>High Rise</li>
                    <li>99% cotton, 1% elastane</li>
                    <li>Product Code:{product._id}</li>

                </div>
            </div>
        </Box>


        <div style={{ width: "80%", margin: "auto", }}>


            <div >

                <div>
                    <h1 style={{
                        fontFamily: "Lora", fontSize: "26px", fontWeight: '700', lineHeight: "1.4px", color: "rgb(88, 88, 88)", marginTop: "100px",
                    }}>About {product.brand}</h1>
                    <hr style={{ display: "block", marginLeft: "auto", marginRight: "auto", borderStyle: "inset", borderWidth: "1px" }} />
                </div>

                <div style={{ display: 'flex' }}>
                    <div style={{ marginTop: "30px", backgroundColor: "maroon", padding: "20px", color: "white", fontFamily: "sans-serif", borderRadius: "600px" }}>
                        <h1>{product.brand}</h1>
                    </div>
                    <p style={{ marginTop: "100px", width: "80%", margin: "auto", fontFamily: "areal", fontSize: "16px", color: "grey", padding: "30px" }}>Every day is different, so should be your look! Avaasa brings a designer collection of women’s fusion wear and ethnic clothes to AJIO, including floral print kurtas, block print kurtis, colourful shrugs, churidar leggings and more in a range of hues.</p>
                </div>
            </div>


            <div>

                <h1 style={{
                    fontFamily: "Lora", fontSize: "26px", fontWeight: '700', lineHeight: "1.4px", color: "rgb(88, 88, 88)", marginTop: "100px",
                }}>Shop more</h1>
                <hr style={{ display: "block", marginLeft: "auto", marginRight: "auto", borderStyle: "inset", borderWidth: "1px" }} />
                <div style={{ margin: "30px 0px", padding: "10px" }}>
                    <Carousel data={data} />
                </div>
                <Box display={{ base: "grid", md: "flex" }} style={{ justifyContent: "space-between", width: "60%", margin: "auto", marginTop: "50px" }}>
                    <div onClick={navigateto} style={{ padding: "30px", background: "rgb(248,248,248)" }}> <h1>View more</h1></div>
                    <div style={{ padding: "30px", background: "rgb(248,248,248)" }}> <h1>Style:view more</h1></div>
                    <div style={{ padding: "30px", background: "rgb(248,248,248)" }}> <h1>Brand:{product.brand}</h1></div>
                </Box>
            </div>

        </div>



        <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "rgb(250,250,250)", marginTop: "100px" }}>
            <div style={{}}>
                <img width="60px" src="https://cdn-icons-png.flaticon.com/512/182/182308.png" alt="" />
                <h2>Easy Returns</h2>
            </div>
            <div style={{}}>
                <img width="60px" src="https://thumbs.dreamstime.com/b/empathy-vector-icon-black-silhouette-flat-illustration-isolated-white-background-204899514.jpg" alt="" />
                <h2>!100% Hand Picked</h2>
            </div>
            <div style={{}}>
                <img width="60px" src="https://d1pt6w2mt2xqso.cloudfront.net/AcuCustom/Sitename/DAM/044/FSEweek-icon-tick.png" alt="" />
                <h2> Assured Quality</h2>
            </div>
        </div>



    </>

    )
}


export default SingleCardPage