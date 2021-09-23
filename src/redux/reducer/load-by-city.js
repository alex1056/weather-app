import {
  LOAD_BY_CITY,
  LOAD_BY_COORDS,
  REQUEST,
  SUCCESS,
  FAILURE,
  REMOVE_POINT,
} from '../constants';
import { creatKey } from '../utils';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
};

export default (state = initialState, action) => {
  const { type, payload, response } = action;
  switch (type) {
    case LOAD_BY_CITY + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_BY_CITY + SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        entities: {
          ...state.entities,
          [payload.city]: response,
        },
      };
    case LOAD_BY_CITY + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };

    case LOAD_BY_COORDS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_BY_COORDS + SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        entities: {
          ...state.entities,
          [creatKey(payload.lat, payload.lon)]: response,
        },
      };
    case REMOVE_POINT:
      return {
        ...state,
        entities: {
          ...Object.keys(state.entities)
            .filter((key) => key !== payload.point)
            .reduce((newState, point) => {
              newState = { ...newState, [point]: { ...state.entities[point] } };
              return newState;
            }, {}),
        },
      };

    case LOAD_BY_COORDS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };

    default:
      return state;
  }
};
