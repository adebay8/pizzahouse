import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza House</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars></Bars>
        </NavIcon>
      </Nav>
    </>
  );
}

export default Navbar;
