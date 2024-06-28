import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { getLocalStorage } from "./Controllers";
import Header from "./Header/Header";
import Products from "./Products/Products";
import { setProducts } from "./Redux-toolbox/shopSlice";
import ShoppingCartContent from "./ShoppingCartContent/ShoppingCartContent";

const App = () => {
  const dispatch = useDispatch();

  const getApiData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    dispatch(setProducts(data));
  };

  useEffect(() => {
    const storedData = getLocalStorage("data");
    if (storedData) {
      dispatch(setProducts(storedData));
      console.log(storedData);
    } else {
      getApiData();
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/shoppingcart" element={<ShoppingCartContent />} />
      </Routes>
    </>
  );
};

export default App;
