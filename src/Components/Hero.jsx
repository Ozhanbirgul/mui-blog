import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: { xs: 400, sm: 500, md: 600 },
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      />
      {/* Başlık */}
      <Typography
        variant="h1"
        sx={{
          color: "#fff",
          zIndex: 1,
          textAlign: "center",
          px: 2,
          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
          fontWeight: "bold",
          textTransform: "uppercase",
          mb: 3,
        }}
      >
        KEŞFET, YAŞA, YAZ
      </Typography>
      {/* Buton */}
      <Button
        variant="contained"
        sx={{
          zIndex: 1,
          backgroundColor: "#2980B9",
          color: "#fff",
          px: 4,
          py: 1.5,
          fontSize: "1rem",
          fontWeight: "bold",
          borderRadius: 1,
          textTransform: "uppercase",
          "&:hover": { backgroundColor: "#2C3E50" },
        }}
      >
        ŞİMDİ BAŞLA
      </Button>
    </Box>
  );
};

export default Hero;
