import { Textarea } from '@chakra-ui/react'

const RawForm = () => {
  return (
    <div>
      <Textarea size="md"  rows="15" isInvalid="true" variant="unstyled" placeholder='{key: value}'  />
    </div>
  )
}

export default RawForm