import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Data from '../Company.json'
import Slider from "react-slick";
import { Divider } from '@chakra-ui/react';
function Crausel3() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "gray",borderRadius:"20px" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "gray",borderRadius:"20px" }}
            onClick={onClick}
          />
        );
      }

    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

      };
  return (
    <div style={{width:"1100px",marginLeft:'100px',textAlign:'center'}}>


<Slider {...settings}>
    {Data&&Data.map((item)=>(
        <div className='box999'>
          <div className='box999--container'>

          <div>
                <div style={{display:'flex',justifyContent:'center'}}>
                  
                <img style={{width:"30px"}} src={item.logo} alt="" />
                <br />
                </div>
                <div>
                    {item.title}
                    <div className="greyLetter">
                        <span>{item.rating}</span><span> |</span>  <span>{item.totalRating}</span>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',gap:"4px"}}>
                    <div >
                       <p style={{fontSize:"12px"}}>{item.box1}</p>
                    </div>
                    <br />
                    <div>
                      <p style={{fontSize:"12px"}}>{item.box2}</p>
                    </div>
                    </div>
                </div>
                <br />
                <div >
                  
                </div>
                <br />

               </div>
               <Divider/>

            </div>
            
            
          </div>
            
        


    ))}
          
        </Slider>
    </div>
  )
}

export default Crausel3