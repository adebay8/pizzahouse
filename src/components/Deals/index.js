import React from "react";
import {
  DealsContainer,
  DealWrapper,
  DealImage,
  DealCard,
  DealInfo,
  DealTitle,
  DealBtn,
  DealDesc,
  DealBtnWrapper,
  DealsHeading,
  HeadingLine,
} from "./DealElements";
import line from "../../images/line.png";

function Deals({ data }) {
  return (
    <DealsContainer>
      <DealsHeading>Our Most Popular Deals</DealsHeading>
      <HeadingLine src={line}></HeadingLine>
      <DealWrapper>
        {data.map((deal, index) => (
          <DealCard key={index}>
            <DealImage src={deal.img} alt={deal.alt} />
            <DealInfo>
              <DealTitle>{deal.title}</DealTitle>
              <DealDesc>{deal.desc}</DealDesc>
              <DealBtnWrapper>
                <DealBtn>{deal.button}</DealBtn>
              </DealBtnWrapper>
            </DealInfo>
          </DealCard>
        ))}
      </DealWrapper>
    </DealsContainer>
  );
}

export default Deals;
