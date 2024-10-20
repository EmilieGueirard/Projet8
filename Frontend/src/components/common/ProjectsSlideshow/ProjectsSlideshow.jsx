import React, { useState, useRef } from 'react';
import projectsList from '../../../datas/projectsList.json';

const ProjectsSlideShow = () => {
  const sortedProjects = [...projectsList].sort((a, b) => b.difficulty - a.difficulty);
  const bestProjects = sortedProjects.slice(0, 3);

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = bestProjects.length;
  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Specific Slide
  const goToSlide = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  // Next Slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Previous Slide
  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      goToNextSlide();  
    }
    if (touchStartX.current - touchEndX.current < -50) {
      goToPreviousSlide();  
    }
  };

  return (
    <div 
      className='carousel' 
      onTouchStart={handleTouchStart} 
      onTouchMove={handleTouchMove} 
      onTouchEnd={handleTouchEnd}
    >
      <div className='carousel__content'>
        {bestProjects.map((project, index) => {
          const isActive = index === currentIndex;
          const isLeft = index === (currentIndex - 1 + totalSlides) % totalSlides;
          const isRight = index === (currentIndex + 1) % totalSlides;

          let positionClass = '';
          if (isActive) {
            positionClass = 'carousel__slide--active';
          } else if (isLeft) {
            positionClass = 'carousel__slide--left';
          } else if (isRight) {
            positionClass = 'carousel__slide--right';
          } else {
            positionClass = 'carousel__slide--hidden';
          }

          return (
            <div 
              key={index} 
              className={`carousel__slide ${positionClass}`} 
              onClick={!isActive ? () => goToSlide(index) : null}
              style={{ cursor: isActive ? 'default' : 'pointer' }}
              tabIndex={0}
            >
              <img
                src={project.image.small}
                srcSet={`${project.image.small} 335w, ${project.image.medium} 670w, ${project.image.large} 1080w`}
                sizes="(max-width: 335px) 335px, (max-width: 670px) 670px, 1080px"
                loading="lazy"
                alt={`Projet ${project.title}`}
                className='carousel__slide--img'
              />
            </div>
          );
        })}
      </div>

      {/* Indicators Slide */}
      <div className='carousel__footer'>
        {bestProjects.map((_, index) => (
          <button
            key={index}
            aria-label={`Voir le slide ${index + 1}`}
            className={`carousel__footer--indicator ${index === currentIndex ? 'carousel__footer--indicator--active' : ''}`}
            onClick={() => goToSlide(index)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                goToSlide(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSlideShow;



