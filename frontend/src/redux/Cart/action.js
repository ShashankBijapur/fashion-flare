import axios from "axios";
import { GETCARTREQ, POSTCARTREQ, POSTWISHLISTREQ } from "./action.Type";

const addToCart = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("https://smiling-wear-pig.cyclic.app/cart/add", payload);
    
    dispatch({ type: POSTCARTREQ, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getCartData = () =>async (dispatch) => {
  try {
    const response = await axios.get("https://smiling-wear-pig.cyclic.app/cart/");
    
    dispatch({ type: GETCARTREQ, payload:response.data });
  } catch (err) {
    console.log(err);
  }
  
};

const addToWishlist = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("https://smiling-wear-pig.cyclic.app/wishlist/add", payload);
    
    dispatch({ type: POSTWISHLISTREQ, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export { addToCart,addToWishlist, getCartData };
