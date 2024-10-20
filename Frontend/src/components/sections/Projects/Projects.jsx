import React, { useState } from 'react';
import Modal from 'react-modal';
import Quote from '../../common/Quote/Quote';
import ProjectCard from '../../common/ProjectCard/ProjectCard';
import projectsList from '../../../datas/projectsList.json';
import modalProjectsList from '../../../datas/modalProjectsList.json';
import ProjectsSlideShow from '../../common/ProjectsSlideshow/ProjectsSlideshow';
import ModalProject from '../../common/ModalProject/ModalProject';

Modal.setAppElement('#root');

const Projects = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Open modal
  const openModal = (projectId) => {
    const project = modalProjectsList.find((item) => item.id === projectId);
    if (project) {
      setSelectedProject(project);
      setModalIsOpen(true);
    }
  };

  // Close Modal
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };
  
  return (
    <section id='projets' className='projects'>

      <h2 className='projects__title' tabIndex='0'>MES PROJETS</h2>
      
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
            onClick={() => openModal(project.id)}
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
        {selectedProject && (
          <ModalProject closeModal={closeModal} project={selectedProject} />
        )}
      </Modal>
    
      <div className='projects__quote'>
        <Quote />
      </div>
      
    </section>
  );
};

export default Projects;
