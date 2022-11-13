import { Divider, Icon,Button} from '@chakra-ui/react'
import React, { useEffect, useState,useContext } from 'react'
import {BsFillStarFill,BsArrowRightShort} from "react-icons/bs"
import {RiShoppingBagLine} from "react-icons/ri"
import{ImCoinDollar} from 'react-icons/im'
import { v4 as uuid } from 'uuid'
import './SearchPage.css'
import Footer from '../HomePage/Footer'
import {CiLocationOn} from 'react-icons/ci'
const datg =[

  {
    title:"Work Mode",
    op1:"Work From Home",
    op2:"Hynbrid",
    op3:"Permanent Remote",
    op4:"Temp.WFH due to covid"
  },{
    title:"Department",
    op1:"IT & Information Security",
    op2:"Other",
    op3:"Engineering",
    op4:"UX degisn & Artictecture"
  },{
    title:"Salary",
    op1:"0-3 Lakhs",
    op2:"3-6 Lakhs",
    op3:"6-10 Lakhs",
    op4:"10-15 Lakhs"
  },{
    title:"Company type",
    op1:"Foreign MNC",
    op2:"Indian MNC",
    op3:"Startup",
    op4:"Corprate"

  },{
    title:'Role Category',
    op1:"Software Development",
    op2:"Other",
    op3:"IT Support",
    op4:"IT Infrasture Service"
  },{
    title:"Top Companies",
    op1:"Accenture",
    op2:"IBM India",
    op3:"Infosys Technology",
    op4:"QuEST Global"
  }
]
import axios from 'axios'
const getData=(params={})=>(
  axios.get(`http://localhost:3004/job`,{
    params:{
      _page:params.page,
      _limit:params.limit,
      q:params.q
    }
  })
)
const getCount=(params={})=>(
  axios.get(`http://localhost:3004/job`,{
    params:{
      q:params.q
    }
  })
)

import './SearchPage.css'
import { NewContext } from '../Context/Context'
import { BiArrowBack, BiArrowFromLeft, BiArrowToRight } from 'react-icons/bi'
import Navbar from '../HomePage/Navbar'
import { useSearchParams } from 'react-router-dom'
function SearchPage() {
  const col={
    background:"#4a90e2",
    padding:" 0px 4px",
    color:'white',
    borderRadius:"4px"
  }
  const col2={
    background:"#4a90e2",
    
  }
  const getCurrentPageFromUrl=(value)=>{
    
    value=Number(value)
    if(typeof value!=="number" ||value<= 0){
      value=1
    }
    if(!value){
      value=1
    }
    return value
  }
  const unique_id = uuid();
  const [data,setData]=useState([])
  const [count,setCount]=useState([])
  const[searchParams,setSerachParams]=useSearchParams()
  const intialPage=getCurrentPageFromUrl(searchParams.get("page"))
  
  const [page,setPage]=useState(intialPage)

  const {query,setState}=useContext(NewContext)

  
  
  useEffect(()=>{
    getData({page,limit:10,q:query}).then((res)=>(
      setData(res.data)
    ))
  },[page])
useEffect(()=>{
  getCount({q:query}).then((res)=>(
    setCount(res.data)

  ))
},[])

useEffect(()=>{
  setSerachParams({page,query})
},[page,query])

  //



  return (
    <div>
      <div style={{marginBottom:"70px"}}>
        <Navbar/>
      </div>
    <div style={{display:'flex',justifyContent:'center'}}>

<div style={{width:'200px',lineHeight:"1.8"}} >
  <div>
    <span style={{fontWeight:'bold'}}>All filters</span>
    <Divider/>
  </div>
{datg&&datg.map((item)=>(
  <div>
  <label style={{fontWeight:"bold"}}>{item.title}</label>
  <br />

  <input type="checkbox" na id="" /><span >{item.op1}</span>
  < br />

  <input type="checkbox"  /><span>{item.op2}</span>

  <br />
  <input type="checkbox" name="" id="" /><span>{item.op3}</span>
  <br />
  <input type="checkbox" /><span>{item.op4}</span>
  <br />
  <Divider/>
  </div>

))}

  

</div>

     


        <div style={{width:"700px",textAlign:"center"}}>
       
          Total Results {count.reduce((a,c)=>a+1,0)}
           <span> {query} jobs </span>
          <Divider/>
                {data&&data.map((item)=>(
                <div className='box--item3px'  key={Date.now()+item.jobId+item.groupId}>
                   
                        <h1>{item.title}</h1>

                   

                    <div style={{display:'flex',justifyContent:'center', gap:"40px",alignItems:'center'}}>
                        <div>

                  <span>{item.companyName} </span>
                  <Icon as={BsFillStarFill}></Icon>
                   
                  <span>{item.ambitionBoxData&&item.ambitionBoxData.AggregateRating}</span>
                  
                  <span style={{color:'blue'}}> ({item.ambitionBoxData&&item.ambitionBoxData.ReviewsCount})</span>
                  </div>
                  <div>
                    <img style={{width:'34px'}} src={item.logoPathV3} alt="" />
                  </div>
                      
                  </div>
                  <div style={{display:'flex',justifyContent:'center',gap:"40px"}}>
                  {item.placeholders&&item.placeholders.map((item)=>(
                         
                            <div key={Date.now()+Math.random()}>
                              {
                                
                              
}
                              
                           <span>
                           {item.type==='experience'?<Icon as={RiShoppingBagLine}/>:''}
                            {item.type==="experience"?item.label:''}
                            
                            
                           </span>
                           <span>

                            {item.type==="salary"?<Icon as={ImCoinDollar}/>:''}
                                 {item.type==="salary"?item.label:''}

                            
                           </span>
                           {item.type==='location'?<Icon as={CiLocationOn}/>:''}
                           {item.type==="location"?item.label:''}
                          
                          
                           <span>
                          
                           </span>
                           </div>
                  

                           
))}
</div>

<div style={{display:'flex',justifyContent:'center',justifyContent:'center',gap:"20px"}}>
  <div style={{background:item.footerPlaceholderColor}}>
    <span className='sapn123'>
    {item.footerPlaceholderLabel}
    </span>
  </div>
  <div>
     {item.isSaved?"saved":'Not saved'}
  </div>


</div>
                           

                           <Divider/>
                           




                </div>
           ))}
           <br />
           <div className='nextBut123'>
            
           <button  disabled={page===1}  onClick={()=>setPage(page-1)}><Icon as={BiArrowBack}/> Previous </button>
           <button style={page===1?col:{}} onClick={()=>setPage(1)}>1</button>
           <button  style={page===2?col:{}} onClick={()=>setPage(2)}>2</button>
           <button  style={page===3?col:{}} onClick={()=>setPage(3)}>3</button>
           <button  style={page===4?col:{}} onClick={()=>setPage(4)}>4</button>
           <button  style={page===5?col:{}} onClick={()=>setPage(5)}>5</button>
           <button  style={page===6?col:{}} onClick={()=>setPage(6)}>6</button>
           <button  style={page===7?col:{}} onClick={()=>setPage(7)}>7</button>
           <button  style={page===8?col:{}} onClick={()=>setPage(8)}>8</button>
           <button  style={page===9?col:{}} onClick={()=>setPage(9)}>9</button>
           <button  style={page===10?col:{}} onClick={()=>setPage(10)}>10</button>
           <button  onClick={()=>setPage(page+1)}> Next <Icon as={BsArrowRightShort}/></button>
           </div>
        </div>

       
        <div>

<div  style={{marginTop:"30px",padding:"10px 4px",textAlign:"center"}}>
<h1 style={{fontWeight:"bold",fontSize:"17px"}}>See 51 jobs in Featured Companies</h1>
  <div
  style={{display:"flex",gap:'20px',margin:"20px"}}>
    
    <img src='https://img.naukimg.com/fc_images/v2/3122282.gif'></img>
    <img src="https://img.naukimg.com/fc_images/v2/7053.gif" alt="" />

  </div>
  <div style={{display:'flex',gap:'20px',margin:"20px"}}>
    <img src="https://img.naukimg.com/fc_images/v2/217.gif" alt="" />
    <img src="https://img.naukimg.com/fc_images/v2/16987.gif" alt="" />


  </div>
  <div style={{display:"flex",gap:"20px",margin:"20px"}}>
    <img src="https://img.naukimg.com/fc_images/v2/16987.gif" alt="" />
    <img src="https://img.naukimg.com/fc_images/v2/100007.gif" alt="" />

  </div>
  <div style={{display:"flex",gap:"20px",margin:"20px"}}>
    <img src="https://img.naukimg.com/fc_images/v2/144993.gif" alt="" />
    <img src="https://img.naukimg.com/fc_images/v2/24468.gif" alt="" />
  </div>
</div>
</div>

       


    </div>
    <br />
    <Footer/>
    </div>
  )
}

export default SearchPage