import React, { useState, useEffect } from 'react';
import BlogPageComponent from '../components/BlogPageComponent';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://kaltireblogs.herokuapp.com/api/posts'
      );
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <Navbar Speed={true} toggle={toggle}></Navbar>
      <BlogPageComponent posts={posts}></BlogPageComponent>
    </>
  );
};

export default BlogPage;
