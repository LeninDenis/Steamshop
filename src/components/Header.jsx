import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
      <header>
        <h1>Steam Shop</h1>
        <nav>
          <ul className="header-list">
            <li className="nav-item"><a href="/">Главная</a></li>
            <li className="nav-item"><a href="/products">Товары</a></li>
            <li className="nav-item"><a href="/cart">Корзина</a></li>
            <li className="user-actions">
                <a href="/login">Вход</a>
                <a href="/register">Регистрация</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;
