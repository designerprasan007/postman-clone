import '../styles.css'
import { Stack, Box } from '@chakra-ui/react'
import React from 'react'

const RequestDataHeader = () => {
  return (
    <Stack direction={['column', 'row']} className="request-header-stack">
        <Box w='100px' h='30px'  p={1} className='request-header-box request-header-active-class'>
            Params
        </Box>
        <Box w='100px' h='30px'  p={1} className='request-header-box'>
            Headers
        </Box>
        <Box w='100px' h='30px'  p={1} className='request-header-box'>
            Body
        </Box>
    </Stack>
  )
}

export default RequestDataHeader