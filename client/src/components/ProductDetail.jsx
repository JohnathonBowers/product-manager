import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const ProductDetail = (props) => {
    
    const [product, setProduct] = useState({})
    const {id} = useParams()
    // Converting the cents stored in MongoDB back to dollars. The logic for this comes from ChatGPT (see the comment in my model file).
    const productPrice = (value => ( value / 100).toFixed(2))
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then (res => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div className="card col-sm-5 mx-auto mt-4">
            <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-subtitle my-2"><strong>Price: </strong>${productPrice(product.price)}</p>
                <p className="card-text my-2"><strong>Description: </strong>{product.description}</p>
                <Link to="/products" className="my-2">Back</Link>
            </div>
        </div>
    )
}

export default ProductDetail