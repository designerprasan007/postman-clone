import {
  RadioGroup,
  Radio,
  Stack
} from '@chakra-ui/react'
import FormData from './components/FormData'
import RawForm from './components/RawForm'

const BodyData = ({calledApi, activeBody, setActiveBody, formDataValues, setFormDataValues}) => {
  return (
    <>
      <RadioGroup pt="5" ps="3" onChange={setActiveBody} value={activeBody}>
      <Stack direction='row'>
        <Radio value='none'>none</Radio>
        <Radio value='form-data'>form-data</Radio>
        <Radio value='raw'>raw</Radio>
      </Stack>
    </RadioGroup>
    {activeBody === 'form-data' && <FormData calledApi={calledApi} formDataValues={formDataValues} setFormDataValues={setFormDataValues} />}
    {activeBody === 'raw' && <RawForm />}

    </>
  )
}

export default BodyData