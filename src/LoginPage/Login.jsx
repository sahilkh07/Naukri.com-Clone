import { Icon } from '@chakra-ui/react'
import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { useContext,useState } from 'react'
import {AuthContext} from '../Context/AuthContextProvider'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    useToast,
    color,
    background,
    Image
  } from '@chakra-ui/react'
  import { Navigate } from 'react-router-dom'

import './LoginPage.css'
import Navbar from '../HomePage/Navbar'
function Login() {
  let Login = {};
  let {isAuth,setIsAuth}= useContext(AuthContext);
  const [user, setUser] = useState({
       email: '', password: ''
    })
    const[load,setLoad]=useState(false)
    const toast =useToast()

    let nam,val
    const handleInputChange = (e) => {
      e.preventDefault()
      console.log(e.target.value)
  
      nam = e.target.name;
      val = e.target.value
      setUser({ ...user, [nam]: val })
    }
    const handleClick=()=>{
      setLoad(true)
      setTimeout(()=>{
      let flag = false;
      let loginData = JSON.parse(localStorage.getItem("dataSignup"));
      for(let i=0; i<loginData.length; i++){
          if(loginData[i].email==user.email && loginData[i].password==user.password){
                  flag = true;
                  let name = loginData[i].name
                  Login={
                      name,
                  };
                  localStorage.setItem("dataLogin",JSON.stringify(Login))
              }
          }
      if(flag){
          setLoad(false)
          setIsAuth(true)
          toast({
              title: 'Login Succesful.',
              
              status: 'success',
              duration: 4000,
              isClosable: true,
            })
      }else{
          setLoad(false)
          toast({
              title: 'Wrong Credentials.',
             
              position:'top',
              status:"error",
              duration: 4000,
              isClosable: true,
            })
      }
  },1000)
 

    }
    
    if(isAuth){
     return <Navigate to='/'/>
  }
    
  return (
    <div>
      <div><Navbar/></div>
    <div className='loginBox909'>


        <div>
        <div>
            <h1> New to Naukri?</h1>
       
        </div>
        <div>
            <div>
            <Icon color='blue.300' as={BiCheck}/>
            <span> One click apply using naukri profile .</span>
            </div>
            <div>
            <Icon color='blue.300' as={BiCheck}/>
            <span> Get relevant job recommendations.

            
            </span>
            </div>
            <div>
            <Icon color='blue.300' as={BiCheck}/>
            <span> Showcase profile to top companies and consultants.</span>
            </div>
            <div>
            <Icon color='blue.300' as={BiCheck}/>

            <span> Know application status on applied jobs.</span>
            </div>
            
            <div className='loginButton122'>
                <button>Register For Free</button>
            </div>
            <div style={{display:"flex",marginLeft:"223px",width:'181px'}}>
                <img src="https://static.naukimg.com/s/5/105/i/register.png" alt="" />
            </div>
        </div>

        </div>
        <div>
            <div>
                <div>Login</div>
            <FormControl >
      <FormLabel><span style={{fontSize:'12px'}}>Email ID / Username </span></FormLabel>
      <Input name='email' value={user.email} onChange={handleInputChange} type='email' />
      
    </FormControl>
            </div>

            <FormControl isInvalid={false}>
      <FormLabel><span style={{fontSize:'12px'}}>Password</span></FormLabel>
      <Input name='password' value={user.password} onChange={handleInputChange} type='email' />
     
    </FormControl>
    <div className='logButt123'>
            <Button colorScheme="blue" onClick={handleClick}>Login</Button>
        </div>
    
        <div>
            <p style={{fontSize:'14px',color:"#4a90e2",marginTop:"10px",textAlign:'center'}}>Use OTP to Login</p>
        </div>
        <hr />
        <div style={{textAlign:'center'}}>
            or
        </div>
       
        <div style={{display:"flex",borderRadius:"20px",alignItems:'center',gap:"10px",border:'1px solid grey',padding:"4px",justifyContent:'center',margin:"10px"}}>
            <img style={{height:"20px"}} src="https://static.naukimg.com/s/7/104/assets/images/google-icon.9273ac87.svg" alt="" />
            <span>Sign In Google</span>
        </div>
       
        </div>
       
    </div>
    </div>
  )
}

export default Login