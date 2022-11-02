import React, { useState, useEffect } from 'react';
import './App.css';
import './App.scss';
import Category from './components/Category';
import CategoryProduct from './components/CategoryProduct';
import { getCategories, getProducts } from "./fetcher";
function App() {
  const [categories, setCategories] = useState({ errorMessage: "", data: [], });
  const [products, setProducts] = useState({errorMessage:"",data: []});

  useEffect(() => {
    const fetchData = async () => {
        const responseObject = await getCategories();
        setCategories(responseObject);
    };
    fetchData();
}, []);

  
  const handleCateogryClick =id =>{
    const fetchData = async () => {
      const responseObject = await getProducts(id);
      setProducts(responseObject);
  };
  fetchData();
  }

  const renderCategories=()=>{
    return categories.data.map(c =>
      <Category key ={c.id} id={c.id} title={c.title}  onCategoryClick={()=>handleCateogryClick(c.id)}  />
      )
  }
  
  const renderProducts=()=>{
    return products.data.map(p =><CategoryProduct {...p} key={p.id}>{p.title}</CategoryProduct>);
  }
  return (
    <>
    <header>My Store</header>
    <section>

      <nav>
        {categories.errorMessage && <div>error: {categories.errorMessage}</div>}
      {categories.data &&  renderCategories()}

      </nav>
      <main>
        <h1>Products</h1>
        {products.data &&  renderProducts()}
      </main>
    </section>
    <footer>
      Footer
    </footer>
    </>
  );
}

export default App;
