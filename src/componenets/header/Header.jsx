import React from 'react'
import './header.css'
import logo from '../assets/AI Planet Logo.png'

const Header = () => {
  return (
    <div className="header">
        <div className="container ">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header
