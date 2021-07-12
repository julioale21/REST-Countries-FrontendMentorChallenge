import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import Country from "../../models/country";
import BorderList from "../BorderList";
import TextValue from "../shared/TextValue";

interface Props {
  country: Country;
  borders: string[];
}

const CountryInfo: React.FC<Props> = ({ country, borders }) => {
  return (
    <Stack justifyContent="center" marginTop={{ base: 20, md: 0 }}>
      <Text fontSize="2xl" fontWeight="bold" marginBottom={{ base: 5, md: 0 }}>
        {country.name}
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        paddingRight={20}
      >
        <Stack marginBottom={{ base: 5, md: 0 }}>
          <TextValue title="Native Name" value={country.name} />
          <TextValue
            title="Population"
            value={Intl.NumberFormat().format(Number(country.population))}
          />
          <TextValue title="Region" value={country.region} />
          <TextValue title="Sub Region" value={country.subRegion} />
          <TextValue title="Capital" value={country.capital} />
        </Stack>
        <Stack>
          <TextValue title="Top Level Domain" value={country.topLevelDomain} />
          <TextValue title="Currencies" value={country.currencies[0].name} />
          <TextValue
            title="Languages"
            value={Array.from(country.languages.map((lang) => lang.name))}
          />
        </Stack>
      </Stack>
      <Stack alignItems="center" direction={{ base: "column", md: "row" }} paddingTop={6}>
        <Text display="inline" fontSize="xs" fontWeight="bold" variant="custom">
          Border Countries:
        </Text>
        {borders && (
          <Stack direction="row" flexWrap="wrap" justifyContent="start">
            <BorderList borders={borders} />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default CountryInfo;
