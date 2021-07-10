import React, { useState } from "react";
import Country from "../../models/country";
import axios from "axios";

const startUrl = "https://restcountries.eu/rest/v2/all";
const searchUrl = "https://restcountries.eu/rest/v2/name/";
const filterUrl = "https://restcountries.eu/rest/v2/region/";

const useSearch = () => {
  const [countries, setCountries] = useState<Country[]>([] as Country[]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(startUrl);
  const [searchTimeout, SetSearchTimeout] = useState<number | null>(null);

  React.useEffect(() => {
    setUrl(startUrl);
  }, []);

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(url);
        const countriesArray: Country[] = response.data;

        setCountries(countriesArray);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(error);
      }
    };

    fetchCountries();
  }, [url]);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const searchText = e.currentTarget.value;

    setSearch(searchText);

    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    SetSearchTimeout(
      setTimeout(() => {
        setFilter("");
        if (searchText !== "") {
          setUrl(searchUrl + searchText);
        } else {
          setUrl(startUrl);
        }
      }, 500),
    );
    clearTimeout(searchTimeout as number);
  };

  const handleFilterChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setSearch("");
    setFilter(e.currentTarget.value);

    if (e.currentTarget.value !== "") {
      setUrl(filterUrl + e.currentTarget.value);
    } else {
      setUrl(startUrl);
    }
  };

  return {
    countries,
    search,
    filter,
    handleFilterChange,
    handleInputChange,
  };
};

export default useSearch;
