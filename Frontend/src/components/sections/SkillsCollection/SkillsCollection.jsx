import React from 'react';
import SkillCollectionCard from '../../common/SkillCollectionCard/SkillCollectionCard';
import Button from '../../common/Button/Button';
import skillsCollectionData from '../../../datas/skillsCollectionList.json'

const SkillsCollection = () => {
  return (
    <section id='services' className='collection'>
      <h2 className='collection__title' tabIndex='0'>MA COLLECTION DE SKILLS</h2>
      <div className='collection__cards'>
        {skillsCollectionData.map((skill, index) => (
          <SkillCollectionCard 
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
      <p className='collection__txt'>Besoin d’un coup de main pour donner vie à vos idées ?</p>
      <a href='#contact' tabIndex="-1">
        <Button text="TRAVAILLONS ENSEMBLE !" />
      </a>
    </section>
  );
};

export default SkillsCollection;