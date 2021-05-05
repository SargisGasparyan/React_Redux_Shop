import React from 'react'
import {formatCurrency} from './util.js'
import {Fade} from 'react-reveal'


 const Cart=({cartItems,removeProduct})=>{

    const crOrder=()=>{}
     const [showCheckOut,setShowCheckOut]=React.useState(false)
    return(
        <div className="cart">
        <div>  
            {cartItems.length==0?<div><p className="cartpi">cart is empaty</p>
        </div>:
        
            <div>
                <Fade left cascade>
                <p className='pe'>You have {cartItems.length} in the cart</p>
                {cartItems.map((cart)=>(
                    <div className='divCart'>
                        <div className="divCart-divimage">
                            <img src={cart.image} classNeme="divCart-image"></img>
                            <p classNeme="divCart-deck">{cart.description}</p>
                        </div>
                        <div className="divCart-price">
                            <p classNeme="divCart-deck">{formatCurrency(cart.price)}</p>
                            <button onClick={()=>removeProduct(cart)}> Remove</button>
                        </div>
                    </div>
                ))}
               
                
                <div className="process">
                    <button className="process-btn" onClick={()=>setShowCheckOut(!showCheckOut)}>Procced</button>
                    <h3>Total : {" "}
                            {formatCurrency(cartItems.reduce((a,c)=>a+c.price*c.count,0))}
                    </h3>
                </div>
                </Fade>
                {showCheckOut && (
                        <Fade right cascade>
                        <form onSubmit={crOrder} className="form">
                            <ul>
                                <li>
                                    <label>Email</label><input type='email'></input>
                                </li>
                                <li>
                                    <label>Password</label><input type='password'></input>
                                </li>
                                <li>
                                    <label>Address</label><input type='text'></input>
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
            }
           
        </div>
        </div>)
 }
 export default Cart