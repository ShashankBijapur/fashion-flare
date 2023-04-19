

import React, { useEffect, useState } from 'react'
import "../../Mens/Mens.css"
// import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
// import { getReduxData } from "../redux/action";
import { FormControl, FormLabel, Input, Button,Select } from "@chakra-ui/react";
import { deleteSingleData, getProductData, patchSingleData } from "../../../redux/Products/action";
import "./store.css";
import AdminSidebar from '../AdminComps/Sidebar';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Store = () => {
  const [gender, setGender] = useState("men");
  const [editData, setEditData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const Products = useSelector(store => store.ProductReducer.Products);
  
  const handleGenderChange = (e) => {
    setGender(e.target.value);
    dispatch(getProductData(e.target.value));
  };

  const handleEdit = (id, updatedData) => {
    setEditData(updatedData);
    setShowForm(true);
  };

  const handleUpdate = (id, updatedData) => {
    dispatch(patchSingleData(id, updatedData)).then(() => { 
      dispatch(getProductData(gender));
      setShowForm(false);
    });
  };
   
  const handleDelete = (id) => {
    dispatch(deleteSingleData(id)).then(() => {
      dispatch(getProductData(gender));
    });
  };
  
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
      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit} >
      <FormControl id="src" isRequired>
        <FormLabel>Product Image URL</FormLabel>
        <Input type="url" name="src" value={product.src} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="brand" isRequired>
        <FormLabel>Brand</FormLabel>
        <Input type="text" name="brand" value={product.brand} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="category" isRequired>
      <FormLabel>Category</FormLabel>
      <Select name="category" value={product.category} onChange={handleInputChange}>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kid">Kid</option>
      </Select>
      </FormControl>
      <FormControl id="title" isRequired>
        <FormLabel>Product Title</FormLabel>
        <Input type="text" name="title" value={product.title} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="discountPrice" isRequired>
        <FormLabel>Discount Price</FormLabel>
        <Input type="text" name="discountPrice" value={product.discountPrice} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="originalPrice" isRequired>
        <FormLabel>Original Price</FormLabel>
        <Input type="text" name="originalPrice" value={product.originalPrice} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="discount" isRequired>
        <FormLabel>Discount</FormLabel>
        <Input type="text" name="discount" value={product.discount} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="offer" isRequired>
        <FormLabel>Offer</FormLabel>
        <Input type="text" name="offer" value={product.offer} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="genre" isRequired>
        <FormLabel>Genre</FormLabel>
        <Input type="text" name="genre" value={product.genre} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="rating" isRequired>
        <FormLabel>Rating</FormLabel>
        <Input type="text" name="rating" value={product.rating} onChange={handleInputChange} />
      </FormControl>
      <Button type="submit" mt={4} colorScheme="teal">
        Submit
      </Button>
      </form>
      </div>
      )}
    </AdminSidebar>
  );
}

export default Store;
