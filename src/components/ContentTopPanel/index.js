import React, { Component } from 'react';
import './style.css';
import ContentTopPanelCard from '../ContentTopPanelCard';
import TMPicture from './../../assets/images/tm.png';
import { Row } from 'reactstrap';

class ContentTopPanel extends Component {
  render() {
    return (
      <Row className="ContentTopPanel">
        <ContentTopPanelCard containsProfilePicture>
          <img src={TMPicture} alt="Avatar" width="200" height="200" />
        </ContentTopPanelCard>
        <ContentTopPanelCard>
          I am a music enthusiast, hobbyist drummer and I absolutely love technology! Ever since I
          was introduced to the 'turtle' in Logo, I have been fascinated by computer science which
          justifies my love for building products and services...
          <br />
        </ContentTopPanelCard>
      </Row>
    );
  }
}

export default ContentTopPanel;
