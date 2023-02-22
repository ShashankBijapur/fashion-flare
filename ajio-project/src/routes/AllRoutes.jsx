import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import HomePage from './Homepage';
import {Box} from '@chakra-ui/react';
const AllRoutes = () => {
    return (
      <div>
          <Box marginTop={'90px'} >
          <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
          </Routes>
          </Box>
        
      </div>
    )
  }
  
  export default AllRoutes