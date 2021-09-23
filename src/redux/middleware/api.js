import { FAILURE, REQUEST, SUCCESS } from '../constants';
import { API_URL } from '../../config';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, type, ...rest } = action;

  next({ ...rest, type: type + REQUEST });

  try {
    const response = await fetch(API_URL + CallAPI).then(async (res) => {
      const data = await res.json();
      if (res.ok) return data;
      throw data;
    });
    return next({ ...rest, type: type + SUCCESS, response });
  } catch (error) {
    throw next({ ...rest, type: type + FAILURE, error });
  }
};
