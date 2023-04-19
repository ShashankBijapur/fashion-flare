import React, { useContext, useState,useEffect } from "react";
import { Box, Flex, Text, Image, Button, useDisclosure } from "@chakra-ui/react";
import { BsFillBagCheckFill, BsFillSuitHeartFill } from "react-icons/bs";
import Menuitem from "./MenuItem";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContextProvider";
import { useNavigate } from "react-router-dom";
import Logo2 from "../Images/fashion_flare.png"
import { useToast } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import Navmenu from "./Navmenu";
import axios from "axios";
const Navbar = ({ cartlength }) => {

  let userName = localStorage.getItem("username");
  let userEmail = localStorage.getItem("useremail");
  let loginValue = localStorage.getItem("login");
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { setCategory } = useContext(SidebarContext);
  const [cart, setcart] = useState([])
  const [wishlist, setwishlist] = React.useState([])

  const hanldecart=()=>{
    navigate('/cart')
  }
  const handleLogout = () => {
    localStorage.clear();
    toast({
      title: `YOU ARE LOGGED OUT`,
      position: "top",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
    navigate('/login')
  }
  useEffect(() => {
    
    axios.get("https://dizzy-plum-donkey.cyclic.app/cart")
      .then(res => {
        setcart(res.data)
      })

      axios.get("https://dizzy-plum-donkey.cyclic.app/wishlist")
      .then(((res) => setwishlist(res.data)))
  }, []);
  return (
    <>
      <Flex justifyContent={"space-around"} alignItems={"center"} padding="10px" position={"fixed"} top="0" width="100%" zIndex={"999"} backgroundColor="#fff">
        <Box>
          <Link to="/">
            <Image
              src={Logo2}
              width="150px"
              height="50px"
            ></Image>
          </Link>
        </Box>
        <Box>
          <Flex gap="30px" alignItems={"center"}>
            <Link to="/men" onClick={() => localStorage.setItem("category", ("men"))}>
              <Box>
                <Menuitem
                  navitem={"MEN"}
                  item1={
                    <Navmenu />
                  }
                />
              </Box>
            </Link>
            <Link to="/women" onClick={() => localStorage.setItem("category", ("womens"))}>
              <Box>
                <Menuitem
                  navitem={"WOMEN"}
                  item1={
                    <Navmenu />
                  }
                />
              </Box>
            </Link>
            <Link to="/kid" onClick={() => setCategory("kids-clothing")}>
              <Box>
                <Menuitem
                  navitem={"KIDS"}
                  item1={
                    <Navmenu />
                  }
                />
              </Box>
            </Link>
            <Link to="/homeandkitchen">
              <Box>
                <Menuitem
                  navitem={"HOME & KITCHEN"}
                  item1={
                    <Navmenu />
                  }
                />
              </Box>
            </Link>

            <Box>
              {loginValue !== null ? <Box>
                <Button colorScheme='red' onClick={onOpen}>Logout</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader color="red">ARE YOU SURE YOU WANT TO LOGOUT</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody color="green">
                      YOU HAVE ITEMS IN YOUR CART TO CHECKHOUT
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme='red' mr={3} onClick={handleLogout}>
                        Logout
                      </Button>
                      <Button colorScheme='green' onClick={hanldecart}>Go To Cart</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Box> : <Link to="/login" ><Button colorScheme='green'>Login</Button></Link>}
            </Box>

            {loginValue ? <Box display={"grid"}><Text  >{userName.toUpperCase()}</Text> <Text >{userEmail}</Text></Box> : null}

            <Link to="/cart">
              <Box display="flex" gap={'2'}  >
                <BsFillBagCheckFill style={{ fontSize: "30px" }} />
                <Text alignSelf={"end"} as="b" >{loginValue? cart.length>0?cart.length:null:null}</Text>
              </Box>
            </Link>

            <Link to="/wishlist">
              <Box display="flex" gap={'2'}  >
                <BsFillSuitHeartFill style={{ fontSize: "28px" }} />
                <Text alignSelf={"end"} as="b" >{loginValue? wishlist.length>0?wishlist.length:null:null}</Text>
              </Box>
            </Link>
          </Flex>

        </Box>
      </Flex>
    </>
  );
};


export default Navbar;