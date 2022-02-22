import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkR } from 'react-router-dom';
// import {
//   AboutContainer,
//   AboutContainerImageContent2,
//   SpaceTruck,
//   AboutContainerContent,
//   AboutContainerTextContent,
//   AboutContainerHeading,
//   AboutContainerSubHeading,
//   AboutContainerPara,
//   AboutContainerButton,
//   AboutContainerImageContent,
//   AboutContainerSubHeading1,
//   AboutContainerImage,
//   ContentTextContainer,
//   TextContainer,
//   ListBlogContainer,
//   OneListBlogContainer,
//   OLBCDateContainer,
//   OLBCHeadingContainer,
//   MainContentContainer,
//   OneListBlogImageContent,
// } from './PostElement.js';

export default function Singlepost({ post }) {
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
    <div class="containerss mt-5">
      <div class="row">
        <div class="col-12">
          <article class="blog-card">
            <div class="blog-card__background">
              <div class="card__background--wrapper">
                <div
                  class="card__background--main"
                  style={{
                    backgroundImage: `url(${post.photo})`,
                  }}
                >
                  <div class="card__background--layer"></div>
                </div>
              </div>
            </div>
            <div class="blog-card__head">
              <span class="date__box">
                {new Date(post.createdAt).toDateString()}
                {/* <span class="date__day">11</span>
              <span class="date__month">JAN</span> */}
              </span>
            </div>
            <div class="blog-card__info">
              <h5>{post.title}</h5>
              <p>
                {/* <a href="#" class="icon-link mr-3">
                  <i class="fa fa-pencil-square-o"></i>
                </a>
                <a href="#" class="icon-link">
                  <i class="fa fa-comments-o"></i> 150
                </a> */}
              </p>
              <p>{discription[0]}</p>
              <LinkR
                to={`/post/${post._id}`}
                class="btn btn--with-icon"
                descs={discription[0]}
              >
                <i class="btn-icon fa fa-long-arrow-right"></i>READ MORE
              </LinkR>
            </div>
          </article>
        </div>
      </div>
    </div>

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
