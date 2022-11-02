// import React, { useContext } from "react";

// import { Link, useNavigate } from "react-router-dom";
// import styled from 'styled-components';

// import { CartContext } from "../contexts/cartContext";



// const ProductInfoArticle = styled.article`
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-template-rows: 0.25fr 1fr 0.25fr;
//     column-gap: 20px;
// `;

// const ProductTitle = styled.div`
//         grid-column: 1 / span 3;
//         color: darkslategray;
//         font-weight: bold;
//         font-size: 1.5em;
//         padding-left: 10px;
//     `;

// const ProductImageContainer = styled.div`
//     padding: 10px;
//     width: 60%;
// `;

// const ProductImage = styled.img`
//     width: 100%;
//     height: 100%;
// `;

// const ProductInfo = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

// const ProductInfoHeader = styled.h3`
//     color: darkslategray;
//     font-size: 1em;
//     font-weight: bold;
//     padding-top: 10px;
//     padding-bottom: 5px;
// `;

// const ProductInfoListItem = styled.li`
//     padding-top: 5px;
// `;

// const ProductInfoStock = styled.div`
//     padding-left: 10px;
//     margin-top: 20px;
//     padding-top: 10px;
//     background-color: lightgrey;
//     height: 20%;
//     width: 30%;
//     border-radius: 5px;
//     font-weight: bold;
//     display: flex;
//     flex-direction: column;
// `;

// const ProductInfoStockLabel = styled.label`
//     padding-bottom: 5px;
// `;

// const ProductInfoAction = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

// const ProductInfoActionButton = styled.button`
//     width: 160px;
//     height: 30px;
//     border-radius: 10px;
//     margin-top: 20px;
//     background-color: lightgray;
//     border: solid 1px slategrey;
//     font-weight: bold;
// `;

// const ProductInfoFinancePrice = styled.div`
//     color: darkslategray;
//     font-size: 2em;
//     font-weight: bold;
//     padding-top: 10px;
// `;
// import { specialChars } from '@testing-library/user-event'
import React from 'react'

const CategoryProduct = ({title, image, specs,features,price,stock}) => {
  return (
    <article>
    <div className='category-product-title'>
        {title}
    </div>
    <figure>
        <div className='category-product-image-container'>
            <img src={`./assets/${image}`} alt={title} />
        </div>
    </figure>
    <aside>
        <div className='category-product-image-dimensions'>
            <h3>Dimensions</h3>
            <label>{specs.dimensions}</label>
        </div >
        {specs.capacity &&
        <div className='category-product-image-capacity'>
            <h3>Capacity</h3>
            <label>{specs.capacity}</label>
        </div >}

        <div className='category-product-info-features'>
        <h3>Features</h3>
                    <ul>
                        {features?.map((f, i) => {
                            return <li key={`feature${i}`}>{f}</li>;
                        })}
                    </ul>
                </div>
     </aside>

     <aside className='category-product-finance'>
                <div className='category-product-finance-'>
                    Rs:{price*84}
                </div >

                <div  className='category-product-info-stock'  >
                    <label>Stock Level: {stock}</label>
                    <label>FREE Delivery</label>
                </div >
                           { /* onClick={() => navigate(`/products/${id}`)}
                           onClick={() => addProduct({id, title, price})}
*/}
                <div className='category-product-action'>
                    <button >
                        View Product
                    </button>
                    <button >Add to Basket</button>
                </div>
            </aside>
    </article>
  )
}

export default CategoryProduct;