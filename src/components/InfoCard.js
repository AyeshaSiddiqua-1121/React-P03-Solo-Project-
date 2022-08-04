import React from 'react'
import '../assets/styles/style.css'
import * as FA from 'react-icons/fa/'
import About from './About'
import Interest from './Interest'
import Footer from './Footer'
function InfoCard() {
  return (
    <div>
        <div className='card-body'>
            <img src={require('../assets/images/doc1.jpg')}></img>
            <h2 className='card--user-name'>Laura Smith</h2>
            <h3 className='card--description'>Front-end Developer</h3>
            <p className='card--email'>laurasmith@com</p>
            <div className='card--buttons-row'>
              <button><FA.FaGofore /> Email</button>
              <button><FA.FaInvision color='white'/> LinkedIn</button>
            </div>
            <About/>
            <Interest/>
            <Footer/>
        </div>
    </div>
  )
}

export default InfoCard