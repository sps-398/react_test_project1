import React from "react";

const ProductItem = (props) => {

    function onDeleteBtnClick() {
        props.onDelete(props);
    }

    return (
        <div>
            {props.id}-{props.name}-{props.price} <button onClick={onDeleteBtnClick}>Delete Product</button>
        </div>
    )
}

export default ProductItem;