import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={4}
      sx={{ backgroundColor: "#E0E0E0", color: "#2C3E50" }}
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
                color: "#2C3E50",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#2980B9",
                  color: "#F7F5F2",
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
