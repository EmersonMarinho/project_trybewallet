import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { history, dispatch } = this.props;
    dispatch(login({ email }));
    history.push('/carteira');
  };

  isValidEmail = (email) => {
    const verifyEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return verifyEmail.test(email);
  };

  isValidPassword = (password) => {
    const MIN_LENGTH = 6;
    return password.length >= MIN_LENGTH;
  };

  render() {
    const { email, password } = this.state;

    return (
      <section>
        <form>
          <input
            type="email"
            name="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
            placeholder="Senha"
          />

          <button
            type="submit"
            disabled={ !this.isValidEmail(email) || !this.isValidPassword(password) }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  dispatch: PropTypes.func.isRequired,
}.isRequired;

export default connect()(Login);
