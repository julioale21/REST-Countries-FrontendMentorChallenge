import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Container, Grid, Stack, useColorMode } from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom";
import Country from "../../models/country";

import axios from "axios";

import Flag from "../../components/Flag/Flag";
import CountryInfo from "../../components/CountryInfo";

interface ILocation {
  state: {
    country: Country;
  };
}
const Detail: React.FC = () => {
  const history = useHistory();
  const location: ILocation = useLocation();
  const { colorMode } = useColorMode();
  const [borders, setBorders] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (!location.state) {
      history.push("/");
    }

    const fetchBorders = async () => {
      const response = await Promise.all(
        location.state.country.borders.map((border) => {
          return axios.get("https://restcountries.eu/rest/v2/alpha/" + border);
        }),
      );
      const data: string[] = response.map((item) => item.data.name);

      setBorders(Array.from(data));
    };

    fetchBorders();
  }, [history, location]);

  let country: Country = location.state.country;

  return (
    <Container marginX={0} maxW={{ base: "420px", md: "container.xl" }} paddingTop={10}>
      <Stack direction="row" justifyContent="flex-start" width="100%">
        <Button
          backgroundColor={colorMode === "light" ? "white" : "darkBlue"}
          width="150px"
          onClick={() => history.push("/")}
        >
          <ArrowBackIcon marginRight={2} /> Back
        </Button>
      </Stack>
      <Grid marginY={20} templateColumns={{ md: "repeat(2, 1fr)" }}>
        <Flag flag={country.flag} name={country.name} />
        <CountryInfo borders={borders} country={country} />
      </Grid>
    </Container>
  );
};

export default Detail;
