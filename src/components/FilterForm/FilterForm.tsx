import { useColorMode } from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import React from "react";

interface Props {
  filter: string;
  handleChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}

const FilterForm: React.FC<Props> = ({ filter, handleChange }) => {
  const { colorMode } = useColorMode();

  return (
    <Select
      _focus={{ ring: "none" }}
      backgroundColor={colorMode === "light" ? "white" : "darkBlue"}
      className="filter"
      color={colorMode === "light" ? "gray.700" : "gray.200"}
      fontWeight="bold"
      placeholder="Filter by Region"
      size="lg"
      value={filter}
      width={{ base: "200px", md: "230px" }}
      onChange={handleChange}
    >
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europa</option>
      <option value="Oceania">Oceania</option>
    </Select>
  );
};

export default FilterForm;
