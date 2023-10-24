import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const history = useNavigate();

  const handleRegister = async () => {
    try {
      await registerUser(formData);
      history.push('/');
    } catch (err) {
      console.log('Registration failed: ', err);
    }
  };

  return (
    <div>
      <MainStyle to="/">sticky lemon</MainStyle>
      <form>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            id="email"
            type="email"
            name="email"
            autoComplete="off"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </fieldset>
        <button type="submit" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

const MainStyle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  color: black;
  font-size: 40px;
  text-decoration: none;
`;
