import React from 'react'
import LeftBar from './LeftBar'
import './newaccount.css'
import { useState, useRef, useEffect } from 'react'
import { Button, Icon } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {GiSchoolBag} from 'react-icons/gi'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Tooltip,
  useToast,
  Image

} from '@chakra-ui/react'

import{TfiBag} from 'react-icons/tfi'

function Register() {

    let Data = JSON.parse(localStorage.getItem("dataSignup"))||[];
    const [erroi, setErr] = useState(false)
    const [focus, setFocus] = useState(false)
    const [input, setInput] = useState('')

    
  
  
  
    const toast = useToast()
  
    const [user, setUser] = useState({
      name: '', email: '', password: '',mobile:""
    })
    let nam, val
    const handleInputChange = (e) => {
      e.preventDefault()
      console.log(e.target.value)
  
      nam = e.target.name;
      val = e.target.value
      setUser({ ...user, [nam]: val })
    }
    const handleClick = () => {
      
      setFocus(true)
      setTimeout(()=>{
        
      if (user.name === "" || user.email === "" || user.password === "") {
        setErr(true)
        setFocus(false)
      
      } else {
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
        Data.push(user);
        localStorage.setItem("dataSignup",JSON.stringify(Data))
        setFocus(false)
    
      }
      
    },1000)
    
  
  
    }
  
  return (
    <div>
      <div><div className='nw' style={{display:'flex' ,width:'300vh' ,position:'fixed' ,gap:'740px',maxWidth:'inherit',top:'0',padding:'12px 12px', background:'white',zIndex:'200' }}><Image src='https://static.naukimg.com/s/4/100/i/naukri_Logo.png'/>
      <p style={{fontSize:'13px'}}>Already Registered?<Link to='/login'><span style={{color:" #457eff"}}> Login Here</span></Link></p>
      </div></div>
    <div style={{display:'flex',gap:"40px"}}>
        <LeftBar/>

        <div className='formCont'>
        <FormControl isInvalid={erroi}>

        <FormLabel>Full Name</FormLabel>
      <Input type='text' name="name" value={user.name} onChange={handleInputChange} />
      {!erroi ? (
        <FormHelperText>
      
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      <FormLabel>Email</FormLabel>
      <Input name='email' type='email' value={user.email} onChange={handleInputChange} />
      {!erroi? (
        <FormHelperText>
      We'll send you relevant jobs in your mail
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
       <FormLabel>Password</FormLabel>
      <Input name='password' type='password' value={user.password} onChange={handleInputChange} />
      {!erroi ? (
        <FormHelperText>
            Minimum 6 characters required
      
        </FormHelperText>
      ) : (
        <FormErrorMessage>Password is required.</FormErrorMessage>
      )}

<FormLabel>Mobile Number</FormLabel>
      <Input name='mobile' type='number' value={user.mobile} onChange={handleInputChange} />
      {!erroi ? (
        <FormHelperText>
            Recruiters will call you on this number
      
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}


    </FormControl>
        <br />
    <div>
        <p>Work Status</p>
        <div className='workStatus111'>
            <div>
            <div>
                <Icon as={TfiBag}/>
            </div>
            <div>
                <p style={{fontWeight:'bold'}}>I'm Experinced</p>
                <p style={{fontSize:"13px",color:"gray"}}>I have work experience (excluding <br/> internships)</p>
            </div>
            
            </div>
            <div>

            <div>
                <Icon as={GiSchoolBag}/>
            </div>
            <div>
                <p style={{fontWeight:"bold"}}>I'm a Fresher</p>
                <p style={{fontSize:"13px",color:'gray'}}>I am a student/ Haven't worked  <br/> after graduation </p>
            </div>

            </div>

            
       
            
            
        </div>
            <br />
            <p>Resume</p>
        <div style={{display:'flex',alignItems:'center',gap:'20px',border:"1px solid gray",borderRadius:"20px"}}>
            <div style={{background:"orange",color:'white',fontWeight:"bold",width:'160px',padding:"4px 0px",textAlign:'center',borderRadius:"20px"}}>
                <p>Upload Resume</p>
            </div>
            <div>
                <p style={{fontSize:'12px',color:"gray"}}>
DOC, DOCx, PDF, RTF | Max: 2 MB</p>
            </div>
            
        </div>
        
        <p style={{fontSize:'13px',marginTop:'8px'}}>Recruiters give first preference to candidates who have a resume</p>
      
    </div>
    <br />

    <p style={{fontSize:'12px'}}>By clicking Register, you agree to the <span style={{color:'blue'}}>Terms and Conditions </span> & <span style={{color:'blue'}}> Privacy Policy </span>of Naukri.com</p>
    <br />
        <div style={{borderRadius:"20px"}}>
    <Button onClick={handleClick} colorScheme="blue">Register Now</Button>
    </div>
        </div>
        <div style={{marginTop:"160px"}}>
            OR |  <span>Continue With</span>

            <div style={{display:"flex",borderRadius:"20px",alignItems:'center',gap:"10px",border:'1px solid grey',padding:"4px",justifyContent:'center',margin:"10px"}}>
            <img style={{height:"20px"}} src="https://static.naukimg.com/s/7/104/assets/images/google-icon.9273ac87.svg" alt="" />
            <span>Google</span>
        </div>
       
        </div>
       
            
    </div>
    </div>
  )
}

export default Register