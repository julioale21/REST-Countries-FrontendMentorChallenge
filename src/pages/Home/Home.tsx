import React from "react";
import { Container, Stack } from "@chakra-ui/react";
import useSearch from "./useSearch";
import CountriesList from "../../components/CountriesList";
import SearchForm from "../../components/SearchForm";
import FilterForm from "../../components/FilterForm";

const Home: React.FC = () => {
  const { countries, search, filter, handleFilterChange, handleInputChange } = useSearch();

  return (
    <Container
      alignItems="center"
      fontFamily="'Nunito Sans', sans-serif"
      maxW={{ base: "container.xl" }}
    >
      <Stack
        alignItems={{ base: "flex-start", md: "center" }}
        direction={{ base: "column", md: "row" }}
        justifyContent={{ md: "space-between" }}
        marginTop={12}
        spacing={{ base: 6, md: 0 }}
      >
        <SearchForm handleInput={handleInputChange} search={search} />
        <FilterForm filter={filter} handleChange={handleFilterChange} />
      </Stack>
      <CountriesList countries={countries} />
    </Container>
  );
};

export default Home;
