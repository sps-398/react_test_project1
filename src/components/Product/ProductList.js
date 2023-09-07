import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {

    return (
        <div>
            {props.productList.map(product => {
                return <ProductItem id={product.id} name={product.name} price={product.price} onDelete={props.deleteProduct} />
            })}
        </div>
    )
}

export default ProductList;