import React from 'react';
import Heading from '../Heading/Heading';
import styles from './Header.module.css';
import illustration from '../../assets/illustration.png';
import Paragraph from '../Paragraph/Paragraph';
import Input from '../Input/Input';

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <Heading title="Politically Exposed Person (PEP) sanctions check and screening" />
        <Paragraph
          content="Check PEP lists to ensure compliance, minimize risk and carry out
risk assessments."
        />
        <Input />
      </div>
      <div className={styles.illustrationWrapper}>
        <img
          className={styles.illustration}
          src={illustration}
          alt="Illustration"
        />
      </div>
    </div>
  );
}
