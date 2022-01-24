const orderConfirmInformation = (state, text) => {
    state.orderInfo = text
    return { ...state }
}

export default orderConfirmInformation