import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAction, expenseAction, editFinishAction } from '../redux/actions';

const lint = 'Alimentação';

const stateInitial = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: lint,
};

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: lint,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAction());
  }

  handleFinishEdit = () => {
    const { idToEdit, expenses, dispatch } = this.props;
    const { value, description, currency, method, tag } = this.state;
    expenses[idToEdit].value = value;
    expenses[idToEdit].description = description;
    expenses[idToEdit].currency = currency;
    expenses[idToEdit].method = method;
    expenses[idToEdit].tag = tag;
    dispatch(editFinishAction(expenses));
    this.setState(stateInitial);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = () => {
    const { value, description, currency, method, tag } = this.state;
    const saveGlobal = { value, description, currency, method, tag };

    const { dispatch } = this.props;
    dispatch(expenseAction(saveGlobal));

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação' });
  };

  render() {
    const { currencies, editor } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <>
        <div>WalletForm</div>
        <input
          data-testid="value-input"
          placeholder="value"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <input
          data-testid="description-input"
          placeholder="Descrição"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />

        <select
          data-testid="currency-input"
          label="currency"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          {currencies.map((currencyRate) => (
            <option
              value={ currencyRate }
              key={ currencyRate }
            >
              {currencyRate}
            </option>
          ))}

        </select>

        <select
          data-testid="method-input"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>

        <select
          data-testid="tag-input"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>

        {!editor
          ? (
            <button
              type="button"
              onClick={ this.handleSubmit }
            >
              Adicionar despesa

            </button>
          )
          : (
            <button
              type="button"
              onClick={ this.handleFinishEdit }
            >
              Editar despesa

            </button>
          )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func,
  editor: PropTypes.bool,
  idToEdit: PropTypes.number,
  currencies: PropTypes.arrayOf(
    PropTypes.string,
  ),
  expenses: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  })),
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
