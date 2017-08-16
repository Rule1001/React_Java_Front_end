import * as types from './types';
import axios from  'axios';
import {ROOT} from '../../config';

// fetchProperties
export function fetchProperties() {
    return function (dispatch) {
        dispatch(fetchPropertiesRequest());
        axios.get(`${ROOT}/properties`)
        .then(res => {
            dispatch(fetchPropertiesSuccess(res.data));
        })
        .catch(err => {
            dispatch(fetchPropertiesError(err));
        });
    };
}

export function fetchPropertiesRequest () {
    return {
        type: types.FETCH_PROPERTIES_REQUESTS
    };
}

export function fetchPropertiesSuccess (properties) {
    return {
        type: types.FETCH_PROPERTIES_SUCCESS,
        payload: properties
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

export function fetchPropertiesByIDSuccess (property) {
    return {
        type: types.FETCH_PROPERTIES_BY_ID_SUCCESS,
        payload: property
    };
}

export function fetchPropertiesByIDError (error) {
    return {
        type: types.FETCH_PROPERTIES_BY_ID_ERROR,
        payload: error
    };
}

// addnewProperty
export function addProperty (data) {
    return function (dispatch) {
        dispatch(addPropertyPost(data));
        axios.post(`${ROOT}/properties/-1`, data)
            .then(res => {
                console.log('new property res: ', res);
            })
            .catch(err => {
                alert(err.response.data.errors[0].defaultMessage);
                dispatch(addPropertyError(err));
            });
    };
}

export function addPropertyPost (property_type, bedrooms, location) {
    return {
        type: types.ADD_PROPERTY_POST,
        property_type: property_type,
        bedrooms: bedrooms,
        location: location
    };
}

export function addPropertyError (err) {
    return {
        type: types.ADD_PROPERTY_ERROR,
        payload: err
    };
}
