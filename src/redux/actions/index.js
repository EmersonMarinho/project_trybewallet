// Coloque aqui suas actions
import { REQUEST } from '../../types/request';
import { LOGIN } from '../../types/user';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const currency = (payload) => ({
  type: 'CURRENCY',
  payload,
});

export const request = () => ({
  type: REQUEST,
});

export const fetchAction = () => async (dispatch) => {
  dispatch(request());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const arrayCurrencies = Object.keys(data).filter((item) => item !== 'USDT');
  console.log(arrayCurrencies);
  return dispatch(currency(arrayCurrencies));
};
