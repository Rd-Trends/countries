import { React, useEffect, useState, Suspense } from "react";
import { useSearchParams } from "react-router-dom";

import CountryCards from "../components/CountryCards";
import FilterRegion from "../components/FilterRegion";
import Search from "../components/SearchBox";
import Pagination from "../components/Pagination";
import CardPlaceholder from "../components/Placeholders/CardPlaceholder";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allCountries, setAllCountries] = useState([]);
  const [currentCountries, setCurrentCountries] = useState([]);
  let initialPage = searchParams.get("page") ?? 1;
  let initialSarchValue = searchParams.get("search") ?? "";
  let initialRegionValue = searchParams.get("region") ?? "";
  let itemsPerPage = 12;
  const [search, setSearch] = useState(initialSarchValue);
  const [page, setPage] = useState(initialPage);
  const [region, setRegion] = useState(initialRegionValue);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (allCountries && page) {
      const newOffset = ((page - 1) * itemsPerPage) % allCountries.length;
      setItemOffset(newOffset);
      search
        ? setSearchParams({ search, page })
        : region
        ? setSearchParams({ region, page })
        : setSearchParams({ page });
    }
  }, [allCountries, page, itemsPerPage, setSearchParams, search, region]);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const onRegionChange = (region) => {
    setRegion(region);
    setPage(1);
  };

  return (
    <>
      <div className="input_and_dropdown_wrapper">
        <Search onSearchChange={onSearchChange} name={search} />
        <FilterRegion onRegionChange={onRegionChange} />
      </div>
      <section className="countries_wrapper">
        <Suspense
          fallback={[...Array(itemsPerPage)].map((e, i) => (
            <CardPlaceholder key={i} />
          ))}
        >
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
      </section>
      <div className="Pagination">
        {allCountries.length > 0 && (
          <Pagination
            allCountries={allCountries}
            itemsPerPage={12}
            setCurrentCountries={setCurrentCountries}
            page={Number(page)}
            setPage={setPage}
            setItemOffset={setItemOffset}
          />
        )}
      </div>
    </>
  );
};

export default Home;
