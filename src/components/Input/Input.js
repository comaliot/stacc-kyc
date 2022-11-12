import React from 'react';
import Button from '../Button/Button';
import styles from './Input.module.css';

export default function Input() {
  return (
    <>
      <input
        className={styles.inputField}
        type="name"
        name="name"
        placeholder="f.eks Thomas"
      />
      <Button />
    </>
  );
}
