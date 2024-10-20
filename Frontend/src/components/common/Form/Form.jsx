import React, { useState } from 'react';
import Button from '../Button/Button';
import Modal from 'react-modal';
import ModalSucces from '../ModalSucces/ModalSucces';
import emailjs from 'emailjs-com';

Modal.setAppElement('#root');

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [modalIsOpen, setModalIsOpen] = useState(false); 

  // HandleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset errors
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  // HandleSubmit
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche la soumission par défaut
    let formIsValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    // Field validation
    if (!formData.name.trim()) {
      newErrors.name = 'Veuillez renseigner votre nom et prénom.';
      formIsValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Veuillez renseigner une adresse e-mail.";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Veuillez renseigner une adresse e-mail valide.";
      formIsValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Veuillez entrer votre message.';
      formIsValid = false;
    }

    setErrors(newErrors);

    // If form valid, display succes modal
    if (formIsValid) {
      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,   
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        formData,                                   
        process.env.REACT_APP_EMAILJS_API_KEY 
      ).then((result) => {
        console.log('Email envoyé avec succès :', result.text);
        setModalIsOpen(true); 

        // Reset form values
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }).catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
      });
    }
  };

  // Close Modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit} noValidate>
        <div className='form__left'>
          <label className='form__label' htmlFor='name'>Nom - Prénom</label>
          <input
            className='form__input'
            type='text'
            id='name'
            name='name'
            placeholder='Entrez votre nom et prénom'
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className='form__error'>{errors.name}</p>}
          
          <label className='form__label' htmlFor='email'>Adresse e-mail</label>
          <input
            className='form__input'
            type='email'
            id='email'
            name='email'
            placeholder='exemple@exemple.com'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className='form__error'>{errors.email}</p>}
        </div>

        <div className='form__right'>
          <label className='form__label' htmlFor='message'>Message</label>
          <textarea
            className='form__textarea'
            id='message'
            name='message'
            placeholder='Entrez votre message'
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className='form__error'>{errors.message}</p>}
        </div>
        
        <div className='form__button'>
          <Button text="ENVOYEZ MON MESSAGE" type="submit" />
        </div>
      </form>

      {/* Modal Succes */}
      <Modal className='modalsucces'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation de l'envoi"
        overlayClassName='modalsucces__overlay'
        ariaHideApp={false}
      >
        <ModalSucces closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default Form;

