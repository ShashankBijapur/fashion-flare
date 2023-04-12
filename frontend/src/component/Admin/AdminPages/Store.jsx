

import React, { useEffect, useState } from 'react'
import "../../Mens/Mens.css"
// import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
// import { getReduxData } from "../redux/action";

import { deleteSingleData, getProductData, patchSingleData } from "../../../redux/Products/action";
import "./store.css";
import AdminSidebar from '../AdminComps/Sidebar';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Store = () => {
  const [gender, setGender] = useState("men");
  const dispatch = useDispatch();
  const Products = useSelector(store => store.ProductReducer.Products);
  
  const handleGenderChange = (e) => {
    setGender(e.target.value);
    dispatch(getProductData(e.target.value));
  };

  const handleEdit = (id, updatedData) => {
    dispatch(patchSingleData(id, updatedData));
  };
   
  const handleDelete = (id) => {
    dispatch(deleteSingleData(id)).then(() => {
      dispatch(getProductData(gender));
    });
  };
  
  useEffect(() => {
    dispatch(getProductData('men'));
  }, []);

    useEffect(() => {
      dispatch(getProductData('men'));
    }, []);

   

  return (
    <AdminSidebar heading={"Store"}>
      <div className='mens-cont'>
        <div className="mens-wrapper">
          <div className='mens-left'>
            <div className="filter-div">
              <div>
                <label>Gender</label>
                <select className='select-tag-mens' value={gender} onChange={handleGenderChange}>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kid">Kid</option>
                </select>
              </div>
            </div>
          </div>
          <div className='mens-right'>
            <div className='mens-content-wrapper'>
              <div className='mens-content'>
                {Products?.map((item) =>
                  <div className='card-cont'>
                    <div className='img-div'>
                      <img src={item.src} alt="" />
                    </div>
                    <div className='card-content-wrap'>
                      <div className="card-content">
                        <div>{item.brand}</div>
                        <div>{item.nameCls}</div>
                        <div> {item.price}</div>
                        <div>Offer price {item.offer} </div>
                      </div>
                      <div className="card-icons">
                        <FaEdit onClick={() => handleEdit(item._id, {brand: "updated brand"})} />
                        <FaTrash onClick={() => handleDelete(item._id)} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminSidebar>
  );
}

export default Store;
