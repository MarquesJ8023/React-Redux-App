import {
  FETCH_SPACEX_DATA_START,
  FETCH_SPACEX_DATA_SUCCESS,
  FETCH_SPACEX_DATA_FAIL
} from '../actions';

const initialState = {
  launches: [],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case FETCH_SPACEX_DATA_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SPACEX_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        launches: action.payload,
        error: ''
      };
      case FETCH_SPACEX_DATA_FAIL:
        return {
          ...state,
          error: action.payload
        };
    default:
      return state;
  }
};
