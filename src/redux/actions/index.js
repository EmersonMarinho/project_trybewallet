// Coloque aqui suas actions
const LOGIN = 'LOGIN';
const REQUEST = 'REQUEST';
const CURRENCY = 'CURRENCY';
const EXPENSES = 'EXPENSES';
const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const currency = (payload) => ({
  type: CURRENCY,
  payload,
});

export const request = () => ({
  type: REQUEST,
});

export const expense = (payload) => ({
  type: EXPENSES,
  payload,

});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const fetchAction = () => async (dispatch) => {
  dispatch(request());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const arrayCurrencies = Object.keys(data).filter((item) => item !== 'USDT');
  return dispatch(currency(arrayCurrencies));
};

export const expenseAction = (localState) => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const expenseWithExchangeRates = { ...localState, exchangeRates: data };
    dispatch(expense(expenseWithExchangeRates));
  } catch (error) {
    console.log(error);
  }
};
