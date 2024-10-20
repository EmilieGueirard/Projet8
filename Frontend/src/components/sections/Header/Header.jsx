/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import NavBar from '../../common/NavBar/NavBar';
import Button from '../../common/Button/Button';
import background300w from '../../../assets/images/office-developpeur-web-300w.webp';
import background1040w from '../../../assets/images/office-developpeur-web-1040w.webp';
import background1440w from '../../../assets/images/office-developpeur-web-1440w.webp';
import background1770w from '../../../assets/images/office-developpeur-web-1770w.webp';
import background2048w from '../../../assets/images/office-developpeur-web-2048w.webp';

const Header = () => {

  // Text display and typing speed settings
  const fullText = 'DÉVELOPPEUSE WEB\n& WEB DESIGNER';
  const typingSpeed = 70; 
  const deletingSpeed = 35; 
  const pauseBeforeStart = 2000; 
  const pauseAfterComplete = 4000; 

  // State management for typing effect
  const [displayedText, setDisplayedText] = useState(''); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [index, setIndex] = useState(0); 
  const [isPaused, setIsPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); 

  useEffect(() => {
    if (isPaused) return;

    if (!hasStarted) {
      setIsPaused(true);  
      setTimeout(() => {
        setIsPaused(false);
        setHasStarted(true);  
      }, pauseBeforeStart);
      return;
    }

    const handleTyping = () => {
      // Typing effect
      !isDeleting && index < fullText.length && (
        setDisplayedText((prev) => prev + (fullText[index] === '\n' ? '<br/>' : fullText[index])),
        setIndex((prev) => prev + 1)
      );
      // Pause and start deleting
      !isDeleting && index === fullText.length && (
        setIsPaused(true),
        setTimeout(() => setIsPaused(false), pauseAfterComplete), 
        setTimeout(() => setIsDeleting(true), pauseAfterComplete) 
      );
      // Deleting effect
      isDeleting && index > 0 && (
        displayedText.slice(-5) === '<br/>'
          ? (setDisplayedText((prev) => prev.slice(0, -5)), setIndex((prev) => prev - 1))
          : (setDisplayedText((prev) => prev.slice(0, -1)), setIndex((prev) => prev - 1))
      );
      // Reset after deleting
      isDeleting && index === 0 && (
        setIsDeleting(false),
        setHasStarted(false) 
      );
    };

    // Timer to control typing or deleting speed
    const typingTimer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    // Clean up timer
    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, isPaused, index, hasStarted]);

  return (
    <header className='header'>
      <img 
        className='header__background'
        src={background300w}
        srcSet={`
          ${background300w} 300w,
          ${background1040w} 1040w,
          ${background1440w} 1440w,
          ${background1770w} 1770w,
          ${background2048w} 2048w
        `}
        sizes="(max-width: 300px) 300px, 
               (max-width: 1040px) 1040px, 
               (max-width: 1440px) 1440px, 
               (max-width: 1770px) 1770px, 
               2048px"
        alt="Bureau de développeur web"
      />
      <NavBar />
      <div className='header__content'>
        <p className='header__content--intro'>Hello, je suis</p>
        <h1 className='header__content--title'>
          <span dangerouslySetInnerHTML={{ __html: displayedText }} />
        </h1>
        <a href="#contact" tabIndex='-1'>
          <Button text="ME CONTACTER" />
        </a>
      </div>
    </header>
  );
};

export default Header;
