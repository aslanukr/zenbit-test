import { Link } from "react-router-dom";
import styled from "styled-components";

export const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const BtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 160px;
  height: 44px;
  background-color: ${(props) =>
    props.filled ? "rgba(178, 159, 126, 1)" : "none"};
  border: 1px solid rgba(178, 159, 126, 1);
  border-radius: 5px;
  padding: 11px 0;
  align-content: center;
  color: ${(props) =>
    props.filled ? "rgba(255, 255, 255, 1)" : "rgba(178, 159, 126, 1)"};

  &:hover,
  &:focus {
    border: 1px solid rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
  }
`;

export const BtnTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const HeroBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  height: 54px;
  padding: 10px 24px;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 8px;

  font-size: 20px;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);

  &:hover,
  &:focus {
    border: 1px solid rgba(178, 159, 126, 1);
    color: rgba(178, 159, 126, 1);
  }
`;
