import AuthForm from "src/components/AuthForm/AuthForm";
import {
  AuthContainer,
  BgImage,
  FormTitle,
  FormWrapper,
  ImageAside,
} from "./Auth.styled";
import AuthBg from "src/assets/bg/authbg.jpg";

const Login = () => {
  return (
    <AuthContainer>
      <ImageAside>
        <BgImage src={AuthBg} alt="skyline of the city" />
      </ImageAside>
      <FormWrapper>
        <FormTitle>Login</FormTitle>
        <AuthForm formType="login" />
      </FormWrapper>
    </AuthContainer>
  );
};

export default Login;
