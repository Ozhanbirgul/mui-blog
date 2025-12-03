import Breadcrumb from "../components/Breadcrumb";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  return (
    <>
      <Breadcrumb
        title="İletişim"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        imageUrl="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600"
        breadcrumb={{ left: "Anasayfa", right: "Hakkımızda" }}
      />

      <Box
        sx={{
          py: 6,
          px: 3,
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 4, 
        }}
      >
        {/* Form Alanı */}
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Bize Ulaşın
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField fullWidth label="Adınız" variant="outlined" sx={{ mb: 3 }} />
              <TextField
                fullWidth
                label="E-posta Adresiniz"
                type="email"
                variant="outlined"
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label="Mesajınız"
                multiline
                rows={5}
                variant="outlined"
                sx={{ mb: 3 }}
              />
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  backgroundColor: "#2980B9",
                  "&:hover": { backgroundColor: "#1F618D" },
                }}
              >
                Gönder
              </Button>
            </Box>
          </Paper>
        </Box>

        {/* İletişim Bilgileri */}
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              İletişim Bilgileri
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Adres:</strong> Örnek Mah. 123. Sok. No: 45, İstanbul, Türkiye
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Telefon:</strong> +90 555 123 45 67
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>E-posta:</strong> info@ornekblog.com
            </Typography>
            <Typography variant="body1" sx={{ mt: 3 }}>
              Sosyal medya hesaplarınız veya diğer iletişim kanallarınızı buraya ekleyebilirsiniz.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
