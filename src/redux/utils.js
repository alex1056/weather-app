import { createSelector } from 'reselect';

export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const getById = (selector, defaultValue) =>
  createSelector(
    selector,
    (_, props) => props.id,
    (entity, id) => entity[id] || defaultValue,
  );

export const creatKey = (...args) => {
  return args.map((arg) => `<${String(arg)}>`).join(',');
};
