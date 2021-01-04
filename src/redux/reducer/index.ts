import { GET_DATA } from '../actions/types';

const initialState: any = { getdata: [] };

const searchDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, getdata: action.payload };

    default:
      return state;
  }
};

export default searchDataReducer;
