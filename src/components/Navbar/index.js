import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.png";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll, Link } from "react-scroll";

import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle, Speed }) => {
  const [scrollNav, setScrollNav] = useState(false);
  console.log(Speed);
  const changeNav = () => {
    // if (Speed) {
    //   setScrollNav(false);
    // }
    if (window.scrollY >= 100 || Speed) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: "1em" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <img src={logo} alt="logo" />
            </NavLogo>

            {/* <Bars onClick={toggle}/> */}
            <NavMenu>
              <NavItem>
                <NavLinks>
                  <Link
                    to="Home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                  >
                    Home
                  </Link>
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks>
                  <Link
                    to="About"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                  >
                    Who We Are
                  </Link>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <Link
                    to="Products"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                  >
                    What We Offer
                  </Link>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <Link
                    to="Advantages"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                  >
                    Why Choose Us
                  </Link>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLink to="blogPage">
                  <Link
                    to="blogPage"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                  >
                    BlogPage
                  </Link>
                </NavLink>
              </NavItem>
              {/* <NavItem>
            
          <NavLinks >
          <Link to='ContactUs' smooth={true} duration={500} spy={true} exact={true} offset={-80}>Contact Us</Link>
          </NavLinks>
          </NavItem> */}

              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>

              {/* Second Nav */}
              {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="Contact Us">
                {" "}
                <Link
                  to="ContactUs"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Contact Us
                </Link>
              </NavBtnLink>
            </NavBtn>
            {/* <MobileIcon onClick={toggle}>
          <FaBars/>
        </MobileIcon> */}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
