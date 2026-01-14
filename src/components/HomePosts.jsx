import { Grid, Container, Typography, Box } from "@mui/material";
import Post from "./Post";
import { posts } from "../data/posts";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const HomePosts = () => {
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
        <TrendingUpIcon sx={{ mr: 1, color: "primary.main" }} />
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          Bloglar
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Post {...post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePosts;
