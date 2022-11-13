import React from 'react'
import { Link } from 'react-router-dom'
import './FooterItem.css'
const data=[
    {
        title1:"About us",
        title2:"Help Center",
        title3:"Privacy Policy"
    },{

        title1:"Careers",
        title2:"Summons/Notices",
        title3:"Terms & conditions"
    }
    ,{

        title1:"Employer Home",
        title2:'Grievances',
        title3:"Fraud Alert"
    },{
        title1:"Sitemap",
        title2:"Report issue",
        title3:"Trust & Safety"
    }
]
function FooterItems() {
  return (
    <div>
    {data.map((item)=>(
    <div className='footerItem'>

            <Link _hover={{color:'blue.400'}}>{item.title1}</Link>
            <Link _hover={{color:'blue.400'}}>{item.title2}</Link>
            <Link _hover={{color:'blue.400'}}>{item.title3}</Link>

    </div>
    ))}
    </div>
  )
}

export default FooterItems