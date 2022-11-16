import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link to="/">
        <img src={logo} alt="PEPCheck logo" />
      </Link>
      <a
        className={styles.githubLink}
        href="https://github.com/comaliot/stacc-kyc"
      >
        Github
      </a>
    </div>
  );
}
