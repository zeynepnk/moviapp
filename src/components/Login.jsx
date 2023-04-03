import React, { useState } from "react";
import { useEffect } from "react";

export const Login = () => {
  const [email, setEmail] = useState([]);
  const [pass, setPass] = useState([]);

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    if (email) {
      setEmail(email);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="yourmail@yuormail.com"
          id="email"
          required
        ></input>
    
        <label htmlFor="password">Password</label>
        <input
          className="input"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          required
          min="6"
        ></input>
        <button className="button" type="submit">Log In</button>
      </form>
    </div>
  );
};
