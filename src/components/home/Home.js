import React from "react";
import items from "../../mockData/items.json";
import Items from "../items/Items";

const Home = () => {
  return (
    <section>
      <Items items={items} />
    </section>
  );
};
export default Home;
