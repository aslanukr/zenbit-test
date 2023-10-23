import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoLink = styled(Link)`
  color: rgba(255, 255, 255, 1);
  font-family: "Merriweather";
  font-size: 18px;
  font-weight: 400;

  @media screen and (min-width: 481px) {
    font-size: 28px;
  }
`;
