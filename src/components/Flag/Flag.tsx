import { Stack, Image } from "@chakra-ui/react";
import React from "react";

interface Props {
  flag: string;
  name: string;
}
const Flag: React.FC<Props> = ({ flag, name }) => {
  return (
    <Stack direction="row" justifyContent="center">
      <Image
        alt={name}
        maxHeight={{ base: "300px" }}
        maxWidth={{ base: "300px", md: "450px" }}
        src={flag}
      />
    </Stack>
  );
};

export default Flag;
