import React from 'react';
import { FaGithub } from 'react-icons/fa'; 

const Github = ({ className = ''}) => {
  return (
    <a className={`github ${className}`} href='https://github.com/EmilieGueirard' target='_blank' rel='noopener noreferrer' title='Voir mon GitHub' aria-label='Voir mon profil GitHub'>
    <FaGithub className='github__icon' /></a>
  );
};

export default Github;
