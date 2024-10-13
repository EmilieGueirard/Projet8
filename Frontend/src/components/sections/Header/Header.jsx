import React from 'react';
import NavBar from '../../common/NavBar/NavBar';
import Button from '../../common/Button/Button';
import background from '../../../assets/images/office-developpeur-web.png';

const Header = () => {
  return (
    <header className='header'>
      <img className='header__background' src={background} alt="Bureau de développeur web"/>
      <NavBar />
      <div className='header__content'>
        <p className='header__content--intro'>Hello, je suis</p>
        <h1 className='header__content--title'>
        DÉVELOPPEUSE WEB<br />& WEB DESIGNER</h1>
        <Button text="ME CONTACTER" />
      </div>
    </header>
  );
};

export default Header;