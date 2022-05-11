import {
  RadioGroup,
  Radio,
  Stack
} from '@chakra-ui/react'
import {useState} from 'react'
import FormData from './components/FormData'
import RawForm from './components/RawForm'

const BodyData = () => {
  const [activeBody, setActiveBody] = useState('none')
  return (
    <>
      <RadioGroup pt="5" ps="3" onChange={setActiveBody} value={activeBody}>
      <Stack direction='row'>
        <Radio value='none'>none</Radio>
        <Radio value='form-data'>form-data</Radio>
        <Radio value='raw'>raw</Radio>
      </Stack>
    </RadioGroup>
    {activeBody === 'form-data' && <FormData />}
    {activeBody === 'raw' && <RawForm />}

    </>
  )
}

export default BodyData