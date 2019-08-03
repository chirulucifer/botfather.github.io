import React, { Fragment } from 'react';
import {
  Col,
} from 'reactstrap';
import './SocialIcons.css';
import { ReactComponent as LinkedinIcon } from '../../resources/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../resources/github-logo.svg';
import { ReactComponent as MediumIcon } from '../../resources/medium-size.svg';

function SocialIcons() {
  const socialBar = () => (
    <>
      <a href="https://www.linkedin.com/in/tushar-mohan" target="__blank">
        <LinkedinIcon className="social-icon" height="30px" width="30px" />
      </a>
      <a href="https://www.github.com/botfather" target="__blank">
        <GithubIcon className="social-icon" height="30px" width="30px" />
      </a>
      <a href="https://medium.com/@botfather" target="__blank">
        <MediumIcon className="social-icon" height="30px" width="30px" />
      </a>
    </>
  );
  return (
    <Fragment>
      <Col sm="12" md={{ size: 6, offset: 3 }} className="social-bar d-none d-sm-flex">
        {socialBar()}
      </Col>
      <Col sm="12" md={{ size: 6, offset: 3 }} className="social-bar-centered d-flex d-sm-none">
        {socialBar()}
      </Col>
    </Fragment>
  );
}

export default SocialIcons;
