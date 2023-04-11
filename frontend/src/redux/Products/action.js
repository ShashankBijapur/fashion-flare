import axios from "axios";
import { GETREQ,GETSINGLEPROD , PATCHSINGLEPROD,DELETESINGLEPROD,  POSTREQ} from "./action.Type";
// import {  SORTINGLH } from "./action.Type";
// import { distance } from "framer-motion";


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

const postProductData = (category, productData) => async (dispatch) => {
  const response = await axios.post(`http://localhost:4000/product/${category}`, productData);
  const res = await response.data;
  dispatch({ type: POSTREQ, payload: res });
};

const patchSingleData = (category, id, updatedData) => async (dispatch) => {
  const response = await axios.patch(
    `http://localhost:4000/product/${category}/${id}`,
    updatedData
  );
  const res = await response.data;
  dispatch({ type: PATCHSINGLEPROD, payload: res });
};

const deleteSingleData = (category, id) => async (dispatch) => {
  const response = await axios.delete(
    `http://localhost:4000/product/${category}/${id}`
  );
  const res = await response.data;
  dispatch({ type: DELETESINGLEPROD, payload: res });
};



const handleSortByRedux =(sortedProduct) =>(dispatch) => {
  console.log("sortedRedux",sortedProduct)
  dispatch({ type: GETREQ, payload: sortedProduct });

  };



  export {
    getProductData,
    getSingleData,
    patchSingleData,
    deleteSingleData,
    postProductData,
    handleSortByRedux,
    
  };
