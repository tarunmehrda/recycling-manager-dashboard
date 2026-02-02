import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider, createTheme } from "@mantine/core";
import App from "./App";

const theme = createTheme({
  primaryColor: "green",
  defaultRadius: "md",
  colors: {
    green: [
      "#eefde9",
      "#d3f5c8",
      "#b2ec9d",
      "#8be26d",
      "#6cd849",
      "#58d232",
      "#4dce27",
      "#3ca81f",
      "#2e8d1a",
      "#227317",
    ],
  },
  components: {
    Card: {
      defaultProps: {
        shadow: "sm",
        radius: "md",
        withBorder: true,
      },
    },
    Button: {
      defaultProps: {
        radius: "md",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>
);