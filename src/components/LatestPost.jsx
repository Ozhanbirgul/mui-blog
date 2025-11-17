import { Box, Container, Grid, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { posts } from "../data/posts";
import Post from "./Post";

const LatestPost = () => {

    const latestPostsToShow = [...posts].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    })
    .slice(0,2);

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
        <Typography variant="h4" sx={{ color: "#2C3E50", fontWeight: "bold" }}>
          Son Yazılar
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {latestPostsToShow.length > 0 ? (
            latestPostsToShow.map((post) => (
                <Grid
                    item
                    key={post.id}
                >
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
            <Typography variant="body1" sx={{ml: 4}}>
                Henüz hiç yazı yayınlanmamıştır.
            </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default LatestPost;
