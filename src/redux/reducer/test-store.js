import { DECREMENT, INCREMENT } from '../constants';

const initialState = {
  someValue: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        someValue: (state.someValue += 1),
      };
    default:
      return state;
  }
};
