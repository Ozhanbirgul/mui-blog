import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import Post from "./Post";
import { posts } from "../data/posts";

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
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2C3E50" }}>
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
              backgroundColor:
                selectedCategory === category ? "#2C3E50" : "#f5f5f5",
              color: selectedCategory === category ? "#fff" : "#666",
              fontSize: "1.1rem",
              cursor: "pointer",
              px: 2,
              py: 1.5,
              borderRadius: 2,
              border: "1px solid #2C3E50",
              transition: "all .2s ease",
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
    </Container>
  );
};

export default Categories;
