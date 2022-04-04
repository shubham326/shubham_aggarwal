import React from 'react';
import './header.css';
import Cta from './cta';
import me from '../../media/assets/me.png'
import Headerscroll from './headerscroll';

const Header = () => {
  return (
    /*<div>Header</div>*/

    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Shuham Aggarwal</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <Headerscroll />

        <div className='me'>
          <img src={me} alt="me" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>
        
      </div>
    </header>
  );
};

export default Header;
