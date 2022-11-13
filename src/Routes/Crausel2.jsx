import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Data from  '../Featured.json'
import React from "react";
import Slider from "react-slick";
import { Divider } from "@chakra-ui/react";
import './Crausel2.css'
import { ImTerminal } from "react-icons/im";

export default function SimpleSlider() {

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


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    variableHeight:false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };



  return (
    <div style={{width:'1100px',marginLeft:"90px"}}> 
    <Slider {...settings}>
       
       {Data&&Data.map((item)=>(
        <div className="box143">
            <div className="box143--container">
            <Divider/>
              <div>
                <div style={{display:'flex',justifyContent:'center'}}>
                  
                <img style={{width:"90px"}} src={item.pic} alt="" />
                <br />
                </div>
                <div>
                    {item.title}
                    <div className="greyLetter">
                        <span>{item.rating}</span><span> |</span>  <span>{item.totalRate}</span>
                    </div>
                    <div>
                        {item.description}
                    </div>
                </div>
                <br />
                <div >
                   <span style={{padding:'10px',background:'#457eff',borderRadius:'10px',color:"white"}}>View Jobs</span> 
                </div>
                <br />

               </div>
               <Divider/>

            </div>

        </div>
       ))}     
    </Slider>

    </div>
  );
}