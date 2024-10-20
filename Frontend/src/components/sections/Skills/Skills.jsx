import React from 'react';
import CategorySkill from '../../common/CategorySkill/CategorySkill';
import skillsList from '../../../datas/skillsList.json';
import image256w from '../../../assets/images/interface-developpement-web-ordi-256w.webp';
import image600w from '../../../assets/images/interface-developpement-web-ordi-600w.webp';
import image950w from '../../../assets/images/interface-developpement-web-ordi-950w.webp';
import image1200w from '../../../assets/images/interface-developpement-web-ordi-1200w.webp';

const Skills = () => {
  return (
    <section id='compétences' className='skills'>
      <h2 className='skills__header' tabIndex='0'>MES COMPÉTENCES</h2>
      <div className='skills__content'>
        <div className='skills__content--categories'>
          {skillsList.map((category, index) => (
            <CategorySkill key={index} category={category.category} skills={category.skills}/>
          ))}
        </div>
        <div className='skills__content--wrapper'>
          <img 
            className='skills__content--wrapper--image'
            src={image256w} 
            srcSet={`
              ${image256w} 256w,
              ${image600w} 600w,
              ${image950w} 950w,
              ${image1200w} 1200w
            `}
            sizes="(max-width: 256px) 256px,
                   (max-width: 600px) 600px,
                   (max-width: 950px) 950px,
                   1200px"
            alt="Interface graphique 3D d'un ordi"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
