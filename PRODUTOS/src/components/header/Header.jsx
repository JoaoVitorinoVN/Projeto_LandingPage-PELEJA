import React from 'react';
import styles from './Header.module.css';

const Header = ({ tituloPrincipal, tituloSecundario }) => {
  return (
    <div className={styles.header}>
      <h1>{tituloPrincipal}</h1>
      <hr />
      <p>{tituloSecundario}</p>
    </div>
  );
};

export default Header;