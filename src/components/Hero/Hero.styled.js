import styled from "styled-components";
import HeroBg from "src/assets/bg/hero.jpg";

export const HeroSection = styled.section`
  width: 100%;
  height: 1024px;
  padding: 120px 80px;
  display: flex;
  flex-direction: column;

  align-items: center;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  background-color: #c4c4c4;
  background-image: linear-gradient(
      rgba(23, 34, 52, 0.6),
      rgba(23, 34, 52, 0.6)
    ),
    url(${HeroBg});

  @media screen and (min-width: 769px) {
    justify-content: center;
    padding: 0 80px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1085px;
  flex-direction: column;
  gap: 10px;
`;

export const HeroTitle = styled.h1`
  font-size: 44px;
  font-weight: 700;
  text-align: center;
  color: #ffff;

  @media screen and (min-width: 481px) {
    font-size: 54px;
  }
  @media screen and (min-width: 769px) {
    font-size: 64px;
  }
`;

export const HeroText = styled.p`
  display: block;
  max-width: 822px;
  font-family: "Lato";
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: #ffff;

  @media screen and (min-width: 481px) {
    font-size: 22px;
  }
  @media screen and (min-width: 769px) {
    font-size: 24px;
  }
`;
