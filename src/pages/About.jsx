import Breadcrumb from "../components/Breadcrumb";
import { Box, List, ListItem, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import MapIcon from "@mui/icons-material/Map";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

export default function AboutPage() {
  return (
    <>
      <Breadcrumb
        title="Hakkımızda"
        subtitle="Blogumuz seyahat, keşif ve deneyim odaklı içeriklerle sizlere ilham vermeyi amaçlar."
        imageUrl="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600"
        breadcrumb={{ left: "Anasayfa", right: "Hakkımızda" }}
      />

      {/* Sayfa içeriği */}
      <Box sx={{ py: 6, px: 3, maxWidth: 1000, mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {/* Biz Kimiz */}
          <Box
            sx={{
              p: 4,
              borderRadius: 3,
              background: "linear-gradient(135deg, #f9f9f9, #ffffff)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <PublicIcon sx={{ fontSize: 40, color: "#E67E22" }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Biz Kimiz?
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Dünyayı keşfetmeyi, yeni yerler görmeyi ve yaşadığımız deneyimleri
              paylaşmayı seven bir ekibiz. Amacımız; hem Türkiye’de hem de
              dünyada gezilecek noktalar, lezzet durakları, kültürel deneyimler
              ve yolculuk ipuçları hakkında ilham veren içerikler üretmek.
            </Typography>
          </Box>

          {/* Neler Yapıyoruz */}
          <Box
            sx={{
              p: 4,
              borderRadius: 3,
              background: "linear-gradient(135deg, #ffffff, #f5f7fa)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <MapIcon sx={{ fontSize: 40, color: "E67E22" }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Neler Yapıyoruz?
              </Typography>
            </Box>

            <List sx={{ pl: 2 }}>
              {[
                "Seyahat rotaları oluşturuyoruz",
                "Şehir şehir gezi rehberleri hazırlıyoruz",
                "Konaklama, ulaşım ve bütçe planlama bilgileri paylaşıyoruz",
                "Deneyimlerimizi okuyuculara aktarıyoruz",
                "Fotoğraf ve hikâye anlatımıyla keşif ruhunu yansıtıyoruz",
              ].map((item, i) => (
                <ListItem
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    py: 1,
                  }}
                >
                  <CheckCircleIcon sx={{ color: "#E67E22" }} />
                  <Typography variant="body1">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Neden Bu Blog */}
          <Box
            sx={{
              p: 4,
              borderRadius: 3,
              background: "linear-gradient(135deg, #fff, #f8f8ff)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <FavoriteIcon sx={{ fontSize: 40, color: "#E67E22" }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Neden Bu Blog?
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Herkesin keşfetmeye değer bir hikâyesi olduğuna inanıyoruz.
              Gezdiğimiz yerleri, gördüğümüz kültürleri ve yol boyunca
              öğrendiklerimizi paylaşarak başkalarına ilham olmak istiyoruz.
            </Typography>
          </Box>

          {/* Misyon & Vizyon */}
          <Box
            sx={{
              p: 4,
              borderRadius: 3,
              background: "linear-gradient(135deg, #fdfdfd, #f6f7fb)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <EmojiObjectsIcon sx={{ fontSize: 40, color: "#E67E22" }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Misyon & Vizyon
              </Typography>
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
              Misyonumuz
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
              Okuyucularımıza güvenilir, samimi ve ilham verici içerikler
              sunmak.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Vizyonumuz
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Seyahat etmeyi seven herkesin bir araya geldiği, deneyim
              paylaştığı samimi bir topluluk yaratmak.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
