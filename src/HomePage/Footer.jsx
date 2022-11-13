import { Icon } from '@chakra-ui/react'
import React from 'react'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillFacebook,AiFillTwitterSquare,AiFillLinkedin} from 'react-icons/ai'
import './Foooter.css'
import FooterItems from './FooterItems'
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
function Footer() {
  return (
    <div className='footer444'>

        <div  className='footer444--firstBox'>
            <div>
                <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="" />
                
            </div>
            <div >
                <p style={{color:'grey'}}>Connect With Us</p>

                <div style={{display:'flex',gap:"4px"}}>
            <div  >
                <Icon as={FaInstagramSquare}></Icon>
            </div>            
            
                <div>
                    <Icon as={AiFillFacebook}></Icon>

                </div>
                <div>
                    <Icon as={AiFillTwitterSquare}></Icon>
                </div>
                <div>
                    <Icon as={AiFillLinkedin}></Icon>
                </div>
            
            </div>
            </div>
            
        </div>

      <div>
        <div style={{display:'flex',margin:"0px 20px",alignItems:'space-between'}}  className='footer444--secondBox'>
            
          <FooterItems/>
           
            </div>

        
       
        </div>
    
    
        <div className='footer444--thirdBox'>
            <div className='footer444--thirdBox__item'>
            <div>
                <div>
                    <p>Appply on the go</p>
                </div>
                <div>
                    <p style={{fontSize:"12px",color:'gray',marginBottom:"10px"}}>Get Real Time job updates on our app</p>
                    
                </div>
            </div>
            <div style={{display:'flex',gap:"10px"}}>
            <div>
                <img src="https://static.naukimg.com/s/0/0/i/new-homepage/android-app.png" alt="" />
            </div>
                <div>
                    <img src="https://static.naukimg.com/s/0/0/i/new-homepage/ios-app.png" alt="" />
                    </div>            
            </div>
            </div>

        </div>
    </div>
  )
}

export default Footer