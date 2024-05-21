import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Registration from './components/RegistrationForm';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';

function App() {
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      quantity: 2,
    },
  ];

  return (
    <Provider store={store}>
      <div className="App steam-background">
        <Router>
          <Header cartItems={cartItems}/>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </main>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
