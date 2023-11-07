import React from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import GlobalStyles from './styles/GlobalStyles';
import GlobalFonts from './styles/GlobalFonts';
import { StyledLayout } from './styles/Layout.styled';
import Navbar from './Navbar';
import Landing from './Landing';
import FooterContent from './FooterContent';

const Layout = ({ auth }) => {
  // - Render content depending on user's logged in status.
  const renderContent = (isLoggedIn) => {
    return isLoggedIn ? (
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <FooterContent />
        </footer>
      </>
    ) : (
      <>
        <Landing />
        <footer>
          <FooterContent />
        </footer>
      </>
    );
  };

  return (
    <>
      <GlobalStyles />
      <GlobalFonts />
      <StyledLayout>{renderContent(auth)}</StyledLayout>
    </>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    auth: auth,
  };
};

export default connect(mapStateToProps)(Layout);
