/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card,
} from 'reactstrap';
import './SkillCard.css';

const customSizedTechTitles = ['React Native', 'Redux'];

const SkillCard = ({ icon, title = 'Dart' }) => {
  return (
    <Card className="skill-card-container">
      <img
        className={customSizedTechTitles.includes(title) ? 'skill-image-holder-2' : 'skill-image-holder-1'}
        src={icon}
        alt={title}
      />
      <p className="skill-label">{title}</p>
    </Card>
  );
};

export default SkillCard;
