import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '../redux/actions';
import '../styles/Cart.css';

const Cart = ({ cartItems, removeFromCart, updateCartItemQuantity }) => {
  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id, quantity) => {
    updateCartItemQuantity({ gameId: id, quantity });
  };

  return (
    <div className="cart">
      <h2>Корзина</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>
              Количество: 
              <input 
                type="number" 
                value={item.quantity} 
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              />
            </span>
            <span>Цена: {item.price} тг</span>
            <button onClick={() => handleRemove(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>
      <button>Оформить заказ</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

const mapDispatchToProps = {
  removeFromCart,
  updateCartItemQuantity
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
