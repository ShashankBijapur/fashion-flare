import React from "react";
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
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Flex,
} from "@chakra-ui/react";

function AdminPage() {
  return (
    <Flex direction="row" mt={8} alignItems="flex-start">
    <Box p={4} flex="1">
      <Heading as="h2" size="lg" mb={4}>
        Admin Dashboard
      </Heading>

      <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Add New Product
      </Heading>

      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        boxShadow="md"
      >
        <form>
          <FormControl mt={4}>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              mt={2}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              name="price"
              mt={2}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              mt={2}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Image URL</FormLabel>
            <Input
              type="text"
              name="imageUrl"
              mt={2}
            />
          </FormControl>

          <Button type="submit" colorScheme="blue" mt={4}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
    </Box>
       
       <Box>
       <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Product List
      </Heading>
      </Box>
       <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Price</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Product 1</Td>
            <Td>Description of product 1</Td>
            <Td>$10.00</Td>
            <Td>
              <Button colorScheme="yellow" mr={2}>
                Edit
              </Button>
              <Button colorScheme="red">Delete</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>Product 2</Td>
            <Td>Description of product 2</Td>
            <Td>$20.00</Td>
            <Td>
              <Button colorScheme="yellow" mr={2}>
                Edit
              </Button>
              <Button colorScheme="red">Delete</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
       </Box>
    </Flex>
  );
}

export default AdminPage;
