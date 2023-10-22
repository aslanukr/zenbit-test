import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const ImageAside = styled.aside`
  width: 100%;
  max-width: 890px;
  height: 100vh;
`;

export const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 100px;
  margin: auto;
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

export const InfoText = styled.p`
  display: flex;
  justify-content: end;
  margin-top: 10px;
  font-family: "Lato";
  font-size: 14px;
  font-weight: 700;

  color: ${(props) =>
    props.error ? "rgb(158, 36, 36)" : "rgb(178, 159, 126)"};
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

  &:hover,
  &:focus {
    background-color: rgb(214, 160, 109);
    border: 2px solid rgb(214, 160, 109);
  }
`;

export const RedirectText = styled.p`
  display: block;
  margin-top: 10px;
  font-family: "Lato";
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;

export const RedirectLink = styled(Link)`
  font-family: "Lato";
  font-size: 14px;
  font-weight: 700;
  color: rgb(178, 159, 126);

  &:hover,
  &:focus {
    color: rgb(214, 160, 109);
    text-decoration: underline;
  }
`;
