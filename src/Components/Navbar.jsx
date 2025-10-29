import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";

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
          <Typography variant="h6" sx={{ cursor: "pointer" }}>
            Blog
          </Typography>

          <Box
            sx={{
              "& button": {
                color: "#2C3E50",
                transition: "all 0.3s ease", // geçiş efekti
                "&:hover": {
                  backgroundColor: "#2980B9",
                  color: "#F7F5F2",
                },
              },
            }}
          >
            <Button>Anasayfa</Button>
            <Button>Hakkımızda</Button>
            <Button>İletişim</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
