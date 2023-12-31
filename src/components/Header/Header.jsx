import HeaderBtn from "../Buttons/HeaderBtn";
import { BtnTitle, BtnWrapper, LogOutBtn } from "../Buttons/Buttons.styled";
import Logo from "../Logo/Logo";
import { HeaderContainer, UserName, WelcomeText } from "./Header.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAuth,
  selectIsFetchingCurrentUser,
  selectUser,
} from "src/redux/selectors";
import { FiLogOut } from "react-icons/fi";
import { logOutThunk } from "src/redux/auth/authThunk";
import { resetDealsState } from "src/redux/deals/dealsSlice";

const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const username = useSelector(selectUser);
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutThunk());
    dispatch(resetDealsState());
  };

  return (
    <>
      {!isFetchingCurrentUser && (
        <HeaderContainer>
          <Logo />

          {isAuth && username ? (
            <BtnWrapper>
              <UserName>
                <WelcomeText>Welcome,</WelcomeText> {username}
              </UserName>
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
      )}
    </>
  );
};

export default Header;
