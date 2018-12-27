import React, { Component } from 'react';
import './style.css';
import { Col } from 'reactstrap';

class ContentTopPanelCard extends Component {
  render() {
    const isForProfilePicture = this.props.containsProfilePicture;
    return (
      <Col md={isForProfilePicture ? 2 : 10} className="ContentTopPanelCard" center>
        {isForProfilePicture ? (
          this.props.children
        ) : (
          <blockquote>
            <i>{this.props.children}</i>
          </blockquote>
        )}
      </Col>
    );
  }
}

export default ContentTopPanelCard;
