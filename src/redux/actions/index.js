// Coloque aqui suas actions
import { LOGIN } from '../../types/user';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});
