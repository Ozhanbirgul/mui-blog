import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Logo from "./Logo";
import { useColorMode } from "../context/ThemeContext";

const Navbar = () => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <AppBar
      position="sticky"
      elevation={4}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
      }}
    >
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo />

          <Box
            sx={{
              "& a": {
                color: "text.primary",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "#fff",
                },
              },
            }}
          >
            <Button component={Link} to="/">
              Anasayfa
            </Button>
            <Button component={Link} to="/hakkimizda">
              Hakkımızda
            </Button>
            <Button component={Link} to="/iletisim">
              İletişim
            </Button>
          </Box>

          {/* Dark / Light Toggle */}
          <IconButton onClick={toggleColorMode}>
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
