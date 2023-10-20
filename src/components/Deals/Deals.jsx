import { DealsSection, SectionTitle } from "./Deals.styled";
import DealsGallery from "./DealsGallery";

const Deals = () => {
  return (
    <DealsSection>
      <SectionTitle id="deals">Open Deals</SectionTitle>
      <DealsGallery />
    </DealsSection>
  );
};

export default Deals;
