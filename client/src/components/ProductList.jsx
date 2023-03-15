import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = (props) => {

    const {products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])



    return (
        <div className="container col-sm-6 mt-4 pt-4">
            {
                products.map((product, index) => {
                    return 
                })
            }
        </div>
    )
}

export default ProductList