import { Oval } from "react-loader-spinner";
import { SpinnerContainer, SpinnerOverlay } from "./Loader.styled";

export const Loader = () => {
  return (
    <>
      <SpinnerOverlay>
        <SpinnerContainer>
          <Oval
            height="80"
            width="80"
            color="rgb(178, 159, 126)"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="rgb(255, 255, 255)"
            strokeWidth="2"
            strokeWidthSecondary="2"
          />
        </SpinnerContainer>
      </SpinnerOverlay>
    </>
  );
};
