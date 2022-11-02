import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getProductById } from '../fetcher';


const ProductDetail = () => {
    const [products, setProducts] = useState({errorMessage:"",data: []});
    // const params = useParams(); 
    const {productId}= useParams(); 
    
    useEffect(()=>{
        const fetchData = async () => {
            const responseObject = await getProductById(productId);//params.productId
            setProducts(responseObject);
        };
        fetchData();
    },[productId])

  return (
    <div>ProductDetail id:{products.data.title} </div>
  )
}

export default ProductDetail;