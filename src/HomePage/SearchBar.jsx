
import React, { useState } from 'react'
import { Icon } from '@chakra-ui/react'
import {BiSearch} from 'react-icons/bi'
import {useContext} from 'react'
import { NewContext } from '../Context/Context'
import { Link, Navigate } from 'react-router-dom'
import UpperHead from './UpperHead'
import './SearchBar.css'
import SmallCards from './SmallCards'
import SimpleSlider from '../Routes/Crausel'
import Crausel2 from '../Routes/Crausel2'
import Crausel3 from '../Routes/Crausel3'
import MiddleInfo from './MiddleInfo'
import LowerSection1 from './LowerSection1'
import Footer from './Footer'
import Navbar from './Navbar'

function SearchBar() {
  const {query,setState}=useContext(NewContext)
  const [us,setUs]=useState(false)
  
//   const handleSubmit=()=>
// (
//     <Navigate to='/jobs'></Navigate>
  
// )
//   
const handleChange=(e)=>(
    setState(e.target.value)
  )
 
 
  return (
    <div className='search'>
      <Navbar/>
      <UpperHead/>

        <div className='searchInputs'>
          
                <input placeholder='Enter skills / designations / companies' type="text" value={query} onChange={handleChange} />
                
             <div className='but'>
             <Link to='/jobs'>
             <button  style={{background:'#457eff',padding:"12px",borderRadius:'20px',color:'white'}} >Search </button>
             </Link>
             </div>
          

        </div>
       <SmallCards/>
       <br />
       <h1 style={{fontSize:'25px',fontWeight:'700',textAlign:'center'}}>Top MNC companies hiring right now</h1>
        <br />
        <SimpleSlider/>
        <br />
        <h1 style={{fontSize:'25px',fontWeight:'700',textAlign:'center'}}>Featured companies actively hiring</h1>
        <br />
    <Crausel2/>
    <br />
    <br />
    <h1 style={{fontSize:'25px',fontWeight:'700',textAlign:'center'}}>Featured companies actively hiring</h1>
    <br />
    <Crausel3/>
     <br />
     <MiddleInfo/>
     <br />
     <br />
     <LowerSection1/>
     <br />
     <Footer/>
    </div>
  )
}
export default SearchBar