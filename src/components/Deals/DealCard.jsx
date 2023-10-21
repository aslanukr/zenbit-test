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
  const formattedPrice = price.toLocaleString();
  const formattedTicket = ticket.toLocaleString();

  return (
    <DealItem>
      <ImageWrapper>
        <Image src={img} alt={title} />
      </ImageWrapper>
      <InfoWrapper>
        <ItemTitle>{title}</ItemTitle>
        <DetailsList>
          <DetailsGroup>
            <DetailsInfo>{formattedPrice} Dhs</DetailsInfo>
            <DetailsInfo>Ticket - {formattedTicket} Dhs</DetailsInfo>
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
