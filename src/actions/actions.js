import * as types from './types';
import axios from  'axios';
import {ROOT} from '../../config';

// fetchProperties
export function fetchProperties() {
    return function (dispatch) {
        dispatch(fetchPropertiesRequest());
        axios.get(`${ROOT}/properties`)
        .then(res => {
            console.log('fetchPropertiesres data: ', res.data);
            dispatch(fetchPropertiesSuccess(res.data.properties));
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchPropertiesError(err));
        });
    };
}

export function fetchPropertiesRequest () {
    return {
        type: types.FETCH_PROPERTIES_REQUESTS
    };
}

export function fetchPROPERTIESSuccess (properties) {
    return {
        type: types.FETCH_PROPERTIES_SUCCESS,
        payload: articles
    };
}

export function fetchpropertiesError (error) {
    return {
        type: types.FETCH_PROPERTIES_ERROR,
        payload: error
    };
}

// fetchPropertiesByID
export function fetchPropertiesByID (id) {
    return function (dispatch) {
        dispatch(fetchPropertiesByIDRequest(id));
        axios.get(`${ROOT}/properties/${id}`)
        .then(res => {
            dispatch(fetchPropertiesByIDSuccess(res.data));
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchPropertiesByIDError(err));
        });
    };
}

export function fetchPropertiesByIDRequest (id) {
    return {
        type: types.FETCH_PROPERTIES_BY_ID_REQUESTS,
        id: id
    };
}

export function fetchPropertiesByIDSuccess (article) {
    return {
        type: types.FETCH_PROPERTIES_BY_ID_SUCCESS,
        payload: article
    };
}

export function fetchPropertiesByIDError (error) {
    return {
        type: types.FETCH_PROPERTIES_BY_ID_ERROR,
        payload: error
    };
}
