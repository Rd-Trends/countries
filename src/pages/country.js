import { React, useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";

import { fetchCountriesByName } from "../api";
import CountryDetails from "../components/CountryDetails";
import CountryDetailsPlaceholder from "../components/Placeholders/CountryDetailsPlaceholder";

const Country = () => {
  const [country, setCountry] = useState("");
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
