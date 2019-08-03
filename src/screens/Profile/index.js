/* eslint-disable no-undef */
import React from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';
import './Profile.css';
import TopBar from '../../components/TopBar';
import ProfileHeader from '../../components/ProfileHeader';
import SocialIcons from '../../components/SocialIcons';
import SkillCard from '../../components/SkillCard';
import ReactNativeImage from '../../resources/react@2x.png';
import JavascripImage from '../../resources/javascript-1@2x.png';
import ReduxImage from '../../resources/redux-1@2x.png';
import Swift from '../../resources/swift-15@2x.png';
import JestImage from '../../resources/jest-0@2x.png';
import ObjectiveCImage from '../../resources/apple-black@2x.png';

const skills = [
  { icon: ReactNativeImage, title: 'React Native' },
  { icon: JavascripImage, title: 'Javascript' },
  { icon: ReduxImage, title: 'Redux' },
  { icon: Swift, title: 'Swift' },
  { icon: JestImage, title: 'Jest' },
  { icon: ObjectiveCImage, title: 'Objective-C' },
];

function Profile() {
  return (
    <Container fluid>
      <Row className="topbar">
        <TopBar />
        <ProfileHeader />
        <SocialIcons />
        <Col sm="12" md={{ size: 6, offset: 3 }} className="skills-bar d-none d-sm-flex">
          <Row>
            <Col sm="12" className=" d-none d-sm-flex">
              <h4>Skills</h4>
            </Col>
            <Col sm="12" className="d-none d-sm-flex">
              {
                skills.map(
                  ({ icon, title }) => (<SkillCard icon={icon} title={title} />)
                )
              }
            </Col>
          </Row>
        </Col>
        <Col sm="12" md={{ size: 6, offset: 3 }} className="skills-bar-centered d-flex d-sm-none">
          <p className="message-text">Know more by visiting the links above.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
