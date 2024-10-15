import React from 'react';
import Button from '../Button/Button';

const Form = () => {
  return (
    <form className='form'>
      <div className='form__left'>
        <label className='form__label' htmlFor='name'>Nom - Prénom</label>
        <input className='form__input'type='text' id='name' name='user_name' placeholder='Entrez votre nom et prénom' required />
        
        <label className='form__label' htmlFor='email'>Adresse e-mail</label>
        <input className='form__input'type='email' id='email' name='user_email' placeholder='exemple@exemple.com' required />
      </div>

      <div className='form__right'>
        <label className='form__label' htmlFor='message'>Message</label>
        <textarea className='form__textarea'id='message' name='message' placeholder='Entrez votre message' required />
      </div>

      <div className='form__button'>
      <Button text="ENVOYEZ MON MESSAGE" type="submit" />
      </div>
    </form>
  );
};

export default Form;