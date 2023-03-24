import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../assets/banner/Hand holding bulb 3D.png'

const About = () => {
  return (
   <>
      <div className="about d_flex">

         <div className="left">
            <h1 className="title">Hackathon Submission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laboriosam neque quidem rerum voluptatum numquam modi delectus cupiditate nulla, tenetur labore repellendus necessitatibus nemo excepturi dolor beatae blanditiis soluta accusantium!</p>            
             <Link to="/newform" className="btn">Upload Submission</Link>
            
         </div>

         <div className="right">
            <div className="bannerImg">
                <img src={bannerImg} alt="" />
            </div>
         </div>
      </div>
   </>
  )
}

export default About
