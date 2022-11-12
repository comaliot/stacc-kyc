import React from 'react';
import styles from './Paragraph.module.css';

export default function Paragraph(props) {
  return <p className={styles.paragraph}>{props.content}</p>;
}
