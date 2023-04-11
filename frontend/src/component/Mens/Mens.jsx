import React, { useEffect, useState } from 'react'
import "./Mens.css"
// import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { getReduxData } from "../../redux/action";
import { getProductData } from "../../redux/Products/action";
import { Card } from "../Card/Card";
import CardPage from '../Womens/WomensCard';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import MobileNav from '../Navbar/MobileNav';

import { useMediaQuery } from '@chakra-ui/react'
const Mens = () => {
    const [search, setSearch] = useState("")
    const [box, setBox] = useState(null)
    const dispatch = useDispatch()
    const Products = useSelector(store => store.ProductReducer.Products)
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

    const handleButton = () => {
        dispatch(getReduxData(`men${search}`));
    };

    useEffect(() => {
        dispatch(getProductData(`men`))

    }, [])
    return (
        <>
            {isLargerThan800 ? <Navbar /> : <MobileNav />}
            <div className='mens-cont'>

                <div className="mens-wrapper">
                    <div className='mens-left'>

                        {/* <div className="filter-div">
                        <div className='filter-category'>
                            <li>- Gender </li>
                            <ul>
                                <li>
                                    <input onChange={(e) => setBox("men")} type="checkbox" />
                                    <label htmlFor="#">Men</label>
                                </li>
                            </ul>
                        </div>
                    
                        <div className='filter-category'>
                            <li>- Category</li>
                            <ul>
                                
                                <li>
                                    <input onChange={(e) => setBox("shirt")} type="checkbox" />
                                    <label htmlFor="#">Shirt</label>
                                </li>
                                <li>
                                    <input onChange={(e) => setBox("kurta")} type="checkbox" />
                                    <label htmlFor="#">Kurta</label>
                                </li>
                                <li>
                                    <input onChange={(e) => setBox("jeans")} type="checkbox" />
                                    <label htmlFor="#">Jeans</label>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Track Pants</label>
                                </li>
                            </ul>

                        </div>
                        

                        <div className='filter-category'>
                            <li>- Price</li>
                            <ul>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Below Rs 500</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Below Rs 500-1000</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Below Rs 1001-1500</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Below Rs 1501-2000</label>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Below Rs 2001-2500</label>
                                </li>
                            </ul>

                        </div>

                        <div className='filter-category'>
                            <li>- Brands</li>
                            <ul>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">18 EDITION</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">21 Degree</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">23 Yard</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">28ME</label>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">2Go</label>
                                </li>
                            </ul>

                        </div>

                        

                        <div className='filter-category'>
                            <li>- Occation</li>
                            <ul>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Active</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">ACTIVE</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Casual</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">CASUAL</label>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">EVENING</label>
                                </li>
                            </ul>

                        </div>

                       

                        <div className='filter-category'>
                            <li>- Discount</li>
                            <ul>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">0-20%</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">21%-30%</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">31%-40%</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">41%-50%</label>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">51%-80%</label>
                                </li>
                            </ul>

                        </div>

                       

                        <div className='filter-category'>
                            <li>- Size & Fit</li>
                            <ul>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">M</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">L</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">XL</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">S</label>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">XXL</label>
                                </li>
                            </ul>

                        </div>

                    </div> */}

                        <Sidebar />
                    </div>
                    <div className='mens-right'>

                        <div className='right-head'>
                            <div>Starting at Rs 129</div>
                            <div>
                                <ul>
                                <li>{Products.length }00 Items Found</li>
                                </ul>
                                <ul>
                                    <input placeholder='Search Here' value={search} onChange={(e) => setSearch(e.target.value)} type="text" />
                                    <button onClick={handleButton}>Search</button>
                                </ul>
                                <ul className='select-tag-mens'>
                                    <label htmlFor="">Sort By </label>
                                    <select name="" id="">
                                        <option value="">Relevent</option>
                                        <option value="">Price (Lowest First)</option>
                                        <option value="">Price (Highest First)</option>
                                        <option value="">Discount</option>
                                    </select>
                                </ul>
                            </div>

                        </div>
                        <div className='mens-content-wrapper'>
                            <div className='mens-content'>
                                {Products?.map((item) =>
                                    <Card {...item} />
                                )}
                                {/* {Products?.map((product, index) => (
                            <CardPage {...product} key={index} />
                        ))} */}
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Mens