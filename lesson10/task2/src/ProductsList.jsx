import React from "react";

const ProductsList = (props) => {
  return (
    <div className="products">
      <ul className="products__list">
        {props.cartItems.map((prod) => (
          <li key={prod.id} className="products__list-item">
            <span className="products__item-name">{prod.name}</span>
            <span className="products__item-price">{`$${prod.price}`}</span>
          </li>
        ))}
      </ul>
      <div className="products__total">{`Total: $${props.cartItems.reduce(
        (acc, prod) => acc.price + prod.price
      )}`}</div>
    </div>
  );
};
export default ProductsList;
