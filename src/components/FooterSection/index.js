import React from 'react';

import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { GrMapLocation } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';
import {
  FooterContainer,
  SocialMediaActions,
  FooterLogo,
  FotterNav,
  FotterNavH,
  FotterContactN,
  FotterContact,
  FotterContactlist,
  FotterContactNo,
  FotterContactName,
  FotterSocialMedia,
  footerMobileContainer,
} from './FooterSectionElements';
import logo from '../../images/logo.png';
const FooterSection = ({ isOpen, toggle }) => {
  return (
    <FooterContainer id="Footertag">
      <FooterLogo>
        <img src={logo} alt="Logo of KAlTires" />
      </FooterLogo>
      <footerMobileContainer>
        <FotterNav>
          <FotterContact>
            <FotterContactlist>
              <FotterContactName>
                <SocialMediaActions>
                  <AiOutlineMail />
                </SocialMediaActions>{' '}
                Email us
              </FotterContactName>
              <FotterContactNo>info@kaltires.com</FotterContactNo>
            </FotterContactlist>
          </FotterContact>
          {/* <hr align="left" width="100%"></hr> */}
          <FotterContact>
            <FotterContactlist>
              <FotterContactName>
                {' '}
                <SocialMediaActions>
                  <FiPhoneCall />
                </SocialMediaActions>
                Call us
              </FotterContactName>
              <FotterContactName>+800-808-0025</FotterContactName>
            </FotterContactlist>
          </FotterContact>
          {/* <hr align="left" width="100%"></hr> */}
          <FotterContact>
            <FotterContactlist>
              <FotterContactName>
                <SocialMediaActions>
                  <GrMapLocation />
                </SocialMediaActions>
                Find us
              </FotterContactName>
              <FotterContactNo>
                10156 Live Oak Ave Fontana, CA 92335
              </FotterContactNo>
            </FotterContactlist>
          </FotterContact>
          {/* <SocialMediaActions>
            <FaFacebookF/>
            </SocialMediaActions> */}
          {/* <FotterNavH>Email</FotterNavH> */}
          {/* <FotterNavH>Company</FotterNavH>
                <FotterNavH>Advantages</FotterNavH>
                <FotterNavH>Products</FotterNavH>
                <FotterNavH>Contact</FotterNavH> */}
        </FotterNav>
      </footerMobileContainer>

      {/* <FotterSocialMedia>
            <SocialMediaActions>
            <FaFacebookF/>
            </SocialMediaActions>
            <SocialMediaActions>
                <FaTwitter/>
            </SocialMediaActions>
            <SocialMediaActions>
                <FaInstagram/>
            </SocialMediaActions>
          </FotterSocialMedia> */}
      <FotterContactN>
        © Kal Tires Inc, 2021 All rights reserved.{' '}
      </FotterContactN>
    </FooterContainer>
  );
};

export default FooterSection;
