import { Grid, Container, Typography, Box } from "@mui/material";
import Post from "./Post";
import { posts } from "../data/posts";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

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
        <TrendingUpIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2C3E50" }}>
          Bloglar
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid
            key={post.id}
            sx={{ width: { xs: "100%", sm: "50%", md: "45%" } }}
          >
            <Post {...post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePosts;
