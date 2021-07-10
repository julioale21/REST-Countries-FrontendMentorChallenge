import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    darkBlue: "hsl(209, 23%, 22%)",
    veryDarkBlueBg: "hsl(207, 26%, 17%)",
    veryDarkBlueText: "hsl(200, 15%, 8%)",
    darkGray: "hsl(0, 0%, 52%)",
    veryLightGray: "hsl(0, 0%, 98%)",
    white: "hsl(0, 0%, 100%)",
  },
  components: {
    Text: {
      variants: {
        custom: (props) => ({
          color: mode("veryDarkBlueText", "white")(props),
        }),
      },
    },
  },
});

export default theme;
