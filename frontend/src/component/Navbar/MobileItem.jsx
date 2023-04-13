import React from 'react'
import {Link} from "react-router-dom"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'

const MobileItem = ({nameitem,item1,item2,item3,item4,item5,item6,item7,item8,item9,item10}) => {
 
  return (
    <div style={{zIndex:"5"}}>
      <Menu>
  <MenuButton as={Button}>
    {nameitem}
  </MenuButton>
  <MenuList>
    <MenuItem>{item1}</MenuItem>
    <MenuItem>{item2}</MenuItem>
    <MenuItem>{item3}</MenuItem>
    <MenuItem>{item4}</MenuItem>
    <MenuItem>{item5}</MenuItem>
    <MenuItem>{item6}</MenuItem>
    <MenuItem>{item7}</MenuItem>
    <MenuItem>{item8}</MenuItem>
    <MenuItem>{item9}</MenuItem>
    <MenuItem>{item10}</MenuItem>
  </MenuList>
</Menu>
    </div>
  )
}

export default MobileItem