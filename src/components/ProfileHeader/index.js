/* eslint-disable max-len */
import React, { Fragment } from 'react';
import {
  Col, Row,
} from 'reactstrap';
import './ProfileHeader.css';
import { ReactComponent as PinIcon } from '../../resources/placeholder.svg';
import myDP from '../../resources/dp.png';

function ProfileHeader() {
  const getHeaderDetails = () => {
    const currentRole = 'Mobile Developer';
    const currentLocation = 'Noida, UP, India';
    const descriptionText = 'Ever since I was introduced to the "turtle" in Logo, I have\nbeen fascinated by software.The fact that we can build\nwhat we can ideate, has been the motivating force in my\nstint as a developer. At present, I help teams design,\ndevelop and transition to a React Native based solution.';
    return (
      <Row>
        <Col xs="12">
          <h3 className="name-label">Tushar Mohan</h3>
          <Row>
            <Col xs="6" className="description-container">
              <p className="description-label">{currentRole}</p>
            </Col>
            <Col xs="6" className="location-container">
              <PinIcon height="20px" width="20px" />
              <p className="description-label">{currentLocation}</p>
            </Col>
          </Row>
          <p className="profile-description">{descriptionText}</p>
        </Col>

      </Row>
    );
  };

  return (
    <Fragment>
      <Col className="profile-header d-none d-sm-flex" sm="12" md={{ size: 6, offset: 3 }}>
        {getHeaderDetails()}
        <img className="headshot" src={myDP} alt="Tushar's Pic" />
      </Col>
      <Col className="profile-header-centered d-flex d-sm-none" sm="12">
        {getHeaderDetails()}
      </Col>
    </Fragment>
  );
}

export default ProfileHeader;
