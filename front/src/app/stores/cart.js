import { createStore } from 'redux'
import cartHandler from './handler/cart.handler'

const initialState = {
    cart: cartHandler.getLocalStorage('cart'),
    cartCount: cartHandler.getLocalStorage('cartCount')
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add-to-cart':
            state.cart = cartHandler.addToCart(state, action.payload)
            return { ...state }
        case 'remove-from-cart':
            state.cart = cartHandler.subtractionFromCart(state, action.payload)
            return { ...state }
        case 'remove-product-from-cart':
            state.cart = cartHandler.removeProductFromCart(state, action.payload)
            return { ...state }
        default:
            return state
    }
}

const cart = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default cart