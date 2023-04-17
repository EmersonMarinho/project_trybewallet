import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <>
        <div>Header</div>
        <h1 data-testid="email-field">
          {email}
        </h1>
        <span data-testid="total-field">
          {expenses.reduce((acc, item) => acc + item.value
        * item.exchangeRates[item.currency].ask, 0).toFixed(2)}
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.user,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)).isRequired,
};

export default connect(mapStateToProps)(Header);
