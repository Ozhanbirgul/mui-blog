import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

const BlogDetail = () => {
  const { id } = useParams(); // URL'den ID al
  const post = posts.find((p) => p.id === Number(id)); // ilgili postu bul

  if (!post) {
    return (
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h5">Blog bulunamadı</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 4, minHeight: "100vh" }}>
      {/* Hero / Header */}
      <Box sx={{ maxWidth: 800, mx: "auto", px: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <Box
            component="button"
            onClick={() => window.history.back()}
            sx={{
              p: 1.5,
              bgcolor: "white",
              borderRadius: 1,
              border: "1px solid #e0e0e0",
              cursor: "pointer",
              "&:hover": { bgcolor: "#f0f0f0" },
            }}
          >
            ←
          </Box>
          <Typography variant="body2" color="text.secondary">
            Back to Articles
          </Typography>
        </Box>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          {post.category} • {post.date} • {post.readTime}
        </Typography>

        {/* Blog Görseli */}
        <Box
          component="img"
          src={post.image}
          alt={post.title}
          sx={{ width: "100%", borderRadius: 2, mb: 4 }}
        />

        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          {post.content}
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogDetail;
