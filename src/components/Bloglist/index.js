import TiresWareHouse from '../../images/TireWarehouse.jpeg';
import Post from '../Post';
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Link as LinkR } from 'react-router-dom';
import axios from 'axios';
import './style.scss';
// import {
//   AboutContainerSubHeading,
//   AboutContainer,
//   BlogContainer1Content,
//   Containerorlist,
//   BlogContainer1EContent,
//   BlogHero,
// } from '../../components/BlogComponentElements';
import {
  AboutContainerContent1,
  AboutContainerTextContent1,
  AboutContainerHeading,
  AboutContainerPara,
  AboutContainerButton,
  AboutContainerContentrow1,
  AboutContainerImageContent1,
  AboutContainerImageContent3,
} from './../Post/PostElement';
import Singlepost from './singlepost';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
const center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const ContainerCener = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Posts = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default function Bloglist() {
  const [posts, setPosts] = useState([]);
  const [done, setDone] = useState(undefined);
  const [post1, setPost1] = useState([]);
  const maaxstring = 200;
  const x = 0;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const discription = [];
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://kaltireblogs.herokuapp.com/api/posts'
      );
      setPosts(res.data);
      setPost1(res.data[0]);
      setDone(true);
    };

    fetchPosts();
  }, []);
  if (done === true) {
    const desc = post1.desc;

    console.log(desc);
    for (let i = 1; i < 4; i++) {
      var init = maaxstring * i + 1;
      if (i === 1) {
        init = 0;
      }
      var trimmedString = desc.toString().substr(x + init, maaxstring * i);
      discription.push(trimmedString);
    }
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <Navbar Speed={true} toggle={toggle}></Navbar>
      {!done ? (
        <center>
          <ReactLoading type="spin" color="#0076C8" height={100} width={50} />
        </center>
      ) : (
        <Posts>
          <AboutContainerHeading>RECENT BLOGS</AboutContainerHeading>
          {posts.map((p) => (
            <Singlepost post={p} key={p.title}></Singlepost>
          ))}
        </Posts>
      )}

      {/* <AboutContainer>
        <AboutContainerSubHeading>Blogs</AboutContainerSubHeading>
        <BlogContainer1Content>
          <ContainerCener>
            <AboutContainerContentrow1>
              <AboutContainerImageContent1>
                <img src={post1.photo} alt="" />
              </AboutContainerImageContent1>

              <AboutContainerTextContent1>
                <AboutContainerHeading>
                  {new Date(post1.createdAt).toDateString()}
                </AboutContainerHeading>
                <AboutContainerSubHeading>
                  {post1.title}
                </AboutContainerSubHeading>
                <AboutContainerPara>{discription[0]}</AboutContainerPara>
              </AboutContainerTextContent1>
            </AboutContainerContentrow1>
          </ContainerCener>
        </BlogContainer1Content>
        <Containerorlist>
          <BlogContainer1EContent>
            <AboutContainerPara>{discription[1]}</AboutContainerPara>
            <AboutContainerImageContent3>
              <img src={post1.photo} alt="" />
            </AboutContainerImageContent3>
            <AboutContainerPara>{discription[2]}</AboutContainerPara>
          </BlogContainer1EContent>

          {!done ? (
            <center>
              <ReactLoading
                type="spin"
                color="#0076C8"
                height={100}
                width={50}
              />
            </center>
          ) : (
            <Posts>
              <AboutContainerHeading>RECENT BLOGS</AboutContainerHeading>
              {posts.map((p) => (
                <Post post={p} key={p.title}></Post>
              ))}
            </Posts>
          )}
        </Containerorlist>
      </AboutContainer> */}

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
