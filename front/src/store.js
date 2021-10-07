import { createStore } from 'redux'

const getLocalStorage = (name) => {
    let data = JSON.parse(localStorage.getItem(name))
    if (!data)
        name === 'cart' ? data = {} : data = 0

    return data
}

const setLocalStorage = (name, param) => {
    localStorage.setItem(name, param)
}

const addToCart = (state, payload) => {

    !state.cart[payload] ? state.cart[payload] = 1 : state.cart[payload]++

    setCartCount(state, 'add')
    setLocalStorage('cart', JSON.stringify(state.cart))

    return { ...state.cart }
}

const subtractionFromCart = (state, payload) => {

    if (state.cart[payload] > 1) {
        state.cart[payload]--
        setCartCount(state, 'remove')
        setLocalStorage('cart', JSON.stringify(state.cart))
    }
    return { ...state.cart }
}

const removeProductFromCart = (state, payload) => {
    state.cartCount -= state.cart[payload]
    delete (state.cart[payload])
    setLocalStorage('cart', JSON.stringify(state.cart))
    setLocalStorage('cartCount', JSON.stringify(state.cartCount))
    return {...state.cart}
}

const setCartCount = (state, action) => {

    if (action === 'add') state.cartCount++
    if (action === 'remove') state.cartCount--

    setLocalStorage('cartCount', JSON.stringify(state.cartCount))
}

const clearCart = state => {
    localStorage.clear()
    state = {
        cart: {},
        orderInfo: '',
        cartCount: 0
    }
    return { ...state }
}

const orderConfirmInformation = (state, text) => {
    state.orderInfo = text
    return { ...state }
}

const initialState = {
    cart: getLocalStorage('cart'),
    orderInfo: '',
    cartCount: getLocalStorage('cartCount')
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add-to-cart':
            state.cart = addToCart(state, action.payload)
            return { ...state }
        case 'remove-from-cart':
            state.cart = subtractionFromCart(state, action.payload)
            return { ...state }
        case 'remove-product-from-cart':
            state.cart = removeProductFromCart(state, action.payload)
            return { ...state }
        case 'order-comfirm':
            state = clearCart(state)
            return { ...state }
        case 'order-info':
            state = orderConfirmInformation(state, action.payload)
            return { ...state }
        default:
            return state
    }


}

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store