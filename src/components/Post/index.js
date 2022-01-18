import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
} from "./PostElement.js";

export default function Post({ post }) {
  //   console.log(`simple post${postss}`);
  //   console.log(` postsss ${posts}`);
  const maaxstring = 400;
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
    <ListBlogContainer>
      <OneListBlogContainer>
        <OneListBlogImageContent>
          <img src={post.photo} alt="" />
        </OneListBlogImageContent>
        <OLBCDateContainer>
          {new Date(post.createdAt).toDateString()}
        </OLBCDateContainer>
        <Link to={`/post/${post._id}`} descs={post.desc}>
          <OLBCHeadingContainer>{post.title}</OLBCHeadingContainer>
        </Link>
      </OneListBlogContainer>
    </ListBlogContainer>
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
