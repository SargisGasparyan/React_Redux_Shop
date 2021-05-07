import {FETCH_PRODUCTS} from '../types'
import {FETCH_PRODUCTS_BY_SIZE} from '../types'
import {ORDER_PRODUCTS_BY_PRICE} from '../types'
import {ADD_PRODUCT_IN_CART} from '../types'
import {REMOVE_PRODUCT_FROM_CART} from '../types'
export const fetchProducts=()=>async (dispatch)=>{
    const res=await fetch("/api/products")
    const data=await res.json()
    dispatch({
        type:FETCH_PRODUCTS,
        payload:data
    })
}

export const filterProducts=(products,size)=>(dispatch)=>{
    dispatch({
        type: FETCH_PRODUCTS_BY_SIZE,
        payload:{size:size,
        items:products.filter((x)=>x.availableSizes.indexOf(size)>=0)
        }
    })
}

export const sortProducts=(filteredProducts,sort)=>(dispatch)=>{
const sortedProducts=filteredProducts.slice()
    if(sort==="latest"){
        sortedProducts.sort((a,b)=>(a._id>b._id?1:-1))
    }else{
        sortedProducts.sort((a,b)=>sort==="lowest"
        ?a.price>b.price?1:-1
        :a.price>b.price?-1:1
        )
    }
    dispatch({
    type:ORDER_PRODUCTS_BY_PRICE,
    payload:{
        sort:sort,
        items:sortedProducts
    }
})
}

export const addProduct=(product)=>(dispatch,getState)=>{
    const cartItems= getState().cart.cartItems.slice()
    let exist= false
    cartItems.forEach(element => {
        if(element._id == product._id){
            element.count++;
            exist=true
        }
    });
    if(!exist){
        cartItems.push({...product,count:1})
    }
    dispatch({
        type:ADD_PRODUCT_IN_CART,
        payload:{cartItems}
    })
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
}

export const removeProduct=(product)=>(dispatch,getItem)=>{
    const cartItems=getItem().cart.cartItems.slice().filter((x)=>x._id!==product._id)
    dispatch({
        type:REMOVE_PRODUCT_FROM_CART,
        payload:{cartItems}
    })
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
}