import React from 'react';
import Github from '../../common/Github/Github'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__icon'>
        <Github className='footer__icon--github'/>
        <Github className='footer__icon--github'/>
      </div>
      <p className='footer__txt'>&copy; 2024 Emilie GUEIRARD | Tous droits réservés</p>
    </footer>
  );
};

export default Footer;