import {
  DealItem,
  DetailsGroup,
  DetailsInfo,
  DetailsList,
  Image,
  ImageWrapper,
  InfoWrapper,
  ItemTitle,
} from "./Deals.styled";

const DealCard = ({
  item: { img, title, price, ticket, yield_rate, days_left, sold },
}) => {
  return (
    <DealItem>
      <ImageWrapper>
        <Image src={img} alt={title} />
      </ImageWrapper>
      <InfoWrapper>
        <ItemTitle>{title}</ItemTitle>
        <DetailsList>
          <DetailsGroup>
            <DetailsInfo>{price} Dhs</DetailsInfo>
            <DetailsInfo>Ticket - {ticket} Dhs</DetailsInfo>
          </DetailsGroup>
          <DetailsGroup>
            <DetailsInfo>Yield {yield_rate}%</DetailsInfo>
            <DetailsInfo>Days left {days_left}</DetailsInfo>
          </DetailsGroup>
          <DetailsGroup>
            <DetailsInfo>Sold {sold}%</DetailsInfo>
          </DetailsGroup>
        </DetailsList>
      </InfoWrapper>
    </DealItem>
  );
};

export default DealCard;
