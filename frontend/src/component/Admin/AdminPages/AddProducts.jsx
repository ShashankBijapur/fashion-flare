
  import React, { useState } from "react";
  import AdminSidebar from "../AdminComps/Sidebar";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

  function AddProducts() {
    const [product, setProduct] = useState({
      src: "",
      brand: "",
      category: "",
      title: "",
      discountPrice: "",
      originalPrice: "",
      discount: "",
      offer: "",
      genre: [],
      rating: ""
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // submit the product data to the server or do something with it
    };
    return (
      <AdminSidebar heading={"Add Products"}>
        <form onSubmit={handleSubmit}>
      <FormControl id="src" isRequired>
        <FormLabel>Product Image URL</FormLabel>
        <Input type="url" name="src" value={product.src} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="brand" isRequired>
        <FormLabel>Brand</FormLabel>
        <Input type="text" name="brand" value={product.brand} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="category" isRequired>
        <FormLabel>Category</FormLabel>
        <Input type="text" name="category" value={product.category} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="title" isRequired>
        <FormLabel>Product Title</FormLabel>
        <Input type="text" name="title" value={product.title} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="discountPrice" isRequired>
        <FormLabel>Discount Price</FormLabel>
        <Input type="text" name="discountPrice" value={product.discountPrice} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="originalPrice" isRequired>
        <FormLabel>Original Price</FormLabel>
        <Input type="text" name="originalPrice" value={product.originalPrice} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="discount" isRequired>
        <FormLabel>Discount</FormLabel>
        <Input type="text" name="discount" value={product.discount} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="offer" isRequired>
        <FormLabel>Offer</FormLabel>
        <Input type="text" name="offer" value={product.offer} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="genre" isRequired>
        <FormLabel>Genre</FormLabel>
        <Input type="text" name="genre" value={product.genre} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="rating" isRequired>
        <FormLabel>Rating</FormLabel>
        <Input type="text" name="rating" value={product.rating} onChange={handleInputChange} />
      </FormControl>
      <Button type="submit" mt={4} colorScheme="teal">
        Submit
      </Button>
    </form>
      </AdminSidebar>
    );
  }
  
  export default AddProducts;