import React from 'react'

const Filter=({filterPrice,filterSize,products,size,sort})=>{
    return(
        <div className="filter">
        
            <div>
                <p>productd number is: {products.length}</p>
            </div>
            <div>
            Order {" "}
            <select  onChange={filterPrice} value={sort}>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
            </select>
            </div>
            <div>
            Size{" "}

            <select onChange={filterSize} value={size}>
                <option value="all">All</option>
                <option value="X">X</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="XL">XL</option>
                <option value="XS"> XS</option>
                <option value="XXL">XXL</option>
            </select>
            </div>
            
        </div>
    )
}

export default Filter