import React from "react";

import { ColorModeContext } from "../context/theme-context";

const useTheme = () => {
  const context = React.useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default useTheme;
