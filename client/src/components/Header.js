import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';

// Using class based component.
class Header extends Component {
  // - Check this.props.auth property, to determine the Header UI to display.
  // - Different UI to display depending on user's current login status.
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        // return (
        //   <li>
        //     <a href="/auth/google">Log with Google</a>
        //   </li>
        // );
        return;
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav>
        <div style={{ margin: '0 10px' }} className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            SurveyShip
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth: auth,
  };
};

export default connect(mapStateToProps)(Header);
