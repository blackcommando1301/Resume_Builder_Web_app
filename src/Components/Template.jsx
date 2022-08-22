import React from 'react'
import skin1 from "../images/skin1.svg"
import skin2 from "../images/skin2.svg"
import skin3 from "../images/skin3.svg"
import skin4 from "../images/skin4.svg"
import skin5 from "../images/skin5.svg"
import skin6 from "../images/skin6.svg"
import skin7 from "../images/skin7.svg"
import skin8 from "../images/skin8.svg"
import "./template.css"
const Template = () => {
  return (
    <div>
    
    <div className="All_templates d-flex flex-wrap" style={{backgroundColor:"cream"}}>

    <div className="resume my-5 img-template ">
      <img src={skin1} alt="temp" style={{height:"20rem",width:"30rem"}} ></img>
      <button  className="btn btn-secondary buttonSelect " style={{zIndex:"5"}} > use Template</button>
    </div>
    <div className="resume my-5 img-template">
      <img src={skin2} alt="temp" style={{height:"20rem",width:"30rem"}} ></img>
      <button  className="btn btn-secondary buttonSelect " > use Template</button>
    </div>
    <div className="resume my-5 img-template">
      <img src={skin3} alt="temp" style={{height:"20rem",width:"30rem"}} ></img>
      <button  className="btn btn-secondary buttonSelect" > use Template</button>
    </div>
    <div className="resume my-5 img-template">
      <img src={skin4} alt="temp" style={{height:"20rem",width:"30rem"}} ></img>
      <button  className="btn btn-secondary buttonSelect" > use Template</button>
    </div>
    <div className="resume my-5 img-template">
      <img src={skin5} alt="temp" style={{height:"20rem",width:"30rem"}} ></img>
      <button  className="btn btn-secondary buttonSelect" > use Template</button>
    </div>
    <div className="resume my-5 img-template">
      <img src={skin6} alt="temp" style={{height:"20rem",width:"30rem"}} ></img>
      <button  className="btn btn-secondary buttonSelect" > use Template</button>
   </div>
   <div className="resume my-5 img-template">
      <img src={skin7} alt="temp" style={{height:"20rem",width:"30rem"}} ></img>
      <button  className="btn btn-secondary buttonSelect" > use Template</button>
    </div>
    <div className="resume my-5 img-template">
      <img src={skin8} alt="temp" style={{height:"20rem",width:"30rem"}} ></img>
      <button  className="btn btn-secondary buttonSelect" > use Template</button>
    </div>
    

    </div>
  
 
 
</div>
  
  )
}

export default Template
