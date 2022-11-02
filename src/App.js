import React, { useState, useEffect } from 'react';
import './App.css';
// import './App.scss';
import { Home , Category,CategoryProduct, ProductDetail,Basket,Checkout,OrderConfirmation,Layout  }from "./components";
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import { getCategories } from "./fetcher";
function App() {
  const [categories, setCategories] = useState({ errorMessage: "", data: [], });


  useEffect(() => {
    const fetchData = async () => {
        const responseObject = await getCategories();
        setCategories(responseObject);
    };
    fetchData();
}, []);

  
  // const handleCateogryClick =id =>{
  //   const fetchData = async () => {
  //     const responseObject = await getProducts(id);
  //     setProducts(responseObject);
  // };
  // fetchData();
  // }

  // const renderCategories=()=>{
  //   return categories.data.map(c =>
  //     <li key ={c.id}> <Link to={`/categories/${c.id}`}>{c.title}</Link> </li>
      
  //     )
  // }
  
  
  return (
    <>
        <BrowserRouter>
          <Routes>
          <Route path = "/" element = {<Layout categories={categories} />} >
          <Route index element = {<Home />} />
          <Route path = "basket" element = {<Basket />} />
          <Route path = "checkout" element = {<Checkout />} />
          <Route path = "products/:productId" element = {<ProductDetail />} />
          <Route path = "categories/:categoryId" element = {<Category />} />
          </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
