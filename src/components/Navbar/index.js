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
} from './NavbarElements';

const Navbar = ({ toggle, Speed, bg }) => {
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
                <NavLinks
                  to={bg ? '/' : 'Home'}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Home
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to={bg ? '/' : 'About'}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Who We Are
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Products"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  What We Offer
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Advantages"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Why Choose Us
                </NavLinks>
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

              {/* Second Nav */}
              {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
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
              <NavBtnLink>
                <a
                  href="/Credit"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Credit
                </a>
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
