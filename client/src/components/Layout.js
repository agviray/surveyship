import React, { useState, useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { StyledLayout } from './styles/Layout.styled';
import Landing from './Landing';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <StyledLayout>
        <Landing />
        <main>{children}</main>
      </StyledLayout>
    </>
  );
};

export default Layout;
