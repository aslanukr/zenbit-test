import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Form,
  FormBtn,
  FormInput,
  FormLabel,
  InfoText,
  RedirectLink,
  RedirectText,
} from "src/pages/Auth/Auth.styled";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>
          Email
          <FormInput
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
          />
        </FormLabel>
        <InfoText error>{errors.email?.message}</InfoText>
        <FormLabel>
          Password
          <FormInput
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 5,
                message: "Password minimal length is 5 characters",
              },
            })}
            placeholder="Password"
          />
        </FormLabel>
        <InfoText error>{errors.password?.message}</InfoText>
        <InfoText remind>
          <Link to={"/signup"}>Forgot password?</Link>
        </InfoText>

        <FormBtn type="submit">Login</FormBtn>
      </Form>
      <RedirectText>
        Don’t have an account?{" "}
        <RedirectLink to={"/signup"}>Sign up</RedirectLink>
      </RedirectText>
    </>
  );
};

export default LoginForm;
