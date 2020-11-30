import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar";
import {
  CartHeader,
  CartCheckout,
  CartContainer,
  CartHeading,
  CartWrapper,
  CartCard,
  CartButton,
  CartImg,
  CartTitle,
  CartQuantity,
  CartInfo,
  CartPrice,
  CheckoutButton,
} from "./CartElements";
import CurrencyFormat from "react-currency-format";
import item from "../../images/featured2.jpg";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const [qty, setQty] = useState(1);

  const increaseQty = (e) => {
    e.preventDefault();

    setQty(qty + 1);
  };

  const decreaseQty = (e) => {
    e.preventDefault();

    setQty(qty - 1);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <CartHeader>
        <Navbar toggle={toggle}></Navbar>
        <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      </CartHeader>

      <CartHeading>Cart</CartHeading>

      <CartContainer>
        <CartWrapper>
          <CartCard>
            <CartImg src={item} alt="cart image"></CartImg>
            <CartInfo>
              <CartTitle>Alfredo Pizza</CartTitle>
              <CartQuantity>
                <button onClick={decreaseQty}>
                  <RemoveIcon />
                </button>
                <input
                  size="4"
                  value={qty}
                  type="text"
                  onChange={(e) => setQty(e.target.value)}
                />
                <button onClick={increaseQty}>
                  <AddIcon />
                </button>
              </CartQuantity>
              <CartButton>Remove from cart</CartButton>
            </CartInfo>
            <CartPrice>$50</CartPrice>
          </CartCard>
          <CartCard>
            <CartImg src={item} alt="cart image"></CartImg>
            <CartInfo>
              <CartTitle>Alfredo Pizza</CartTitle>
              <CartQuantity>
                <button onClick={decreaseQty}>
                  <RemoveIcon />
                </button>
                <input
                  size="4"
                  value={qty}
                  type="text"
                  onChange={(e) => setQty(e.target.value)}
                />
                <button onClick={increaseQty}>
                  <AddIcon />
                </button>
              </CartQuantity>
              <CartButton>Remove from cart</CartButton>
            </CartInfo>
            <CartPrice>$50</CartPrice>
          </CartCard>
        </CartWrapper>

        <CartCheckout>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal (3 items):&nbsp;
                  <strong style={{ color: "red" }}>{value}</strong>
                </p>
              </>
            )}
            decimalScale={2}
            value="500"
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₦"}
          />
          <small>Your order is eligible for free delivery</small>
          <CheckoutButton>Proceed to checkout</CheckoutButton>
        </CartCheckout>
      </CartContainer>

      {/* map through all items in the cart state */}
    </div>
  );
}

export default Cart;
