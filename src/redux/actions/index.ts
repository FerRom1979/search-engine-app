import { GET_DATA, GET_DATA_DUCK } from '../actions/types';
import axios from 'axios';

export const getDataAction = (info: string) => async (dispatch: any /* , getState: any */) => {
  if (info !== '')
    try {
      const res = await axios.get(
        // eslint-disable-next-line no-undef
        `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_URL}&cx=${process.env.REACT_APP_NOT_SECRET_CODE_CX}&q=${info}`
      );
      dispatch({
        type: GET_DATA,
        payload: res.data.items,
      });
    } catch (error) {
      console.log(error);
    }
};
export const getDataDuck = (info: string) => async (dispatch: any) => {
  if (info !== '')
    try {
      const res = await axios.get(`http://api.duckduckgo.com/?q=${info}&format=json&k1=-1 `);
      dispatch({
        type: GET_DATA_DUCK,
        payload: res.data.RelatedTopics,
      });
    } catch (error) {
      console.log(error);
    }
};
