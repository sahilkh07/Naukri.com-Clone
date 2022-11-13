
import { Link,useNavigate } from "react-router-dom";

import { useState,useContext } from "react";
import {AuthContext} from "../Context/AuthContextProvider"
import {AdminContext} from '../Context/AdminContext'

function LoginAdmin() {
  const {loginUser}=useContext(AdminContext)

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const {setIsAuth}=useContext(AuthContext)


    const handleSubmit=(e)=>{

        e.preventDefault()
        setLoading(true)
      
        
        fetch(`https://reqres.in/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email,password}),
        })
          .then((response) => response.json())
          .then((data) => {
            if(data.token){
              setLoading(false)
              loginUser(data.token)
              navigate('/admin-page')
            
              
            }
            
            // if(data.token){
            //   setLoading(false)
             
            //   navigate('/admin-page')
            
              
            // }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      
      }
  return (
    <div className="login-page">
        <h1 style={{fontSize:"20px",marginBottom:"30px",textAlign:"center"}}>Admin Page</h1>
      <form onSubmit={handleSubmit} className="form" data-testid="login-form">
        <div>
          <label>
          <p style={{fontSize:"14px",textAlign:'left'}}> Enter Email</p>
            <input name="email" value={email} onChange={(e)=>setEmail(e.target.value)} data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            <p style={{fontSize:"14px",textAlign:'left'}}> Enter Password</p>
           
            <input
              data-testid="password-input"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button disabled={loading} data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default LoginAdmin;
