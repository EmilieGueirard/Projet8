import React from 'react';
import * as Icons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si'; 

const IconSkill = ({ icon, title }) => {
  const IconComponent = Icons[icon] || SiIcons[icon]; 

  return (
    <div className='skill'>
      {IconComponent && <IconComponent className='skill__icon' />}
      <p className='skill__title'>{title}</p>
    </div>
  );
};

export default IconSkill;
