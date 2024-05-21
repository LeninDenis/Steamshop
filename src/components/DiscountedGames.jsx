import React from 'react';
import './DiscountedGames';

const DiscountedGames = ({ games }) => {
  return (
    <div className="discounted-games">
      <h2>Игры со скидками</h2>
      <div className="games-list">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.name} />
            <h3>{game.name}</h3>
            <p className="original-price">₽{game.originalPrice}</p>
            <p className="discounted-price">₽{game.discountedPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountedGames;