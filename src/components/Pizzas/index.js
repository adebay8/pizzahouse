import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar";
import { Header } from "./Pizzas";

function Pizzas() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Header>
      <Navbar toggle={toggle}></Navbar>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
    </Header>
  );
}

export default Pizzas;
