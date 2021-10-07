import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import 'material-icons/iconfont/material-icons.css'
import './navbar.css'

function Book(props) {

    const cartCount = useSelector(state => state.cartCount)
    
    return (
        <nav>
            <div className="navbarContainer">
                <div className="logoContainer"></div>
                <div className="menuContainer">
                    <Link to="/" className="menuItem">Strona Główna</Link>
                </div>
                <div className="cartContainer"><Link to="/cart"><span className="material-icons">
                    shopping_cart
                </span><p>({cartCount})</p></Link></div>
            </div>
        </nav>
    )
}

export default Book