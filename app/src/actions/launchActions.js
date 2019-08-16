import axios from 'axios';

export const FETCH_SPACEX_DATA_START = 'FETCH_SPACEX_DATA_START';
export const FETCH_SPACEX_DATA_SUCCESS = 'FETCH_SPACEX_DATA_SUCCESS';
export const FETCH_SPACEX_DATA_FAIL = 'FETCH_SPACEX_DATA_FAIL';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_SPACEX_DATA_START });
    axios
      .get('https://api.spacexdata.com/v3/launches/latest')
      .then(res => {
        // res.data.data
        console.log(res);
        dispatch({ type: FETCH_SPACEX_DATA_SUCCESS, payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: FETCH_SPACEX_DATA_FAIL, payload: err });
      });
  };
