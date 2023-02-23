import React from 'react'
import Home from '../component/Home/Home'
import SingleCardPage from '../component/Womens/SingleCardPage'
import Womens from '../component/Womens/Womens'
import {Routes,Route} from 'react-router-dom';
import {Box} from '@chakra-ui/react'
import Signup from './Signup';
import Login from './Login';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/womens" element={<Womens/>} />
            <Route path="/cart" element={<Car/>} />
            <Route path="/siglecard" element={<SingleCardPage/>}></Route>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    )
}

export default AllRoutes