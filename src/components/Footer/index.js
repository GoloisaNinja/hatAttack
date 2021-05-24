import React from 'react';
import {
  FooterWrapper,
  FooterInfoWrapper,
  FooterDevWrapper,
  FooterLogoWrapper,
} from './styles';
import { FaTwitter, FaGithub, FaCopyright, FaGlobe } from 'react-icons/fa';
import { InverseLogo } from '../InverseLogo';

export function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <FooterWrapper>
      <div>
        <FooterInfoWrapper>
          <p>HatAttack is not</p>
          <ul>
            <li>a real company</li>
            <li>a shop you can really buy from</li>
            <li>a bad name for a hat shop</li>
          </ul>
          <p>HatAttack original artwork by Jon Collins</p>
        </FooterInfoWrapper>
        <FooterDevWrapper>
          <p>Jon Collins Developer Links</p>
          <div>
            <a href="https://jcodes.page">
              <FaGlobe />
            </a>
            <a href="https://www.twitter.com/GoloisaNinja">
              <FaTwitter />
            </a>
            <a href="https://www.github.com/GoloisaNinja">
              <FaGithub />
            </a>
          </div>
        </FooterDevWrapper>
      </div>
      <FooterLogoWrapper>
        <InverseLogo />
        <FaCopyright />
        <p>{currentYear}</p>
      </FooterLogoWrapper>
    </FooterWrapper>
  );
}
