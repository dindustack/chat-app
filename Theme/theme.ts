import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/manrope";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  colors: {
    borderColor: "#eef2f4",
    darkBorderColor: "#323336",
    bodyColor: "#273346",
    darkBodyColor: "#27292d",
    inputChatColor: "#a2a2a2",
    messageDate: "#c0c7d2",
    darkMessageDate: "#626466",
    blueColor: "#0086ff",
    purpleColor: "#9f7aea",
    greenColor: "#38b2ac",
    orangeColor: "#ed8936",
    blueBgColor: "#f0f7ff",
    purpleBgColor: "#9f7aea1f",
    greenBgColor: "#38b2ab26",
    orangeBgColor: "#ed89361f",
    
  },
  fonts: {
    body: `'Manrope', sans-serif`,
  },
  spacing: {
    15: "3.375rem",
    71: "17.5rem",
  },
  config,
});
