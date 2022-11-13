import { Icon } from '@chakra-ui/react'
import React from 'react'
import './trendingsmallCard.css'
import {BiChevronRight} from 'react-icons/bi'

import SearchBar from './SearchBar'

let obj =[

    {
        name:'Remote',
        logo:'https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg'
    },

    {
        name:"MNC",
        logo:"https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg"
    },
    {
        name:"Marketing",
        logo:"https://static.naukimg.com/s/0/0/i/trending-naukri/marketing.svg"
    },
    {
        name:'Analytics',
        logo:'https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg'
    },
    {
        name:'Project Mangement',
        logo:'https://static.naukimg.com/s/0/0/i/trending-naukri/project-management.svg'
    },{
        name:"HR",
        logo:"https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg"
    },{
        name:"Supply Chain",
        logo:"https://static.naukimg.com/s/0/0/i/trending-naukri/supplychain.svg"
    },{
        name:'Temp WFH',
        logo:"https://static.naukimg.com/s/0/0/i/trending-naukri/temporary-wfh.svg"
    },
    {
        name:"Data Science",
        logo:'https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg'
    },{
        name:'Sales',
        logo:'https://static.naukimg.com/s/0/0/i/trending-naukri/sales.svg'
    },{
        name:'Fresher',
        logo:"https://static.naukimg.com/s/0/0/i/trending-naukri/freshers.svg"
    }

]

function SmallCards() {
  return (
    <div className='naukri-trending-container' style={{marginTop:'20px'}}>
        
         {obj.map((item)=>(
            <div  className='ntc__chips-row'>
            
             <div style={{display:'flex', width:"140px",justifyContent:'center',gap:"10px",alignItems:'center'}} >
                <div>
                <img  style={{height:'30px'}} src={item.logo}></img>
                
                </div>
                <div>
                    <p>{item.name}</p>
                </div>
                <Icon as={BiChevronRight}></Icon>
                </div>
                </div>
        
            ))}
    
        
           
       

    </div>
  )
}

export default SmallCards