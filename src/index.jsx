import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Global } from "@emotion/react"

const config = {
  // auto light/dark mode based on system
  initialColorMode: 'system',
  useSystemColorMode: true,

  // fonts: {
  //   heading: 'Open Sans, sans-serif',
  //   text: 'Georgia, serif',
  // },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        // 5. We can add responsive variants
        sm: {
          bg: 'teal.500',
          fontSize: 'md',
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'lg', // default is md
        variant: 'sm', // default is solid
        colorScheme: 'green', // default is gray
      },
    },
  },
    // link
    Link: {
      baseStyle: {
        textDecoration: 'underline',
        color: 'blue.500',
      },
      // defaultProps: {
      //   size: 'lg', // default is md
      //   variant: 'sm', // default is solid
      //   colorScheme: 'green', // default is gray
      // },
    }
  }
  

const theme = extendTheme({ config })
// import "./styles.css";

import Home from "./Home.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  </StrictMode>
);
