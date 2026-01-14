import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import Post from "./Post";
import { posts } from "../data/posts";
import { Link } from "react-router-dom";

const MotionChip = motion.create(Chip);

const Categories = () => {
  const categories = ["DOĞA", "SEYAHAT", "MACERA", "YAŞAM"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  console.log(posts.map((p) => p.category));
  console.log("Seçilen kategori:", selectedCategory);

  // Seçili kategoriye göre filtreleme
  const filteredPosts = posts.filter(
    (post) =>
      post.category.trim().toUpperCase() ===
      selectedCategory.trim().toUpperCase()
  );

  console.log("Filtrelenen Post Sayısı:", filteredPosts.length);

  return (
    <Container maxWidth="lg">
      {/* Başlık */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          Kategoriler
        </Typography>
      </Box>

      {/* Kategoriler */}
      <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mb: 4 }}>
        {categories.map((category) => (
          <MotionChip
            key={category}
            label={category}
            size="medium"
            sx={{
              bgcolor:
                selectedCategory === category
                  ? "primary.main"
                  : "background.paper",
              color:
                selectedCategory === category
                  ? "primary.contrastText"
                  : "text.secondary",
              border: "1px solid",
              borderColor:
                selectedCategory === category ? "primary.main" : "divider",
              fontSize: "1rem",
              cursor: "pointer",
              px: 2,
              py: 1,
              borderRadius: 2,
              transition: "all .25s ease",
            }}
            onClick={() => setSelectedCategory(category)}
            whileHover={{
              y: -3,
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            }}
          />
        ))}
      </Stack>

      {/* Blog yazıları */}
      <Stack direction="row" flexWrap="wrap" gap={3}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              image={post.image}
              date={post.date}
              category={post.category}
              readTime={post.readTime}
            />
          ))
        ) : (
          <Typography>Bu kategoriye ait yazı yok.</Typography>
        )}
      </Stack>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          variant="contained"
          component={Link}
          to="/blog"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 2,
          }}
        >
          Tüm Yazıları Gör
        </Button>
      </Box>
    </Container>
  );
};

export default Categories;
