import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}


export const theme = extendTheme({
  colors: {
    borderColor: "#eef2f4",
    darkBorderColor: "#323336",
    bodyColor: "#273346",
    darkBodyColor: "#27292d",
    inputChatColor: "#a2a2a2",
    messageDate: "#c0c7d2",
    darkMessageDate: "#626466",
  },
  spacing: {
    15: "3.375rem",
    71: "17.5rem",
  },
  config,
});
