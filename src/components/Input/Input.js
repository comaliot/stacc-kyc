import React, { useState } from 'react';
import styles from './Input.module.css';

const data = require('../../data/pep_small.json');

export default function Input() {
  const [value, setValue] = useState('');

  const onChange = event => {
    // gets the value from the input field and put inside the state
    setValue(event.target.value);
  };

  const onSearch = searchTerm => {
    setValue(searchTerm);
    console.log('search', searchTerm);
  };

  return (
    <>
      <input
        className={styles.inputField}
        type="name"
        name="name"
        placeholder="f.eks Thomas"
        value={value}
        onChange={onChange}
      />

      <button onClick={() => onSearch(value)} className={styles.button}>
        Search
      </button>

      <div className={styles.searchDropdown}>
        {data
          .filter(person => {
            const searchTerm = value.toLowerCase();
            const personName = person.name.toLowerCase();

            return (
              searchTerm &&
              personName.startsWith(searchTerm) &&
              personName !== searchTerm
            );
          })
          .map(person => (
            <div
              onClick={() => onSearch(person.name)}
              key={person.id}
              className={styles.dropdownRow}
            >
              {person.name}
            </div>
          ))}
      </div>
    </>
  );
}
