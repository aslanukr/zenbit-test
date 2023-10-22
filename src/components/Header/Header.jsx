import HeaderBtn from "../Buttons/HeaderBtn";
import { BtnTitle, BtnWrapper, LogOutBtn } from "../Buttons/Buttons.styled";
import Logo from "../Logo/Logo";
import { HeaderContainer, UserName } from "./Header.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, selectUser } from "src/redux/selectors";
import { FiLogOut } from "react-icons/fi";
import { logOutThunk } from "src/redux/auth/authThunk";

const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const email = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogOut = (data) => {
    dispatch(logOutThunk(data));
  };

  return (
    <HeaderContainer>
      <Logo />

      {isAuth && email ? (
        <BtnWrapper>
          <UserName>{email}</UserName>
          <LogOutBtn type="button" onClick={onLogOut}>
            <FiLogOut color="rgb(178, 159, 126)" size={24} />
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
