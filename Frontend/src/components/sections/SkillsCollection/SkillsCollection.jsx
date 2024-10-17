import React from 'react';
import SkillCollectionCard from '../../common/SkillCollectionCard/SkillCollectionCard';
import Button from '../../common/Button/Button';
import skillsCollectionData from '../../../datas/skillsCollectionList.json'

const SkillsCollection = () => {
  return (
    <section id='services' className='collection'>
      <h2 className='collection__title'>MA COLLECTION DE SKILLS</h2>
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
      <Button text="TRAVAILLONS ENSEMBLE !"/>
    </section>
  );
};

export default SkillsCollection;