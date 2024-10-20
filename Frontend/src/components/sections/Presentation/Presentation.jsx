import React from 'react';
import image from '../../../assets/images/interface-developpement-web-ordi-mobile.webp';

const Presentation = () => {
  return (
    <section id='présentation' className='presentation'>
      <header className='presentation__header'>
        <img className='presentation__header--img' src={image} alt="Interface d'ordinateur et mobile" loading="lazy"/>
      </header>
      <main className='presentation__content'>
        <h2 className='presentation__content--title' tabIndex='0'>PASSIONNÉE<br /><span>curieuse & autodidacte</span></h2>
        <p className='presentation__content--txt'>Amoureuse du Web Design depuis toujours, j’avais envie de passer à l’étape supérieure : comprendre comment mes idées pouvaient vraiment prendre vie !</p>
        <p className='presentation__content--txt'>Alors, je me suis lancée dans le <span>Développement Web</span>.</p>
        <p className='presentation__content--txt'>Aujourd’hui, je mixe code et créativité, toujours à la recherche de nouvelles techniques à explorer, avec une bonne dose de curiosité et de fun !</p>
      </main>
    </section>
  );
};

export default Presentation;