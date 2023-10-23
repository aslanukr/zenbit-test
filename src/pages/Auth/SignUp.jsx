import AuthForm from "src/components/AuthForm/AuthForm";
import {
  AuthContainer,
  BgImage,
  FormTitle,
  FormWrapper,
  ImageAside,
} from "./Auth.styled";
import AuthBg from "src/assets/bg/authbg.jpg";

const SignUp = () => {
  return (
    <AuthContainer>
      <ImageAside>
        <BgImage src={AuthBg} alt="skyline of the city" />
      </ImageAside>
      <FormWrapper>
        <FormTitle>Sign Up</FormTitle>
        <AuthForm formType="signup" />
      </FormWrapper>
    </AuthContainer>
  );
};

export default SignUp;
