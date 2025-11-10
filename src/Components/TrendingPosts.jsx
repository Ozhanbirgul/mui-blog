import { Box, Container, Grid, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { posts } from "../data/posts";
import Post from "./Post";

const TrendingPosts = () => {
  const trendingPosts = posts.filter((post) => post.isTrending === true);

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
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2C3E50" }}>
          Trend Yazılar
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {trendingPosts.length > 0 ? (
          trendingPosts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={3}>
              <Post
                id={post.id}
                title={post.title}
                image={post.image}
                date={post.date}
                category={post.category}
                readTime={post.readTime}
              />
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ ml: 4 }}>
            Şu anda trend olan yazı bulunmamaktadır.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default TrendingPosts;
