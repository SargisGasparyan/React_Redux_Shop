import React from 'react'
import {Fade} from 'react-reveal'
import {formatCurrency} from './util.js'
import Zoom from 'react-reveal/Zoom'
import Modal from 'react-modal'

const Products = ({data,addProduct}) => {
    const [product,setProduct]=React.useState(null)

    const openModal=(product)=>{
        setProduct(product)
    }
    const closeModal=()=>{
        setProduct(null)
    }
    return(
       
     <div className="products">
          <Fade bottom cascade>
        {data.map((product)=>(
        <div key={product._id} className='product'>
            <a onClick={()=>openModal(product)}>
            <img src={product.image} className='product-image'></img>
            </a>
            <div className='product-info'>
                <h2 className='product-info-desc'>{product.description}</h2>
                <p className='product-info-price'>{formatCurrency(product.price)}</p>
                <p className='product-info-avail'>{product.availableSizes.slice(1, ).join(' -').split(" ")}</p>
                <button className="product-info-btn" onClick={()=>addProduct(product)}>Add to cart</button>
            </div>
        </div>
        ))}
         </Fade>
         {
                product &&(
                    <Modal isOpen={true}>
                    <Zoom>
                        <button onClick={closeModal}>X</button>
                        <div className="product-details">
                            <img src={product.image} alt={product.title}></img>
                            <div className="product-details-description">
                                <p>
                                    <strong>{product.title}</strong>
                                </p>
                                <p>
                                    <strong>{product.description}</strong>
                                </p>
                                <p>
                                Avaiable Sizes
                                     
                                {
                                product.availableSizes.slice(1,).map((x)=>(
                                    <span>
                                        {" "}
                                        <button className="button">{x}</button>
                                    </span>
                                ))
                                }                           
                                </p>
                            </div>
                        </div>
                    </Zoom>
            </Modal>
                )
            }
     </div>  
    
    )

}
export default Products