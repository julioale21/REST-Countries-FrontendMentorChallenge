import { Stack, Box, chakra, Image, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import Country from "../../models/country";

interface Props {
  country: Country;
}

const CountryItem: React.FC<Props> = ({ country }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack
      background={colorMode === "light" ? "white" : "darkBlue"}
      direction="column"
      justifyContent="space-between"
      paddingBottom={4}
      shadow="md"
    >
      <Box height="168px" minWidth="100%">
        <Image alt={country.name} height="100%" minWidth="100%" shadow="sm" src={country.flag} />
      </Box>
      <Stack alignItems="start" paddingLeft={8}>
        <Text fontWeight="bold" marginY={3} variant="custom">
          {country.name}
        </Text>
        <Stack paddingBottom="1rem">
          <Text fontSize="x-small" fontWeight="bold" variant="custom">
            Population:
            <chakra.span fontWeight="normal" marginLeft={2}>
              {Intl.NumberFormat().format(Number(country.population))}
            </chakra.span>
          </Text>
          <Text fontSize="x-small" fontWeight="bold" variant="custom">
            Region:
            <chakra.span fontWeight="normal" marginLeft={2}>
              {country.region}
            </chakra.span>
          </Text>
          <Text fontSize="x-small" fontWeight="bold" variant="custom">
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
