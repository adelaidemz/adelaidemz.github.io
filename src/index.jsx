import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Home from "./Home.jsx";
import "./styles.css"

const colorTheme = {
  // auto light/dark mode based on system
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const config = extendTheme({
  colorTheme,
  fonts: {
    heading: 'Aquawax Pro Trial, sans-serif',
    text: 'Inter, sans-serif',
  },
  components: {
      Button: {
          variants: {
              customLink: {
                  fontWeight: 'light',
                  borderRadius: 50,
                },
          }
      },
  }
})

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ChakraProvider theme={config}>
      <Home />
    </ChakraProvider>
  </StrictMode>
);
