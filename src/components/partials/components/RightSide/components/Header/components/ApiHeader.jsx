import { Select, Stack } from '@chakra-ui/react'
import './styles.css'

const ApiHeader = ({calledApi}) => {
  console.log(calledApi) 
  return (
    <div className='row g-1 api-header-main'>
      <div className='col-md-1'>
        <Stack>
          <Select placeholder={calledApi[0]?.method ? calledApi[0]?.method.toUpperCase() : 'Method'}>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </Select>
        </Stack>
      </div>
      <div className='col-md-10'>
        url
      </div> 
      <div className='col-md-1'>
        send
      </div>
    </div>
  )
}

export default ApiHeader