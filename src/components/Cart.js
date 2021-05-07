import React from 'react'
import {formatCurrency} from './util.js'
import {Fade} from 'react-reveal'
import { connect } from 'react-redux'
import {removeProduct} from '../actions/productActions'
import {createOrder,clearOrder} from '../actions/orderActions'
import Zoom from 'react-reveal/Zoom'
import Modal from 'react-modal'


 const Cart=({removeProduct,cartItems,createOrder,clearOrder,order})=>{
     const[email,setEmail]=React.useState("")
     const[password,setPassword]=React.useState("")
     const[name,setName]=React.useState("")
     const[address,setAddress]=React.useState("")



    const crOrder=(e)=>{
        e.preventDefault()
        const order = {
            name:name,
            email:email,
            address:address,
            cartItems:cartItems,
            total:cartItems.reduce((a,c)=>a+c.price+c.count,0)
        }
        createOrder(order)
    }

    const closeModal=()=>{
       clearOrder()
    }
     const [showCheckOut,setShowCheckOut]=React.useState(false)
    return(
        <div className="cart">
            <div>  
                {
                cartItems.length==0?(<div><p className="cartpi">cart is empaty</p></div>):
                <div>
                    <p className='pe'>You have {cartItems.length} in the cart</p>
                </div>
                }
                {order && <Modal isOpen={true} onRequestClose={closeModal}>
                                <Zoom>
                                    <button className='close-modal' onClick={closeModal}>X</button>
                                    <div className='order-details'>
                                        <h3 className='sucsess-message'>Your order has been proced</h3>
                                        <h2>Order:{order._id}</h2>
                                        <ul>
                                            <li>
                                                <div>Name:</div>
                                                <div>{order.name}</div>
                                            </li>
                                            <li>
                                                <div>Email:</div>
                                                <div>{order.email}</div>
                                            </li>
                                            <li>
                                                <div>Address:</div>
                                                <div>{order.address}</div>
                                            </li>
                                            <li>
                                                <div>Order:</div>
                                                <div>{order.total}</div>
                                            </li>
                                            <li>
                                                <div>Cart Items:</div>
                                                <div>
                                                    {order.cartItems.map((x)=>(<div>{x.count} {" "} {x.title}</div>))}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Zoom>
                            </Modal>}
                <div>
                <Fade left cascade>
                    <ul>
                    {cartItems.map((cart)=>(
                        <li className='divCart' key={cart._id}> 
                            <div className="divCart-divimage">
                                <img src={cart.image} classNeme="divCart-image"></img>
                                <p classNeme="divCart-deck">{cart.description}</p>
                            </div>
                            <div className="divCart-price">
                                <p classNeme="divCart-deck">{formatCurrency(cart.price)}</p>
                                <button onClick={()=>removeProduct(cart)}> Remove</button>
                            </div>
                        </li>
                    ))}
                    <div className="process">
                        <button className="process-btn" onClick={()=>setShowCheckOut(!showCheckOut)}>Procced</button>
                        <h3>Total : {" "}
                                {formatCurrency(cartItems.reduce((a,c)=>a+c.price*c.count,0))}
                        </h3>
                    </div>
                    </ul>
                    </Fade>

                </div>
                    {showCheckOut && (
                        <Fade right cascade>
                            <form onSubmit={crOrder} className="form">
                                <ul>
                                    <li>
                                        <label>Name</label><input type='text' onChange={(e)=>setName(e.target.value)}></input>
                                    </li>
                                    <li>
                                        <label>Email</label><input type='email' onChange={(e)=>setEmail(e.target.value)}></input>
                                    </li>
                                    <li>
                                        <label>Password</label><input type='password'  onChange={(e)=>setPassword(e.target.value)} ></input>
                                    </li>
                                    <li>
                                        <label>Address</label><input type='text'  onChange={(e)=>setAddress(e.target.value)}></input>
                                    </li>
                                    <li>
                                        <button type='submit'>Checkout</button>
                                    </li>
                                </ul>
                            </form> 
                        </Fade>
                    )
                    }    
            </div>
        </div>
        )
 }
 export default connect((state)=>({
     cartItems:state.cart.cartItems,
     order:state.order.order
    }),{removeProduct,createOrder,clearOrder})(Cart)