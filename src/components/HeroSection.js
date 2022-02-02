import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>Ryan McCarthy</h1>
      <p>Web Developer</p>
      <div className='hero-btns'>
        <td onClick={()=> window.open("https://gmail.com", "_blank")}>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            CONTACT ME
          </Button>
        </td>
        <td onClick={()=> window.open("https://github.com/ryanxmccarthy", "_blank")}>       
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'           
          >
            VIEW MY GITHUB <i className='fab fa-github' />
          </Button>
        </td>
      </div>
    </div>
  );
}

export default Hero;