import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const SticNav = styled.nav`
  background: #0076c8;
  width: 100%;
  display: block;
  position: fixed;
  height: 40px;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 20;
  @media screen and (max-width: 768px) {
    display: none;
  }
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fff;
  }
  &:hover {
    color: #fff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
