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

export const UserName = styled.p`
  margin: 0;
  display: flex;
  flex-direction: column;
  font-family: "Lato";
  font-size: 16px;
  font-weight: 700;

  color: rgb(178, 159, 126);
`;

export const WelcomeText = styled.span`
  color: white;
`;
