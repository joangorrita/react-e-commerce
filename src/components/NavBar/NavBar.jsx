import React, { useContext } from "react";
import "./style.css"
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext/CartContext";

const NavBar =()=>{
    const {cart}= useContext (CartContext)
    return(
        <ul className="navbar" > 
            <NavLink to={'/'} >Home</NavLink>
            <NavLink to={'categoty/camiseta'} >Camiseta</NavLink>
            <NavLink to={'category/short'} >Short</NavLink>
            <NavLink to={'category/buzo'} >Buzo</NavLink>
            <NavLink to={'cart'} >
                Cart
                <span>{cart.length} </span>
                </NavLink>

        </ul>
    )
}

export default NavBar;