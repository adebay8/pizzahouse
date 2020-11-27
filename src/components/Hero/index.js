import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar";
import { useState } from "react";
import {
  HeroContainer,
  HeroContent,
  HeroBtn,
  HeroH1,
  HeroItems,
  HeroP,
  HeroBtnItems,
} from "./HeroElements";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle}></Navbar>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <HeroContent>
        <HeroItems>
          <HeroH1>Home Of The Greatest Pizza</HeroH1>
          <HeroP>The Big Boss</HeroP>
          <HeroBtnItems>
            <HeroBtn>Order Pickup</HeroBtn>
            <HeroBtn>Order Delivery</HeroBtn>
          </HeroBtnItems>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
