import React from 'react';

import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { FaMapMarkedAlt } from 'react-icons/fa';
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
                <a href="mailto:info@kaltires.com">
                  <SocialMediaActions>
                    <AiOutlineMail />
                  </SocialMediaActions>
                </a>{' '}
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
                <a href="tel:800-808-0025">
                  <SocialMediaActions>
                    <FiPhoneCall />
                  </SocialMediaActions>
                </a>
                Call us
              </FotterContactName>
              <FotterContactName>(800) 808-0025</FotterContactName>
            </FotterContactlist>
          </FotterContact>
          {/* <hr align="left" width="100%"></hr> */}
          <FotterContact>
            <FotterContactlist>
              <FotterContactName>
                {' '}
                <a href="https://www.google.com/maps/place/10156+Live+Oak+Ave,+Fontana,+CA+92335,+USA/@34.0685188,-117.4825613,17z/data=!3m1!4b1!4m5!3m4!1s0x80c34b3fc6e50489:0xde8aefe027f7319!8m2!3d34.0685144!4d-117.4803726">
                  <SocialMediaActions>
                    <FaMapMarkedAlt />
                  </SocialMediaActions>
                </a>
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

      <FotterSocialMedia>
        <SocialMediaActions href="https://www.facebook.com/kalgroupusa/">
          <FaFacebookF />
        </SocialMediaActions>
        {/* <SocialMediaActions>
          <FaTwitter />
        </SocialMediaActions> */}
        <SocialMediaActions href="https://www.instagram.com/kalgroupusa">
          <FaInstagram />
        </SocialMediaActions>
      </FotterSocialMedia>

      <FotterContactN>
        © Kal Tires Inc, 2021 All rights reserved.{' '}
      </FotterContactN>
    </FooterContainer>
  );
};

export default FooterSection;
