import React from 'react';
import './Card.css'
import {BsFillCartFill} from "react-icons/bs";
const Card = ({gunData}) => {
    // console.log(props.gunData);
    const {name, img, bullet, capacity, action, category, price} = gunData;
    console.log(gunData);
    return (
        <div className='card'>
            <div className="image-container">
                <img src={img} alt="" srcset=""/>
            </div>
            <h2>{name}</h2>
            <p>Bulet Type: {bullet}</p>
            <p>Capacity: {capacity}</p>
            <p>Action: {action}</p>
            <p>Category: {category}</p>
           
            <div className="add-to-cart">
                <button> <BsFillCartFill className='icon'/></button>
                <h1>Price: {price}</h1>
            </div>
            
        </div>
    );
};

export default Card;