import React, { useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = (props) => {

    const [products, setProducts] = useState([]);

    return (
        <div>
            <div>
                <ProductForm products={products} setProducts={setProducts} />
            </div>
            <hr className="border border-dark opacity-25 mx-4" />
            <div>
                <ProductList products={products} setProducts={setProducts} />
            </div>
        </div>
    )
}

export default Main