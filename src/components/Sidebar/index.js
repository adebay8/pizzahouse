import React from "react";
import {
  SidebarContainer,
  SidebarMenu,
  Icon,
  CloseIcon,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/pizzas">Pizzas</SidebarLink>
        <SidebarLink to="/">Desserts</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
        <SidebarLink to="/cart">Cart</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
}

export default Sidebar;
