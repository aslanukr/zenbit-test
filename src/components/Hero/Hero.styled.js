import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  height: 1024px;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  background-color: #c4c4c4;
  background-image: linear-gradient(
      rgba(23, 34, 52, 0.6),
      rgba(23, 34, 52, 0.6)
    ),
    url(src/assets/bg/hero.jpg);
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
  font-size: 64px;
  font-weight: 700;
  text-align: center;
  color: #ffff;
`;

export const HeroText = styled.p`
  display: block;
  max-width: 822px;
  font-family: "Lato";
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  color: #ffff;
`;
