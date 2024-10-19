import React from 'react';
import Button from '../Button/Button';
import image from '../../../assets/images/clavier-developpeur-web.webp'

const Quote = () => {
  return (
    <div className='quote'>
      <img className='quote__background' src={image} alt="Clavier ordinateur"/>
      <div className='quote__overlay'></div>
      <span className='quote__txt'>" Le code au service de <br className='quote__txt--break' />la créativité ! "</span>
      <a href="#contact">
          <Button text={`BESOIN D'IDÉES ?`} />
      </a>
    </div>
  );
};

export default Quote;