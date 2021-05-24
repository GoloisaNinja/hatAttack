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
  > div:nth-child(2) {
    padding: 5px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    background: black;
    color: white;
    border-radius: 50%;
    margin-left: 5px;
    @media (min-width: 651px) {
      display: none;
    }
  }
  > div:last-child {
    padding-left: 8px;
    margin: auto 0;
    @media (max-width: 650px) {
      display: none;
    }
  }
`;
