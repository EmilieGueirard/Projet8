import React from 'react';
import Button from '../Button/Button';
import image from '../../../assets/images/clavier-developpeur-web.webp'

const Quote = () => {
  return (
    <div className='quote'>
      <img className='quote__background' src={image} alt="Clavier ordinateur"/>
      <span className='quote__txt'>" Le code au service de <br className='quote__txt--break' />la créativité ! "</span>
      <Button text={`BESOIN D'IDÉES ?`}/>
    </div>
  );
};

export default Quote;