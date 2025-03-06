import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const chakraThemeConfig: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const chakraTheme = extendTheme({
  config: chakraThemeConfig,
});
