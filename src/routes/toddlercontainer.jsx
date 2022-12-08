import React, { useRef } from 'react';
import Toddler from '../components/toddler';
import useFetchToddlers from '../hooks/useFetchToddlers';

export default function ToddlerContainer() {
  const isComponentMounted = useRef(true);
  const { loading, error, data } = useFetchToddlers(isComponentMounted);

  if (loading) return <div>Loading data . . . </div>;

  return <Toddler data={data} />;
}
