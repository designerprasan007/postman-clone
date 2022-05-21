import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  Button,
  CloseButton
} from '@chakra-ui/react'
import {FaPlus} from 'react-icons/fa'
import { useEffect } from 'react'

const FormData = ({calledApi, formDataValues, setFormDataValues}) => {

  useEffect(() =>{
    setFormDataValues(calledApi[0]?.body || formDataValues)
  },[calledApi, formDataValues, setFormDataValues])

  const addBodyValues = () =>{
    const isEmptyField = formDataValues.some((val) => val.key === "" || val.value === "");
    if(!isEmptyField){
      setFormDataValues([...formDataValues, { key:"",
        "value":""}])
      }
    else{
        alert("Fill all empty fields")
      }
    }

    const handleBodyValue = (event, index) => {
      const name = event.target.name;
      const val = event.target.value;

      let values = [...formDataValues];
      values[index][name] = val
      setFormDataValues(values)
    }

    const removeBodyValue = (index) =>{
      setFormDataValues((prevState) =>
        prevState.filter((prevItem, i) => i !== index)
    );
    }
  return (
    <div>
       <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Key</Th>
                <Th>Value</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {formDataValues.map((val, index) =>{
                return(
                  <Tr key={index}>
                      <Td><Input size='md' variant='outline' name="key" onChange={(event) => handleBodyValue(event, index)} value={val.key} /></Td>
                      <Td><Input size='md' variant='outline' name="value" onChange={(event) => handleBodyValue(event, index)} value={val.value}  /></Td>
                      <Td>
                        <CloseButton onClick={() => removeBodyValue(index)} size='md' />
                      </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Button onClick={addBodyValues} className='addButton'colorScheme='teal' size='md'>
          <FaPlus  />
        </Button>
    </div>
  )
}

export default FormData