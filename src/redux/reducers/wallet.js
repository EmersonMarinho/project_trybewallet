// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const REQUEST = 'REQUEST';
const CURRENCY = 'CURRENCY';
const EXPENSES = 'EXPENSES';
const DELETE_EXPENSE = 'DELETE_EXPENSE';
const EDIT_EXPENSE = 'EDIT_EXPENSE';
const EDIT_FINISH = 'EDIT_FINISH';

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
  case DELETE_EXPENSE: return {
    ...state,
    expenses: state.expenses.filter((expense) => expense.id !== action.payload),
  };
  case EDIT_EXPENSE:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload,
    };
  case EDIT_FINISH:
    return {
      ...state,
      editor: false,
      expenses: [...action.payload],
      idToEdit: 0,
    };
  default:
    return state;
  }
};

export default wallet;
