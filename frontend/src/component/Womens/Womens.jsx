import React, { useState, useEffect } from "react";
// import axios from 'axios';
import "./Womens.css";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductData,
  handleSortByRedux,
  sortedProduct,
} from "../../redux/Products/action";
import { Card } from "../Card/Card";
// import CardPage from "./WomensCard";
import Sidebar from "../Sidebar/Sidebar";

import Navbar from "../Navbar/Navbar";

import MobileNav from '../Navbar/MobileNav';
// import { Box } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react'

function Womens() {
  let [productType, setProductType] = useState("womens");
  const [text, settext] = useState("");
  const [sortBy, setSortBy] = useState("highToLow");
  const handleSubmit = (productType) => { };
  const dispatch = useDispatch();
  const Products = useSelector((store) => store.ProductReducer.Products);

  const [priceFilter, setPriceFilter] = React.useState([]);
  const [count, setCount] = useState(0)

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  // filter data
  const handleSorting = (e) => {
    // console.log(e.target.value)
    const value = e.target.value;
    const allProducts = Products;

    if (value === "highToLow") {
      const sortedProduct = allProducts.sort(
        (a, b) => parseInt(b.discountPrice) - parseInt(a.discountPrice)
      );

      console.log("allProd", sortedProduct);
      dispatch(handleSortByRedux(sortedProduct));
      setCount((pre) => pre + 1)

    } else {
      const sortedProduct = allProducts.sort(
        (a, b) => parseInt(a.discountPrice) - parseInt(b.discountPrice)
      );
      dispatch(handleSortByRedux(sortedProduct));
      setCount((pre) => pre + 1)
    }
  };

  const categoryFilter = () => { };

  const handlePriceFilterChange = (event) => {
    const value = parseInt(event.target.value);
    let newPriceFilter = [...priceFilter];
    if (event.target.checked) {
      newPriceFilter.push(value);
    } else {
      newPriceFilter = newPriceFilter.filter((price) => price !== value);
    }
    setPriceFilter(newPriceFilter);
  };

  useEffect((Products) => {
    dispatch(getProductData("women"));
  }, []);
  return (
    <>


      {isLargerThan800 ? <Navbar /> : <MobileNav />}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1250px",
          margin: "auto",
          gap: "80px",
        }}
      >
        <Box
          display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          className="women-left-cont"
          width="20%"
          marginTop="50px"
        >
          <div className="women-left">
            <Box>
              <Accordion
                fontSize="10px"
                fontWeight={400}
                lineHeight="24px"
                color=" rgb(102, 102, 102)"
                border="1px solid rgb(240,240,240)"
                padding={"20px"}
                allowMultiple
              >
                <AccordionItem marginTop="20px">
                  <h2>
                    <AccordionButton
                      fontSize="18px"
                      fontWeight={600}
                      lineHeight="24px"
                      color=" rgb(26, 32, 44)"
                    >
                      <Box as="span" flex="1" textAlign="left">
                        <Text fontSize={"17px"}>Filters</Text>
                        <Text fontSize={"13px"} color="grey">
                          {"1000"}+ Products
                        </Text>
                      </Box>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
                {/* Price */}
                <AccordionItem marginTop="20px">
                  <h2>
                    <AccordionButton
                      fontSize="18px"
                      fontWeight={600}
                      lineHeight="24px"
                      color=" rgb(26, 32, 44)"
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Price
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack spacing={5} direction="column">
                      <Checkbox
                        value={199}
                        onChange={handlePriceFilterChange}
                        borderRadius={"15px"}
                        mt="5px"
                        padding="10px"
                        fontSize={"17px"}
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        Under ₹ 199
                      </Checkbox>
                      <Checkbox
                        value={299}
                        onChange={handlePriceFilterChange}
                        borderRadius={"15px"}
                        mt="5px"
                        padding="10px"
                        fontSize={"17px"}
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        Under ₹ 399
                      </Checkbox>
                      <Checkbox
                        value={599}
                        onChange={handlePriceFilterChange}
                        borderRadius={"15px"}
                        mt="5px"
                        padding="10px"
                        fontSize={"17px"}
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        Under ₹ 599
                      </Checkbox>
                      <Checkbox
                        value={799}
                        onChange={handlePriceFilterChange}
                        borderRadius={"15px"}
                        mt="5px"
                        padding="10px"
                        fontSize={"17px"}
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        Under ₹ 799
                      </Checkbox>
                      <Checkbox
                        value={999}
                        onChange={handlePriceFilterChange}
                        borderRadius={"15px"}
                        mt="5px"
                        padding="10px"
                        fontSize={"17px"}
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        Under ₹ 999
                      </Checkbox>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>

                {/* category */}
                <AccordionItem marginTop="20px">
                  <h2>
                    <AccordionButton
                      fontSize="18px"
                      fontWeight={600}
                      lineHeight="24px"
                      color=" rgb(26, 32, 44)"
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Category
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack spacing={5} direction="column">
                      <Checkbox
                        value={"furniture"}
                        onChange={categoryFilter}
                        borderRadius={"15px"}
                        mt="5px"
                        padding="10px"
                        fontSize={"17px"}
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        furniture
                      </Checkbox>
                      <Checkbox
                        value={"mens-watches"}
                        onChange={categoryFilter}
                        borderRadius={"15px"}
                        mt="5px"
                        padding="10px"
                        fontSize={"17px"}
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        mens-watches
                      </Checkbox>
                      <Checkbox
                        value={"sunglasses"}
                        onChange={categoryFilter}
                        borderRadius={"15px"}
                        mt="5px"
                        padding="10px"
                        fontSize={"17px"}
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        sunglasses
                      </Checkbox>
                      <Checkbox
                        value={"lighting"}
                        onChange={categoryFilter}
                        borderRadius={"15px"}
                        mt="5px"
                        padding="10px"
                        fontSize={"17px"}
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        lighting
                      </Checkbox>
                      <Checkbox
                        value={"automotive"}
                        onChange={categoryFilter}
                        borderRadius={"15px"}
                        mt="5px"
                        padding="10px"
                        fontSize={"17px"}
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        automotive
                      </Checkbox>
                      <Checkbox
                        value={"womens-shoes"}
                        onChange={categoryFilter}
                        borderRadius={"15px"}
                        mt="5px"
                        padding="10px"
                        fontSize={"17px"}
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        womens-shoes
                      </Checkbox>

                      <Checkbox
                        value={"mens-shoes"}
                        onChange={categoryFilter}
                        borderRadius={"15px"}
                        mt="5px"
                        padding="10px"
                        fontSize={"17px"}
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        mens-shoes
                      </Checkbox>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>

                {/* Rating */}
                <AccordionItem marginTop="20px">
                  <h2>
                    <AccordionButton
                      fontSize="18px"
                      fontWeight={600}
                      lineHeight="24px"
                      color=" rgb(26, 32, 44)"
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Rating
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack spacing={5} direction="column">
                      <Checkbox colorScheme="green">2.0 and above</Checkbox>
                      <Checkbox colorScheme="green">3.0 and above</Checkbox>
                      <Checkbox colorScheme="green">4.0 and above</Checkbox>

                      <Checkbox colorScheme="green">M-Rated</Checkbox>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>

                {/* fabric */}
                <AccordionItem marginTop="20px">
                  <h2>
                    <AccordionButton
                      fontSize="18px"
                      fontWeight={600}
                      lineHeight="24px"
                      color=" rgb(26, 32, 44)"
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Fabric
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Input />
                    <Stack spacing={5} direction="column">
                      <Checkbox colorScheme="green">Acrylic</Checkbox>
                      <Checkbox colorScheme="green">Art Silk</Checkbox>
                      <Checkbox colorScheme="green">Bamboo</Checkbox>
                      <Checkbox colorScheme="green">Banarasi Silk</Checkbox>
                      <Checkbox colorScheme="green">Chambray</Checkbox>
                      <Checkbox colorScheme="green">Chanderi Cotton</Checkbox>

                      <Checkbox colorScheme="green">Combed Cotton</Checkbox>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>

                {/* oxfords */}
                <AccordionItem marginTop="20px">
                  <h2>
                    <AccordionButton
                      fontSize="18px"
                      fontWeight={600}
                      lineHeight="24px"
                      color=" rgb(26, 32, 44)"
                    >
                      <Box as="span" flex="1" textAlign="left">
                        oxfords
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack spacing={5} direction="column">
                      <Checkbox colorScheme="green">Heels</Checkbox>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>

                {/* dialshape */}
                <AccordionItem marginTop="20px">
                  <h2>
                    <AccordionButton
                      fontSize="18px"
                      fontWeight={600}
                      lineHeight="24px"
                      color=" rgb(26, 32, 44)"
                    >
                      <Box as="span" flex="1" textAlign="left">
                        dial_shape
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack spacing={5} direction="column">
                      <Checkbox colorScheme="green">Round</Checkbox>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>

                {/* colors */}
                <AccordionItem marginTop="20px">
                  <h2>
                    <AccordionButton
                      fontSize="18px"
                      fontWeight={600}
                      lineHeight="24px"
                      color=" rgb(26, 32, 44)"
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Colors
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel padding={"5px"}>
                    <Input />

                    <Stack
                      padding={"5px"}
                      fontSize={"17px"}
                      justifyContent={"space-around"}
                      direction="row"
                    >
                      <Text
                        borderRadius={"15px"}
                        padding="10px"
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        Beinge
                      </Text>
                      <Text
                        borderRadius={"15px"}
                        padding="10px"
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        Black
                      </Text>

                      <Text
                        borderRadius={"15px"}
                        padding="10px"
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        Blue
                      </Text>
                    </Stack>
                    <Text
                      borderRadius={"15px"}
                      mt="5px"
                      padding="10px"
                      fontSize={"17px"}
                      border={"1px solid rgb(240,240,240)"}
                    >
                      Combo Of Different Color
                    </Text>
                    <Text
                      borderRadius={"15px"}
                      mt="5px"
                      padding="10px"
                      fontSize={"17px"}
                      border={"1px solid rgb(240,240,240)"}
                    >
                      Combo Of Maroon Shade
                    </Text>
                    <Stack
                      borderRadius={"15px"}
                      padding={"5px"}
                      fontSize={"17px"}
                      justifyContent={"space-around"}
                      direction="row"
                    >
                      <Text
                        borderRadius={"15px"}
                        padding="10px"
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        Grey
                      </Text>
                      <Text
                        borderRadius={"15px"}
                        padding="10px"
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        Pink
                      </Text>

                      <Text
                        borderRadius={"15px"}
                        padding="10px"
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        Maroon
                      </Text>
                    </Stack>
                    <Stack
                      padding={"5px"}
                      fontSize={"17px"}
                      justifyContent={"space-around"}
                      direction="row"
                    >
                      <Text
                        borderRadius={"15px"}
                        padding="10px"
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                      >
                        White
                      </Text>
                    </Stack>
                    <Text
                      borderRadius={"15px"}
                      padding="10px"
                      fontSize={"17px"}
                      border={"1px solid rgb(240,240,240)"}
                    >
                      Combo Of Red Shade
                    </Text>
                  </AccordionPanel>
                </AccordionItem>

                {/* Size */}
                <AccordionItem marginTop="20px">
                  <h2>
                    <AccordionButton
                      fontSize="18px"
                      fontWeight={600}
                      lineHeight="24px"
                      color=" rgb(26, 32, 44)"
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Size
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack spacing={5} direction="column">
                      <Checkbox colorScheme="green">Free</Checkbox>
                      <Checkbox colorScheme="green">Height</Checkbox>
                      <Checkbox colorScheme="green">Lenght</Checkbox>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>

                {/* Combo */}
                <AccordionItem marginTop="20px">
                  <h2>
                    <AccordionButton
                      fontSize="18px"
                      fontWeight={600}
                      lineHeight="24px"
                      color=" rgb(26, 32, 44)"
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Combo
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack spacing={5} direction="column">
                      <Checkbox colorScheme="green">Combo</Checkbox>
                      <Checkbox colorScheme="green">Pack of 2</Checkbox>
                      <Checkbox colorScheme="green">Pack of 3</Checkbox>
                      <Checkbox colorScheme="green">Pack of 4</Checkbox>
                      <Checkbox colorScheme="green">Pack of 5</Checkbox>
                      <Checkbox colorScheme="green">Pack of 6</Checkbox>
                      <Checkbox colorScheme="green">Single</Checkbox>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </div>
        </Box>

        <Box
          className="women-right"
          width={{ base: "100%", sm: "100%", md: "100%", lg: "70%" }}
        >
          <h1 style={{ fontSize: "12px", textAlign: "center" }}>
            {text ? "WOMENS" : ""}
          </h1>
          <h1 style={{ fontSize: "30px", color: "grey", textAlign: "center" }}>
            {text === "womens" ? "" : text.toUpperCase()}
          </h1>
          <h1
            style={{
              fontSize: "13px",
              color: "grey",
              width: "90%",
              margin: "auto",
              padding: "5px",
            }}
          >
            {text === "kurta"
              ? "Ethnic elegance, a fusion of hues and a whirlwind of styles from much-loved ethnic wear brands – go ahead and explore all the women’s kurtas on AJIO! The collection comprises of all the latest trends – from asymmetric hems to traditional Ikat prints. +"
              : ""}
          </h1>
          <h1
            style={{
              fontSize: "13px",
              color: "grey",
              width: "90%",
              margin: "auto",
              padding: "5px",
            }}
          >
            {text === "saree"
              ? `Traditional, trendy, stylish and graceful, there’s no denying that a woman’s beauty is accentuated by a saree. When you are shopping online for designer sarees for festive occasions or regular sarees for casual ethnic wear, you won’t have to look further than AJIO. From gorgeous silk sarees to crisp cottons, you’ll be amazed with the selection from brands such as Indie`
              : ""}
          </h1>
          <h1
            style={{
              fontSize: "13px",
              color: "grey",
              width: "90%",
              margin: "auto",
              padding: "5px",
            }}
          >
            {text === "tshirt"
              ? `Funk up your style with our fashionable selection of tees! AJIO showcases stunning styles from vivid graphic prints to versatile geometric art, subtle florals to simple solid tees that are trendsetting collectibles from brands like Pantaloons,`
              : ""}
          </h1>
          <h1
            style={{
              fontSize: "13px",
              color: "grey",
              width: "90%",
              margin: "auto",
              padding: "5px",
            }}
          >
            {text === "jeans"
              ? "Make a dramatic first impression with our stunning collection of jeans ranging from rugged ripped denims to old-school high waist ones, flattering skinny fits to stylish flared jeans. Here's our online wardrobe featuring brands like Levis, TALLY WEiJL and Recap that offer a blend of comfort and laidback style."
              : ""}
          </h1>
          <hr />

          <Box
            display={{ base: "grid", sm: "flex" }}
            gap="20px"
            justifyContent="space-around"
          >
            <div>
              <h6>{ }00 Items Found</h6>
            </div>
            <div style={{ display: "flex" }}>
              <Input
                variant="flushed"
                type="text"
                placeholder="Search here"
                value={productType}
                onChange={(event) => setProductType(event.target.value)}
              />
              <Button
                width={"-moz-fit-content"}
                colorScheme={"red"}
                onClick={() => handleSubmit(productType)}
                type="submit"
              >
                Search
              </Button>
            </div>

            <div>
              <label htmlFor="sort-select">Sort by:</label>
              <select onChange={(e) => handleSorting(e)} id="sort-select">
                <option value="">Select Price</option>
                <option value="highToLow">Price High to Low</option>
                <option value="lowToHigh">Price Low to High</option>
              </select>
            </div>
          </Box>

          <hr />

          <Box
            className="women-content"
            style={{
              display: "grid",
              gap: "15px",
              justifyContent: "space-around",
              margin: "20px",
            }}
            gridTemplateColumns={{
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr) ",
              lg: "repeat(3, 1fr) ",
            }}
          >
            {Products?.map((item) => (
              <Card {...item} />
            ))}
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Womens;
