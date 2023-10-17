import { BtnLink } from "./HeaderBtn.styled";

const HeaderBtn = ({ filled = false, children }) => {
  return <BtnLink filled={filled}>{children}</BtnLink>;
};

export default HeaderBtn;
