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
import { useState, useEffect } from 'react'

const FormData = ({calledApi}) => {
  
  const [bodyValues, setBodyValues] = useState([])

  useEffect(() =>{
    setBodyValues(calledApi[0]?.body || [])
  },[calledApi])

  const addBodyValues = () =>{
    const isEmptyField = bodyValues.some((val) => val.key === "" || val.value === "");
    if(!isEmptyField){
      setBodyValues([...bodyValues, { key:"",
        "value":""}])
      }
    else{
        alert("Fill all empty fields")
      }
    }

    const handleBodyValue = (event, index) => {
      const name = event.target.name;
      const val = event.target.value;

      let values = [...bodyValues];
      values[index][name] = val
      setBodyValues(values)
    }

    const removeBodyValue = (index) =>{
      setBodyValues((prevState) =>
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
              {bodyValues.map((val, index) =>{
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
        <Button className='addButton'colorScheme='teal' size='md'>
          <FaPlus onClick={addBodyValues} />
        </Button>
    </div>
  )
}

export default FormData