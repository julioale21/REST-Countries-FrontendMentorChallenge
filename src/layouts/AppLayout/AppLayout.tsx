import React from "react";
import Header from "../../components/Header";
import { Stack } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";

const AppLayout: React.FC = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack
      alignItems="center"
      backgroundColor={colorMode === "light" ? "veryLightGray" : "veryDarkBlueBg"}
      minHeight="100vh"
      width="100%"
    >
      <Header />
      {children}
    </Stack>
  );
};

export default AppLayout;
