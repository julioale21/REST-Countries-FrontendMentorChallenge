import React from "react";
import { Container, Stack, Input, Select, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import useSearch from "./useSearch";
import CountriesList from "../../components/CountriesList";

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
        <InputGroup size="lg">
          <InputLeftElement pointerEvents="none">
            {" "}
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Select your country"
            type="text"
            value={search}
            width={{ base: "100%", md: "300px" }}
            onInput={(e) => handleInputChange(e)}
          />
        </InputGroup>

        <Select
          placeholder="Filter by Region"
          value={filter}
          width="200px"
          onChange={handleFilterChange}
        >
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceania</option>
        </Select>
      </Stack>
      <CountriesList countries={countries} />
    </Container>
  );
};

export default Home;
