import { Select } from "@chakra-ui/select";
import React from "react";

interface Props {
  filter: string;
  handleChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}

const FilterForm: React.FC<Props> = ({ filter, handleChange }) => {
  return (
    <Select
      className="filter"
      placeholder="Filter by Region"
      size="lg"
      value={filter}
      width="230px"
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
