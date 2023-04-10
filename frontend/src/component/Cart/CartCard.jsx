import React, { useState, useEffect } from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Box,
    Image,
    Text,
    Select,
} from '@chakra-ui/react'
import axios from 'axios'

// import { ChevronDownIcon } from '@chakra-ui/icons'


const CartCard = ({ item, setCount, count }) => {
    // const [count, setCount] = useState(1)
    const [size, setsize] = useState("M")
    const [cartitem, setCartitem] = useState([])
    const handleSizeChange = (event) => {
        setsize(event.target.value);
    };
    console.log(cartitem)
    const deleteitem = (id) => {
        // window.location.reload(true);
        console.log(id)
        axios.delete(`https://magnificent-bass-suit.cyclic.app/cart/${id}`)
            // .then(res=>res.json())
            .then(res => setCartitem(res.data))

    }
    const addtowishlist = (item, id) => {
        console.log(item)
        // axios.post("http://localhost:8080/wishlist",item)
        // .then((r) => {
        //    console.log(r.data)
        // })
        axios.post("https://magnificent-bass-suit.cyclic.app/wishlist", item)
            .then(r => setCartitem(r.data))

        axios.delete(`https://magnificent-bass-suit.cyclic.app/cart/${id}`)
            // .then(res=>res.json())
            .then(res => setCartitem(res.data))
    }
    useEffect(() => {
        //    deleteitem()
    }, []);

    return (
        <>


            <Box padding={"5px"} border="1px solid rgb(250,230,250)" display={{ base: "grid", md: "flex" }} style={{ justifyContent: "space-between", marginTop: "20px" }}>
                <Image src={item.src} width={{ base: "200px", sm: "200px" }} margin={{ base: "auto" }} alt="" />
                <Text>{item.brand}- <span> {item.nameCls}</span> </Text>

                <Popover >
                    <PopoverTrigger>
                        <Button fontSize={"12px"}> Size {size} - Qty {count}</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Select Size!</PopoverHeader>
                        <PopoverBody width="100%">
                            <Select width="100px" margin="auto" style={{ border: "1px solid black", marginTop: "10px", padding: "10px" }} value={size} onChange={handleSizeChange}>
                                <option value="" disabled >Select Size</option>
                                <option value="XS">Extra small</option>
                                <option value="S">Small</option>
                                <option value="L">Large</option>
                                <option value="XL">Extra Large</option>
                                <option value="XXL"> XXL</option>
                            </Select>

                        </PopoverBody>
                        <hr />
                        <PopoverHeader>Set Quantity!</PopoverHeader>
                        <PopoverBody>
                            <button width={"10px"} disabled={count === 1} onClick={() => setCount(count - 1)}> - </button>  {count} <button onClick={() => setCount(count + 1)}> + </button></PopoverBody>
                    </PopoverContent>
                </Popover>



                <div style={{ display: "grid", gap: "20px" }}>
                    <div >
                        <h1> Discount  Rs.{item.offerpricess}</h1>

                        <h1> <p style={{ textDecoration: "line-through" }}>Rs. {item.orginalprice}</p>  <span>{item.discount}%Off</span> <span> Rs. {item.price * count}</span></h1>
                    </div>
                    <div>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <Button onClick={() => deleteitem(item.id)}> Delete</Button>
                            <Button onClick={() => addtowishlist(item, item.id)}> Move To Wishlist</Button></div>
                    </div>

                </div>

            </Box>
        </>
    )
}

export default CartCard