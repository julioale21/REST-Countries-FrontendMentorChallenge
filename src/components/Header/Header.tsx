import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Container, Stack, Text } from "@chakra-ui/layout";
import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack backgroundColor={colorMode === "light" ? "white" : "darkBlue"} width="100vw">
      <Container maxWidth={{ base: "container.xl" }}>
        <Stack
          alignItems="center"
          direction="row"
          height={20}
          justifyContent="space-between"
          paddingX="1rem"
          width="100%"
        >
          <Text variant="custom">Where in the world?</Text>
          <Button
            _active={{ border: "none", ring: "none" }}
            _focus={{ ring: "none" }}
            _hover={{ bg: "transparent" }}
            background="transparent"
            outline="none"
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}

            <Text marginLeft={3} variant="custom">
              {colorMode === "light" ? "Dark mode" : "Light mode"}
            </Text>
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Header;
