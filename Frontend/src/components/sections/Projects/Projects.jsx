import React, { useState } from 'react';
import Modal from 'react-modal';
import Quote from '../../common/Quote/Quote';
import ProjectCard from '../../common/ProjectCard/ProjectCard';
import projectsList from '../../../datas/projectsList.json';
import ProjectsSlideShow from '../../common/ProjectsSlideshow/ProjectsSlideshow';
import ModalProject from '../../common/ModalProject/ModalProject'

Modal.setAppElement('#root');

const Projects = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  return (
    <section className='projects'>
      <h2 className='projects__title'>MES PROJETS</h2>
      <ProjectsSlideShow />

      <div className='projects__cards'>
        {projectsList.map((project) => (
          <ProjectCard 
            key={project.id}
            id={project.id}
            title={project.title}
            technologies={project.technologies}
            image={project.image}
            difficulty={project.difficulty}
            onClick={openModal}
          />
        ))}
      </div>

      <Modal className="projects__modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Détails du projet"
        overlayClassName='projects__modal--overlay'
        ariaHideApp={false}
      >
        <ModalProject closeModal={closeModal} />
      </Modal>
    
      <div className='projects__quote'>
        <Quote />
      </div>

      
    </section>
  );
};

export default Projects;
