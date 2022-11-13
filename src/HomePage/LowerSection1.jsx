import { Icon } from '@chakra-ui/react'
import React from 'react'
import {BsPen} from 'react-icons/bs'
import {AiOutlineThunderbolt,AiOutlineFileExclamation} from 'react-icons/ai'
import './LowerSection1.css'
import { BiChevronRight } from 'react-icons/bi'
function LowerSection1() {
  return (
    <div className='lowerSection1'>

        <div className='lowerSection1--firstDiv'>
            <img src="https://static.naukimg.com/s/0/0/i/ff-services.png" alt="" />

        </div>
        <div className='lowerSection1--secondDiv'>
            <div>
            <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Accelerate your job search with premium services</h1>
            </div>
            <div>
                <p>Services to help you get hired, faster: from preparing your CV, getting recruiter<br/> attention, finding the right jobs, and more!</p>
            </div>
            <div className='lowerSection1--secondDiv__elements'>
                
                <div>
                    <Icon as={BsPen}></Icon>
                    <span>Resume Writing</span>
                    <Icon as={BiChevronRight}></Icon>
                   
                </div>
                <div>
                    <Icon as={AiOutlineThunderbolt}></Icon>
                    <span>Priority Applicant</span>
                    <Icon as={BiChevronRight}></Icon>
                </div>
                <div>
                    <Icon as={AiOutlineFileExclamation}></Icon>
                    <span>Resume Display</span>
                    <Icon as={BiChevronRight}></Icon>
                </div>
            </div>
            

        </div>
        <div className='lowerSection1--thirdDiv'>
            <div>
            <div className='fastforward'>
            <p>by Naukri Fastforward</p>
          </div>

            </div>
            <div style={{marginTop:"60px"}}>
            <button  style={{background:'#457eff',padding:"13px",borderRadius:'20px',width:"130px",color:'white'}} >Learn More </button>
            <div>
            <span style={{color:'grey',fontSize:"12px"}}>Includes paid services</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default LowerSection1