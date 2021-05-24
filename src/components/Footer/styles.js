import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  font-size: 12px;
  padding: 20px;
  > div {
    padding: 5px;
  }
  > div:first-child {
    display: flex;
  }
`;
export const FooterInfoWrapper = styled.div`
  > ul {
    font-size: 10px;
    margin-bottom: 10px;
  }
`;
export const FooterDevWrapper = styled.div`
  text-align: center;
  a {
    text-decoration: none;
    color: #ffe666;
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin-top: 10px;
    > a:last-child,
    a:nth-child(2) {
      margin-left: 5px;
    }
  }
`;
export const FooterLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  > svg {
    padding-top: 15px;
    padding-left: 5px;
  }
  > p {
    padding-top: 15px;
    padding-left: 5px;
  }
`;
