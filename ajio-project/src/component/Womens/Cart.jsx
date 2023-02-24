import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Box, Button, Checkbox, CheckboxGroup, Flex, Image, Stack, Text } from '@chakra-ui/react';
import CartCard from '../Components/CartCard';
import { Input } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
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
            <img src="https://assets.ajio.com/cms/AJIO/WEB/28032021-D-cartpagebanner-relianceones.jpg" alt="" />

            <Flex width={"80%"} margin="auto" gap={"20px"}>
                <Box width={"70%"} margin={"auto"} marginTop={"30px"}>
                    <Text fon textAlign={"left"}>My Bag({cart.length}item)</Text>
                    <Box border="1px solid rgb(238,238,238)" style={{ textAlign: "center" }}>
                        {cart.map((item, index) =>
                            <CartCard item={item} key={index} />)}
                    </Box>
                </Box>
                <Box width={"30%"} border="1px solid rgb(238,238,238)" bg={"rgb(250,250,250)"} padding="10px" marginTop={"30px"}>
                    <Box padding={"5px"} margin={"5px"} >

                        <Text fontFamily={"Lora"} fontWeight="700" textAlign={"left"} color="rgb(51, 51, 51)">Order Details</Text>
                        <Flex padding={"5px"} justifyContent={"space-between"} color="rgb(51, 51, 51)">
                            <Text >Bag total</Text>
                            <Text>Bag total</Text>
                        </Flex>
                        <Flex padding={"5px"} justifyContent={"space-between"} color="rgb(51, 51, 51)">
                            <Text>bag discount</Text>
                            <Text> ok</Text>

                        </Flex>
                        <Text padding={"5px"} textAlign={"left"}> Convience Fees {<Button color={"teal"}>Whats this?</Button>}</Text>
                        <Flex padding={"5px"} justifyContent={"space-between"} color="rgb(51, 51, 51)" >
                            <Text>Deliveryy </Text>
                            <Text> fee</Text>
                        </Flex>
                        <Flex padding={"5px"} justifyContent={"space-between"} fontWeight="600" color="rgb(51, 51, 51)" >
                            <Text>Order total</Text>
                            <Text> Total</Text>
                        </Flex>
                        <Button bg={"rgb(213,162,73)"} width="100%" padding={"15px"} color="white"> Proceed To ship</Button>
                    </Box>

                    <Box marginTop={"50px"}>
                        <Text>Apply Coupon</Text>
                        <Flex gap={"10px"} padding="10px">
                            <Input border={"grey"} width={"90%"} placeholder='Enter Coupon Code' />
                            <Button>Apply</Button>
                        </Flex>
                        <Box bg={"white"} textAlign="left" overflow={"scroll"} height="500px" padding={"10px"} border="1px dashed black">
                            <Text textAlign={"left"}>Applicable Coupons</Text>
                            <CheckboxGroup colorScheme='green' defaultValue={""}>
                                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                    <hr />
                                    <Checkbox value='FREEDEL'>
                                        <Box>
                                            <Text fontSize={"13px"}>Savings : ₹1.00</Text>
                                            <Text fontSize={"16px"}>FREEDEL</Text>
                                            <Text fontSize={"10px"}>Free Shipping For Limited Period.</Text>
                                        </Box>
                                    </Checkbox>
                                    <hr />

                                </Stack>
                            </CheckboxGroup>
                            <CheckboxGroup colorScheme='green' defaultValue={""}>
                                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                    <hr />
                                    <Checkbox value='FREESHIP'>
                                        <Box>
                                            <Text fontSize={"13px"}>Savings : ₹1.00</Text>
                                            <Text fontSize={"16px"}>FREESHIP</Text>
                                            <Text fontSize={"10px"}>Shipping on us for Your First Purchase.</Text>
                                        </Box>
                                    </Checkbox>
                                    <hr />

                                </Stack>
                            </CheckboxGroup>
                            <CheckboxGroup colorScheme='green' defaultValue={""}>
                                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                    <hr />
                                    <Checkbox value='naruto'>
                                        <Box>
                                            <Text fontSize={"13px"}>Savings : ₹100.00</Text>
                                            <Text fontSize={"16px"}>!100</Text>
                                            <Text fontSize={"10px"}>Get 100Rs off</Text>
                                        </Box>
                                    </Checkbox>
                                    <hr />

                                </Stack>
                            </CheckboxGroup>
                            <CheckboxGroup colorScheme='green' defaultValue={""}>
                                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                    <hr />
                                    <Checkbox value='naruto'>
                                        <Box>
                                            <Text fontSize={"13px"}>Savings : 50%</Text>
                                            <Text fontSize={"16px"}>AJIOONE</Text>
                                            <Text fontSize={"10px"}>Buy 1 And Get One Free</Text>
                                        </Box>
                                    </Checkbox>
                                    <hr />

                                </Stack>
                            </CheckboxGroup>
                            <CheckboxGroup colorScheme='green' defaultValue={""}>
                                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                    <hr />
                                    <Checkbox value='naruto'>
                                        <Box>
                                            <Text fontSize={"13px"}>Savings : ₹1500</Text>
                                            <Text fontSize={"16px"}>SHOPNOW</Text>
                                            <Text fontSize={"10px"}>Get 1500 Off On Order Above 5000</Text>
                                        </Box>
                                    </Checkbox>
                                    <hr />

                                </Stack>
                            </CheckboxGroup>
                            <CheckboxGroup colorScheme='green' defaultValue={""}>
                                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                    <hr />
                                    <Checkbox value='naruto'>
                                        <Box>
                                            {/* <Text fontSize={"13px"}></Text> */}
                                            <Text fontSize={"16px"}>BIGSAVINS</Text>
                                            <Text fontSize={"10px"}>Best Value For You</Text>
                                        </Box>
                                    </Checkbox>
                                    <hr />

                                </Stack>
                            </CheckboxGroup>

                        </Box>

                    </Box>
                    <Box textAlign={"left"} marginTop="50px" padding={"5px"}>
                        <Text color={"rgb(32, 32, 32)"} fontSize="14px" fontWeight={"700"}>Return/Refund policy</Text>
                        <Text color={"grey"}>In case of return, we ensure quick refunds. Full amount will be refunded excluding Convenience Fee</Text>
                        <Text color={"rgb(38, 140, 185)"} fontWeight="700">Retun Policy</Text>
                    </Box>
                </Box>


            </Flex>

            <Box margin={"20px"}>
                <hr />
                <Flex justifyContent={"space-around"}>
                    <Box>
                        <Text>SECURE PAYMENTS</Text>
                    </Box>
                    <Box>
                        <Text>CASH ON DELIVERY</Text>
                    </Box>
                    <Box>
                        <Image width={"50px"} src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/42454d70-5190-41e7-964d-d30382342cd2.__CR0,0,220,220_PT0_SX220_V1___.png' />
                        <Text>ASSURED QUALITY</Text>
                    </Box>
                    <Box>
                        <Image  padding={"20px"} opacity=" 0.75" background="rgb(176,153,117)" width={"50px"} src='https://as1.ftcdn.net/v2/jpg/02/23/33/56/1000_F_223335612_KCCrv8hVgXYj979NNdnHy0PKPqjMv1J6.jpg' />
                        <Text>EASY RETURNS</Text>
                    </Box>
                </Flex>

                <hr />
            </Box>

        </>
    )
}

export default Cart