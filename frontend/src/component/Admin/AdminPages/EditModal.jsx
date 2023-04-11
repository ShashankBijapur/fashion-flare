import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AdminSidebar from "../AdminComps/Sidebar";
import {
  getRequestforAdminSide,
  patchRequestforAdminSide,
} from "../../../redux/Admin/action";

const initilalData = {
  _id: "",
  name: "",
  orginalPrice:"",
  discountPrice:"",
  discount:"",
  brand: "",
  rating: "",
  title: "",
  src: "",
};

function EditProducts() {
  const param = useParams();
  const [show, setShow] = useState(false);
  const [data, setData] = useState(initilalData);

  const toast = useToast();

  const {
  // brand,
  // title,
  // orginalPrice,
  // discountPrice,
  // rating,
  // discount,
    name,
    price,
    orginalPrice,
    discountPrice,
    discount,
    brand,
    rating,
    title,
    quantity,
  } = data;

  const dispatch = useDispatch();
  const mens = useSelector((store) => {
    return store.AdminReducer.mens;
  });


  const womens = useSelector((store) => {
    return store.AdminReducer.womens;
  });

  const kids = useSelector((store) => {
    return store.AdminReducer.kids;
  });

  const callToast = () => {
    toast({
      title: "Details changed successfully",
      position: "top",
      isClosable: true,
      status: "success",
    });
  };

  let paramsid = param.id;
  let [categories, id] = paramsid;

  useEffect(() => {
    if (mens.length === 0) {
      dispatch(getRequestforAdminSide({}, "men"));
      console.log(mens);
    } else if (womens.length === 0) {
      dispatch(getRequestforAdminSide({}, "women"));
    } else if (kids.length === 0) {
      dispatch(getRequestforAdminSide({}, "kid"));
    }
  }, [mens, womens, kids]);

  useEffect(() => {
    if (categories === "men" && mens.length > 0) {
      let productData = mens.find((el) => el.id === +id);
      setData(productData);
    }

    if (categories === "women" && womens.length > 0) {
      let productData = womens.find((el) => el.id === +id);
      setData(productData);
    }
    if (categories === "kid" && kids.length > 0) {
      let productData = kids.find((el) => el.id === +id);
      setData(productData);
    }
  }, [mens, womens, kids]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    if (name === "originalPrice") {
      setData({ ...data, originalPrice:  value  });
    } else if (name === "") {
      setData({ ...data, price: { ...price, sp: value } });
    } else {
      setData({
        ...data,
        [name]: value,
        price: {
          ...price,
          discount: Math.floor(((price.mrp - price.sp) / price.mrp) * 100),
        },
      });
    }
  };

  const handleSubmit = (id) => {
    // e.preventDefault();
    // console.log(data,+id);
    if (categories === "men") {
      dispatch(patchRequestforAdminSide(id, "men", data));
    } else if (categories === "women") {
      dispatch(patchRequestforAdminSide(id, "women", data));
    } else if (categories === "kid") {
      dispatch(patchRequestforAdminSide(id, "kid", data));
    }
    callToast();
    setShow((prev) => !prev);
  };
  return (
    <AdminSidebar heading={"Edit Product"}>
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
              <BreadcrumbLink href="#">Edit Product</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Text fontSize={"4xl"} mb={"20px"}>
          Edit Product Details
        </Text>
        <Box display={"flex"} justifyContent={"center"} gap={"25px"}>
          {data?.brand !== undefined && (
            <Box
              w={"30%"}
              p={"15px"}
              textAlign={"left"}
              border={"1px solid re"}
              boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
            >
              <Box
                w={"70%"}
                m={"auto"}
                border={"1px solid re"}
                display={"flex"}
                justifyContent={"center"}
              >
                <Image src={data.src&& data?.src} w={"80%"} />
              </Box>
              <Text fontWeight={500}> {data?.brand}</Text>
              <Text>{data?.brand}</Text>
              <Text>Description : {data?.title}</Text>
              <Text>Rating : {data?.rating}</Text>
              <Text>Special Price : Rs. {data?.discountPrice}</Text>

              <Text>Mrp : Rs. {data?.originalPrice}</Text>
              <Button
                onClick={() => setShow((prev) => !prev)}
                colorScheme={"green"}
                px={"20px"}
                mt="5px"
              >
                Edit Details
              </Button>
              {/* <BackdropExample {...data} /> */}
            </Box>
          )}

          {show && (
            <Box
              border={"1px solid re"}
              width={"30%"}
              p={"15px"}
              boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
            >
              {/* <BackdropExample/> */}
              <FormControl width={"100%"} as={"fieldset"}>
                <FormLabel>Title</FormLabel>
                <Input value={name} name="name" onChange={handleChange} />

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
                  value={orginalPrice}
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
                <Box display={"flex"} justifyContent={"space-around"} mt="10px">
                  <Button
                    onClick={(e) => handleSubmit(id)}
                    colorScheme={"green"}
                  >
                    Submit Changes
                  </Button>

                  <Button
                    onClick={() => setShow((prev) => !prev)}
                    colorScheme={"red"}
                  >
                    Cancel Edit
                  </Button>
                </Box>
              </FormControl>
            </Box>
          )}
        </Box>
      </Box>
    </AdminSidebar>
  );
}

export default EditProducts;
