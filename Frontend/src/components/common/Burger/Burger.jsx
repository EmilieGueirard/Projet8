import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Github from '../../common/Github/Github';

const Burger = ({ menuItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Bloquer/débloquer le scroll du body
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className='burger-container'>
      {/* Icône burger ou croix */}
      <div className='burger'>
        {menuOpen ? (
          <FaTimes className='burger__icon fatimes' onClick={toggleMenu} />
        ) : (
          <FaBars className='burger__icon' onClick={toggleMenu} />
        )}
      </div>

      {/* Menu et Overlay (affiché uniquement quand menuOpen est vrai) */}
      {menuOpen && (
        <div className='burger__wrapper'>
          <div className='burger__overlay' onClick={toggleMenu}></div>
          <div className='burger__menu'>
            <ul className='burger__menu--items'>
              {menuItems.map((item, index) => (
                <li className='burger__menu--item' key={index}>
                  <a className='burger__menu--link' href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <Github className='burger__menu--github' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Burger;
