import { createStore } from 'redux'
import cartHandler from './handler/cart.handler'
import orderHandler from './handler/order.handler'

const initialState = {
    orderInfo: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'order-comfirm':
            state = cartHandler.clearCart(state)
            return { ...state }
        case 'order-info':
            state = orderHandler.orderConfirmInformation(state, action.payload)
            return { ...state }
        default:
            return state
    }
}

const order = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default order