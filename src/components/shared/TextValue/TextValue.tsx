import React from "react";
import { chakra, Text } from "@chakra-ui/react";

interface Props {
  title?: string;
  value: string | string[];
  variant?: string;
  size?: string;
  titleWeight?: string;
  valueWight?: string;
  marginLeft?: number;
}
const TextValue: React.FC<Props> = ({
  title,
  value,
  variant = "custom",
  size = "xs",
  titleWeight = "bold",
  valueWight = "normal",
  marginLeft = 2,
}) => {
  return (
    <Text fontSize={size} fontWeight={titleWeight} variant={variant}>
      {title}:{" "}
      <chakra.span fontWeight={valueWight} marginLeft={marginLeft}>
        {`${value}`}
      </chakra.span>
    </Text>
  );
};

export default TextValue;
