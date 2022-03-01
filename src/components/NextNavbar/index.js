import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../images/logo.png';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll, Link } from 'react-scroll';

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
  NavLinksR,
} from './NavbarElements';

const NextNavbar = ({ toggle, Speed, bg }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [bgNav, setbglNav] = useState(false);
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
    setbglNav(bg);
    window.addEventListener('scroll', changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: '#fff', size: '1em' }}>
        <Nav bg={bg}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <img src={logo} alt="logo" />
            </NavLogo>

            {/* <Bars onClick={toggle}/> */}
            <NavMenu>
              <NavItem>
                <NavLink
                  to="/"
                  onClick={toggleHome}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                ></NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Who We Are
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  What We Offer
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  to="blogs"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Blogs
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
              <NavBtn>
                <NavBtnLink to="Contact Us">
                  {' '}
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
              <NavBtn>
                <NavBtnLink href="/Credit">
                  <a
                    href="/Credit"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                  >
                    Credit Application
                  </a>
                </NavBtnLink>
              </NavBtn>
              {/* Second Nav */}
              {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>

            {/* <MobileIcon onClick={toggle}>
          <FaBars/>
        </MobileIcon> */}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NextNavbar;
