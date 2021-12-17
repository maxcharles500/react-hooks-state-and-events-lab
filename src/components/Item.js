import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)
  const addToCart = () => {
    setInCart(!inCart)
  }
  const cartClass = inCart ? "in-cart" : ""

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={!inCart ? 'add' : 'remove'} onClick={addToCart}>
        {!inCart ? 'Add to Cart' : 'Remove From Cart'}
      </button>
    </li>
  );
}

export default Item;
