import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  flex-wrap: nowrap;
  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  > div:last-child {
    width: 100%;
    display: flex;
  }
`;
