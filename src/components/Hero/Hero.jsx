import { HeroBtn } from "../Buttons/Buttons.styled";
import { HeroContent, HeroSection, HeroText, HeroTitle } from "./Hero.styled";

const Hero = () => {
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

      <HeroBtn to="deals" smooth={true} offset={-90} duration={1200}>
        Get Started
      </HeroBtn>
    </HeroSection>
  );
};

export default Hero;
