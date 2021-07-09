import { Stack, Box, chakra, Image, Text } from "@chakra-ui/react";
import React from "react";
import Country from "../../models/country";

interface Props {
  country: Country;
}

const CountryItem: React.FC<Props> = ({ country }) => {
  return (
    <Stack
      backgroundColor="gray.700"
      direction="column"
      justifyContent="space-between"
      paddingBottom={4}
    >
      <Box height="164px" minWidth="100%">
        <Image alt={country.name} height="100%" minWidth="100%" src={country.flag} />
      </Box>
      <Stack alignItems="start" paddingLeft={8}>
        <Text fontWeight="bold" marginY={3}>
          {country.name}
        </Text>
        <Stack paddingBottom="1rem">
          <Text fontSize="x-small" fontWeight="bold">
            Population:
            <chakra.span fontWeight="normal" marginLeft={2}>
              {Intl.NumberFormat().format(Number(country.population))}
            </chakra.span>
          </Text>
          <Text fontSize="x-small" fontWeight="bold">
            Region:
            <chakra.span fontWeight="normal" marginLeft={2}>
              {country.region}
            </chakra.span>
          </Text>
          <Text fontSize="x-small" fontWeight="bold">
            Capital:
            <chakra.span fontWeight="normal" marginLeft={2}>
              {country.capital}
            </chakra.span>
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CountryItem;
