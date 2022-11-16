import React, { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import SearchResults from '../SearchResults/SearchResults';
import styles from './Input.module.css';

export default function Input() {
  const [persons, setPersons] = useState(); //storing all the persons we get from an API
  const [search, setSearch] = useState(); // holds our search string
  const [loading, setLoading] = useState(); // waiting for request to come back with the results

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      setPersons([]);

      const data = await fetch(
        `https://code-challenge.stacc.dev/api/pep?name=${debouncedSearch}`
      ).then(res => res.json());

      setPersons(data.hits);
      setLoading(false);
    }

    if (debouncedSearch) fetchData(); // if debouncedSearch is defined, then fetchData()
  }, [debouncedSearch]); // [search] dependency means when the search changes, call useEffect hook

  function handleSetSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <>
      <div>
        <input
          className={styles.inputField}
          type="search"
          name="name"
          placeholder="f.eks Thomas"
          onChange={handleSetSearch}
        />

        <button className={styles.button}>Search</button>
      </div>

      {loading && <p>Loading...</p>}

      <div>
        {persons &&
          persons.map(person => {
            return (
              <div key={person.id}>
                <SearchResults name={person.name} />
              </div>
            );
          })}
      </div>
    </>
  );
}
