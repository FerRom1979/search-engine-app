import { GET_DATA, GET_DATA_DUCK } from '../actions/types';

const initialState: any = { getdata: [], getInfo: [] };

const searchDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, getdata: action.payload };
    case GET_DATA_DUCK:
      return { ...state, getInfo: action.payload };
    default:
      return state;
  }
};

export default searchDataReducer;
