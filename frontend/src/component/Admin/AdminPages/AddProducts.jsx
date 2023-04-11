import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    useToast,
  } from "@chakra-ui/react";
  import { ChevronRightIcon } from "@chakra-ui/icons";
  import React, { useState } from "react";
  import AdminSidebar from "../AdminComps/Sidebar";
  import { postRequestAdminSide } from "../../../redux/Admin/action";
  import { useDispatch } from "react-redux";
  const initialData = {
    src: "",
    brand: "",
    category: "",
    title: "",
    discountPrice: "",
    orginalPrice: "",
    discount: "",
    offer: "",
    genre: [],
    rating: ""
  };
  function AddProducts() {
    const [data, setData] = useState(initialData);
    const {
      src,
  brand,
  category,
  title,
  discountPrice,
  orginalPrice,
  discount,
  offer,
  genre,
  rating
    } = data;
    const [categories, setCategory] = useState("");
    const toast = useToast();
    const dispatch = useDispatch();
    const callToast = () => {
      toast({
        title: "Product Added successfully",
        position: "top",
        isClosable: true,
      });
    };

    const handleChange = (event) => {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
    };

    
    const handleSubmit = (e) => {
      e.preventDefault();
    
      if (
        src === "" ||
        brand === "" ||
        title == "" ||
        discountPrice == "" ||
        orginalPrice == "" ||
        discount == "" ||
        offer == "" ||
        category == "" ||
        genre === [] ||
        rating  == ""
      ) {
        toast({
          position: "top",
          title: `Please add all the details`,
          status: "error",
          isClosable: true,
          duration: 2000,
        });
      } else {
        const payload = {
          src,
          brand,
          category,
          title,
          discountPrice,
          orginalPrice,
          discount,
          offer,
          genre,
          rating
        };
    
        if (categories === "men") {
          dispatch(postRequestAdminSide("men", payload));
        } else if (categories === "women") {
          dispatch(postRequestAdminSide("women", payload));
        } else if (categories === "kid") {
          dispatch(postRequestAdminSide("kid", payload));
        }
    
        callToast();
        setData(initialData);
        setCategory("");
      }
    };
    
    return (
      <AdminSidebar heading={"Add Products"}>
        <Box border={"1px solid re"}>
          <Box>
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Admin</BreadcrumbLink>
              </BreadcrumbItem>
  
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Add Product</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Box
            m={"auto"}
            border={"1px solid re"}
            width={"50%"}
            p={"15px"}
            boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
          >
            <FormControl width={"100%"} as={"fieldset"}>
              <FormLabel>Image Link</FormLabel>
              <Input value={src} name="images" onChange={handleChange} />
  
              <FormLabel>Title</FormLabel>
              <Input value={brand} name="name" onChange={handleChange} />
              <Box display={"flex"} mt={"5px"}>
                <FormLabel>Select Category</FormLabel>
                <Select
                  placeholder="Category"
                  onChange={handleCategory}
                  value={category}
                  // bg="#ffa711"
                  w={{ lg: "30%" }}
                >
                  <option value="mens">Mens</option>
                  <option value="womens">Womens</option>
                  <option value="kids">Kids</option>
                </Select>
              </Box>
              <FormLabel>Brand</FormLabel>
              <Input
                name="brand"
                value={brand}
                onChange={handleChange}
              />
  
              <FormLabel>Description</FormLabel>
              <Input
                name="title"
                value={title}
                onChange={handleChange}
              />
  
              <FormLabel>Mrp</FormLabel>
              <Input
                name="originalPrice"
                value={originalPrice}
                type={"number"}
                onChange={handleChange}
              />
              <FormLabel>Special Price</FormLabel>
              <Input
                name="discountPrice"
                value={discountPrice}
                type={"number"}
                onChange={handleChange}
              />
              <Box display={"flex"} gap={"5px"} mt={"10px"}>
                <FormLabel>Rating</FormLabel>
  
                <Input
                  name="rating"
                  value={rating}
                  type={"number"}
                  onChange={handleChange}
                />
                <FormLabel>Quantity</FormLabel>
                <Input
                  name="discount"
                  value={discount}
                  type={"number"}
                  onChange={handleChange}
                />
              </Box>
              <Box display={"flex"} justifyContent={"space-around"} mt="10px">
                <Button onClick={(e) => handleSubmit(e)} colorScheme={"green"}>
                  Add Product
                </Button>
              </Box>
            </FormControl>
          </Box>
        </Box>
      </AdminSidebar>
    );
  }
  
  export default AddProducts;