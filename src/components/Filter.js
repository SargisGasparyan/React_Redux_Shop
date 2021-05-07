import React from 'react'
import { connect } from 'react-redux'
import {filterProducts,sortProducts} from '../actions/productActions'

const Filter=({products,size,sort,filterProducts,filteredProducts,sortProducts})=>{
    return(
        !filteredProducts?(<div>Loading...</div>):
        (<div className="filter">
            <div>
                <p>productd number is: {filteredProducts.length}</p>
            </div>
            <div>
            Order {" "}
            <select  value={sort} onChange={(e)=>sortProducts(filteredProducts,e.target.value)} value={sort}>
                <option value="latest">Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
            </select>
            </div>
            <div>
            Size{" "}

            <select onChange={(e)=>filterProducts(products,e.target.value)} value={size}>
                <option value="all">All</option>
                <option value="X">X</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="XL">XL</option>
                <option value="XS"> XS</option>
                <option value="XXL">XXL</option>
            </select>
            </div>
            
        </div>)
    )
}

export default connect(
    (state)=>({
    size:state.products.size,
    sort:state.products.sort,
    products:state.products.items,
    filteredProducts:state.products.filteredItems
}),
{
    filterProducts,
    sortProducts
})(Filter)