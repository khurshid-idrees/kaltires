import TiresWareHouse from '../../images/TireWarehouse.jpeg';
import Post from '../Post';

import {
  AboutContainerSubHeading,
  AboutContainer,
} from './BlogComponentElements';
export default function BlogPageComponent({ posts }) {
  return (
    <>
      <AboutContainer>
        <AboutContainerSubHeading>Blogs</AboutContainerSubHeading>
        {posts.map((p) => (
          <Post post={p}></Post>
        ))}
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
