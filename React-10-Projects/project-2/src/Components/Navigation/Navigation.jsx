import React from "react";
import styles from "./Navigation.module.css";


function Navigation() {
    
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="Logo">
        <img src="/images/Logo.png" alt="Logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;
