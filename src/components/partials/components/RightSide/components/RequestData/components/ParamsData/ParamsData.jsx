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

import {getParams} from '../../../../../../../../services/auth/helpers'
const ParamsData = ({calledApi}) => {
    const params = calledApi[0]?.text ? getParams(calledApi[0]?.text) : ""
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
            Object.entries(params).map(([key, value]) => {
              return(
                <Tr key={key}>
                  <Td><Checkbox></Checkbox></Td>
                  <Td>
                    <Input placeholder='small size' size='sm' value={key} />
                  </Td>
                  <Td>
                    <Input placeholder='small size' size='sm' value={value} />
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