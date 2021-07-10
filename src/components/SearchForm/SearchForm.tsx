import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import React from "react";

interface Props {
  search: string;
  handleInput: (e: React.FormEvent<HTMLInputElement>) => void;
}
const Search: React.FC<Props> = ({ search, handleInput }) => {
  return (
    <InputGroup size="lg">
      <InputLeftElement pointerEvents="none">
        {" "}
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        placeholder="Select your country"
        type="search"
        value={search}
        width={{ base: "100%", md: "300px" }}
        onInput={handleInput}
        onReset={handleInput}
      />
    </InputGroup>
  );
};

export default Search;
