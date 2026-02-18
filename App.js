import React from "react";
import AppContainer from "./src/navigations/AppNavigation";
import ThemeProvider from "./src/theme/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}
