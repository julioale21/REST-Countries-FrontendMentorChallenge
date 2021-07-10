import { Grid } from "@chakra-ui/react";
import React from "react";
import Country from "../../models/country";
import CountryItem from "../CountryItem";

interface Props {
  countries: Country[];
}

const CountriesList: React.FC<Props> = ({ countries }) => {
  return (
    <Grid
      gap={20}
      marginTop={12}
      paddingX={{ base: "1rem", sm: "0rem" }}
      templateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }}
      width="100%"
    >
      {countries.map((country) => (
        <CountryItem key={country.name} country={country} />
      ))}
    </Grid>
  );
};

export default CountriesList;
