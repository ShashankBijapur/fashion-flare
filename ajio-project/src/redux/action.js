import axios from "axios";
import { GETREQ, GETSINGLEPROD, POSTCARTREQ, POSTWISHLISTREQ } from "./action.Type";

const getReduxData = (mensNew) => async (dispatch) => {
  const response = await axios.get(`http://localhost:8080/${mensNew}`);
  const res = await response.data;
  dispatch({ type: GETREQ, payload: res });
};

const getSingleProd = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:8080/mensNew/${id}`);
    const res = await response.data;
    dispatch({ type: GETSINGLEPROD, payload: res });
  } catch (err) {
    console.log(err);
  }
};

const postCart = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:8080/cart", payload);
    const res = await response.data;
    dispatch({ type: POSTCARTREQ, payload: res });
  } catch (err) {
    console.log(err);
  }
};

const postWishlist = (payload) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/wishlist",
      payload
    );
    const res = await response.data;
    dispatch({ type: POSTWISHLISTREQ, payload: res });
  } catch (err) {
    console.log(err);
  }
};


export { getReduxData, getSingleProd, postCart, postWishlist };
