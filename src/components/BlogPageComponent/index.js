import TiresWareHouse from '../../images/TireWarehouse.jpeg';
import Post from '../Post';
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

import axios from 'axios';

import {
  AboutContainerSubHeading,
  AboutContainer,
} from './BlogComponentElements';
const center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
      <AboutContainer>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <AboutContainerSubHeading>Blogs</AboutContainerSubHeading>
        {!done ? (
          <center>
            <ReactLoading type="spin" color="#0076C8" height={100} width={50} />
          </center>
        ) : (
          <div>
            {posts.map((p) => (
              <Post post={p}></Post>
            ))}
          </div>
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
