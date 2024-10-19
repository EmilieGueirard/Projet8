/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import NavBar from '../../common/NavBar/NavBar';
import Button from '../../common/Button/Button';
import background from '../../../assets/images/office-developpeur-web.webp';

const Header = () => {

  const fullText = 'DÉVELOPPEUSE WEB\n& WEB DESIGNER';
  const typingSpeed = 70; 
  const deletingSpeed = 35; 
  const pauseBeforeStart = 2000; 
  const pauseAfterComplete = 4000; 

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
      !isDeleting && index < fullText.length && (
        setDisplayedText((prev) => prev + (fullText[index] === '\n' ? '<br/>' : fullText[index])),
        setIndex((prev) => prev + 1)
      );

      !isDeleting && index === fullText.length && (
        setIsPaused(true),
        setTimeout(() => setIsPaused(false), pauseAfterComplete), 
        setTimeout(() => setIsDeleting(true), pauseAfterComplete) 
      );

      isDeleting && index > 0 && (
        displayedText.slice(-5) === '<br/>'
          ? (setDisplayedText((prev) => prev.slice(0, -5)), setIndex((prev) => prev - 1))
          : (setDisplayedText((prev) => prev.slice(0, -1)), setIndex((prev) => prev - 1))
      );

      isDeleting && index === 0 && (
        setIsDeleting(false),
        setHasStarted(false) 
      );
    };

    const typingTimer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, isPaused, index, hasStarted]);


  return (
    <header className='header'>
      <img className='header__background' src={background} alt="Bureau de développeur web"/>
      <NavBar />
      <div className='header__content'>
        <p className='header__content--intro'>Hello, je suis</p>
        <h1 className='header__content--title'>
        <span dangerouslySetInnerHTML={{ __html: displayedText }} />
        </h1>
        <a href="#contact">
          <Button text="ME CONTACTER" />
        </a>
      </div>
    </header>
  );
};

export default Header;