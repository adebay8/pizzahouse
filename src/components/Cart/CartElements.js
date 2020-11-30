import styled from "styled-components";

export const CartHeader = styled.div`
  background: black; // linear-gradient(to right, #ffc500, #e31837)
`;

export const CartHeading = styled.h2`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 5rem;
  position: relative;
  top: 1em;
  left: 1.5em;
`;

export const CartContainer = styled.div`
  /* display: grid;
  grid-template-columns: 2fr 1fr; */
  display: flex;
  flex-wrap: wrap;
  /* background-color: green; */
  height: 100vh;
  margin-top: -2rem;
  margin-left: auto;
  margin-right: 2em;
`;

export const CartWrapper = styled.div`
  display: flex;
  flex: 0.7;
  /* align-items: center; */
  flex-direction: column;
  /* background-color: black; */
  margin: 1em;
`;

export const CartCheckout = styled.div`
  display: flex;
  flex: 0.3;
  min-width: 300px;
  margin-left: 20px;
  flex-direction: column;
  /* justify-content: space-between; */
  border: 2px solid black;
  padding: 10px;
  border-radius: 10px;
  height: 120px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;

  small {
    color: blue;
    margin-bottom: 1rem;
  }
`;

export const CartCard = styled.div`
  display: flex;
  /* background-color: red; */
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 20px;
  border: 2px solid black;
  box-shadow: 5px 6px 3px #888888;
  padding: 10px 10px;
`;

export const CartImg = styled.img`
  /* flex: 0.2; */
  height: 80px;

  @media screen and (max-width: 500px) {
    width: auto;
  }
`;

export const CartInfo = styled.div`
  display: flex;
  flex: 0.8;
  flex-direction: column;
  margin-left: 1rem;
`;

export const CartTitle = styled.h2`
  font-weight: bold;
`;

export const CartQuantity = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  button {
    cursor: pointer;
    /* background-color: rgba(227, 24, 55, 0.8); */
    transition: 0.2s ease-out;
  }

  input {
    text-align: center;
  }
`;

export const CartButton = styled.button`
  background-color: #e31837;
  width: fit-content;
  padding: 0.6rem 2rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;
  white-space: nowrap;

  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;

export const CartPrice = styled.div`
  flex: 0.2;
  font-size: 20px;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckoutButton = styled.button`
  /* width: fit-content; */
  padding: 0.6rem 2rem;
  border: none;
  background: #e31837;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
