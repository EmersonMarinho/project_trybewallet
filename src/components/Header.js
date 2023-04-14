import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <div>Header</div>
        <h1 data-testid="email-field">
          {email}
        </h1>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.user,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
