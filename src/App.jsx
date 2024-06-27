import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getLocalStorage } from "./Controllers";
import Header from "./Header/Header";
import Products from "./Products/Products";
import { setProducts } from "./Redux-toolbox/shopSlice";

const App = () => {
  const dispatch = useDispatch();

  const getApiData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    console.log(data);
    dispatch(setProducts(data));
  };

  useEffect(() => {
    const storedData = getLocalStorage("data");
    if (storedData) {
      dispatch(setProducts(storedData));
    } else {
      getApiData();
    }
  }, []);

  return (
    <>
      <Header />
      <Products />
    </>
  );
};

export default App;
