import React, { useState, useEffect } from 'react';
import BlogPageComponent from '../components/BlogPageComponent';

import Sidebar from '../components/Sidebar';
import axios from 'axios';
import Stickbar from '../components/Stickbar';
import NextNavbar from '../components/NextNavbar';
const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <NextNavbar Speed={true} toggle={toggle} bg={true}></NextNavbar>

      <BlogPageComponent></BlogPageComponent>
    </>
  );
};

export default BlogPage;
