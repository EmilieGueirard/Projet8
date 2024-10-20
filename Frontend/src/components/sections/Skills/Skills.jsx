import React from 'react';
import CategorySkill from '../../common/CategorySkill/CategorySkill';
import skillsList from '../../../datas/skillsList.json';
import image from '../../../assets/images/interface-developpement-web-ordi.webp';

const Skills = () => {
  return (
    <section id='compétences' className='skills'>
      <h2 className='skills__header'>MES COMPÉTENCES</h2>
      <div className='skills__content'>
        <div className='skills__content--categories'>
          {skillsList.map((category, index) => (
            <CategorySkill key={index} category={category.category} skills={category.skills} />
          ))}
        </div>
        <div className='skills__content--wrapper'>
          <img className='skills__content--wrapper--image' src={image} alt="Interface graphique 3D d'un ordi" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Skills;