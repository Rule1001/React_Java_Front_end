import * as types from '../actions/types';

const initialState = {
  properties: [],
  selectedProperty: {},
  loading: false,
  error: null,
};

function reducer(prevState = initialState, action) {
  if (!action) return prevState;

  // fetchProperties
  if (action.type === types.FETCH_PROPERTIES_REQUESTS) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_PROPERTIES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.properties = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_PROPERTIES_ERRORS) {
    const newState = Object.assign({}, prevState);
    newState.properties = [];
    newState.loading = false;
    newState.error = action.error;
    return newState;
  }

  // fetchpropertiesByID
  if (action.type === types.FETCH_PROPERTIES_BY_ID_REQUESTS) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_PROPERTIES_BY_ID_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.selectedProperty = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_PROPERTIES_BY_ID_ERRORS) {
    const newState = Object.assign({}, prevState);
    newState.properties = [];
    newState.selectedProperty = {};
    newState.loading = false;
    newState.error = action.error;
    return newState;
  }

  // addNewProperty
  if (action.type === types.ADD_TV_POST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.ADD_TV_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.newTv = newState.newTv.push(action.payload);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.ADD_TV_ERRORS) {
    const newState = Object.assign({}, prevState);
    newState.tvs = [];
    newState.selectedTvs = {};
    newState.newTv = {},
      newState.loading = false;
    newState.error = action.error;
    return newState;
  }

  return prevState;
}

export default reducer;
