import React, { Component } from 'react';
import './style.css';
import { Container, Row, Col } from 'reactstrap';

class FootView extends Component {
  render() {
    return (
      <Container className="FootView" fluid>
        <Row>
          <Col xs="12" className="text-center">
            Hosted with &hearts; on Github | Images from <b>Unsplash</b>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FootView;
