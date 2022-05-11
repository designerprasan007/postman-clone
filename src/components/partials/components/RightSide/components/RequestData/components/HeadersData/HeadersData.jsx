import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Input,
    Checkbox,
    Button,
    CloseButton
  } from '@chakra-ui/react'
import {FaPlus} from 'react-icons/fa'

  import { useState, useEffect } from 'react'
  import './HeadersData.css'


  const HeadersData = ({calledApi}) => {

    const [headerValues, setHeaderValues,] = useState([])

    useEffect(() =>{
      setHeaderValues(calledApi[0]?.apiHeaders)
    },[calledApi])

    const handleRowDisable = (index) =>{
        let checkValue = [...headerValues];
        checkValue[index].isDisable = !checkValue[index].isDisable
        setHeaderValues(checkValue)
      }
      const handleInputChange = (event, index) =>{
        const name = event.target.name;
        const value = event.target.value
        let preValues = [...headerValues];
        preValues[index][name] = value 
        setHeaderValues(preValues)
      }
      const addHeaderValues = () =>{
        const isEmptyField = headerValues.some((val) => val.key === "" || val.value === "");
        if(!isEmptyField){
            setHeaderValues([...headerValues, { key:"",
            "value":"",
            "isDisable": true}])
          }
        else{
            alert("Fill all empty fields")
          }
        }
        const removeHeaderValue = (index) =>{
          setHeaderValues((prevState) =>
            prevState.filter((prevItem, i) => i !== index)
        );
        }
        
      return (
      <div>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Key</Th>
                <Th>Value</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
            {headerValues?.map((item, index) => {
                  return (
                    <Tr key={index} className={!item.isDisable && "disabledRow"}>
                    <Td><Checkbox isChecked={item.isDisable} onChange={(event) => handleRowDisable(index)}></Checkbox></Td>
                    <Td><Input size='md' isDisabled={!item.isDisable} placeholder={item.key} variant='outline' value={item.key} name="key" onChange={(event) => handleInputChange(event, index)} /></Td>
                    <Td><Input size='md' isDisabled={!item.isDisable} placeholder={item.value} variant='outline' value={item.value} name="value" onChange={(event) => handleInputChange(event, index)} /></Td>
                    <Td>
                      <CloseButton onClick={() => removeHeaderValue(index)} size='md' />
                    </Td>
                </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
        <Button className='addButton' onClick={addHeaderValues} colorScheme='teal' size='md'>
          <FaPlus />
        </Button>
      </div>
    )
  }
  
  export default HeadersData