import React from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  border: string;
  variant?: string;
  size?: string;
}
const Border: React.FC<Props> = ({ border, variant = "custom", size = "xs" }) => {
  return (
    <Text fontSize={size} variant={variant}>
      {border}
    </Text>
  );
};

export default Border;
