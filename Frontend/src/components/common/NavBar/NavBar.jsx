import React from 'react';
import Github from '../../common/Github/Github';
import Burger from '../../common/Burger/Burger';

const Navbar = () => {
  const menuItems = [
    { href: '#presentation', label: 'Présentation' },
    { href: '#services', label: 'Mes Services' },
    { href: '#projects', label: 'Mes Projets' },
    { href: '#skills', label: 'Mes Compétences' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <Github className='navbar__left--icon'/>
        <span className='navbar__left--title'>Emilie Gueirard</span>
      </div>
      <nav className='navbar__right'>
        <Burger menuItems={menuItems} />
      </nav>
    </div>
  );
};

export default Navbar;
