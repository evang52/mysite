import React from 'react'
import { Button } from './Button';
import '../App.css';
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
    <h1>Get Outside!</h1>
    <p>it's nice out. probably</p>
    <div className='hero-btns'>
        <Button className='btns' buttonStyle= 'btn--outline' buttonSizze= 'btn--large'>
            Get Started 
        </Button>
        <Button className='btns' buttonStyle= 'btn--primary' buttonSizze= 'btn--large'>
            Watch Trailer  <i className='far-fa-play-circle' /> 
        </Button>
    </div>

    </div>
  )
}

export default HeroSection