import SignUpForm from "src/components/AuthForms/SignUpForm";
import {
  AuthContainer,
  FormTitle,
  FormWrapper,
  ImageAside,
} from "./Auth.styled";

const SignUp = () => {
  return (
    <AuthContainer>
      <ImageAside>
        <img src="src/assets/bg/authbg.jpg" alt="skyline of the city" />
      </ImageAside>
      <FormWrapper>
        <FormTitle>Sign Up</FormTitle>
        <SignUpForm />
      </FormWrapper>
    </AuthContainer>
  );
};

export default SignUp;
