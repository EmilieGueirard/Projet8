import React from 'react';
import * as Icons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

const SkillCollectionCard = ({ icon, title, description}) => {
  const IconComponent = Icons[icon] || MdIcons[icon];

  return (
    <div className='card' tabIndex='0'  >
      {IconComponent && <IconComponent className='card__icon' />}
      <h3 className='card__title'>{title}</h3>
      <p className='card__txt'>{description}</p>
    </div>
  );
};

export default SkillCollectionCard;
