import TiresWareHouse from '../../images/TireWarehouse.jpeg';
import Post from '../Post';
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

import axios from 'axios';

import {
  AboutContainerSubHeading,
  AboutContainer,
  BlogHero,
} from './BlogComponentElements';
const center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default function BlogPageComponent() {
  const [posts, setPosts] = useState([]);
  const [done, setDone] = useState(undefined);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://kaltireblogs.herokuapp.com/api/posts'
      );
      setPosts(res.data);
      setDone(true);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <BlogHero></BlogHero>
      <AboutContainer>
        <AboutContainerSubHeading>Blogs</AboutContainerSubHeading>
        {!done ? (
          <center>
            <ReactLoading type="spin" color="#0076C8" height={100} width={50} />
          </center>
        ) : (
          <Posts>
            {posts.map((p) => (
              <Post post={p}></Post>
            ))}
          </Posts>
        )}
      </AboutContainer>

      {/* <contentContainer>
          <ContentTextContainer>
            <TextContainer></TextContainer>
            <img src={TiresWareHouse} alt="" />
            <TextContainer></TextContainer>
          </ContentTextContainer>
          <ListBlogContainer>
            <OneListBlogContainer>
              <img src="" alt="" />
              <OLBCDateContainer></OLBCDateContainer>
              <OLBCHeadingContainer></OLBCHeadingContainer>
            </OneListBlogContainer>
          </ListBlogContainer>
        </contentContainer> */}
      {/* <AboutContainerImageContent2>
          <img src={bgimage} alt="" height="460px"/>
            </AboutContainerImageContent2> */}
    </>
  );
}
