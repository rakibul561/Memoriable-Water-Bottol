

import './Bottle.css'
// import { useState } from "react";


const Bottle = ({ bottle, handleAddToCart }) => {


    const { name, img, price } = bottle;


    return (
        <div className="bottle">
            <h3>Bottle:{name}</h3>
            <img src={img} alt="" />
            <h2>Price: ${price}</h2>
            <button onClick={handleAddToCart}>Purchase</button>
        </div>
    );
};

export default Bottle;