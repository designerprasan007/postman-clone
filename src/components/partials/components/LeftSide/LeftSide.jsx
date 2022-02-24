import { Flex } from '@chakra-ui/react'
import {IconButton} from '@chakra-ui/button'
import React from 'react'
import {FaFolderOpen} from 'react-icons/fa'
const LeftSide = () => {
  return (
    <Flex pos="sticky" left="5" flexDir="column" justifyContent="space-between" color="white" w="75px">
        <Flex flexDir="column" alignItems="flex-start" as="nav"  >
            <IconButton background="none" mt={5} _hover={{background:"none"}} size="100px" icon={<FaFolderOpen />}/>
        </Flex>
    </Flex >
  )
}

export default LeftSide