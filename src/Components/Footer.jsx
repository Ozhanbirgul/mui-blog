import { Box, Grid, Typography, Link, Container, Divider } from "@mui/material";
import { Email, Phone, LocationOn, Home, Info, ContactMail } from "@mui/icons-material"; // Yeni ikonlar eklendi

export default function Footer() {
  // Modern renk paleti: Koyu birincil renk (darkNavy) ve açık ikincil renk (softGray)
  const darkNavy = "#1C2833"; // Daha koyu, sofistike bir arka plan
  const softGray = "#D5DBDB"; // Daha yumuşak, hafif bir metin/ayırıcı rengi
  const accentColor = "#3498DB"; // Vurgu rengi, hover'da kullanılacak

  const linkStyle = {
    color: softGray,
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "color 0.3s ease-in-out", // Yumuşak geçiş
    "&:hover": {
      color: accentColor,
      textDecoration: "underline",
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: darkNavy, 
        color: softGray,
        mt: 0, 
        py: 6,
      }}
    >
      <Container maxWidth="lg"> 
        <Grid container spacing={{ xs: 6, md: 12 }}> 
          
          {/* --- Logo + Açıklama --- */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ color: "white", fontWeight: "bold", mb: 3 }}> {/* Logo rengi daha parlak */}
              MyBlog
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: softGray, width: "500px" }}>
              Frontend, React, JavaScript ve yazılım dünyasına dair güncel, derinlemesine
              içeriklerin yer aldığı profesyonel blog platformu.
            </Typography>
          </Grid>

          {/* --- Hızlı Menü --- */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: "white", fontWeight: "600", mb: 3, borderBottom: `2px solid ${accentColor}`, pb: 0.5 }}>
              Hızlı Menü
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Link href="/" sx={linkStyle}>
                <Home fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} /> Ana Sayfa
              </Link>
              <Link href="/hakkimizda" sx={linkStyle}>
                <Info fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} /> Hakkımızda
              </Link>
              <Link href="/contact" sx={linkStyle}>
                <ContactMail fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} /> İletişim
              </Link>
            </Box>
          </Grid>

          {/* --- İletişim --- */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: "white", fontWeight: "600", mb: 3, borderBottom: `2px solid ${accentColor}`, pb: 0.5 }}>
              Bize Ulaşın
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography sx={{ color: softGray }}>
                <Email fontSize="small" sx={{ verticalAlign: 'middle', mr: 1, color: accentColor }} /> info@myblog.com
              </Typography>
              <Typography sx={{ color: softGray }}>
                <Phone fontSize="small" sx={{ verticalAlign: 'middle', mr: 1, color: accentColor }} /> +90 555 555 55 55
              </Typography>
              <Typography sx={{ color: softGray }}>
                <LocationOn fontSize="small" sx={{ verticalAlign: 'middle', mr: 1, color: accentColor }} /> İstanbul / Türkiye
              </Typography>
            </Box>
          </Grid>

        </Grid>

        {/* --- Alt Çizgi + Copyright --- */}
        <Divider sx={{ backgroundColor: softGray, opacity: 0.2, my: 6 }} /> {/* Daha ince ve opaklığı azaltılmış ayırıcı */}

        <Typography variant="body2" textAlign="center" sx={{ color: softGray, opacity: 0.7 }}>
          © {new Date().getFullYear()} MyBlog. Tüm hakları saklıdır. | Bu platform sevgiyle kodlanmıştır.
        </Typography>
      </Container>
    </Box>
  );
}