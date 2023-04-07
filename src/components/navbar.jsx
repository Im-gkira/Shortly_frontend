import React from "react";

export default function Navbar() {
  return (
    <section className="nav">
      <nav>
        <div className="nav--left">
          <h2>Shortly</h2>
          <h4>Features</h4>
          <h4>Pricing</h4>
          <h4>Resources</h4>
        </div>
        <div className="nav--right">
          <button className="login--btn">Login</button>
          <button className="register--btn">Sign Up</button>
        </div>
      </nav>
    </section>
  );
}
