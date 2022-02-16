import React, { useState, useEffect } from 'react';
import BlogPageComponent from '../components/BlogPageComponent';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import Stickbar from '../components/Stickbar';

const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <Navbar Speed={true} toggle={toggle} bg={true}></Navbar>

      <BlogPageComponent></BlogPageComponent>
    </>
  );
};

export default BlogPage;
