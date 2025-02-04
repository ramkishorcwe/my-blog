// App.js
import React from "react";
import './App.css';

const Test = () => {
  return (
    <div className="App">
      {/* Background pen writing */}
      <div className="background-text">
        Welcome to Our Website
      </div>

      {/* Login form */}
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Test;
