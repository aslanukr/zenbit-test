import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1440px;
  margin-top: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 10px;
  justify-content: space-between;
  height: 80px;
  background-color: rgba(23, 34, 52, 1);

  @media screen and (min-width: 769px) {
    padding: 20px 80px;
  }
`;

export const FooterText = styled.p`
  display: none;

  @media screen and (min-width: 769px) {
    display: flex;
    font-size: 12px;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    gap: 5px;
  }
`;

export const SocialsWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
`;

export const ContactLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 10px;
  color: white;
  gap: 10px;
`;
