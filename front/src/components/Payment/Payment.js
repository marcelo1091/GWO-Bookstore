import React, { useState } from "react"
import PaymentForm from "./PaymentForm"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import './payment.css'

function Payment() {

    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        city: '',
        zip_code: ''
    })
    const [orderInfo, setOrderInfo] = useState([])
    let cartBooks = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        sendOrder()
    }

    let orderItem = {}

    let order = []

    for (const [key, value] of Object.entries(cartBooks)) {
        orderItem = { id: key, quantity: value }
        order.push(orderItem)
    }

    const sendOrder = async () => {
        try {
            const res = await axios.post('http://localhost:3001/api/order', { ...userData, order })
            if (res.status === 201) {
                dispatch({ type: 'order-comfirm' })
                setOrderInfo(['Zamówienie zostało złożone.', true])
                console.log('aaa')
            }
        } catch (error) {
            setOrderInfo(['Zamówienie nie zostało złożone. Spróbuj Ponownie.', false])
        }
    }

    return (
        <div className="payment">
            <div className="container">
                {orderInfo[1] ? (
                    <div className="succes">
                        <h3>{orderInfo[0]}</h3>
                        <Link to='/'>WRÓĆ NA STRONĘ GŁÓWNĄ</Link>
                    </div>
                ) : (
                    <div>
                        <PaymentForm error={orderInfo} handleSubmit={(e) => handleSubmit(e)} setUserData={setUserData} userData={userData} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Payment