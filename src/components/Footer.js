import React from 'react'
import * as FA from 'react-icons/fa/'
import '../assets/styles/style.css'

function Footer() {
  return (
    <div className='footer'>
        <FA.FaFacebookSquare size={45}/> 
        <FA.FaTwitterSquare size={45}/>
        <FA.FaInstagramSquare size={45}/>
        <FA.FaGithubSquare size={45}/>
      
    </div>
  )
}

export default Footer