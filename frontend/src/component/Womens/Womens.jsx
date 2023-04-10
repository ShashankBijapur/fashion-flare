import React, { useState, useEffect } from "react";
// import axios from 'axios';
import "./Womens.css";
import { Box, Button, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../../redux/Products/action";
import { Card } from "../Card/Card";
import CardPage from "./WomensCard";
import Sidebar from "../Sidebar/Sidebar";
// import { Box } from '@chakra-ui/react';
function Womens() {
  let [productType, setProductType] = useState("womens");
  const [text, settext] = useState("");
  const handleSubmit = (productType) => {};
  const dispatch = useDispatch();
  const Products = useSelector((store) => store.ProductReducer.Products);
  console.log('Products: ', Products);

  useEffect(() => {
    dispatch(getProductData("women"));
  }, []);
  return (
    <>
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
            {/* <div
              style={{ textAlign: "left", marginLeft: "40px" }}
              className="filter-div"
            >
              <div className="filter-category">
                <div> Category</div>
                <div style={{ fontSize: "12px", padding: "10px" }}>
                  <h6>
                    <input value="tshirts" type="checkbox" />
                    <label htmlFor="#">T-Shirt</label>
                  </h6>

                  <h6>
                    <input value="kurta" type="checkbox" />
                    <label htmlFor="#">Kurtas</label>
                  </h6>
                  <h6>
                    <input value="jeans" type="checkbox" />
                    <label htmlFor="#">Jeans</label>
                  </h6>

                  <h6>
                    <input value="saree" type="checkbox" />
                    <label htmlFor="#">Saree</label>
                  </h6>
                </div>
              </div>
              <hr />

              <div className="filter-category">
                <div> Price</div>
                <div style={{ fontSize: "12px", padding: "10px" }}>
                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">Below Rs 500</label>
                  </h6>
                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">Below Rs 500-1000</label>
                  </h6>
                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">Below Rs 1001-1500</label>
                  </h6>
                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">Below Rs 1501-2000</label>
                  </h6>

                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">Below Rs 2001-2500</label>
                  </h6>
                </div>
              </div>
              <hr />

              <div className="filter-category">
                <div> Brands</div>
                <div style={{ fontSize: "12px", padding: "10px" }}>
                  <h6>
                    <input value="Kimayra" type="checkbox" />
                    <label htmlFor="#">Kimayra</label>
                  </h6>
                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">21 Degree</label>
                  </h6>
                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">23 Yard</label>
                  </h6>
                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">28ME</label>
                  </h6>

                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">2Go</label>
                  </h6>
                </div>
              </div>

              <hr />

              <div className="filter-category">
                <div> Occation</div>
                <div style={{ fontSize: "12px", padding: "10px" }}>
                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">Active</label>
                  </h6>
                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">ACTIVE</label>
                  </h6>
                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">Casual</label>
                  </h6>
                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">CASUAL</label>
                  </h6>

                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">EVENING</label>
                  </h6>
                </div>
              </div>
              <hr />
              <div className="filter-category">
                <div> Discount</div>
                <div style={{ fontSize: "12px", padding: "10px" }}>
                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">0-20%</label>
                  </h6>
                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">21%-30%</label>
                  </h6>
                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">31%-40%</label>
                  </h6>
                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">41%-50%</label>
                  </h6>

                  <h6>
                    <input type="checkbox" />
                    <label htmlFor="#">51%-80%</label>
                  </h6>
                </div>
              </div>
              <hr />
            </div> */}
              <Sidebar/>
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
              <h6>{}00 Items Found</h6>
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
              <select id="sort-select" >
                <option value="">Select Price</option>
                <option value="relevance">Relevance</option>
                <option value="highToLow">Price(lowest first)</option>
                <option value="lowToHigh">Price(highest first)</option>
                <option value="discount">Discount</option>
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
            {Products.map((item) => (
              <Card {...item} />
            ))}
            {/* {Products?.map((product, index) => (
                            <CardPage {...product} key={index} />
                        ))} */}
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Womens;
