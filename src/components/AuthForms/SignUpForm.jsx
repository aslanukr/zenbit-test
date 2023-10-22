import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { registerThunk } from "src/redux/auth/authThunk";

const SignUpForm = () => {
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
      dispatch(registerThunk(data))
        .unwrap()
        .then(() => {
          toast.success("Registration successful!", {
            position: "bottom-center",
            autoClose: 1200,
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
      console.error("Registration Error:", error);
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

        <FormBtn type="submit">Sign Up</FormBtn>
      </Form>
      <RedirectText>
        Already have an account?{" "}
        <RedirectLink to={"/login"}>Login</RedirectLink>
      </RedirectText>
    </>
  );
};

export default SignUpForm;
