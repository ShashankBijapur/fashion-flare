import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminComps/Sidebar";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Td,
  Table,
  TableContainer,
  Tbody,

  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getRequestforAdminSide } from "../../../redux/Admin/action";
import { deleteUserData, getUSerData } from "../../../redux/Users/action";
import UserCard from "../AdminComps/UserCard";


function Dashboard() {
  const dispatch = useDispatch();

  const mens = useSelector((store) => {
    return store.AdminReducer.mens
  });

  const womens = useSelector((store) => {
    return store.AdminReducer.womens
  });

  const kids = useSelector((store) => {
    return store.AdminReducer.kids;
  });

  const Users = useSelector((store) => {
    return store.UserReducer.user;
  });

  const isLoading = useSelector((store) => {
    return store.UserReducer.isLoading;
  });
 
  useEffect(() => {
    dispatch(getRequestforAdminSide({}, "men"));
    dispatch(getRequestforAdminSide({}, "women"));
    dispatch(getRequestforAdminSide({}, "kid"));
    dispatch(getUSerData());
  }, []);

  const handleDelete = (id) => {
    console.log("iddd", id);
    dispatch(deleteUserData(id)).then((res) => {
      dispatch(getUSerData());
    });
  };
  return (
    <AdminSidebar heading={"Dashboard"}>
   

      <Box>
        <Box
        
        >
          <Box
            // w={"28%"}

            display={"flex"}
            boxShadow={
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
            }
            bg={"#fff"}
            border={"1px solid gre"}
            borderRadius={"15px"}
          >
            <Box
              border={"1px solid blu"}
              display={"flex"}
              justifyContent={"center"}
              w={"50%"}
            >
              <Image
                w={"80%"}
                src="https://www.canadianginsengfarm.com/wp-content/uploads/2018/03/Product-Icon.png"
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Text fontSize={"2xl"}>Total Products</Text>
              <Text fontSize={"2xl"}>
                {mens.length +
                  womens.length +
                  kids.length}
              </Text>
            </Box>
          </Box>
          <Box
            // w={"28%"}

            display={"flex"}
            boxShadow={
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
            }
            bg={"#fff"}
            border={"1px solid gre"}
            borderRadius={"15px"}
          >
            <Box
              border={"1px solid blu"}
              display={"flex"}
              justifyContent={"center"}
              w={"50%"}
            >
              <Image
                w={"80%"}
                src="https://www.wigginsshredding.com/wp-content/uploads/2019/05/Box-Icon.png"
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Text fontSize={"2xl"}>Total Orders</Text>
              <Text fontSize={"2xl"}>2</Text>
            </Box>
          </Box>
          <Box
            // w={"28%"}

            display={"flex"}
            boxShadow={
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
            }
            bg={"#fff"}
            border={"1px solid gre"}
            borderRadius={"15px"}
          >
            <Box
              border={"1px solid blu"}
              display={"flex"}
              justifyContent={"center"}
              w={"50%"}
            >
              <Image
                w={"80%"}
                src="https://www.citypng.com/public/uploads/preview/profile-user-round-red-icon-symbol-download-png-11639594337tco5j3n0ix.png"
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Text fontSize={"2xl"}>Total Users</Text>
              <Text fontSize={"2xl"}>{Users.length}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Text my={"20px"} fontSize={"2xl"}>
          Users
        </Text>
      </Box>
      <Box border={"1px solid re"}>
        <TableContainer>
          <Table variant="striped" colorScheme="pink">
            <Thead>
              <Tr>
                <Th>Sr. No</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Password</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
             
              {Users?.map((item, index) => {
                return (
                  <UserCard
                    key={item._id}
                    {...item}
                    handleDelete={handleDelete(item._id)}
                    index={index}
                  />
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </AdminSidebar>
  );
}

export default Dashboard;
