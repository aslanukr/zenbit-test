import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const ImageAside = styled.aside`
  height: 100%;
`;

export const FormWrapper = styled.div`
  flex: 1;
  margin: auto;
  padding: 0 100px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h3`
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: rgb(23, 34, 52);
`;

export const FormLabel = styled.label`
  display: block;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
`;

export const FormInput = styled.input`
  width: 350px;
  padding: 14px 20px 12px 20px;

  border-radius: 5px;
  border: 2px solid rgb(224, 224, 224);
  background: rgb(224, 224, 224);

  font-family: "Lato";
  font-size: 14px;
  font-weight: 400;
  color: rgb(23, 34, 52);
`;

export const FormBtn = styled.button`
  margin-top: 62px;
  padding: 11px 0;
  background-color: rgb(178, 159, 126);
  border: 2px solid rgb(178, 159, 126);
  border-radius: 5px;

  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  color: white;
`;
