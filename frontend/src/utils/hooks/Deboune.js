import { useEffect, useRef, useState } from "react";

export const useDebounce = (value, delay) => {
  const [delayedValue, setDelayedValue] = useState(value);
  const debounceRef = useRef(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (!isInitialMount.current) {
      debounceRef.current = setTimeout(() => {
        setDelayedValue(value);
      }, delay);
    } else {
      isInitialMount.current = false;
    }
    return () => clearTimeout(debounceRef.current);
  }, [value, delay]);

  return delayedValue;
};
