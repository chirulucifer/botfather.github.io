import React, { Component } from 'react';
import './style.css';
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class ContentBottomPanel extends Component {
  render() {
    return (
      <Row className="ContentBottomPanel">
        <Col xs="3" className="Showcase">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt="Card image cap"
            />
            <CardBody>
              <a href="https://github.com/Botfather/WebService-Consumer-JS" target="new">
                <CardTitle>WebService-Consumer-JS</CardTitle>
              </a>
              <CardSubtitle className="TechTag">Javascript</CardSubtitle>
              <CardText>Basic service written in Javascript to consume end points.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3" className="Showcase">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt="Card image cap"
            />
            <CardBody>
              <a href="https://github.com/Botfather/CoreServices" target="new">
                <CardTitle>CoreServices</CardTitle>
              </a>
              <CardSubtitle className="TechTag">Objective-C, iOS</CardSubtitle>
              <CardText>Services boilerplate for my iOS applications.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3" className="Showcase">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://images.unsplash.com/photo-1513672494107-cd9d848a383e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt="Card image cap"
            />
            <CardBody>
              <a href="https://github.com/Botfather/ImageSuite" target="new">
                <CardTitle>ImageSuite</CardTitle>
              </a>
              <CardSubtitle className="TechTag">Swift, iOS</CardSubtitle>
              <CardText>Image downloading and caching utility for iOS applications.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3" className="Showcase">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://images.unsplash.com/photo-1535598745644-bc7913bb1a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
              alt="Card image cap"
            />
            <CardBody>
              <a
                href="https://medium.com/@botfather/ios-scrolling-heads-in-swift-b31a7449fcac"
                target="new"
              >
                <CardTitle>Scrolling Heads in iOS</CardTitle>
              </a>
              <CardSubtitle className="TechTag">iOS, How-To</CardSubtitle>
              <CardText>
                Demonstrates how to create scrolling heads to show group chat participants.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ContentBottomPanel;
