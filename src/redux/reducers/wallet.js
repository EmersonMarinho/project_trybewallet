// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const REQUEST = 'REQUEST';
const CURRENCY = 'CURRENCY';
const EXPENSES = 'EXPENSES';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST: return {
    ...state,
  };
  case CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  case EXPENSES: return {
    ...state,
    expenses: [...state.expenses, {
      id: state.expenses.length,
      ...action.payload,
    }],
  };
  default:
    return state;
  }
};

export default wallet;
