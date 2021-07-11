import { Stack, Image } from "@chakra-ui/react";
import React from "react";

interface Props {
  flag: string;
  name: string;
}
const Flag: React.FC<Props> = ({ flag, name }) => {
  return (
    <Stack>
      <Image alt={name} maxHeight="300px" maxWidth="450px" src={flag} />
    </Stack>
  );
};

export default Flag;
