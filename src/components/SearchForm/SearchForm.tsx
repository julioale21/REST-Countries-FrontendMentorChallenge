import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { useColorMode } from "@chakra-ui/react";
import React from "react";

interface Props {
  search: string;
  handleInput: (e: React.FormEvent<HTMLInputElement>) => void;
}
const Search: React.FC<Props> = ({ search, handleInput }) => {
  const { colorMode } = useColorMode();

  return (
    <InputGroup size="lg">
      <InputLeftElement pointerEvents="none">
        {" "}
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        _focus={{ ring: "none" }}
        backgroundColor={colorMode === "light" ? "white" : "darkBlue"}
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
