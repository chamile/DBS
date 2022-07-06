
import React, {createContext, useReducer} from 'react';
import { actionTypes } from './utils/actionTypes';

export const Store = createContext();


const initialState = {
  loading: false,
  listData: [],
  searchKeyword: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOADING_IN_PROGRESS:
      return {...state, loading: action.payload};
    case actionTypes.SAVE_DOWNLOADED_LIST:
      return {...state, listData: action.payload};
    case actionTypes.UPDATE_SEARCH_STRING:
      return {...state, searchKeyword: action.payload};
      
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {state, dispatch};

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};