import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Public } from "@mui/icons-material";

const Logo = ({ text = "Dünya Rotası" }) => {
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        color: "text.primary",
        transition: "color 0.3s ease",
        "&:hover": {
          color: "primary.main",
        },
      }}
    >
      <Public sx={{ mr: 1 }} />

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Logo;
