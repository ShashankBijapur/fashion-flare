import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CardPage from './WomensCard';
// import { Box } from '@chakra-ui/react';
function Womens() {
    const [productType, setProductType] = useState('womens');
    const [products, setProducts] = useState([]);
    const [count, setcount] = useState(0)
    const [value, setValue] = useState("")
    const [text, settext] = useState("")
    const [desc, setdesc] = useState("") 


    const getData = async (productType) => {
        try {
            const response = await axios.get(`http://localhost:8080/${productType}`);
            setProducts(response.data);
            settext(productType)
            setProductType("")
        } catch (error) {
            console.error(error);
        }
    }
    const handleSubmit = (productType) => {
        console.log(productType)
        getData(productType)
    };
    const handleSortChange = (event) => {
        setValue(event.target.value);
        const sortedProducts = products.sort((a, b) => {
            if (value === 'lowToHigh') {
                return Number(a.price.split(",").join("")) - Number(b.price.split(",").join(""))
            }
            if (value === 'highToLow') {
                return Number(b.price.split(",").join("")) - Number(a.price.split(",").join(""))
            }
            if (value === 'discount') {
                return Number(b.discount) - Number(a.discount)
            }
        });
        setProducts(sortedProducts)
        setcount(count + 1)
    };
    useEffect(() => {
        getData(productType)
    }, []);
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", width: "80%", margin: "auto" }}>

                <div style={{ display: "flex", width: "20%", marginTop: "50px", color: "grey" }}>
                    <div className='mens-left'>

                        <div style={{ textAlign: "left" }} className="filter-div">


                            <div className='filter-category'>
                                <div> Category</div>
                                <div style={{ fontSize: "12px", padding: "10px" }}>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">T-Shirt</label>
                                    </h6>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">Shirt</label>
                                    </h6>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">Sweershirts & Hoodies</label>
                                    </h6>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">Jeans</label>
                                    </h6>

                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">Track Pants</label>
                                    </h6>
                                </div>
                            </div>
                            <hr />

                            <div className='filter-category'>
                                <div> Price</div>
                                <div style={{ fontSize: "12px", padding: "10px" }}>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">Below Rs 500</label>
                                    </h6>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">Below Rs 500-1000</label>
                                    </h6>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">Below Rs 1001-1500</label>
                                    </h6>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">Below Rs 1501-2000</label>
                                    </h6>

                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">Below Rs 2001-2500</label>
                                    </h6>
                                </div>
                            </div>
                            <hr />

                            <div className='filter-category'>
                                <div> Brands</div>
                                <div style={{ fontSize: "12px", padding: "10px" }}>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">18 EDITION</label>
                                    </h6>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">21 Degree</label>
                                    </h6>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">23 Yard</label>
                                    </h6>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">28ME</label>
                                    </h6>

                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">2Go</label>
                                    </h6>
                                </div>
                            </div>

                            <hr />

                            <div className='filter-category'>
                                <div> Occation</div>
                                <div style={{ fontSize: "12px", padding: "10px" }}>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">Active</label>
                                    </h6>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">ACTIVE</label>
                                    </h6>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">Casual</label>
                                    </h6>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">CASUAL</label>
                                    </h6>

                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">EVENING</label>
                                    </h6>
                                </div>
                            </div>
                            <hr />
                            <div className='filter-category'>
                                <div> Discount</div>
                                <div style={{ fontSize: "12px", padding: "10px" }}>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">0-20%</label>
                                    </h6>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">21%-30%</label>
                                    </h6>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">31%-40%</label>
                                    </h6>
                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">41%-50%</label>
                                    </h6>

                                    <h6>
                                        <input type="checkbox" />
                                        <label htmlFor="#">51%-80%</label>
                                    </h6>
                                </div>
                            </div>
                            <hr />
                        </div>


                    </div>

                </div>

                <div style={{ width: "70%" }}>
                    <h1 style={{ fontSize: "12px",textAlign:"center" }}>{text ? "WOMENS" : ""}</h1>
                    <h1 style={{ fontSize: "30px", color: "grey",textAlign:"center" }}>{text==="womens"?"":text.toUpperCase()}</h1>
                    <h1 style={{ fontSize: "13px", color: "grey", width: "90%", margin: "auto",padding:"5px" }}>{text === "kurta" ? "Ethnic elegance, a fusion of hues and a whirlwind of styles from much-loved ethnic wear brands – go ahead and explore all the women’s kurtas on AJIO! The collection comprises of all the latest trends – from asymmetric hems to traditional Ikat prints. +" : ""}</h1>
                    <h1 style={{ fontSize: "13px", color: "grey", width: "90%", margin: "auto",padding:"5px" }}>{text === "saree" ? `Traditional, trendy, stylish and graceful, there’s no denying that a woman’s beauty is accentuated by a saree. When you are shopping online for designer sarees for festive occasions or regular sarees for casual ethnic wear, you won’t have to look further than AJIO. From gorgeous silk sarees to crisp cottons, you’ll be amazed with the selection from brands such as Indie` : ""}</h1>
                    <h1 style={{ fontSize: "13px", color: "grey", width: "90%", margin: "auto",padding:"5px" }}>{text === "tshirt" ? `Funk up your style with our fashionable selection of tees! AJIO showcases stunning styles from vivid graphic prints to versatile geometric art, subtle florals to simple solid tees that are trendsetting collectibles from brands like Pantaloons,` : ""}</h1>
                    <h1 style={{ fontSize: "13px", color: "grey", width: "90%", margin: "auto",padding:"5px" }}>{text === "jeans" ? "Make a dramatic first impression with our stunning collection of jeans ranging from rugged ripped denims to old-school high waist ones, flattering skinny fits to stylish flared jeans. Here's our online wardrobe featuring brands like Levis, TALLY WEiJL and Recap that offer a blend of comfort and laidback style." : ""}</h1>
                    <hr />
                    <div style={{ display: "flex", gap: "100px", justifyContent: "center" }}>
                        <div>
                            <h6>{products.length}00 Items Found</h6>
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
                                <option value="">Select Price</option>
                                <option value="relevance">Relevance</option>
                                <option value="highToLow">Price(lowest first)</option>
                                <option value="lowToHigh">Price(highest first)</option>
                                <option value="discount">Discount</option>

                            </select>
                        </div>
                    </div>
                    <hr />

                    <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "310px 310px 310px ", justifyContent: "space-around", margin: "20px" }} >
                        {products.length > 0 && products.map((product, index) => (
                            <CardPage product={product} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Womens;
