import React from 'react';
import Form from '../../common/Form/Form';

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <div className='contact__header'>
      <h2 className='contact__header--title'>CONTACT</h2>
      <p className='contact__header--subtitle'>Restons connectés !</p>
      <p className='contact__header--txt'>Discutons de votre projet ou simplement de code et de design, je suis toujours partante !</p>
      </div>
      <div className='contact__content'>
        <Form />
      </div>
    </section>
  );
};

export default Contact;