import React from 'react';
import List from '../List/List';
import style from './Header.module.css';

export default () => {
  return (
    <header className={style.header}>
      <ul className={style.headerUnlist}>
        <List style={style.headerItem} text="Drinks"/>
        <List style={style.headerItem} text="Sobre Nós"/>
        <List style={style.headerItem} text="Bons Drinks"/>
        <List style={style.headerItem} text="Nosso Time"/>
        <List style={style.headerItem} text="Contato"/>
      </ul>
    </header>
  );
}
