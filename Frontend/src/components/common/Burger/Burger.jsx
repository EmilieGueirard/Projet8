import React, { useState } from 'react';
import { FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';
import Github from '../../common/Github/Github';

const Burger = ({ menuItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // ON/OFF scroll body
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className='burger'>

      {/* Icon Burger : Open Menu */}
      {!menuOpen && (
        <div className='burger__open'>
          <FaBars className='burger__open--icon' onClick={toggleMenu} />
        </div>
      )}

      {/* Icon FaTimes : Close Menu */}
      {menuOpen && (
        <div className='burger__close'>
          <FaTimes className='burger__close--icon' onClick={toggleMenu} />
        </div>
      )}

      {/* Menu & Overlay */}
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

            <div className='burger__menu--icons'>
              <Github className='burger__menu--icons--github' />
              <a href="mailto:emilie.gueirard@live.fr" className='burger__menu--icons--mail'>
                  <FaEnvelope />
              </a>
            </div>

          </div>

        </div>
      )}
      
    </div>
  );
};

export default Burger;
