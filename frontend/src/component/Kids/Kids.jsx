
import React, { useEffect, useState } from 'react'
import "./Kids.css"
import Card from './Card'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { getReduxData } from '../../redux/action'
import { getProductData } from '../../redux/Products/action'

// import React, { useEffect, useState } from "react";
// import "./Kids.css";
// import Card from "./Card";
// // import axios from "axios"
// import { useDispatch, useSelector } from "react-redux";
// import { getReduxData } from "../../redux/action";
// import { getProductData } from "../../redux/Products/action";
// import CardPage from "../Womens/WomensCard";
// import Sidebar from "../Sidebar/Sidebar";
// import Navbar from "../Navbar/Navbar";


import "./Kids.css";
// import Card from './Card'

// import axios from "axios"

import CardPage from "../Womens/WomensCard";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import MobileNav from "../Navbar/MobileNav";
import { useMediaQuery } from "@chakra-ui/react";


const Kids = () => {
    const [search, setSearch] = useState("");
    const [box, setBox] = useState(null);
    const dispatch = useDispatch();
    const Products = useSelector((store) => store.ProductReducer.Products);

    const handleButton = () => {
        dispatch(getReduxData(`kid${search}`));
        setSearch("");
    };
    useEffect(() => {
        dispatch(getProductData("kid"));
    }, []);
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

    return (
        <>
            {isLargerThan800 ? <Navbar /> : <MobileNav />}
            <div className="kids-cont">
                <div className="kids-wrapper">
                    <div className="kids-left">
                        <Sidebar />
                    </div>
                    <div className="kids-right">
                        <div className="right-head">
                            <div>Starting at Rs 129</div>
                            <div>
                                <ul>
                                <li>{Products.length }00 Items Found</li>
                                </ul>
                                <ul>
                                    <input
                                        placeholder="Search Here"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        type="text"
                                    />
                                    <button onClick={handleButton}>Search</button>
                                </ul>
                                <ul>
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
                        <div className="kids-content-wrapper">
                            <div className="kids-content">
                                {Products?.map((item) => (
                                    <Card {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="kids-content-wrapper">
                <div className="kids-content">
                    {Products?.map((item) => (
                        <Card {...item} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Kids;
