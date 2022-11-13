import React from 'react'
import {BiChevronRight} from 'react-icons/bi'
import {Divider, Icon} from '@chakra-ui/react'
import './MiddleInfo.css'

const data=[
  {
    title:"Cognizant",
    img:'https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png',
    rating:'1.6K+ Interviews',
    title2:"Flipkart",
    img2:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/flipkart.png",
    rating2:"488 interviews"
  }
  ,{
    title:"Amazon",
    img:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon.png",
    rating:"1.7K+ Interviews",
    
    title2:"Byjus",
    img2:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/byjus.png",
    rating2:"816 Interviews"

  
  },
  ,{
    title:"TCS",
    img:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/tcs.png",
    rating:"2.5K+ Interviews",
    title2:'Accenture',
    img2:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture.png",
    rating2:"2K+ Interviews"
  },
  
   
  
  
  

    
  
]
const ques=[
  {
    title:"Software Engineer",
    q:"7.2K+ questions"
  }
  ,{

    title:"Buisness Analyst",
    q:"2.8K+ questions"
  },{

    title:"Consultant",
    q:"2.4K+ questions"
  },{
    title:"Financial Analyst",
    q:"894 questions"
  },{
    title:"Sales & Marketing",
    q:"991 questions"
  },{
    title:"Quality Engineer",
    q:"1.3K+ questions"
  }
]


function MiddleInfo() {
  return (
   <div>
      <div className='top123'>
        <div className='top123--firstCard'>
          <div className='ambitionBox'>
            <p>By AmbitionBox</p>
          </div>

        <h1 style={{fontSize:'27px',fontWeight:"bold"}}>Prepare for your<br/> next interview</h1>
        <img style={{height:'153px',marginTop:'80px'}} src="https://static.naukimg.com/s/0/0/i/ab-interview.png" alt="" />
        </div>
        
        <div className='top123--secondCard'>
          <h1 style={{fontSize:"20px",fontWeight:'bold',marginTop:"10px",marginBottom:"10px"}}>Interview Questions by company</h1>
         {data&&data.map((item)=>(
          <div className='top123--secondCard__items'>
  
            <div className='top123--secondCard__itemsFirst'>
           
              
              
              <div>
                <img style={{width:"44px"}} src={item.img?item.img:""} alt="" />
              </div>
              <div>
                <span style={{fontWeight:'600',fontSize:"18px"}}>{item.title?item.title:""}</span>
                
                <p>{item.rating?item.rating:""}</p>
                
              </div>
              
            </div>
           


            
            <div className='top123--secondCard__itemsSecond'>
              <div>
                <img style={{width:"44px"}} src={item.img2?item.img2:""} alt="" />
              </div>
              <div>
                <span style={{fontWeight:'600',fontSize:"18px"}}>{item.title2?item.title2:""}</span><Icon as={BiChevronRight}></Icon>
                
                <p>{item.rating2?item.rating2:""}</p>
              </div>

            </div>
            

          </div>
          
          ))}

        </div>

        <div className='top123--thirdCard'>
          <h1 style={{fontSize:'18px',fontWeight:"bold",marginTop:'10px',textAlign:'center'}}>Interview questions by role</h1>
          {ques.map((item)=>(
            
          <div style={{margin:"23px",textAlign:'center'}}>
          
            <span>{item.title}</span><span style={{color:"grey",fontSize:"12px"}}>({ item.q})</span>
            <Divider/>
          </div>
          
         ) )}
          

        </div>
       
      </div>




   </div>
  )
}

export default MiddleInfo