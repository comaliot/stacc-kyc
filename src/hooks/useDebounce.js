import React, { useEffect, useState } from 'react';

export default function useDebounce(value, delay) {
  const [debouncedValue, setdebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setdebouncedValue(value); // if the value doesn't change until we get to delay, then we set the value for search
    }, delay);

    return () => {
      clearTimeout(handler); // clear the timeout or cancel if the value changes
    };
  }, [value, delay]);

  return debouncedValue;
}
