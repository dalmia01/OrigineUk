import React from 'react';
import {Link} from 'react-router-dom';

export const Header = props => {
  return (
    <header className='header'>
      <div className='logo'><Link to='/'>Origine Uk</Link></div>
      <nav>
        <span><Link to='/'>Home</Link></span>
        <span><Link to='/about'>about</Link></span>
        <span><Link to='/content'>content</Link></span>
        <span><Link to='/services'>services</Link></span>
        <span><Link to='/contact'>contact</Link></span>
      </nav>
    </header>
  )
}