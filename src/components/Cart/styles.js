import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CartWrapper = styled(StyledLink).attrs(() => ({
  to: '/cart',
}))`
  padding-left: 16px;
  display: flex;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  > div:last-child {
    padding-left: 8px;
    margin: auto 0;
    @media (max-width: 650px) {
      display: none;
    }
  }
`;
