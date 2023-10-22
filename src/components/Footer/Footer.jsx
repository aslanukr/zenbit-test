import { Link } from "react-router-dom";
import {
  ContactsWrapper,
  FooterContainer,
  FooterText,
  ContactLink,
  SocialsWrapper,
} from "./Footer.styled";
import {
  BsGithub,
  BsLinkedin,
  BsFillTelephoneFill,
  BsFacebook,
} from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialsWrapper>
        <Link to={"https://github.com/aslanukr"}>
          <BsGithub size={20} color="white" />
        </Link>
        <Link to={"https://www.linkedin.com/in/vitaliy-korostylov/"}>
          <BsLinkedin size={20} color="white" />
        </Link>
        <Link to={"https://www.facebook.com/vitaliy.korostylov"}>
          <BsFacebook size={20} color="white" />
        </Link>
      </SocialsWrapper>
      <FooterText>
        Created by
        <Link to="https://www.facebook.com/vitaliy.korostylov">
          Vitaliy Korostylov
        </Link>
        <span>2023</span>
      </FooterText>
      <ContactsWrapper>
        <ContactLink to={"tel:+380670000000"}>
          <BsFillTelephoneFill size={16} color="white" />
          +38 073 000 00 00
        </ContactLink>
        <ContactLink to={"mailto:order@real-estate.com"}>
          <MdAlternateEmail size={16} color="white" />
          order@real-estate.com
        </ContactLink>
      </ContactsWrapper>
    </FooterContainer>
  );
};

export default Footer;
