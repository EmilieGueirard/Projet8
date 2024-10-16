import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProjectCard = ({ id, title, technologies, image, difficulty, onClick }) => {
  return (
    <div className='project' onClick={onClick} id={`project-${id}`}>
      {/* Image du projet */}
      <img src={image} alt={`Page d'accueil du projet ${title}`} className='project__img' />
      
      {/* Contenu caché, affiché au survol */}
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
