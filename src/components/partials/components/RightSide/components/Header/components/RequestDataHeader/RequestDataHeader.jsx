import '../styles.css'
import { Stack, Box } from '@chakra-ui/react'
import React from 'react'

const RequestDataHeader = ({changeHeaderTab}) => {
  return (
    <Stack direction={['column', 'row']} className="request-header-stack">
        <Box w='100px' h='30px'  p={1} className='request-header-box request-header-active-class' onClick={() => changeHeaderTab("Params")}>
            Params
        </Box>
        <Box w='100px' h='30px'  p={1} className='request-header-box' onClick={() => changeHeaderTab("Headers")}>
            Headers
        </Box>
        <Box w='100px' h='30px'  p={1} className='request-header-box' onClick={() => changeHeaderTab("Body")}>
            Body
        </Box>
    </Stack>
  )
}

export default RequestDataHeader