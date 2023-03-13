import React, { useState } from 'react';
import axios from "axios";

const ProductForm = (props) => {

    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    });

    const priceNumber = parseFloat(product.price)

    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title: product.title,
            price: product.price,
            description: product.description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err))
        setProduct({
            title: "",
            price: "",
            description: ""
        })
    }

    return (
        <div className="container col-sm-6 mt-4 pt-4 border border-dark">
            <h1 className="text-center">Product Manager</h1>
            <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row my-4">
                    <label htmlFor="title" className="col-form-label col-sm-3">Title:</label>
                    <div className="col-sm-9">
                        <input type="text" name="title" className="form-control" onChange={handleChange} value={product.title} />
                        {
                            product.title && product.title.length < 2 ?
                            <p className="text-danger my-2">Title must be at least two characters long.</p> :
                            ""
                        }
                    </div>
                </div>
                <div className="d-flex flex-row my-4">
                    <label htmlFor="price" className="col-form-label col-sm-3">Price:</label>
                    <div className="col-sm-9">
                        <input type="text" name="price" className="form-control" onChange={handleChange} value={product.price} />
                        {
                            product.price && priceNumber < 0 ?
                            <p className="text-danger my-2">Price cannot be less than zero.</p> :
                            ""
                        }
                    </div>
                </div>
                <div className="d-flex flex-row my-4">
                    <label htmlFor="description" className="col-form-label col-sm-3">Description:</label>
                    <div className="col-sm-9">
                        <textarea name="description" className="form-control" cols="30" rows="4" onChange={handleChange} value={product.description} ></textarea>
                        {
                            product.description && product.description.length < 10 ?
                            <p className="text-danger my-2">Description must be longer than ten characters.</p> :
                            ""
                        }
                        {
                            product.description && product.description.length > 300 ?
                            <p className="text-danger my-2">Description must be 300 characters or less.</p> :
                            ""
                        }
                    </div>
                </div>
                <div className="row my-4 mx-2 justify-content-end">
                    {
                        product.title.length >= 2 && priceNumber >= 0 && product.description.length >= 10 && product.description.length <= 300 ?
                        <input type="submit" className="btn btn-primary col-sm-2" value="Submit" /> :
                        <input type="submit" className="btn btn-primary col-sm-2" value="Submit" disabled/>
                    }
                </div>
            </form>
        </div>
    )
}

export default ProductForm