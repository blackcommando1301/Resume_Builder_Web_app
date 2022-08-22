import React from 'react'
import aboutus from "../images/aboutus.jpg"

const About = () => {
  return (
    <div className='d-flex justify-content-center'>
    <div className='d-flex flex-column justify-content-center '>
      <p>Do you have any questions ? Connect with Us </p>
      <h1>contact@ResumeBuilder.com</h1>
      <p>We are here to answer your questions </p>
    </div>

    <div>
    <img src={aboutus} alt="aboutUS "></img>
    </div>
    </div>
  )
}

export default About
