import React, { useState } from 'react';
import axios from 'axios';
import '../styles/LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://example.com/api/login', {
        email,
        password,
      });
      setMessage('Вход выполнен успешно!');
      console.log(response.data);
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Ошибка входа. Пожалуйста, попробуйте снова.');
    }
  };

  return (
    <div className="login-form">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Электронная почта:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Войти</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default LoginForm;