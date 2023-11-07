import React from 'react';
import { StyledFooterContent } from './styles/FooterContent.styled';

const FooterContent = () => {
  return (
    <StyledFooterContent>
      <span>
        Made with ☕ by{' '}
        <a href="https://www.allanviray.com" target="_blank">
          Allan Viray
        </a>
      </span>
    </StyledFooterContent>
  );
};

export default FooterContent;
