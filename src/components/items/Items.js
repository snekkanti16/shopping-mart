import React from "react";
import { Link } from "react-router-dom";
import Item from "../item/Item";
const Items = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Link to={`/item/${item.id}`} key={item.id}>
          <Item
            name={item.name}
            rating={item.rating}
            price={item.price}
            saleDiscount={item.saleDiscount}
            image={item.image}
            brand={item.brand}
          />
        </Link>
      ))}
    </div>
  );
};

export default Items;
