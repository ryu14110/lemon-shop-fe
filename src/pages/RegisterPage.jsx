import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import MainBar from '../components/ItemContent';

export default function RegisterForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const formData = {
      email,
      password,
    };

    onSubmit(formData);
  };
  return (
    <div>
      <Link to="/">Sticky lemon</Link>
      <form>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter Email."
            required
            ref={emailRef}
            id="email"
            type="email"
            name="email"
            autoComplete="off"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <input
            placeholder="Enter Password"
            required
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <input
            placeholder="Enter Password"
            required
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
          />
        </fieldset>
        <button onClick={submitForm}>Register</button>
      </form>
    </div>
  );
}
