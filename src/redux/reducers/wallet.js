// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST } from '../../types/request';

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
  case 'CURRENCY':
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
