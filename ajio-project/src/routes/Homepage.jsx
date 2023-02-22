import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
const  HomePage=()=>{
return(
    <>
    <h1>Welcome to home page</h1>
    <Link to="/login" ><Button>Login</Button></Link>
    </>
)
}
export default HomePage;