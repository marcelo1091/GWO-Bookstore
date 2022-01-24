import React from "react"
import CartItems from "./CartItems"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import './cart.css'

function Cart() {
    let cartBooks = useSelector(state => state.cart)
    let paymentButtonDisabledClass
    cartBooks = Object.entries(cartBooks)

    return (
        <div className="container cart">
            <h3>Twoje wybrane pozycje</h3>
            <div className="cartItems">
                {cartBooks.map(cartBook => (
                    <CartItems key={cartBook[0]} data={cartBook} />
                ))}
            </div>
            <div className="cartConfirm">
                <Link className={cartBooks.length > 0 ? '' : 'disabled'} to="/payment">DALEJ</Link>
            </div>
        </div>
    )
}

export default Cart