import { useParams } from "react-router-dom";
import {
  Box,
  Avatar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";
import { authors } from "../data/authors";
import { posts } from "../data/posts";

const AuthorDetail = () => {
  const { id } = useParams();
  const authorId = parseInt(id);

  const author = authors.find((a) => a.id === authorId);
  const authorPosts = posts.filter((p) => p.authorId === authorId);

  if (!author) {
    return (
      <Container>
        <Typography variant="h5">Yazar bulunamadı.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 6 }}>
      {/* Yazar Bilgisi */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Avatar
          src={author.image}
          alt={author.name}
          sx={{ width: 100, height: 100, mr: 3 }}
        />
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {author.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#555" }}>
            {author.title}
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: "italic", mt: 1 }}>
            {author.bio}
          </Typography>
        </Box>
      </Box>

      {/* Yazarın Yazıları */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Yazıları ({authorPosts.length})
      </Typography>

      <Grid container spacing={3}>
        {authorPosts.map((post) => (
          <Grid item key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                height="180"
                image={post.image}
                alt={post.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {post.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap",
                    mt: 1,
                    mb: 1,
                  }}
                >
                  <Chip label={post.category} size="small" />
                  <Typography variant="caption">{post.date}</Typography>
                  <Typography variant="caption">{post.readTime}</Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#555" }}>
                  {post.content.substring(0, 150)}...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {authorPosts.length === 0 && (
          <Typography variant="body1">
            Bu yazarın henüz yazısı bulunmamaktadır.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default AuthorDetail;
