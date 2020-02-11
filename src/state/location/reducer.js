import {
  FETCH_LOCATION_BEGIN,
  FETCH_LOCATION_DATA,
  FETCH_LOCATION_ERROR
} from './types';

const initState = {
  loading: false,
  error: null,
  ip: null,
  city: null,
  longitude: null,
  latitude: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_LOCATION_BEGIN:
      return { ...state, loading: true, error: null };
    case FETCH_LOCATION_DATA:
      return { ...state, loading: false, ...action.payload };
    case FETCH_LOCATION_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
