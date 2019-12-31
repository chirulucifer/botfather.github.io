import styled from 'styled-components';
import {
  layout, size, flexbox, space,
} from 'styled-system';
import Box from '../Box';

export { Box as Container };

export const ContentWrapper = styled(Box)`
  align-items: center;
`;

export const ProfileDataWrapper = styled(Box)``;

export const NameTextHolder = styled('div')`
  user-select: none;
  align-items: center;
  align-self:center;
  font-size: ${({ theme }) => theme.fontSizes[9]}px;
  font-family: 'Montserrat', sans-serif;
  ${layout}
  ${size}
  ${flexbox}
  ${space}
`;

export const NameTextHolderSmall = styled(NameTextHolder)`
  font-size: ${({ theme }) => theme.fontSizes[7]}px;
`;

export const DesignationTextHolder = styled(Box)`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
`;

export const WorkDetailsTextHolder = styled(Box)`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  padding-right: ${({ theme }) => theme.space[3]}px;
  text-align: justify;
  text-justify: inter-word;
  font-family: 'Open Sans', sans-serif;
`;

export const ProfileImageHolder = styled.img`
  border-radius: ${({ theme }) => theme.radius[2]}px;
  min-width: 200px;
  min-height: 200px;
  height: 200px;
  width: 200px;
`;

export const SVGHolder = styled.div`
  ${layout}
  ${size}
  ${flexbox}
  ${space}
  cursor: pointer;
`;
