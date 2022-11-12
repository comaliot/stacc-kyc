import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <a href="http://localhost:3000/">
        <img src={logo} alt="PEPCheck logo" />
      </a>
      <a
        className={styles.githubLink}
        href="https://github.com/comaliot/stacc-kyc"
      >
        Github
      </a>
    </div>
  );
}
