import React, { useState, useReducer } from "react";
import axios from "axios";

export const useAxios = () => {

  const actions = {
    LOADING: 'LOADING',
    DATA: 'DATA',
    ERROR: 'ERROR',
  } 

  const dataReducer = (state, action) => {
    
    console.log(JSON.stringify(action))
    
    switch (action.type) {
      case actions.LOADING:
        return {
          ...state,
          loading: true,
          error: false
        };
      case actions.DATA:
        return {
          loading: false,
          data:  {result: action.data},
          error: false
        };
      case actions.ERROR:
        return {
          ...state,
          loading: false,          
          error: action.error
        };
      
      default:
        return state;
    }
  }

  const initialState = {
    data: {result: []},
    loading: false,
    error: false
  }  

  const [state, dispatch] = useReducer(dataReducer, initialState)
  //const [users, setUsers] = useState([]);

  const getData = () => {

    dispatch({ type: actions.LOADING, data: null }); 

    axios
      .get(`https://replitExpress.magneka.repl.co/users2`)
      .then(result => {
        console.log(result.data);
        dispatch({ type: actions.DATA, data: result.data });
        //setUsers(result.data);
      })
      .catch(error => {
        console.error("error: ", error);
      });
  };

  return { state, getData };
};
