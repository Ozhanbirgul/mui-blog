import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  Home,
  Info,
  ContactMail,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#2C3E50",
        color: "#F7F5F2",
        mt: 0,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 12 }}>
          <Grid item xs={12} md={4}>
            <Logo color="#F7F5F2" />

            <Typography
              variant="body1"
              sx={{ lineHeight: 1.8, color: "#F7F5F2", width: "500px", mt: 2 }}
            >
              Frontend, React, JavaScript ve yazılım dünyasına dair güncel,
              derinlemesine içeriklerin yer aldığı profesyonel blog platformu.
            </Typography>
          </Grid>

          {/* --- Hızlı Menü --- */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: "600",
                mb: 3,
                borderBottom: `2px solid #2980B9`,
                pb: 0.5,
              }}
            >
              Hızlı Menü
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Button component={Link} to="/" sx={{ color: "#F7F5F2" }}>
                Anasayfa
              </Button>
              <Button
                component={Link}
                to="/hakkimizda"
                sx={{ color: "#F7F5F2" }}
              >
                Hakkımızda
              </Button>

              <Button component={Link} to="/iletisim" sx={{ color: "#F7F5F2" }}>
                İletişim
              </Button>
            </Box>
          </Grid>

          {/* --- İletişim --- */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: "600",
                mb: 3,
                borderBottom: `2px solid #2980B9`,
                pb: 0.5,
              }}
            >
              Bize Ulaşın
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography sx={{ color: "#F7F5F2" }}>
                <Email
                  fontSize="small"
                  sx={{ verticalAlign: "middle", mr: 1, color: "#F7F5F2" }}
                />{" "}
                info@myblog.com
              </Typography>
              <Typography sx={{ color: "#F7F5F2" }}>
                <Phone
                  fontSize="small"
                  sx={{ verticalAlign: "middle", mr: 1, color: "#F7F5F2" }}
                />{" "}
                +90 555 555 55 55
              </Typography>
              <Typography sx={{ color: "#F7F5F2" }}>
                <LocationOn
                  fontSize="small"
                  sx={{ verticalAlign: "middle", mr: 1, color: "#F7F5F2" }}
                />{" "}
                İstanbul / Türkiye
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* --- Alt Çizgi + Copyright --- */}
        <Divider
          sx={{ backgroundColor: "#F7F5F2", opacity: 0.2, my: 6 }}
        />{" "}
        {/* Daha ince ve opaklığı azaltılmış ayırıcı */}
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: "#F7F5F2", opacity: 0.7 }}
        >
          © {new Date().getFullYear()} MyBlog. Tüm hakları saklıdır. | Bu
          platform sevgiyle kodlanmıştır.
        </Typography>
      </Container>
    </Box>
  );
}
