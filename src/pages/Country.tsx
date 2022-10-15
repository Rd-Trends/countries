import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CountryDetails from '../components/CountryDetails';
import CountryDetailsPlaceholder from '../components/CountryDetailsPlaceholder';

const Country = () => {
  const [country, setCountry] = useState('');
  const params = useParams();

  useEffect(() => {
    if (params.country) {
      setCountry(params.country);
    }
  }, [params]);

  return (
    <Suspense fallback={<CountryDetailsPlaceholder />}>
      <CountryDetails country={country} />
    </Suspense>
  );
};

export default Country;
