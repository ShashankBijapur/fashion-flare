import React from 'react'
import Home from '../component/Home/Home'
import SingleCardPage from '../component/Womens/SingleCardPage'
import Womens from '../component/Womens/Womens'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/womens" element={<Womens/>} />
            <Route path="/cart" element={<Car/>} />
            <Route path="/siglecard" element={<SingleCardPage/>}></Route>
        </Routes>
    )
}

export default AllRoutes