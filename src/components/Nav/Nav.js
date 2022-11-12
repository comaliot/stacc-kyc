import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <img src={logo} alt="PEPCheck logo" />
      <a href="https://github.com/comaliot/stacc-kyc">Github</a>
    </div>
  );
}
