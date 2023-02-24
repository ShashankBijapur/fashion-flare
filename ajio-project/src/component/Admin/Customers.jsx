import React from 'react'
import {
    Box,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from "@chakra-ui/react";

const Customers = () => {
  return (
    <Box>
         <Heading as="h2" size="lg" mb={4}>
          Customer Details
        </Heading>
         <Table variant="simple">
        <Thead>
          <Tr>
            <Th>First-Name</Th>
            <Th>Last-Name</Th>
            <Th>E-mail</Th>
            <Th>Mobile</Th>
            <Th>Password</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Shashank</Td>
            <Td>Bijapur</Td>
            <Td>shashankcbijapur24@gmail.com</Td>
            <Td>7483157274</Td>
            <Td>12345</Td>
    
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

export default Customers