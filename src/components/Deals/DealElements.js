import styled from "styled-components";

export const DealsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const DealsHeading = styled.h2`
  font-size: clamp(1.8rem, 2.5vw, 5rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const HeadingLine = styled.img`
  filter: invert(100%) sepia(99%) saturate(2%) hue-rotate(58deg)
    brightness(108%) contrast(100%);
  position: relative;
  display: block;
  top: -9em;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -12em;
`;

export const DealWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const DealCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2em 2rem;
`;

export const DealImage = styled.img`
  height: 350px;
  max-width: 100%;
  min-width: 300px;
  margin-right: 1em;

  @media screen and (max-width: 760px) {
    height: auto;
  }
`;

export const DealInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* padding: 2rem; */
`;

export const DealTitle = styled.h2`
  font-weight: 550;
  font-size: 2rem;
`;

export const DealDesc = styled.p`
  margin-bottom: 1rem;
`;

export const DealBtn = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const DealBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
