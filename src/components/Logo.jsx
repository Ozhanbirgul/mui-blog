import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Public } from "@mui/icons-material";

const Logo = ({ text = "Dünya Rotası", color = "#2C3E50" }) => {
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        color: color,
        "&:hover": { color: "#2980B9" },
      }}
    >
      <Public sx={{ mr: 1, color: color }} />

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: color,
          textDecoration: "none",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Logo;
