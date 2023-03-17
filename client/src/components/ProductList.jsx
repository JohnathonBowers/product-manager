import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

    const {products, setProducts} = props;

    const navigate = useNavigate();

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
                        <div key={index} className="my-2 d-flex flex-row align-items-center">
                            <Link to={`/products/${product._id}`} className="me-2">{product.title}</Link>
                            <button className="btn btn-warning" onClick={e => navigate(`/products/edit/${product._id}`)}>Edit</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList