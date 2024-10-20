import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide based on scrolling
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page up with a smooth effect
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll ${isVisible ? 'show' : ''}`} 
      onClick={scrollToTop} 
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          scrollToTop();
        }
      }}
      aria-label="Remonter en haut de la page">
      <FaArrowUp className='scroll__icon' />
    </div>
  );
};

export default ScrollToTop;
