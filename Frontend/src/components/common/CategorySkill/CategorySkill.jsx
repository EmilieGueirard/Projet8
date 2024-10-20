import React from 'react';
import IconSkill from '../IconSkill/IconSkill';

const CategorySkill = ({ category, skills }) => {
  return (
    <div className='category'>
      <h3 className='category__title' tabIndex='0'>{category.toUpperCase()}</h3>
      <div className='category__skills'>
        {skills.map((skill, index) => (
          <IconSkill 
            key={index} 
            icon={skill.icon} 
            title={skill.title} />
        ))}
      </div>
    </div>
  );
};

export default CategorySkill;