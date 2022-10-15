import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import CardPlaceHolder from '../components/CardPlaceHolder';
import CountryCards from '../components/CountryCards';
import Filterregion from '../components/Filterregion';
import Pagination from '../components/Pagination';
import Searchbox from '../components/Searchbox';
import { countryDetails } from '../interfaces';
import { styles } from '../style';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allCountries, setAllCountries] = useState<countryDetails[]>([]);
  const [currentCountries, setCurrentCountries] = useState<countryDetails[]>([]);
  const initialPage = searchParams.get('page') ?? '1';
  const initialSarchValue = searchParams.get('search') ?? '';
  const initialRegionValue = searchParams.get('region') ?? '';
  const itemsPerPage = 12;
  const [search, setSearch] = useState<string>(initialSarchValue);
  const [page, setPage] = useState<string>(initialPage);
  const [region, setRegion] = useState<string>(initialRegionValue);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (allCountries && page) {
      const newOffset = ((Number(page) - 1) * itemsPerPage) % allCountries.length;
      setItemOffset(newOffset);
      search
        ? setSearchParams({ search, page: page })
        : region
        ? setSearchParams({ region, page })
        : setSearchParams({ page });
    }
  }, [allCountries, page, itemsPerPage, setSearchParams, search, region]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage('1');
  };

  const onRegionChange = (region: string): void => {
    setRegion(region);
    setPage('1');
  };

  return (
    <div className={`${styles.paddingX}`}>
      <div className="my-10 flex flex-col gap-10 md:flex-row justify-between">
        <Searchbox name={search} onSearchChange={onSearchChange} />
        <Filterregion onRegionChange={onRegionChange} />
      </div>
      <Suspense fallback={<CardPlaceHolder />}>
        <CountryCards
          allCountries={allCountries}
          setAllCountries={setAllCountries}
          search={search}
          region={region}
          currentCountries={currentCountries}
          setCurrentCountries={setCurrentCountries}
          itemsPerPage={itemsPerPage}
          itemOffset={itemOffset}
        />
      </Suspense>
      <div className="Pagination">
        {allCountries.length > 0 && (
          <Pagination
            allCountries={allCountries}
            itemsPerPage={12}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
