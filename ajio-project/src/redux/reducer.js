import React from "react";
import { GETREQ } from "./action.Type";

const initialState = {
  loading: false,
  error: false,
  storeData: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETREQ:
      return { ...state, storeData: payload };
    default:
      return state;
  }
};

export default reducer;
