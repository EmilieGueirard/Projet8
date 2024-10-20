import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import Github from '../../common/Github/Github'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__icons'>
        <Github className='footer__icons--github'/>
        <a href="mailto:emilie.gueirard@live.fr" className='footer__icons--mail' title='Envoyer un email' aria-label='Envoyer un email' tabIndex='0'>
                  <FaEnvelope />
              </a>
      </div>
      <p className='footer__txt'>&copy; 2024 Emilie GUEIRARD | Tous droits réservés</p>
    </footer>
  );
};

export default Footer;