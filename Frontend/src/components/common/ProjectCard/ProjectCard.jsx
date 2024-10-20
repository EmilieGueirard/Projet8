import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProjectCard = ({ id, title, technologies, image, difficulty, onClick }) => {
  return (
    <div className='project' 
      onClick={onClick} 
      id={`project-${id}`} 
      tabIndex={0} 
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick(id);
        }
      }}
      aria-label="Ouvrir le projet">

      {/* Image Project */}
      <img 
        src={image.small} 
        srcSet={`${image.small} 335w, ${image.medium} 670w, ${image.large} 1080w`}
        sizes="(max-width: 335px) 335px, (max-width: 670px) 670px, 1080px"
        loading="lazy"
        alt={`Page du projet ${title}`} 
        className='project__img' />
      
      {/* Overlay */}
      <div className='project__overlay'>
        <div className='project__header'>
          <h3 className='project__header--title'>{title.toUpperCase()}</h3>  
        </div>
        <div className='project__content'>
          <p className='project__content--technologies'>{technologies}</p>
          <div className='project__content--difficulty'>
            {[...Array(difficulty)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
