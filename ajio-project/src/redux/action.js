import axios from "axios";
import { GETREQ } from "./action.Type";

const getReduxData = () => async (dispatch) => {
  const response = await axios.get(`http://localhost:8080/Data`);
  const res = await response.data;
  dispatch({ type: GETREQ, payload: res });
};

export { getReduxData };
