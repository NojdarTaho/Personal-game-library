import React from "react";

const GameStores = ({ data }) => {
  return (
    <ul className="stores">
      <h2>You can buy the game on:</h2>
      {data.stores.map((store) => (
        <li key={store.id}>
          <a href={`https://${store.store.domain}`}>
            <span className="store-link">{store.store.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default GameStores;
