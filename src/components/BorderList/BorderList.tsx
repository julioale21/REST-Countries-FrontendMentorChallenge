import { Stack, useColorMode } from "@chakra-ui/react";
import React from "react";
import Border from "../Border/Border";

interface Props {
  borders: string[];
}
const BorderList: React.FC<Props> = ({ borders }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      {borders.map((border, index) => (
        <Stack
          key={index}
          alignItems="center"
          backgroundColor={colorMode === "light" ? "white" : "darkBlue"}
          borderRadius="3px"
          padding="5px 3px"
          shadow="md"
          width="80px"
        >
          <Border border={border} />
        </Stack>
      ))}
    </>
  );
};

export default BorderList;
