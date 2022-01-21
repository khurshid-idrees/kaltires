import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  AboutContainerSubHeading1,
  AboutContainerImage,
  ContentTextContainer,
  TextContainer,
  ListBlogContainer,
  OneListBlogContainer,
  OLBCDateContainer,
  OLBCHeadingContainer,
  MainContentContainer,
  OneListBlogImageContent,
} from './PostElement.js';

export default function Post({ post }) {
  //   console.log(`simple post${postss}`);
  //   console.log(` postsss ${posts}`);
  const maaxstring = 200;
  const x = 0;
  const desc = post.desc;
  const discription = [];
  for (let i = 1; i < 4; i++) {
    var init = maaxstring * i + 1;
    if (i === 1) {
      init = 0;
    }
    var trimmedString = desc.substr(x + init, maaxstring * i);
    discription.push(trimmedString);
  }
  //   console.log(`description h ye${discription}`);
  //   console.log(`description h ye${trimmedString}`);
  return (
    <AboutContainerContent>
      <AboutContainerButton to={`/post/${post._id}`} descs={post.desc}>
        <AboutContainerImageContent>
          <img src={post.photo} alt="" />
        </AboutContainerImageContent>

        <AboutContainerTextContent>
          <AboutContainerHeading>
            {new Date(post.createdAt).toDateString()}
          </AboutContainerHeading>
          <AboutContainerSubHeading1>{post.title}</AboutContainerSubHeading1>
        </AboutContainerTextContent>
      </AboutContainerButton>
    </AboutContainerContent>

    /* <OneListBlogContainer>
        <OneListBlogImageContent>
          <img src={post.photo} alt="" />
        </OneListBlogImageContent>
        <OLBCDateContainer>
          {new Date(post.createdAt).toDateString()}
        </OLBCDateContainer>
        <Link to={`/post/${post._id}`} descs={post.desc}>
          <OLBCHeadingContainer>{post.title}</OLBCHeadingContainer>
        </Link>
      </OneListBlogContainer> */

    // <AboutContainer id="About">
    //   <AboutContainerContent>
    //     <AboutContainerImageContent>
    //       <img src={post.post.photo} alt="" />
    //     </AboutContainerImageContent>
    //     <AboutContainerTextContent>
    //       <AboutContainerHeading>{post.post.updatedAt}</AboutContainerHeading>
    //       <AboutContainerSubHeading>{post.post.title}</AboutContainerSubHeading>
    //       <AboutContainerPara>{discription[0]}</AboutContainerPara>
    //     </AboutContainerTextContent>
    //   </AboutContainerContent>
    //   <MainContentContainer>
    //     <ContentTextContainer>
    //       <TextContainer>{discription[1]}</TextContainer>
    //       <AboutContainerImageContent>
    //         <img src={post.post.photo} alt="" />
    //       </AboutContainerImageContent>
    //       <TextContainer>{discription[2]}</TextContainer>
    //     </ContentTextContainer>

    //   </MainContentContainer>
    // </AboutContainer>
  );
}
