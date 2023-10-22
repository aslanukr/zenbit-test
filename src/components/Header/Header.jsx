import HeaderBtn from "../Buttons/HeaderBtn";
import { BtnTitle, BtnWrapper, LogOutBtn } from "../Buttons/Buttons.styled";
import Logo from "../Logo/Logo";
import { HeaderContainer, UserName } from "./Header.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, selectUser } from "src/redux/selectors";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { logOutThunk } from "src/redux/auth/authThunk";

const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const email = useSelector(selectUser);
  const dispatch = useDispatch();

  const nameSplit = email.split("@");

  const onLogOut = (data) => {
    dispatch(logOutThunk(data));
  };

  return (
    <HeaderContainer>
      <Logo />

      {isAuth ? (
        <BtnWrapper>
          <UserName>{nameSplit[0]}</UserName>
          <LogOutBtn type="button" onClick={onLogOut}>
            <RiLogoutBoxRLine color="rgb(178, 159, 126)" size={24} />
          </LogOutBtn>
        </BtnWrapper>
      ) : (
        <BtnWrapper>
          <HeaderBtn to="/login">
            <BtnTitle>Log In</BtnTitle>
          </HeaderBtn>
          <HeaderBtn to="/signup" filled>
            <BtnTitle>Sign Up</BtnTitle>
          </HeaderBtn>
        </BtnWrapper>
      )}
    </HeaderContainer>
  );
};

export default Header;
