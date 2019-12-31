import styled from 'styled-components';
import {
  layout, size, flexbox, space,
} from 'styled-system';
import Box from '../Box';

export { Box as Container };

export const ContentWrapper = styled(Box)`
  align-items: center;
`;

export const SkillCard = styled.img`
  width: 65px;
  height: 65px;
  margin: 8px;
`;

export const SkillCardLong = styled.img`
  width: 250px;
  height: 65px;
  margin: 8px;
`;

export const Separator = styled.hr`
  min-width: ${({ theme }) => theme.width[6] * 0.55}px;
  border-top: 1px solid #8c8b8b;
`;

export const Footer = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  clear: both;
  position: relative;
  font-family: monospace;
  background-color: #666666;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: rgba(245, 245, 245, 0.5) 3px 5px 1px;
  user-select: none;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  ${layout}
  ${size}
  ${space}
`;

export const ScreenGuard = styled('div')`
  ${layout}
  ${size}
  ${flexbox}
  ${space}
`;
