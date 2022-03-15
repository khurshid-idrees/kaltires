import React from 'react';
import { SticNav, NavLink, Bars, NavMenu } from './StickbarElements';

const Stickbar = () => {
  return (
    <>
      <SticNav>
        <NavMenu>
          <NavLink to="ContactMap" smooth={true} activeStyle>
            Fontana
          </NavLink>
          <NavLink to="ContactMap" smooth={true} activeStyle>
            SanMarcos
          </NavLink>
          <NavLink to="ContactMap" smooth={true} activeStyle>
            Arlington
          </NavLink>
          <NavLink to="ContactMap" smooth={true} activeStyle>
            Springdale
          </NavLink>
          <NavLink to="ContactMap" smooth={true} activeStyle>
            Indianapolis
          </NavLink>
          <NavLink to="ContactMap" smooth={true} activeStyle>
            Kansas
          </NavLink>
          <NavLink to="ContactMap" smooth={true} activeStyle>
            Hampton
          </NavLink>
          <NavLink to="ContactMap" smooth={true} activeStyle>
            Bakersfield
          </NavLink>
          <NavLink to="ContactMap" smooth={true} activeStyle>
            Atlanta
          </NavLink>
          <NavLink to="ContactMap" smooth={true} activeStyle>
            Calexico
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </SticNav>
    </>
  );
};

export default Stickbar;
