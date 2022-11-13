import React from 'react'
import {Icon, List, ListIcon, ListItem} from '@chakra-ui/react'
import {MdCheckCircle} from 'react-icons/md'
import './listBox.css'

function LeftBar() {
  return (
    <div>
        <div className='imgBox'>

            <img src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg" alt="" />
            </div>
           
           <div className="ListBox">
           <div>
                <h1 style={{fontWeight:'bold',fontSize:'18px'}}>On Registering, you can</h1>
            </div>

            <div>
                <Icon as={MdCheckCircle}  color="green.500"/>
                Build your profile and <br/>let recruiters find you
            </div>
            <div>
            <Icon as={MdCheckCircle} color="green.500"/>
            Get job postings delivered <br/>        right to your email
            </div>
            <div>
            <Icon color="green.500" as={MdCheckCircle}/>
            Find a job and grow your career

            </div>
           </div>
        </div>
    

    
  )
}

export default LeftBar
