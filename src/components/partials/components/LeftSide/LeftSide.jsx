import { Box, Flex, Stack } from '@chakra-ui/react'
import {IconButton, Button} from '@chakra-ui/button'
import React from 'react'
import {FaFolderOpen, FaCloudsmith, FaBoxOpen, FaServer, FaHistory, FaUserAlt} from 'react-icons/fa'
import LeftInfo from './LeftInfo'

const LeftSide = () => {
  return (
    <Flex pos="sticky" flexDir="column" justifyContent="space-between" textAlign="start" bg="orange.500" color="white" h="90vh" borderEnd="1px">
        <div className='col-12'>
        <div className='row'>
          <div className='col-6'>
            <Box left="5">
              <IconButton icon={<FaUserAlt />} variant="unstyled" />My work place
            </Box>
            <Flex flexDir="column" as="nav"  >
              <Box alignItems="center" p={4}>
                <Button leftIcon={<FaFolderOpen />} colorScheme='white' variant='solid'>Collection</Button>
              </Box>
              <Box alignItems="center" p={4}>
                <Button leftIcon={<FaCloudsmith />} colorScheme='white' variant='solid'>API's</Button>
              </Box>
              <Box alignItems="center" p={4}>
                <Button leftIcon={<FaBoxOpen />} colorScheme='white' variant='solid'>Environment</Button>
              </Box>
              <Box alignItems="center" p={4}>
                <Button leftIcon={<FaServer />} colorScheme='white' variant='solid'>Server</Button>
              </Box>
              <Box alignItems="center" p={4}>
                <Button leftIcon={<FaHistory />} colorScheme='white' variant='solid'>History</Button>
              </Box>
            </Flex>
          </div>
          <div className='col-6'>
            <Stack spacing={4} direction='row' textAlign='end'>
              <Button colorScheme='white' variant='outline' size='xs'>
                New
              </Button>
              <Button colorScheme='white' variant='outline' size='xs'>
                Import
              </Button>
            </Stack>
            <Flex flexDir="column" as="nav"  >
                <LeftInfo />
            </Flex>
          </div>
        </div> 
        
        </div>
    </Flex >
  )
}

export default LeftSide