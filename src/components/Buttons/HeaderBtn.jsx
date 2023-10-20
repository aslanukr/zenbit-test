import { BtnLink } from "./Buttons.styled";

const HeaderBtn = ({ filled = false, children }) => {
  return <BtnLink filled={filled ? "true" : undefined}>{children}</BtnLink>;
};

export default HeaderBtn;
