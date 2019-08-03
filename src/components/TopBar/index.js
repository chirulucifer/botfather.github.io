/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';
import {
  Col, Button,
} from 'reactstrap';
import './TopBar.css';

function TopBar() {
  const contactMeAction = () => { window.open('mailto:mohantushar@outlook.com?subject=Hey Tushar, let\'s connect!'); };
  return (
    <Col className="header-container" sm="12" md={{ size: 6, offset: 3 }}>
      <span className="logo-initial">TM</span>
      <Button
        color="primary"
        size="sm"
        className="get-in-touch-button"
        onClick={contactMeAction}
      >
        Get in touch
      </Button>
    </Col>
  );
}

export default TopBar;
