// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from '../TopComp.json'
import './Crausel.css'

import React from "react";
import Slider from "react-slick";
import { Divider } from "@chakra-ui/react";
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
export default function SimpleSlider() {

  
      
      


  var settings = {
    
    infinite: false,
    speed: 500,
    
    slidesToShow: 5,
   
    variableWidth: true,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  
  return (
    <div style={{width:'1100px',marginLeft:"90px"}}>
    <Slider {...settings}>
      
        {Data&&Data.map((item)=>(
           <div className="box333">
            <div>
                <Divider/>
               <p style={{fontWeight:"600",fontSize:'18px',marginTop:"6px"}}>{item.title}</p> 
               <p style={{color:'gray',fontSize:"14px"}}>{item.total}</p>
               <div className="box333--imgbox">
               <img src={item.pic1} alt="" /> 
               <img src={item.pic2} alt="" /> 
               <img src={item.pic3} alt="" />
               <img src={item.pic4} alt="" />
               </div>
                
            </div>
           </div>
        ))}
      
    </Slider>
    </div>
  );
}