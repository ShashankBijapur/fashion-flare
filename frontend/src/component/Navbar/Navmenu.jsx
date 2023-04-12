import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Navmenu = () => {
  return (
    <Box fontSize="12px">
    <Flex gap="20px">
      <Text>Shop By:</Text>
      <Text>Categories</Text>
    </Flex>
    <Flex gap="50px">
      <Box lineHeight={"40px"}>
        <Text fontWeight="500" cursor={"pointer"}>
          CLOTHING
        </Text>
        <Text fontWeight="500" cursor={"pointer"}>
          FOOTWEAR
        </Text>
        <Text fontWeight="500" cursor={"pointer"}>
          ACCESSORIES
        </Text>
        <Text fontWeight="500" cursor={"pointer"}>
          ALL THATS NEW
        </Text>
        <Text fontWeight="500" cursor={"pointer"}>
          AJIO GLOBAL
        </Text>
        <Text fontWeight="500" cursor={"pointer"}>
          WINTERWEAR
        </Text>
        <Text fontWeight="500" cursor={"pointer"}>
          NIGHT & LAUNGEWEAR
        </Text>
        <Text fontWeight="500" cursor={"pointer"}>
          GROOMING
        </Text>
        <Text fontWeight="500" cursor={"pointer"}>
          ETHNIC & FESTIVE
        </Text>
      </Box>
      <Box>
        <Text fontWeight="500" cursor={"pointer"}>
          WESTERN WEAR
        </Text>
        <Text cursor={"po"}>Jackets & Coats</Text>
        <Text cursor={"po"}>Jeans</Text>
        <Text cursor={"po"}>Shirts</Text>
        <Text cursor={"po"}>Shorts & 3/4ths</Text>
        <Text cursor={"po"}>Sweatshirts & Hoodies</Text>
        <Text>Tracks Pants</Text>
        <Text cursor={"po"}>Trousers & Pants</Text>
        <Text cursor={"po"}>T-Shirt</Text>
        <Text fontWeight="500" cursor={"pointer"}>
          FOOTWEAR
        </Text>
        <Text cursor={"po"}>Casual Shoes</Text>
        <Text cursor={"po"}> Flip-Flops & Slippers</Text>
        <Text cursor={"po"}>Formal Shoes</Text>
        <Text cursor={"po"}>Sandals</Text>
        <Text cursor={"po"}>Sneakers</Text>
        <Text>Sports Shoes</Text>
        <Text cursor={"po"}>Trousers & Pants</Text>
        <Text cursor={"po"}>T-Shirt</Text>
      </Box>
      <Box>
        <Text fontWeight="500" cursor={"pointer"}>
          ACCESSORIES
        </Text>
        <Text cursor={"po"}>Backpacks</Text>
        <Text cursor={"po"}>Bags & Wallets</Text>
        <Text cursor={"po"}>Belts</Text>
        <Text cursor={"po"}>Caps & Hats</Text>
        <Text cursor={"po"}>Fashion Accesories</Text>
        <Text>Socks</Text>
        <Text cursor={"po"}>Sunglasses & Frames</Text>
        <Text cursor={"po"}>Wallets</Text>
        <Text cursor={"po"}>Watches</Text>
        <Text fontWeight="500" cursor={"pointer"}>
          PRECIOUS JEWELLERY
        </Text>
        <Text cursor={"po"}>Gold and Silver Coins</Text>
        <Text cursor={"po"}> Gold and Diamond jewellery</Text>
        <Text cursor={"po"}>Silver Jewellery</Text>
        <Text fontWeight="500" cursor={"pointer"}>
          INNERWEAR
        </Text>
        <Text cursor={"po"}>Breifs</Text>
        <Text>Trunks and Boxers</Text>
        <Text cursor={"po"}>vests</Text>
      </Box>
      <Box>
        <Text fontWeight="500" cursor={"pointer"}>
          FEATURED
        </Text>
        <Text cursor={"po"}>Bags under 1499</Text>
        <Text cursor={"po"}>Footwear under 1499</Text>
        <Text cursor={"po"}>Jeans under 1299</Text>
        <Text fontWeight="500" cursor={"pointer"}>
          # Ajio Recommends
        </Text>
        <Text cursor={"po"}>Play Time</Text>
      </Box>
    </Flex>

  </Box>
  )
}

export default Navmenu