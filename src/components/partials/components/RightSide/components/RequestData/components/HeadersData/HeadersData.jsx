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
  
  const HeadersData = ({calledApi}) => {
    const handleRowDisable = (event) =>{
        const tr = event.target.parentNode.parentNode.parentNode
        const td = event.target.parentNode.parentNode.parentNode.childNodes;
        if(tr.hasAttribute("style")){
          tr.removeAttribute("style")
          for(var i= 0; i < td.length; i++){
            td[i].childNodes.disabled = false
        }
        }
        else{
          tr.style.cssText = `
          background-color: grey;`;
          for(var i= 0; i < td.length; i++){
              td[i].childNodes.disabled = true
          }
        }
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
                <Tr>
                    <Td><Checkbox defaultChecked onChange={handleRowDisable}></Checkbox></Td>
                    <Td>content-type</Td>
                    <Td>application/json</Td>

                </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    )
  }
  
  export default HeadersData