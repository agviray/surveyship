import React from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import GlobalStyles from './styles/GlobalStyles';
import { StyledLayout } from './styles/Layout.styled';
import Header from './Header';
import Landing from './Landing';

const Layout = ({ auth }) => {
  // - Render content depending on user's logged in status.
  const renderContent = (isLoggedIn) => {
    return isLoggedIn ? (
      <>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </>
    ) : (
      <Landing />
    );
  };

  return (
    <>
      <GlobalStyles />
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
