import axios from 'axios'
import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    useToast
  } from '@chakra-ui/react'
import './addjob.css'
  import { v4 as uuid } from 'uuid'
import { RiContactsBookLine } from 'react-icons/ri'
const addJob=(data={})=>{
    return axios.post(`http://localhost:3004/job`,{
        
        companyName:data.Cname,
        logoPathV3:data.logo,
        title:data.title,
        id:data.id
    })
  
}
function JobAdd() {
    const unique_id = uuid();
    const [loading,setLoading]=useState(false)
    const [formState,setFormState]=useState({
        Cname:"",
        logoPathV3:"",
        title:"",
        id:""
    })
    const handleInput=(e)=>{
        const {name,value}=e.target;
        setFormState({...formState,[name]:value,id:unique_id})
    }


    const toast = useToast()

    const handleSubmit=(e)=>{
        e.preventDefault()
        setLoading(true)

        setTimeout(()=>{

        toast({
          title: 'Success.',
          description: "Job Posted.",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
        setLoading(false)
      },1000)
     
      return  addJob(formState)
    }
    console.log(formState)
  return (
    <div className='addb122'>
<div className="cxy--123">
<FormControl>
  <FormLabel>Company Name</FormLabel>
  <Input name="Cname"  onChange={handleInput} value={formState.Cname} type='text' />
  <FormLabel>Logo</FormLabel>
  <Input type='url'name='logoPathV3' onChange={handleInput} value={formState.logoPathV3}></Input>
  <FormLabel>Title</FormLabel>
  <Input type='text' name='title' onChange={handleInput} value={formState.title}></Input>
  <Button disabled={loading} onClick={handleSubmit}>Submit</Button>

</FormControl>

</div>


    </div>
  )
}

export default JobAdd