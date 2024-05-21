import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  const discountGames = [
    { id: 1, title: 'Cyberpunk 2077', price: '20,000 тг', discountPrice: '10,000 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg?t=1618856444' },
    { id: 2, title: 'The Witcher 3: Wild Hunt', price: '15,000 тг', discountPrice: '7,500 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1632939796' },
    { id: 3, title: 'Red Dead Redemption 2', price: '25,000 тг', discountPrice: '12,500 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1606936071' },
  ];

  const newReleases = [
    { id: 1, title: 'Resident Evil Village', price: '30,000 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/header.jpg?t=1618856444' },
    { id: 2, title: 'Halo Infinite', price: '35,000 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/header.jpg?t=1618856444' },
    { id: 3, title: 'Hitman 3', price: '40,000 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1659040/header.jpg?t=1618856444' },
  ];

  return (
    <div className="home-page">
      <h2>Добро пожаловать в Steam Shop!</h2>
      <p>Здесь вы найдете лучшие предложения и скидки на популярные игры.</p>
      <h3>Игры со скидками</h3>
      <div className="discount-games">
        {discountGames.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.imageUrl} alt={game.title} />
            <h4>{game.title}</h4>
            <p>
              <span className="original-price">{game.price}</span> <span className="discount-price">{game.discountPrice}</span>
            </p>
          </div>
        ))}
      </div>

      <h3>Новинки</h3>
      <div className="new-releases">
        {newReleases.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.imageUrl} alt={game.title} />
            <h4>{game.title}</h4>
            <p>{game.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
