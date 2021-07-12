import { Grid, Stack, useColorMode } from "@chakra-ui/react";
import React from "react";
import Border from "../Border/Border";

interface Props {
  borders: string[];
}
const BorderList: React.FC<Props> = ({ borders }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Grid gap={3} templateColumns={{ base: "repeat(4, 1fr)", lg: "repeat(5, 1fr)" }}>
        {borders.map((border, index) => (
          <Stack
            key={index}
            alignItems="center"
            backgroundColor={colorMode === "light" ? "white" : "darkBlue"}
            borderRadius="3px"
            maxWidth="80px"
            overflow="hidden"
            padding="5px 3px"
            shadow="md"
            width="80px"
          >
            <Border border={border} />
          </Stack>
        ))}
      </Grid>
    </>
  );
};

export default BorderList;
