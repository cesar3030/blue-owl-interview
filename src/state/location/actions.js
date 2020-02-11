import axios from 'axios';
import {
  FETCH_LOCATION_BEGIN,
  FETCH_LOCATION_DATA,
  FETCH_LOCATION_ERROR
} from './types';

const fetchLocationBegin = () => ({
  type: FETCH_LOCATION_BEGIN
});

const fetchLocationData = data => ({
  type: FETCH_LOCATION_DATA,
  payload: { ...data }
});

const fetchLocationError = error => ({
  type: FETCH_LOCATION_ERROR,
  error
});

export const fetchLocation = _ => async dispatch => {
  dispatch(fetchLocationBegin());
  try {
    const { data } = await axios.get('https://json.geoiplookup.io/');
    dispatch(fetchLocationData(data));
  } catch {
    dispatch(fetchLocationError('Location Request Failed'));
  }
};
