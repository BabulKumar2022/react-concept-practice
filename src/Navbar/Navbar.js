import React from 'react';
import "./Navbar.css";
import {BsFillCartFill} from "react-icons/bs";

const Navbar = ({openModal, cart}) => {
    return (
        <nav className='navbar'>
            <h1>It is Gun Gallary</h1>
            <div className="cart-counter" onClick={openModal}>
                <span> {cart.length}</span>
            <BsFillCartFill className='icon' color="#ffff"/>
            </div>
           
        </nav>
    );
};

export default Navbar;