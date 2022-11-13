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
    Button,
  } from '@chakra-ui/react'

  import React, { useEffect, useState } from 'react'

  
  function Users() {
    const [users,setUsers]=useState(null)
    let loginData = JSON.parse(localStorage.getItem("dataSignup"));

    
    const handleRemove=(i)=>{
        loginData.splice(i,1)
        setUsers(i+1)
        return localStorage.setItem('dataSignup',JSON.stringify(loginData))
    }

    useEffect(()=>{

    },[users])

    

    return (
      <div>
        <TableContainer>
  <Table variant='simple'>

    <Thead>
      <Tr>
        <Th>UserName</Th>
        <Th>Email</Th>
        <Th isNumeric>Mobile Number</Th>
        <Th>Remove</Th>
       
      </Tr>
    </Thead>
    <Tbody>
        {loginData.map((item,i)=>(
      <Tr>
        <Td>{item.name}</Td>
        <Td>{item.email}</Td>
        <Td isNumeric>{item.mobile}</Td>
        <Button colorScheme="red" onClick={()=>handleRemove(i)}>Remove</Button>
      </Tr>
      ))}
      
    </Tbody>
    
  </Table>
</TableContainer>

      </div>
    )
  }
  
  export default Users