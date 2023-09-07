import React, { useState } from "react";

const AddProduct = (props) => {
    const [id, setId] = useState('');
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');

    function idChangeHandler(e) {
        setId(e.target.value);
    }

    function priceChangeHandler(e) {
        setPrice(e.target.value);
    }

    function nameChangeHandler(e) {
        setName(e.target.value);
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        const newProd = {
            id: id,
            name: name,
            price: price
        };
        props.onAddProduct(newProd);

        setId('');
        setPrice('');
        setName('');
    }

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor="id">Id:</label>
                <input id="id" type="text" onChange={idChangeHandler} value={id}></input>
                <label htmlFor="price">Price:</label>
                <input id="price" type="number" min="0" onChange={priceChangeHandler} value={price}></input>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" onChange={nameChangeHandler} value={name}></input>
                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct;