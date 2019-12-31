import React from 'react';
// import PropTypes from 'prop-types';
import {
  Container,
  ContentWrapper,
  NameTextHolder,
  ProfileDataWrapper,
  ProfileImageHolder,
  DesignationTextHolder,
  WorkDetailsTextHolder,
  NameTextHolderSmall,
  SVGHolder
} from './Profile.styles';
import TMPicture from '../../resources/images/tm.png';
import { ReactComponent as LinkedInLogo } from '../../resources/icons/svg/linkedin-logo.svg';
import { ReactComponent as GithubLogo } from '../../resources/icons/svg/github-logo.svg';
import { ReactComponent as MediumLogo } from '../../resources/icons/svg/medium-logo.svg';

const allowedDisplays = ['flex', 'flex', 'none', 'none'];

const Profile = () => (
  <>
    <Container
      flexDirection={['row']}
      justifyContent={['center']}
      alignItems={['center']}
    >
      <ContentWrapper
        width={[1, 1, 1, 1 / 2]}
        mt={[2]}
        pl={[3, 3, 3, 0]}
        pr={[3, 3, 3, 1]}
        justifyContent={['space-between']}
        flexDirection={[
          'column-reverse',
          'column-reverse',
          'column-reverse',
          'row'
        ]}
      >
        <ProfileDataWrapper flexDirection={['column']} mt={[4, 0]}>
          <NameTextHolderSmall display={[...allowedDisplays]}>
            Tushar Mohan
          </NameTextHolderSmall>
          <NameTextHolder display={[...allowedDisplays].reverse()}>
            Tushar Mohan
          </NameTextHolder>
          <DesignationTextHolder
            alignItems={['center']}
            justifyContent={['center', 'center', 'center', 'flex-start']}
          >
            <p>Frontend Developer</p>
          </DesignationTextHolder>
          <WorkDetailsTextHolder w={[1, 1, 1 / 2]} mt={[2]}>
            Ever since I was introduced to the &quot;turtle&quot; in Logo, I
            have been fascinated by software. The fact that we can build what we
            can ideate, has been the motivating force in my stint as a
            developer. At present, I help teams design, develop and transition
            to a React based solution.
          </WorkDetailsTextHolder>
        </ProfileDataWrapper>
        <ProfileImageHolder src={TMPicture} alt="Bot Avatar" />
      </ContentWrapper>
    </Container>
    <Container
      flexDirection={['row']}
      justifyContent={['center']}
      alignItems={['center']}
    >
      <ContentWrapper
        width={[1, 1, 1, 1 / 4]}
        mt={[2]}
        pl={[3, 3, 3, 0]}
        pr={[3, 3, 3, 1]}
        justifyContent={['center']}
        flexDirection={['row']}
      >
        <SVGHolder
          m={[1]}
          onClick={() => {
            window.open('https://www.linkedin.com/in/tushar-mohan', '_blank');
          }}
        >
          <LinkedInLogo width="35px" height="35px" />
        </SVGHolder>
        <SVGHolder
          m={[1]}
          onClick={() => {
            window.open('https://www.github.com/botfather', '_blank');
          }}
        >
          <GithubLogo width="35px" height="35px" />
        </SVGHolder>
        <SVGHolder
          m={[1]}
          onClick={() => {
            window.open('https://medium.com/@botfather', '_blank');
          }}
        >
          <MediumLogo width="35px" height="35px" />
        </SVGHolder>
      </ContentWrapper>
    </Container>
  </>
);

export default Profile;

Profile.defaultProps = {};

Profile.propTypes = {};
