import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const EmailSubscriptionCta = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || isSuccess) return;

    setIsLoading(true);

    // --- API çağrısı simülasyonu başlangıcı ---
    await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5 saniye bekleme simülasyonu
    // --- API çağrısı simülasyonu sonu ---

    setIsLoading(false);
    setIsSuccess(true);

    setTimeout(() => setIsSuccess(false), 5000);

    setEmail("");
  };

  if (isSuccess) {
    return (
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          textAlign: "center",
          my: 6,
          bgcolor: "#2ecc71",
          color: "#fff",
          transition: "all .5s ease",
          position: { xs: "relative", md: "sticky" },
          top: { xs: 0, md: 20 },
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 40, mb: 1 }} />
        <Typography variant="h5" component="h3">
          Tebrikler, Abone Oldunuz!
        </Typography>
        <Typography variant="body1">
          En güncel içeriklerimiz ilk sizde olacak.
        </Typography>
      </Paper>
    );
  }

  // Normal Cta Formu
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          padding: { xs: 2, md: 2 },
          my: 4,
          textAlign: "center",
          bgcolor: "#2C3E50",
          position: { xs: "relative", md: "sticky" },
          top: { xs: 0, md: 430 },
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 600, color: "#E0E0E0" }}
        >
          Özel İçerikler Gelen Kutunuzda
        </Typography>

        <Typography variant="body1" color="#E0E0E0" sx={{ mb: 3 }}>
          Haftalık bültenimize kaydolun, hiçbir trendi kaçırmayın.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            maxWidth: 600,
            mx: "auto",
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {/* E-posta Giriş Alanı */}
            <Grid item xs={12} sm={8}>
              <TextField
                required
                fullWidth
                label="E-posta Adresiniz"
                variant="outlined"
                size="large"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                placeholder="ornek@mail.com"
                InputLabelProps={{ shrink: false }}
                InputProps={{
                  notched: false,
                }}
                sx={{
                  backgroundColor: "#F7F5F2",
                  borderRadius: "5px",
                }}
              />
            </Grid>

            {/* Buton */}
            <Grid item xs={12} sm={4}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                endIcon={!isLoading && <SendIcon />}
                disabled={isLoading}
                sx={{
                  height: "56px",
                  color: "#F7F5F2",
                  backgroundColor: '#2980B9'
                }}
              >
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Abone Olun"
                )}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default EmailSubscriptionCta;
