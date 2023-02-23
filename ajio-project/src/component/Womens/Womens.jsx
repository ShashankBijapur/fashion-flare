import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CardPage from './CardPage';
import { Box } from '@chakra-ui/react';
const  Womens=()=> {
    const [productType, setProductType] = useState('kurta');
    const [products, setProducts] = useState([]);
    const [count, setcount] = useState(0)
    const [value, setValue] = useState("")
    // console.log(products)
    const getData = async (productType) => {
        try {
            const response = await axios.get(`http://localhost:8080/${productType}`);
            setProducts(response.data);
            setProductType("")
        } catch (error) {
            console.error(error);
        }
    }
    const handleSubmit = (productType) => {
        console.log(productType)
        getData(productType)
    };


    // console.log(products)
    // console.log(value)

    const handleSortChange = (event) => {
        setValue(event.target.value);
        
        const sortedProducts = products.sort((a, b) => {
            
            if (value === 'lowToHigh') {
                return Number(a.price.split(",").join("")) - Number(b.price.split(",").join(""))

            } 
             if (value === 'highToLow') {
                return Number(b.price.split(",").join("")) - Number(a.price.split(",").join(""))
            }

        });

        setProducts(sortedProducts)
        setcount(count+1)
    };

    useEffect(() => {
        getData(productType)
    },[] );
    return (
        <>
            <Box style={{ display: "flex", gap: "100px", justifyContent: "center" }}>
                <div>
                    <h6>{products.length} Items Found</h6>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Search here'
                        value={productType}
                        onChange={(event) => setProductType(event.target.value)}
                    />
                    <button onClick={() => handleSubmit(productType)} type="submit">Search</button>
                </div>

                <div>
                    <label htmlFor="sort-select">Sort by:</label>
                    <select id="sort-select" value={value} onChange={handleSortChange}>
                    <option  value="">Select Price</option>
                        <option value="highToLow">Price: Low to High</option>
                        <option value="lowToHigh">Price: High to Low</option>
                    </select>
                </div>
            </Box>


            <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "310px 310px 310px", justifyContent: "space-around", margin: "20px" }} >
                {products.map((product, index) => (
                   <CardPage product={product } key={index}/>
                ))}
            </div>

        </>
    );
}

export default Womens;
