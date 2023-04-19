import React, { useContext } from "react";
import Logo2 from "../Images/fashion_flare.png"
import {
  Flex,
  Box,
  Text,
  Image,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import MobileItem from "./MobileItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillBagCheckFill, BsFillSuitHeartFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContextProvider";
import { useToast } from "@chakra-ui/react";

const MobileNav = () => {
  let userName = localStorage.getItem("username");
  let userEmail = localStorage.getItem("useremail");
  let loginValue = localStorage.getItem("login");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();
  const navigate = useNavigate();
  const { cartData, setCartData, cartLength, setCartLength, setCategory } =
    useContext(SidebarContext);
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
  return (
    <div style={{ paddingBottom: "10px" }}>
      <Flex
        padding="10px"
        alignItems={"center"}
        justifyContent="space-around"
        position={"fixed"}
        top="0"
        width="100%"
        zIndex={"999"}
        backgroundColor="#fff"
      >
        <MobileItem
          nameitem={<GiHamburgerMenu />}
          item1={<Link to="/women">
            WOMENS
          </Link>}
          item2={<Link to="/men">
            MENS
          </Link>}
          item3={<Link to="/kid">
            KIDS
          </Link>}
          item4={<Link to="/homeandkitchen">
            HOME & KITCHEN
          </Link>}

        />
        <Box>
          <Link to="/">
            <Image
              src={Logo2}
              width="100px"
              margin="auto"
            ></Image>
          </Link>
        </Box>
        {/* <Link to="/login">
          <Button colorScheme="red" size="sm">SignIn</Button>
        </Link> */}  <Box>
          {loginValue !== null ? <Box>
            <Button width="10px" fontSize={"10px"} objectFit={"center"} colorScheme='red' onClick={onOpen}>Logout</Button>
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
                  <Button colorScheme='green'><Link to="/cart">Go To Cart</Link></Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box> : <Link to="/login" ><Button colorScheme='green'>Login</Button></Link>}
        </Box>
        {loginValue ? <Box display={"grid"}><Text fontSize={{ base: "12px", sm: "16px" }} >{userName? userName.toUpperCase():null}</Text> <Text fontSize={{ base: "12px", sm: "16px" }}  >{userEmail}</Text></Box> : null}

        <Link to="/cart">

          <Box

            right="20px"
            width={"fit-content"}
            height="1rem"
            display={"flex"}
            alignItems={"center"}
            gap="3"
          >
            <BsFillBagCheckFill style={{ fontSize: "20px" }} />
            <Text as="b" fontSize={"xs"}>
              {cartLength}
            </Text>
          </Box>
        </Link>
        <Link to="/wishlist">

          <Box

            right="20px"
            width={"fit-content"}
            height="1rem"
            display={"flex"}
            alignItems={"center"}
            gap="3"
          >
            <BsFillSuitHeartFill style={{ fontSize: "20px" }} />
            <Text as="b" fontSize={"xs"}>

            </Text>
          </Box>
        </Link>
      </Flex>

    </div>
  );
};

export default MobileNav;