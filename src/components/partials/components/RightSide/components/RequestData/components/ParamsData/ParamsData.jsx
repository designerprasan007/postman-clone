import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  Checkbox
} from '@chakra-ui/react'
import { useState } from 'react'

import {getParams} from '../../../../../../../../services/auth/helpers'
const ParamsData = ({calledApi}) => {
  const params = calledApi[0]?.text ? getParams(calledApi[0]?.text) : "";
  const [paramsValue, setParamsValue] = useState(params)

  const handleRowDisable = (event) =>{
      const tr = event.target.parentNode.parentNode.parentNode
      const td = event.target.parentNode.parentNode.parentNode.childNodes;
      if(tr.hasAttribute("style")){
        tr.removeAttribute("style")
        for(let i= 0; i < td.length; i++){
          td[i].childNodes.disabled = false
      }
      }
      else{
        tr.style.cssText = `
        background-color: grey;`;
        for(let i= 0; i < td.length; i++){
            td[i].childNodes.disabled = true
        }
      }
    }
    const handleParamsChange = (val, key, value) =>{
      // const newparams = {...paramsValue};
      // console.log(newparams)
      // newparams[index] = val;
      setParamsValue({ ...paramsValue, value: val });
      console.log(paramsValue)

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
            </Tr>
          </Thead>
          <Tbody>
          {
            Object.entries(params).map(([key, value],  index) => {
              return(
                <Tr key={key}>
                  <Td><Checkbox defaultChecked onChange={handleRowDisable}></Checkbox></Td>
                  <Td>
                    <Input onChange={(e) => handleParamsChange(e.target.value, key)} placeholder='small size' size='sm' value={paramsValue.key ? paramsValue.key : key} />
                  </Td>
                  <Td>
                    <Input placeholder='small size' onChange={(e) => handleParamsChange(e.target.value, value)} size='sm' value={paramsValue.value ? paramsValue.value : value} />
                  </Td>
                </Tr>
              )  
            })
          }
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ParamsData