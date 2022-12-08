import { useState, useEffect } from 'react';

const useFetchToddlers = (ref) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const SHEETS_ID = import.meta.env.VITE_ID;
  const API_KEY = import.meta.env.VITE_KEY;

  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          const response = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEETS_ID}/values/Toddlers?key=${API_KEY}`
          );
          const result = await response.json();
          setData(result.values);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      ref.current = false;
    };
  }, [ref]);
  return { loading, data, error };
};

export default useFetchToddlers;
