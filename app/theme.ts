"use client";

import { createTheme } from "@mui/material/styles";

let customTheme = createTheme({
    palette: {
      primary: {
        main: "#6599DC",
      },
      secondary: {
        main: "#FFD66F",
      },
      info: {
        main: "#000000",
        light: "#ffffff",
      },
      background: {
        default: "#ededed",
      },
    },
  });

  customTheme = createTheme(customTheme, {
    palette: {
      Cgray: customTheme.palette.augmentColor({
        color: {
          main: '#363636',
        },
        name: 'Cgray',
      }),
    },
  });

export { customTheme };