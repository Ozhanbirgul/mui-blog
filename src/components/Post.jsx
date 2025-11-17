import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const Post= ({ id, title, image, date, category, readTime }) => {
  const navigate = useNavigate();

  return (
    <MotionBox
      onClick={() => navigate(`/blog/${id}`)}
      sx={{
        position: "relative",
        height: 300,
        width: 350,
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
      whileHover={{
        y: -5, // yukarı hareket
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Görsel üst kısım */}
      <MotionBox
        sx={{
          height: "70%",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        whileHover={{ scale: 1.1 }} // görsel büyümesi
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Alt kısım: yazılar */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#fff",
          p: 2,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
      >
        <Typography variant="body1" sx={{ color: "#000", fontWeight: "bold" }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography variant="caption" sx={{ color: "#555" }}>
            {readTime} ⏱
          </Typography>
          <Typography variant="caption" sx={{ color: "#555" }}>
            {date}
          </Typography>
        </Box>
      </Box>

      {/* Sol üst köşede category */}
      <Box
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          backgroundColor: "#2980B9",
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
        }}
      >
        <Typography variant="caption" sx={{ color: "#fff", fontWeight: "bold" }}>
          {category}
        </Typography>
      </Box>
    </MotionBox>
  );
};

export default Post;
