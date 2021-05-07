import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {fetchProducts} from './reducers/productReducers'
import {changeCart} from './reducers/cartRedusers'
import {orderReducers} from './reducers/orderReducers'

const initialState={}

const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    combineReducers({
        products:fetchProducts,
        cart:changeCart,
        order:orderReducers
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store