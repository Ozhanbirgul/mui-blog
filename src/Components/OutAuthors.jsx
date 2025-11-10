import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { authors } from "../data/authors";
import PeopleIcon from "@mui/icons-material/People";

const OutAuthors = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          mb: 4,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2C3E50" }}>
          Yazarlarımız
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ display: "flex" }}>
        {authors.map((author) => (
          <Grid
            item
            key={author.id}
            xs={12} 
            sm={6} 
            md={4}
          >
            <Box
              sx={{
                textAlign: "center",
                p: 3,
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                transition: "box-shadow 0.3s",
                "&:hover": {
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                },
                width: "100%",
              }}
            >
              <Avatar
                alt={author.name}
                src={author.image}
                sx={{ width: 80, height: 80, margin: "0 auto", mb: 2 }}
              />

              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {author.name}
              </Typography>

              <Typography variant="subtitle1" sx={{ color: "#555", mb: 1 }}>
                {author.title}
              </Typography>

              {/* Yazar Biyografisi (Kısa) */}
              <Typography
                variant="body2"
                sx={{ fontStyle: "italic", color: "#555" }}
              >
                "{author.bio}"
              </Typography>

              {/* Yazı Sayısı */}
              <Typography
                variant="caption"
                display="block"
                sx={{ mt: 1, color: "primary.main" }}
              >
                {author.postsCount} Yazı
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OutAuthors;
