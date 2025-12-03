import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Container,
} from "@mui/material";
import HomePosts from "../components/HomePosts";
import Categories from "../components/Categories";
import TrendingPosts from "../components/TrendingPosts";
import LatestPost from "../components/LatestPost";
import OutAuthors from "../components/OutAuthors";
import EmailSubscriptionCta from "../components/EmailSubscriptionCta";
import Hero from "../components/Hero";
import { posts } from "../data/posts";
import { Link } from "react-router-dom";

const Home = () => {
  const popularPosts = posts.filter((post) => post.isTrending);
  return (
    <Box sx={{ backgroundColor: "#f8f9fa" }}>
      <Hero />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3} alignItems="stretch">
          {/* --- Sol taraf (Hero Görseli) --- */}
          <Grid
            sx={{
              width: { xs: "100%", md: "71%" },
              backgroundColor: "#fff",
            }}
          >
            <HomePosts />
            <Categories />
            <TrendingPosts />
            <LatestPost />
            <OutAuthors />
          </Grid>

          {/* --- Sağ taraf (Sidebar) --- */}
          <Grid
            sx={{
              width: { xs: "100%", md: "25%" },
            }}
          >
            <Box
              sx={{
                position: "sticky",
                top: { xs: 0, md: 100 },
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  minHeight: { xs: "auto", md: 150 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  backgroundColor: "#fff",
                }}
              >
                <Typography
                  variant="h6"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#2C3E50" }}
                >
                  Popüler Yazılar
                </Typography>

                <List sx={{ mb: 3 }}>
                  {popularPosts.map((post) => (
                    <ListItem key={post.id} disablePadding sx={{ mb: 1.5 }}>
                      <ListItemText
                        primary={
                          <Link
                            to={`/blog/${post.id}`}
                            style={{ textDecoration: "none", color:"#2980B9" }}
                          >
                            {post.title}
                          </Link>
                        }
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
              </Paper>

              {/* Email Subscription CTA */}
              <Box>
                <EmailSubscriptionCta />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
