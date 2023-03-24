import React from 'react'
import About from './About'
import FormList from './FormList'
import './home.css'

const Home = () => {
  return (
    <>
       <div className="home">
         <div className="aboutSection">
           <div className="container ">
            <About/>
           </div>
         </div>
         <div className="container">
            <FormList />
         </div>
       </div>
    </>
  )
}

export default Home
