import React from "react"
import { useDispatch } from "react-redux"
import 'material-icons/iconfont/material-icons.css'

function CartItem(props) {
    const dispatch = useDispatch()
    return (
        <div className="itemContainer">

            <div className="item image">
                <img src={props.cover_url} alt="okladka" />
            </div>
            <div className="item description">
                <h4>{props.title}</h4>
                <p>Autor: <b>{props.author}</b></p>
                <p>Liczba Stron: <b>{props.pages}</b></p>
                <div className="quantity">
                    <p>Ilość: <b>{props.bookCount}</b></p>
                    <div className="quantityBtn">
                        <button onClick={() => dispatch({ type: 'add-to-cart', payload: props.id })}><span className="material-icons">add_box</span></button>
                        <button onClick={() => dispatch({ type: 'remove-from-cart', payload: props.id })}><span className="material-icons">indeterminate_check_box</span></button>
                    </div>
                </div>
            </div>
            <div className="item remove">
                <button onClick={() => dispatch({ type: 'remove-product-from-cart', payload: props.id })}><span className="material-icons">delete_outline</span></button>
            </div>
        </div>
    )
}

export default CartItem