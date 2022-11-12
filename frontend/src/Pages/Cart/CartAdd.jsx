import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
  } from '@chakra-ui/react'

const CartAdd = () => {
  return (
    <Box>
        <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>

        <Th>Selected Items(s)</Th>
        <Th isNumeric>Unit Price</Th>
        <Th isNumeric>Quantity</Th>
        <Th isNumeric>Subtotal</Th>
        <Th isNumeric>Operation</Th>

      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>image</Td>
        <Td>$100</Td>
        <Td isNumeric>5</Td>
        <Td isNumeric>5</Td>
        <Td isNumeric>5</Td>

      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </Box>
  )
}

export default CartAdd