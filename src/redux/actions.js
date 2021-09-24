import {
  REQUEST,
  SUCCESS,
  FAILURE,
  INCREMENT,
  LOAD_BY_COORDS,
  LOAD_BY_CITY,
  REMOVE_POINT,
} from './constants';
import { API_KEY } from '../config';

export const increment = () => ({ type: INCREMENT });

export const loadByCity = ({ city }) => ({
  type: LOAD_BY_CITY,
  CallAPI: `?q=${city}&appid=${API_KEY}`,
  payload: { city },
});

export const loadByCoords = ({ lat, lon }) => ({
  type: LOAD_BY_COORDS,
  CallAPI: `?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  payload: { lat, lon },
});

export const removePoint = ({ point }) => ({
  type: REMOVE_POINT,
  payload: { point },
});
