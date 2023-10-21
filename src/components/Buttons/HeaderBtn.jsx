import { BtnLink } from "./Buttons.styled";

const HeaderBtn = ({ to = "/", filled = false, children }) => {
  return (
    <BtnLink to={to} filled={filled ? "true" : undefined}>
      {children}
    </BtnLink>
  );
};

export default HeaderBtn;
