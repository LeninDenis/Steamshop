import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';
import '../styles/ProductList.css';

const ProductList = ({ addToCart }) => {
  const actionGames = [
    { id: 1, title: 'Counter-Strike: Global Offensive', description: 'Многопользовательская шутер от первого лица.', price: '1,500 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1618856444' },
    { id: 2, title: 'DOOM Eternal', description: 'Шутер от первого лица.', price: '8,000 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg?t=1618856444' },
    { id: 3, title: 'Grand Theft Auto V', description: 'Открытый мир, который игроки могут свободно исследовать', price: '10,000 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg?t=1618856444' },
  ];

  const adventureGames = [
    { id: 4, title: 'Assassin\'s Creed Odyssey', description: 'Экшен-приключение с элементами RPG', price: '15,000 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/812140/header.jpg?t=1618856444' },
    { id: 5, title: 'Tomb Raider', description: ' Приключенческая игра, в которой игрок управляет Ларой Крофт', price: '5,000 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/203160/header.jpg?t=1618856444' },
    { id: 6, title: 'Red Dead Redemption 2', description: 'Открытый мир в стиле вестерна', price: '12,000 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1618856444' },
  ];

  const rpgGames = [
    { id: 7, title: 'The Witcher 3: Wild Hunt', description: 'Эпическая RPG с открытым миром', price: '7,500 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1618856444' },
    { id: 8, title: 'Cyberpunk 2077', description: 'RPG, действие которой происходит в киберпанковом мире будущего', price: '10,000 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg?t=1618856444' },
    { id: 9, title: 'Divinity: Original Sin 2', description: 'RPG с изометрическим видом', price: '8,000 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/435150/header.jpg?t=1618856444' },
  ];

  const strategyGames = [
    { id: 10, title: 'Civilization VI', description: 'Стратегическая игра, где игроки строят и развивают свою цивилизацию', price: '6,000 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg?t=1618856444' },
    { id: 11, title: 'Stellaris', description: 'Космическая стратегия, где игроки управляют своими галактическими империями', price: '4,000 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/281990/header.jpg?t=1618856444' },
    { id: 12, title: 'Age of Empires II: Definitive Edition', description: 'Стратегия в реальном времени, где игроки управляют цивилизациями', price: '3,500 тг', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/813780/header.jpg?t=1618856444' },
  ];

  const categories = [
    { title: 'Экшен', games: actionGames },
    { title: 'Приключения', games: adventureGames },
    { title: 'Ролевые игры', games: rpgGames },
    { title: 'Стратегии', games: strategyGames },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].title);
  const [showDescription, setShowDescription] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleCategoryClick = (categoryTitle) => {
    setActiveCategory(categoryTitle);
    const categoryElement = document.getElementById(categoryTitle.toLowerCase().replace(/\s+/g, '-'));
    categoryElement.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleDescription = (game) => {
    setSelectedGame(game);
    setShowDescription(!showDescription);
  };

  const handleAddToCart = (game) => {
    addToCart(game);
  };

  return (
    <>
      <div className="category-navigation">
        <h2>Категории</h2>
        {categories.map((category, index) => (
          <button
            key={index}className={category.title === activeCategory ? 'active' : ''}
            onClick={() => handleCategoryClick(category.title)}
          >
            {category.title}
          </button>
        ))}
      </div>
      <div className="games-container">
        {categories.map((category, index) => (
          <div key={index} id={category.title.toLowerCase().replace(/\s+/g, '-')} className="category">
            <h3>{category.title}</h3>
            <div className="games">
              {category.games.map((game) => (
                <div key={game.id} className="game-card">
                  <img src={game.imageUrl} alt={game.title} />
                  <h4>{game.title}</h4>
                  <p>{game.price}</p>
                  <button onClick={() => toggleDescription(game)}>Информация</button>
                  <button onClick={() => handleAddToCart(game)}>Купить</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {showDescription && (
        <div className="description-modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowDescription(false)}>&times;</span>
            <h2>{selectedGame.title}</h2>
            <p>Цена: {selectedGame.price} </p>
            {selectedGame.description && <p>Описание: {selectedGame.description}</p>}
            <button onClick={() => setShowDescription(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductList);