import React from "react"
import { useDispatch } from "react-redux"

function Book(props) {

    const dispatch = useDispatch()

    return (
        <div className="book">
            <img src={props.cover_url} alt="okladka" />
            <h3>{props.title}</h3>
            <p>Autor: {props.author}</p>
            <p>Liczba Stron: {props.pages}</p>
            <button onClick={() => dispatch({ type: 'add-to-cart', payload: props.id })}>DODAJ DO KOSZYKA</button>
        </div>
    )
}

export default Book