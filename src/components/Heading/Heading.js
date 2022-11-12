import React from 'react';
import styles from './Heading.module.css';

export default function Heading(props) {
  return <h1 className={styles.heading}>{props.title}</h1>;
}
