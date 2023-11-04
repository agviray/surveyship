import React, { useState, useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { StyledLayout } from './styles/Layout.styled';

import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <StyledLayout>
        <header>
          <h1>Navbar component</h1>
        </header>
        <main>{children}</main>
      </StyledLayout>
    </>
  );
};

export default Layout;
