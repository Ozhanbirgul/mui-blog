import { Box, Typography, Container } from "@mui/material";

export default function PageBanner({ title, subtitle, imageUrl, breadcrumb }) {
  const crumbs = breadcrumb || {};
  const left = crumbs.left || "Anasayfa";
  const middle = crumbs.middle || null;
  const right = crumbs.right || title;

  return (
    <Box
      sx={{
        height: { xs: 300, md: 300 },
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        color: "#fff",
        textAlign: "center",
        px: 2,
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          {title}
        </Typography>

        {subtitle && (
          <Typography variant="h6" sx={{ maxWidth: 600, mx: "auto" }}>
            {subtitle}
          </Typography>
        )}

        <Box
          sx={{
            display: "inline-flex",
            mb: 2,
            mt: 2,
          }}
        >
          <Box
            sx={{
              bgcolor: "#2C3E50",
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              mr: -2,
              clipPath:
                "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)",
            }}
          >
            <Typography variant="body2" sx={{ color: "#fff", fontWeight: 500 }}>
              {left}
            </Typography>
          </Box>

          {middle && (
            <Box
              sx={{
                bgcolor: "#2980B9",
                px: 4,
                py: 1,
                display: "flex",
                alignItems: "center",
                mr: -2,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 15px 50%)",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#fff", fontWeight: 500 }}
              >
                {middle}
              </Typography>
            </Box>
          )}

          {/* Sağ siyah alan */}
          <Box
            sx={{
              bgcolor: "#F7F5F2",
              color: "#2C3E50",
              px: 3,
              py: 1,
              display: "flex",
              alignItems: "center",
              ml: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 15px 50%)",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#2C3E50", fontWeight: 700 }}
            >
              {right}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
