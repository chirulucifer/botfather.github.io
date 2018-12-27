import React, { Component } from 'react';
import './style.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import LinkedIn from './../../assets/svg/linkedin-logo.svg';
import Github from './../../assets/svg/github-logo.svg';
import Medium from './../../assets/svg/medium-logo.svg';

import BrandText from '../BrandText';
import MenuOption from '../MenuOption';

class TopNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className="TopNav" light expand="md">
        <NavbarBrand href="/">
          <BrandText />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <MenuOption optionLink={'https://in.linkedin.com/in/tushar-mohan'}>
              <img src={LinkedIn} width="32" height="32" alt="LinkedIn Logo" />
            </MenuOption>
            <MenuOption optionLink={'https://github.com/botfather'}>
              <img src={Github} width="32" height="32" alt="Github Logo" />
            </MenuOption>
            <MenuOption optionLink={'https://medium.com/@botfather'}>
              <img src={Medium} width="32" height="32" alt="Medium Logo" />
            </MenuOption>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default TopNav;
