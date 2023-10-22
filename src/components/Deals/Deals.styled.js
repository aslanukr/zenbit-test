import styled from "styled-components";

export const DealsSection = styled.section`
  padding: 30px 10px;
  @media screen and (min-width: 850px) {
    padding: 50px 80px 50px 80px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 700;
  color: rgba(178, 159, 126, 1);
`;

export const DealsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
  max-width: 1360px;

  @media screen and (max-width: 1360px) {
    justify-content: center;
    width: 100%;
  }
`;

export const DealItem = styled.li`
  position: relative;
  width: calc(100% - 20px);
  max-width: 630px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 630px) {
    max-width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0 14px;

  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
`;

export const ItemTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  color: white;

  @media screen and (min-width: 425px) {
    font-size: 16px;
  }

  @media screen and (min-width: 510px) {
    font-size: 20px;
  }
`;

export const DetailsList = styled.ul`
  display: flex;
  gap: 30px;

  @media screen and (min-width: 425px) {
    gap: 60px;
  }
`;

export const DetailsGroup = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const DetailsInfo = styled.p`
  font-family: "Lato";
  font-size: 12px;
  font-weight: 700;
  color: white;

  @media screen and (min-width: 425px) {
    font-size: 14px;
  }

  @media screen and (min-width: 510px) {
    font-size: 18px;
  }
`;
