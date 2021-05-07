import React from 'react'
import Products from './components/Products'
import Filter from './components/Filter'
import Cart from './components/Cart'
import store from './store'
import {Provider} from 'react-redux'


const App=()=>{
  return (
    <Provider store={store}>
    <div className="App">
      <div>
        <header>
          <h1>React Shopping Cart</h1>
        </header>
        <main>
          <div className='main'>
            <div className="main-content">
                  <div className = "filterdiv">
                    <Filter/>
                  </div>
                  <div className = "productdiv">
                    <Products/>
                  </div>
            </div>
            <div className="main-sidebar">
                  <div>
                    <Cart/>
                  </div>
            </div>
          </div>
        </main>
        <footer></footer>        
      </div>
    </div>
    </Provider>
  );
}

export default App;
