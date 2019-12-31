import React from 'react';

import {
  Container,
  ContentWrapper,
  SkillCard,
  SkillCardLong,
  Separator,
  Footer,
  ScreenGuard
} from './SkillSet.styles';
import JSLogo from '../../resources/icons/png/javascript-1@2x.png';
import ReactLogo from '../../resources/icons/png/react@2x.png';
import ReduxLogo from '../../resources/icons/png/redux-1@2x.png';
import JestLogo from '../../resources/icons/png/jest-0@2x.png';
import CypressLogo from '../../resources/icons/png/cypress.png';
import SwiftLogo from '../../resources/icons/png/swift-15@2x.png';
import ObjectiveCLogo from '../../resources/icons/png/apple-black@2x.png';

const allowedDisplays = ['flex', 'flex', 'none', 'none'];

const Skillset = () => (
  <>
    <Container
      flexDirection={['row']}
      justifyContent={['center']}
      alignItems={['center']}
    >
      <ContentWrapper
        flexDirection={['column']}
        width={[1, 1, 1, 1 / 2]}
        mt={[4, 4, 4, 4]}
        pl={[3, 3, 3, 1]}
        pr={[3, 3, 3, 1]}
        justifyContent={['center']}
        alignItems={['center']}
      >
        <Separator />
        <ScreenGuard
          display={[...allowedDisplays].reverse()}
          flexDirection={['row']}
          justifyContent={['flex-start']}
          alignItems={['flex-start']}
        >
          <SkillCard src={JSLogo} alt="JS Logo" />
          <SkillCard src={ObjectiveCLogo} alt="Apple Logo" />
          <SkillCard src={SwiftLogo} alt="Swift Logo" />
          <SkillCard src={ReactLogo} alt="React Logo" />
          <SkillCard src={ReduxLogo} alt="Redux Logo" />
          <SkillCard src={JestLogo} alt="Jest Logo" />
          <SkillCardLong src={CypressLogo} alt="Cypress Logo" />
        </ScreenGuard>
        <ScreenGuard display={[...allowedDisplays]}>
          <SkillCard src={JSLogo} alt="JS Logo" />
          <SkillCard src={ObjectiveCLogo} alt="Apple Logo" />
          <SkillCard src={SwiftLogo} alt="Swift Logo" />
        </ScreenGuard>
        <ScreenGuard display={[...allowedDisplays]}>
          <SkillCard src={ReactLogo} alt="React Logo" />
          <SkillCard src={ReduxLogo} alt="Redux Logo" />
          <SkillCard src={JestLogo} alt="Jest Logo" />
        </ScreenGuard>
        <ScreenGuard display={[...allowedDisplays]}>
          <SkillCardLong src={CypressLogo} alt="Cypress Logo" />
        </ScreenGuard>
      </ContentWrapper>
    </Container>
    <Footer mt={[4, 2, 2, 8]}>
      (c)
      {new Date().getFullYear()} | Tushar Mohan | Botfather
    </Footer>
  </>
);

export default Skillset;
