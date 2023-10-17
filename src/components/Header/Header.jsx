import HeaderBtn from "../Buttons/HeaderBtn";
import { BtnTitle, BtnWrapper } from "../Buttons/Buttons.styled";
import Logo from "../Logo/Logo";
import { HeaderContainer } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <BtnWrapper>
        <HeaderBtn>
          <BtnTitle>Log In</BtnTitle>
        </HeaderBtn>
        <HeaderBtn filled>
          <BtnTitle>Sign Up</BtnTitle>
        </HeaderBtn>
      </BtnWrapper>
    </HeaderContainer>
  );
};

export default Header;
