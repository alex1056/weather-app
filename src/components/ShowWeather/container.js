import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as Actions from '../../redux/actions';
import * as selectors from '../../redux/selectors';

const mapStateToProps = createStructuredSelector({
  weatherCitiesAndCoords: selectors.weatherSelector,
});

const mapDispatchToProps = {
  loadByCity: Actions.loadByCity,
  loadByCoords: Actions.loadByCoords,
  removePoint: Actions.removePoint,
};

export const connector = connect(mapStateToProps, mapDispatchToProps);
