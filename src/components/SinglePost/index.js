import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import './style.css';
import {
  AboutContainer,
  AboutContainerImageContent2,
  SpaceTruck,
  AboutContainerContent,
  AboutContainerTextContent,
  AboutContainerHeading,
  AboutContainerSubHeading,
  AboutContainerPara,
  AboutContainerButton,
  AboutContainerImageContent,
  AboutContainerImage,
  ContentTextContainer,
  TextContainer,
  ListBlogContainer,
  OneListBlogContainer,
  OLBCDateContainer,
  OLBCHeadingContainer,
  MainContentContainer,
  OneListBlogImageContent,
} from './SinglePostElement.js';

const SinglePost = ({ descs }) => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const [posts, setPosts] = useState({});
  const [desc, setDesc] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('http://localhost:5000/api/posts/' + path);
      setPosts(res.data);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  //   console.log(` postsss ${posts}`);
  const maaxstring = 200;
  const x = 0;

  const discription = [];
  console.log(desc);
  for (let i = 1; i < 4; i++) {
    var init = maaxstring * i + 1;
    if (i === 1) {
      init = 0;
    }
    var trimmedString = desc.toString().substr(x + init, maaxstring * i);
    discription.push(trimmedString);
  }
  //   console.log(`description h ye${discription}`);
  //   console.log(`description h ye${trimmedString}`);

  return (
    <>
      <div class="container">
        <img src={posts.photo} alt="" />
        <div class="box1">
          <h2>{discription[0]}</h2>
          <br />
          <h1>{posts.title}</h1>
          <br />
          <h2>{new Date(posts.createdAt).toDateString()} • 5 Min Read</h2>
        </div>
      </div>

      <div class="container-2">
        <div class="content">
          <h1>{posts.title}</h1>
          <p>{discription[0]}</p>

          <br />
          <br />
          {/* <a href="#">
            Click Here: Find the Right Solutions to Optimize Your Warehouse
            Receiving Process
          </a> */}

          <p>{discription[1]}</p>

          <br />
          <br />
          <br />

          <img src={posts.photo} alt="" />
          <p>{discription[2]}</p>
        </div>
      </div>
    </>

    // <ListBlogContainer>
    //   <OneListBlogContainer>
    //     <OneListBlogImageContent>
    //       <img src={post.photo} alt="" />
    //     </OneListBlogImageContent>
    //     <OLBCDateContainer>
    //       {new Date(post.createdAt).toDateString()}
    //     </OLBCDateContainer>
    //     <Link to={`/post/${post._id}`}>
    //       <OLBCHeadingContainer>{post.title}</OLBCHeadingContainer>
    //     </Link>
    //   </OneListBlogContainer>
    // </ListBlogContainer>
    // <AboutContainer id="About">
    //   <AboutContainerContent>
    //     <AboutContainerImageContent>
    //       <img src={posts.photo} alt="" />
    //     </AboutContainerImageContent>
    //     <AboutContainerTextContent>
    //       <AboutContainerHeading>
    //         {new Date(posts.createdAt).toDateString()}
    //       </AboutContainerHeading>
    //       <AboutContainerSubHeading>{posts.title}</AboutContainerSubHeading>
    //       <AboutContainerPara>{discription[0]}</AboutContainerPara>
    //     </AboutContainerTextContent>
    //   </AboutContainerContent>
    //   <MainContentContainer>
    //     <ContentTextContainer>
    //       <TextContainer>{discription[1]}</TextContainer>
    //       <AboutContainerImageContent>
    //         <img src={posts.photo} alt="" />
    //       </AboutContainerImageContent>
    //       <TextContainer>{discription[2]}</TextContainer>
    //     </ContentTextContainer>
    //   </MainContentContainer>
    // </AboutContainer>
  );
};
export default SinglePost;
