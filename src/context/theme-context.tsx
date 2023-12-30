import React from "react";
import { Theme } from "../constants/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { getInitialTheme } from "../theme/utils";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = React.useState<Theme>(getInitialTheme());

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
          localStorage.theme = newMode;
          return newMode;
        });
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeProvider;
