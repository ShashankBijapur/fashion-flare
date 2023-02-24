import React from 'react'
import Home from '../component/Home/Home'
import SingleCardPage from '../component/Womens/SingleCardPage'
import Womens from '../component/Womens/Womens';
import Mens from '../component/Mens/Mens';
import Kids from '../component/Kids/Kids';
import {Routes,Route} from 'react-router-dom';
import {Box} from '@chakra-ui/react';
import Signup from '../component/login_signup/Signup';
import Login from '../component/login_signup/Login';
import AdminPage from '../component/Admin/Admin';
import Orders from '../component/Admin/Orders';
import Customers from '../component/Admin/Customers';
import Products from '../component/Admin/Products';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/womens" element={<Womens/>} />
            <Route path="/mens" element={<Mens/>} />
            <Route path="/kids" element={<Kids/>} />
            <Route path="/siglecard" element={<SingleCardPage/>}></Route>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<AdminPage />}></Route>
            <Route path='/orders' element={<Orders/>}></Route>
            <Route path='/customers' element={<Customers />}></Route>
            <Route path='/products' element={<Products />}></Route>
            {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
    )
}

export default AllRoutes