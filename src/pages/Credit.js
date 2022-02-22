import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
export const TopN = styled.nav`
  padding-top: 9rem;
`;
export const Credit = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <Navbar Speed={true} toggle={toggle} bg={true}></Navbar>
      <TopN
        data-aidaform-widget="form-2019-12"
        data-url="https://shantanu.aidaform.com/credit-aplication"
        data-width="100%"
        data-height="500px"
        data-do-resize
      ></TopN>
    </>
  );
};
