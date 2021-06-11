import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/nav.module.css';


export default function nav() {
  return (
    <nav className={styles.nv}>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/items">ITEMS</Link></li>
        <li><Link to="/it">IT</Link></li>
      </ul>
    </nav>
  );
}