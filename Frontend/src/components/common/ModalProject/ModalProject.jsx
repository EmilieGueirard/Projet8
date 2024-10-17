import React from 'react';
import { FaTimes, FaExclamationTriangle, FaLightbulb, FaLaptopCode, FaGithub } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';

const ModalProject = ({ closeModal, project }) => {
  return (
    <div className='modal'>
      
      <div className='modal__header'>
        <h3 className='modal__header--title'>{project.title}</h3>
        <FaTimes className='modal__header--close' onClick={closeModal} />
      </div>
      
      <div className='modal__content'>
        <div className='modal__content--images'>
          {project.images.map((image, index) => (
            <img className='modal__content--images--img' key={index} src={image} alt={`Projet ${project.title} ${index + 1}`} />
          ))}
        </div>

        <div className='modal__content--items'>
          <MdDescription className='modal__content--items--icon' />
          <ul>
          {project.description.text.map((text, index) => (
            <li className='modal__content--items--txt' key={index}>{text}</li>
          ))}
          </ul>
        </div>

        <div className='modal__content--items'>
          <FaExclamationTriangle className='modal__content--items--icon' />
          <div className='modal__content--items--container'>
          <p className='modal__content--items--subtitle'>{project.challenges.title}</p>
            <ul>
              {project.challenges.items.map((item, index) => (
                <li className='modal__content--items--txt' key={index}>{item.text}</li>
              ))}
            </ul>
          </div>
        </div>
        

        <div className='modal__content--items'>
          <FaLightbulb className='modal__content--items--icon'/>
          <div>
            <p className='modal__content--items--subtitle'>{project.solutions.title}</p>
            <ul>
              {project.solutions.items.map((item, index) => (
                <li className='modal__content--items--txt' key={index}>{item.text}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='modal__content--items'>
          <FaLaptopCode className='modal__content--items--icon' />
          <p className='modal__content--items--tech'>{project.technologies.text}</p>
        </div>

        <div className='modal__content--items'>
          <FaGithub className='modal__content--items--icon' />
          <a className='modal__content--items--link' href={project.link.url} target="_blank" rel="noopener noreferrer">
            {project.link.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
