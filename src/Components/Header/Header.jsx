import React from 'react';
import List from '../List/List';
import { header, headerUnlist, headerItemBilbo } from './Header.module.css';

export default () => {
  return (
    <header className={header}>
      <ul className={headerUnlist}>
        <List  text="Drinks"/>
        <List  text="Sobre Nós"/>
        <List style={headerItemBilbo} text="Bons Drinks"/>
        <List  text="Nosso Time"/>
        <List  text="Contato"/>
      </ul>
    </header>
  );
}
