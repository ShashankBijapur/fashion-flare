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
    Button,
  } from "@chakra-ui/react";
const Orders = () => {
  return (
    <Box>
          <Heading as="h2" size="lg" mb={4}>
          Order Details
        </Heading>
         <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Payment</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Product 2</Td>
            <Td>Description of product 2</Td>
            <Td>$20.00</Td>
            <Td>
            2
            </Td>
            <Td>
            <Button colorScheme={"green"}>Successfull</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

export default Orders