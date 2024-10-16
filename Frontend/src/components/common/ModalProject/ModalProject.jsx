import React from 'react';

const ModalProject = ({ closeModal }) => {
  return (
    <div>
      <h3>Modale</h3>
      <p>Voici le contenu de ma modale.</p>
      <button onClick={closeModal}>Fermer la Modale</button>
    </div>
  );
};

export default ModalProject;
