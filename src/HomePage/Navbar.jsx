import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  background,
  Button,useToast, Icon
  
} from '@chakra-ui/react'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import { NewContext } from '../Context/Context';
import{BiChevronDown} from "react-icons/bi"
import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'
import { AiOutlineSearch } from 'react-icons/ai';
function Navbar() {
  const [load,setLoad]=useState(false)
  const  toggleAuth=()=>{
    setLoad(true)
    setTimeout(()=>{
      toast({
        title: 'Log Out Succesful.',
        
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
   
  setIsAuth(!isAuth)

    },1000)
    
     
}
const handleChange=(e)=>{
  return setValz(e.target.value)
}
const handleSubmit=(e)=>{
e.preventDefault()
setState(valz)


}
const {state,setState}=useContext(NewContext)
const [valz,setValz]=useState('')
const toast = useToast()
  let {isAuth,setIsAuth}= useContext(AuthContext);
  let data = JSON.parse(localStorage.getItem("dataLogin"))
  return (
    <div className='mainNav' style={{display:'flex' ,width:'1900vh' ,position:'fixed' ,gap:'60px',maxWidth:'inherit',top:'0',padding:'9px 10px', background:'white',zIndex:'200' }}>
        <div>
          <Link to='/'>
          <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="" />
          </Link>
        </div>
       
        <div style={{marginLeft:"60px"}}>

          
          <Menu>
  <MenuButton
    // px={4}
    // py={2}
    transition='all 0.2s'
    
    borderWidth='0px'
    _hover={{ color: 'green.400' }}
    
   
  >
    
    Jobs<BiChevronDown />
    
  </MenuButton>
  <MenuList>

    <MenuItem >Payroll</MenuItem>
    <MenuItem>Hiring and OnBoarding</MenuItem>
    <MenuItem>HR Expert</MenuItem>
    <MenuDivider />
    <MenuItem>Employee Benifits</MenuItem>
    <MenuItem>Time Tools</MenuItem>
  </MenuList>
</Menu>

    </div>
        <div>
          <Menu>
        <MenuButton
    // px={4}
    // py={2}
    transition='all 0.2s'
    
    borderWidth='0px'
    _hover={{ color: 'green.400' }}
    
   
  >
    
    Companies<BiChevronDown />
    
  </MenuButton>
  <MenuList>

    <MenuItem >Become  a Partner</MenuItem>
    <MenuItem>Gusto Pro Dashboard</MenuItem>
    <MenuItem>Accountant Blopg</MenuItem>
    <MenuDivider />
    <MenuItem>Partner Community</MenuItem>
    <MenuItem>Professional Development</MenuItem>
  </MenuList>
</Menu>
          

        </div>

        <div>
        <Menu>
        <MenuButton
    // px={4}
    // py={2}
    transition='all 0.2s'
    
    borderWidth='0px'
    _hover={{ color: 'green.400' }}
    
   
  >
    
    Services<BiChevronDown />
    
  </MenuButton>
  <MenuList>

    <MenuItem >Starting a Buisness</MenuItem>
    <MenuItem>Need a new provider</MenuItem>
    <MenuItem>HR Expert</MenuItem>
    
  </MenuList>
</Menu>

          
        </div>
        <div style={{display:"flex",gap:"10px"}}>
        
        <div className='barSearch'>
          <form onSubmit={handleSubmit}>

        <input value={valz} onChange={handleChange} type="text" /><Icon as={AiOutlineSearch}></Icon><br />
        </form>
        </div>

        
        {isAuth?<><div style={{marginRight:"10px",marginLeft:"60px"}}>{data.name}</div><div>
          <Button isLoading={load} onClick={toggleAuth}>Sign Out </Button>
        </div></>: 
        <>
        <div style={{marginLeft:"80px"}}>
          <button className='logButton'><NavLink to='/login'>Log in</NavLink> </button>
        </div>
        <div>
          <button   className='signButton' ><NavLink to='/register'>Register</NavLink></button>
        </div>
        </>}

        </div>
       
        
    </div>
  )
}

export default Navbar