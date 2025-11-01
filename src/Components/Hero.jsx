import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Container,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import FeaturedPosts from "./FeaturedPosts";
import Categories from "./Categories";

const Hero = () => {
  const popularPosts = [
    { title: "Sivas-Gürün Yolu Sahanda Ev Sırtı'na Giden Yol" },
    { title: "Sivas'dan Sonsuza Kadar Kıran Yolu'na Gitmek İçin" },
    { title: "Erzincan'dan Keşişlik Yaylası'na Gitmek İçin" },
  ];

  const categories = ["DOĞA", "SEYAHAT", "MACERA", "KÜLTÜR", "YAŞAM"];

  return (
    <Box sx={{ backgroundColor: "#f8f9fa" }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3} alignItems="stretch">
          {/* --- Sol taraf (Hero Görseli) --- */}
          <Grid
            sx={{
              width: { xs: "100%", md: "71%" },
              backgroundColor: "#fff"
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: { xs: 400, sm: 500, md: 600 },
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.4)",
                  borderRadius: 2,
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  color: "#fff",
                  zIndex: 1,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  textAlign: "center",
                  px: 2,
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                  letterSpacing: "0.05em",
                  mb: 3,
                }}
              >
                KEŞFET, YAŞA, YAZ
              </Typography>
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
            <FeaturedPosts />
            <Categories />
          </Grid>

          {/* --- Sağ taraf (Sidebar) --- */}
          <Grid
            sx={{
              width: { xs: "100%", md: "25%" },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 3,
                minHeight: { xs: "auto", md: 600 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                backgroundColor: "#fff",
                border: "1px solid #e0e0e0",
                position: { xs: "relative", md: "sticky" },
                top: { xs: 0, md: 20 },
              }}
            >
              <Box
                sx={{
                  height: 150,
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 1,
                  mb: 3,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "#333",
                  fontSize: "0.95rem",
                }}
              >
                Popüler Yazılar
              </Typography>
              <List sx={{ mb: 3 }}>
                {popularPosts.map((post, index) => (
                  <ListItem key={index} disablePadding sx={{ mb: 1.5 }}>
                    <ListItemText
                      primary={post.title}
                      primaryTypographyProps={{
                        fontSize: 13,
                        fontWeight: 400,
                        color: "#666",
                        sx: {
                          cursor: "pointer",
                          "&:hover": { color: "#2980B9" },
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "#333",
                  fontSize: "0.95rem",
                }}
              >
                KATEGORİLER
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                {categories.map((category, index) => (
                  <Chip
                    key={index}
                    label={category}
                    size="small"
                    sx={{
                      backgroundColor: "#f5f5f5",
                      color: "#666",
                      fontSize: "0.75rem",
                      "&:hover": {
                        backgroundColor: "#2980B9",
                        color: "#fff",
                        cursor: "pointer",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
