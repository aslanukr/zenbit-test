import { useSelector } from "react-redux";
import { HeroBtn, HeroLink } from "../Buttons/Buttons.styled";
import { HeroContent, HeroSection, HeroText, HeroTitle } from "./Hero.styled";
import { selectIsAuth } from "src/redux/selectors";
import { Link } from "react-router-dom";

const Hero = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>The chemical negatively charged</HeroTitle>
        <HeroText>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. While the mass defect is{" "}
        </HeroText>
      </HeroContent>

      {isAuth ? (
        <HeroBtn to="deals" smooth={true} offset={-90} duration={1200}>
          Get Started
        </HeroBtn>
      ) : (
        <HeroLink to="/login">Get Started</HeroLink>
      )}
    </HeroSection>
  );
};

export default Hero;
