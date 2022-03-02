import React from 'react';
import {
  CloseIcon,
  Icon,
  SlidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SlidebarElement';
import { animateScroll as scroll, Link } from 'react-scroll';
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SlidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            onClick={toggle}
            to="About"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="Products"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
          >
            Products
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="Advantages"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
          >
            Advantages
          </SidebarLink>
          <SidebarRoute
            onClick={toggle}
            to="blogs"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
          >
            blogs
          </SidebarRoute>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarLink
            to="ContactUs"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
          >
            Contact Us
          </SidebarLink>
        </SideBtnWrap>
        <SideBtnWrap>
          <a
            href="Credit"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
          >
            Credit Application
          </a>
        </SideBtnWrap>
      </SidebarWrapper>
    </SlidebarContainer>
  );
};

export default Sidebar;
