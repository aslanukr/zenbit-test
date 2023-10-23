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
import { loginThunk, registerThunk } from "src/redux/auth/authThunk";

const AuthForm = ({ formType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLoginSubmit = (data) => {
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

  const onSignUpSubmit = (data) => {
    try {
      dispatch(registerThunk(data))
        .unwrap()
        .then(() => {
          toast.success("Registration successful!", {
            position: "bottom-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            onClose: () => {
              navigate("/login");
            },
          });
          reset();
        })
        .catch((e) => {
          toast.error(`${e}`, {
            position: "bottom-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  return (
    <>
      {formType === "login" && (
        <Form onSubmit={handleSubmit(onLoginSubmit)}>
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
              autoCapitalize="none"
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
              type="password"
              autoCapitalize="none"
            />
          </FormLabel>
          <InfoText valid="true">{errors.password?.message}</InfoText>
          <InfoText>
            <Link to={"/signup"}>Forgot password?</Link>
          </InfoText>

          <FormBtn type="submit">Login</FormBtn>
        </Form>
      )}

      {formType === "signup" && (
        <Form onSubmit={handleSubmit(onSignUpSubmit)}>
          <FormLabel>
            Name
            <FormInput
              {...register("username", {
                required: "User name is required",
                minLength: {
                  value: 2,
                  message: "User name minimal length is 2 characters",
                },
              })}
              placeholder="Name"
            />
          </FormLabel>
          <InfoText valid="true">{errors.username?.message}</InfoText>
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
              autoCapitalize="none"
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
              type="password"
              autoCapitalize="none"
            />
          </FormLabel>

          <InfoText valid="true">{errors.password?.message}</InfoText>

          <FormBtn type="submit">Sign Up</FormBtn>
        </Form>
      )}

      <RedirectText>
        {formType === "login" ? (
          <>
            Don’t have an account?{" "}
            <RedirectLink to={"/signup"}>Sign up</RedirectLink>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <RedirectLink to={"/login"}>Login</RedirectLink>
          </>
        )}
      </RedirectText>
    </>
  );
};

export default AuthForm;
