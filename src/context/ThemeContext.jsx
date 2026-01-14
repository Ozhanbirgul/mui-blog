import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ColorModeContext = createContext({
  mode: "light",
  toggleColorMode: () => {},
});

export const useColorMode = () => {
  return useContext(ColorModeContext);
};

const ColorModeProvider = ({ children }) => {
  // 1. Adım: Başlangıç değerini localStorage'dan al, yoksa "light" kullan
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("appMode");
    return savedMode ? savedMode : "light";
  });

  // 2. Adım: Mode her değiştiğinde localStorage'ı güncelle
  useEffect(() => {
    localStorage.setItem("appMode", mode);
  }, [mode]);

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;