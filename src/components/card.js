import React from 'react';
import styles from './styles/card.module.css';
import {Link} from 'react-router-dom';


export default function Card({ item }) {
  return (
    <>
      <Link to={`/items/${item.id}`}>
        <div className={styles.card}>
          <img src={item.images.icon} height="120" width="120" />
          <div>
            <h1>{item.name}</h1>
            <h2>Description</h2>
            <p>{item.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
}