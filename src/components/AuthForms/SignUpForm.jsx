import { useForm } from "react-hook-form";
import {
  Form,
  FormBtn,
  FormInput,
  FormLabel,
} from "src/pages/Auth/Auth.styled";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>
        Email
        <FormInput
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
        />
      </FormLabel>
      <p>{errors.email?.message}</p>
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

      <p>{errors.password?.message}</p>

      <FormBtn type="submit">Sign Up</FormBtn>
    </Form>
  );
};

export default SignUpForm;
