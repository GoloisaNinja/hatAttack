import styled from 'styled-components';

export const QuantityAdjusterWrapper = styled.div`
  display: flex;
  > div {
    margin: auto 0;
    padding: 5px 10px;
  }
`;

export const AdjusterButton = styled.button`
  cursor: pointer;
  border: 1px solid black;
  font-weight: bold;
  &:hover {
    color: #eee;
    background-color: black;
  }
`;
