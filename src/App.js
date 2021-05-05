import data from './data.json'
import React from 'react'
import Products from './components/Products'
import Filter from './components/Filter'
import Cart from './components/Cart'


const App=()=>{
  const [productData,setProductData]=React.useState(data.products)
  const [size,setSize]=React.useState('')
  const [sort,setSort]=React.useState('')
  const[cartItems,setCartItem]=React.useState(localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[])

  const filterSize=(event)=>{
    if(event.target.value===""){
      setProductData(data.products)
      setSize(event.target.value)
    }else{
       setSize(event.target.value)
       setProductData(data.products.filter(product =>product.availableSizes.indexOf(event.target.value)>=0))
  }}

  const filterPrice=(event)=>{
    const sort = event.target.value
    setSort(sort)
    setProductData(productData.slice().sort((a,b)=>
      sort==='lowest'?
        a.price < b.price?1:-1
      :sort==="highest"
        ?a.price > b.price?1:-1
      :a._id>b._id?1:-1
    ))
  }

    const addProduct=(product)=>{
      const carts= cartItems.slice()
      let alreadeExist=false
      carts.forEach((item)=>{
          if(item._id == product._id){
          item.count++
          alreadeExist=true
        }
      })
      if(!alreadeExist){
        carts.push({...product,count: 1})
        setCartItem(carts)
        localStorage.setItem("cartItems",JSON.stringify(carts));
      }
    }
    const removeProduct=(product)=>{
      const res=cartItems.filter((cart)=>cart._id !== product._id
      )
     setCartItem(res)
      localStorage.setItem("cartItems",JSON.stringify(res));
    }
    

  return (
    <div className="App">
      <div>
        <header>
          <h1>React Shopping Cart</h1>
        </header>
        <main>
          <div className='main'>
            <div className="main-content">
                  <div className = "filterdiv">
                    <Filter size={size} sort={sort} products={productData} filterSize={filterSize} filterPrice={filterPrice}/>
                  </div>
                  <div className = "productdiv">
                    <Products data={productData} addProduct={addProduct}/>
                  </div>
            </div>
            <div className="main-sidebar">
                  <div>
                    <Cart cartItems={cartItems} removeProduct={removeProduct}/>
                  </div>
            </div>
          </div>
        </main>
        <footer></footer>        
      </div>
    </div>
  );
}

export default App;
