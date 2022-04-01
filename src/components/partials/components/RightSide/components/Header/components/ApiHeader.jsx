import { Select, Stack,Box, Input,Button } from '@chakra-ui/react'
import './styles.css'

const ApiHeader = ({calledApi}) => {
  const handleUrl = (e) => {
    console.log(e.target.value)
  }
  return (
    <Box className='row g-1 api-header-main'>
      <Box className='col-md-1'>
        <Stack>
          <Select className='api-header-input' placeholder={calledApi[0]?.method ? calledApi[0]?.method?.toUpperCase() : 'Method'}>
            <option value='GET'>GET</option>
            <option value='POST'>POST</option>
            <option value='PUT'>PUT</option>
            <option value='PATCH'>PATCH</option>
            <option value='DELETE'>DELETE</option>
        </Select>
        </Stack>
      </Box>
      <Box className='col-md-10'>
        <Input className='api-header-input' placeholder='medium size' onChange={handleUrl} variant='outline' value={calledApi[0]?.text ? calledApi[0]?.text : ""} size='md' />
      </Box> 
      <Box className='col-md-1'>
        <Button colorScheme='blue' size='md'>Send</Button>
      </Box>
    </Box>
  )
}

export default ApiHeader