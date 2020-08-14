import axios from "axios";
import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  ADD_SMURF,
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case FETCH_SMURFS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    }
    case ADD_SMURF: {
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
      };
    }
    default:
      return state;
  }
};
