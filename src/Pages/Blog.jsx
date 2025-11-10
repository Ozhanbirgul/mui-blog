import { Box, Grid, Typography } from "@mui/material";
import Post from "./components/Post";
import posts from "../data/posts";

const Blog = () => {
  console.log(posts); // test

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 4, minHeight: "100vh" }}>
      <Typography variant="h4" textAlign="center" mb={4}>
        Blog Yazıları
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Post
              title={post.title}
              image={post.image}
              date={post.date}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
