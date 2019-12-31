import styled from 'styled-components';
import { layout, size, flexbox } from 'styled-system';
import Box from '../Box';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${layout}
  ${size}
  ${flexbox}
`;

export const BrandTextHolder = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  font-family: 'Montserrat', sans-serif;
`;

export const GetInTouchButton = styled(Box)`
  display: flex;
  justify-content: center;
  box-shadow: 1px 1.5px 1px grey;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  :hover {
    background-color: ${({ theme }) => theme.colors.highlightedPrimary};
    cursor: pointer;
  }
  & p {
    user-select: none;
    color: ${({ theme }) => theme.colors.white};
  }
  min-height: ${({ theme }) => theme.height[2]}px;
  min-width: ${({ theme }) => theme.width[4]}px;
  border-radius: ${({ theme }) => theme.radius[2]}px;
`;

export const Header = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
