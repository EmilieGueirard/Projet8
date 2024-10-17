import React from 'react';

const ModalSucces = ({ closeModal }) => {
  return (
    <div className='modalsucces__content'>
      <p>Message envoyé avec succès !</p>
      <button className='modalsucces__button' onClick={closeModal}>OK</button>
    </div>
  );
};

export default ModalSucces;