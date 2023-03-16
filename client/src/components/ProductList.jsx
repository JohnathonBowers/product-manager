import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

    const {products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }, [products, setProducts])

    return (
        <div className="container col-sm-6 mt-4 pt-4 d-flex flex-column align-items-center">
            <h1 className="mb-4">All Products</h1>
            {
                products.map((product, index) => {
                    return (
                        <div key={index} className="my-2">
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList