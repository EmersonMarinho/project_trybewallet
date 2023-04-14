import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAction } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAction());
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <>
        <div>WalletForm</div>
        <input data-testid="value-input" />
        <input data-testid="description-input" />

        <select data-testid="currency-input" label="currency">
          {currencies.map((currency) => (
            <option
              value={ currency }
              key={ currency }
            >
              {currency}
            </option>
          ))}

        </select>

        <select data-testid="method-input">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito ">Cartão de débito</option>
        </select>

        <select data-testid="tag-input">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  // expenses: state.wallet.expenses,

});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  // expenses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
