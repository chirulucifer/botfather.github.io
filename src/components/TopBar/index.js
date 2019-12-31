import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Container,
  BrandTextHolder,
  GetInTouchButton,
} from './TopBar.styles';

const TopBar = ({ initials, onActionButtonClick }) => (
  <Container flexDirection={['row']}>
    <Header
      width={[1, 1, 1, 1 / 2]}
      mt={[1, 1, 3, 3]}
      pl={[3, 3, 3, 1]}
      pr={[3, 3, 3, 1]}
    >
      <BrandTextHolder>{initials}</BrandTextHolder>
      <GetInTouchButton w={[1]} onClick={onActionButtonClick}>
        <p>Get In Touch</p>
      </GetInTouchButton>
    </Header>
  </Container>
);

export default TopBar;

TopBar.defaultProps = {
  onActionButtonClick() {},
};

TopBar.propTypes = {
  initials: PropTypes.string.isRequired,
  onActionButtonClick: PropTypes.func,
};
