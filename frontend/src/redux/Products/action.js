import axios from "axios";
import { GETREQ, GETSINGLEPROD, SORTINGLH } from "./action.Type";
import { distance } from "framer-motion";

const getProductData = (category) => async (dispatch) => {
  const response = await axios.get(`http://localhost:4000/product/${category}`);
  const res = await response.data;
  dispatch({ type: GETREQ, payload: res });
};
const getSingleData = (category, id) => async (dispatch) => {
  const response = await axios.get(
    `http://localhost:4000/product/${category}/${id}`
  );
  const res = await response.data;
  // console.log("redux",res)
  dispatch({ type: GETSINGLEPROD, payload: res });
};

const handleSortByRedux =(sortedProduct) =>(dispatch) => {
  console.log("sortedRedux",sortedProduct)
  dispatch({ type: GETREQ, payload: sortedProduct });

  };

export { getProductData, getSingleData,handleSortByRedux };
