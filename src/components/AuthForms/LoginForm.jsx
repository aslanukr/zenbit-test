import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Form,
  FormBtn,
  FormInput,
  FormLabel,
  InfoText,
  RedirectLink,
  RedirectText,
} from "src/pages/Auth/Auth.styled";
import { loginThunk } from "src/redux/auth/authThunk";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    try {
      dispatch(loginThunk(data))
        .unwrap()
        .then(() => {
          navigate("/");
          reset();
        })
        .catch((e) => {
          console.log(e);
          toast.error(`${e}`, {
            position: "bottom-center",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>
          Email
          <FormInput
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
          />
        </FormLabel>
        <InfoText valid="true">{errors.email?.message}</InfoText>
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
        <InfoText valid="true">{errors.password?.message}</InfoText>
        <InfoText>
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
