import React from 'react';
import Button from '../Button/Button';
import image300w from '../../../assets/images/clavier-developpeur-web-300w.webp';
import image1040w from '../../../assets/images/clavier-developpeur-web-1040w.webp';
import image1440w from '../../../assets/images/clavier-developpeur-web-1440w.webp';
import image1770w from '../../../assets/images/clavier-developpeur-web-1770w.webp';
import image2048w from '../../../assets/images/clavier-developpeur-web-2048w.webp';

const Quote = () => {
  return (
    <div className='quote'>
      <img 
        className='quote__background'
        src={image300w} 
        srcSet={`
          ${image300w} 300w,
          ${image1040w} 1040w,
          ${image1440w} 1440w,
          ${image1770w} 1770w,
          ${image2048w} 2048w
        `}
        sizes="(max-width: 300px) 300px, 
               (max-width: 1040px) 1040px, 
               (max-width: 1440px) 1440px, 
               (max-width: 1770px) 1770px, 
               2048px"
        loading="lazy"
        alt="Clavier ordinateur"
      />
      <div className='quote__overlay'></div>
      <span className='quote__txt'>" Le code au service de <br className='quote__txt--break' />la créativité ! "</span>
      <a href="#contact" tabIndex="-1">
        <Button text={`BESOIN D'IDÉES ?`} />
      </a>
    </div>
  );
};

export default Quote;
