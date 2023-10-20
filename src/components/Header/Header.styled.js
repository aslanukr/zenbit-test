import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 100;
  display: flex;
  width: 100%;
  max-width: 1440px;
  height: 80px;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(23, 34, 52, 1);

  @media screen and (min-width: 481px) {
    padding: 0 40px;
  }
  @media screen and (min-width: 769px) {
    padding: 0 80px;
  }
`;
