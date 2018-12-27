import React, { Component } from 'react';
import './style.css';
import ContentTopPanel from '../ContentTopPanel';
import ContentBottomPanel from '../ContentBottomPanel';
import { Container, Row, Col } from 'reactstrap';

class Content extends Component {
  render() {
    return (
      <Container className="Content" fluid>
        <Row>
          <Col xs="12">
            <ContentTopPanel />
            <ContentBottomPanel />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
