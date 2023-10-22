import LoginForm from "src/components/AuthForms/LoginForm";
import {
  AuthContainer,
  BgImage,
  FormTitle,
  FormWrapper,
  ImageAside,
} from "./Auth.styled";

const Login = () => {
  return (
    <AuthContainer>
      <ImageAside>
        <BgImage
          src="../../src/assets/bg/authbg.jpg"
          alt="skyline of the city"
        />
      </ImageAside>
      <FormWrapper>
        <FormTitle>Login</FormTitle>
        <LoginForm />
      </FormWrapper>
    </AuthContainer>
  );
};

export default Login;
