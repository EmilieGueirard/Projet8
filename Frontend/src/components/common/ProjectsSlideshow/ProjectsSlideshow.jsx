import React, { useState } from 'react';
import projectsList from '../../../datas/projectsList.json';

const ProjectsSlideShow = () => {
  // Trier les projets par difficulté décroissante et prendre les trois premiers
  const sortedProjects = [...projectsList].sort((a, b) => b.difficulty - a.difficulty);
  const bestProjects = sortedProjects.slice(0, 3);

  // State pour suivre l'index du slide actuel
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = bestProjects.length;

  // Aller directement à un slide spécifique
  const goToSlide = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className='carousel'>
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
            >
              <img
                src={project.image}
                alt={`Projet ${project.title}`}
                className='carousel__slide--img'
              />
            </div>
          );
        })}
      </div>

      {/* Indicateurs de Slide (Points) */}
      <div className='carousel__footer'>
        {bestProjects.map((_, index) => (
          <span
            key={index}
            className={`carousel__footer--indicator ${index === currentIndex ? 'carousel__footer--indicator--active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSlideShow;
