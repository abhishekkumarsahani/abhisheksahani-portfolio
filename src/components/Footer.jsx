import { 
  Box, 
  Typography, 
  Container,
  Grid,
  IconButton,
  Stack,
  Divider,
  Link,
  Chip
} from "@mui/material";
import { motion } from "framer-motion";
import {
  LinkedIn,
  GitHub,
  Email,
  ArrowUpward,
  Code,
  Favorite,
  LocationOn,
  Phone
} from "@mui/icons-material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <LinkedIn />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/abhishek-kumar-sahani-012363247/",
      color: "#0077B5"
    },
    {
      icon: <GitHub />,
      label: "GitHub",
      url: "https://github.com/abhishekkumarsahani",
      color: "#333"
    },
    {
      icon: <Email />,
      label: "Email",
      url: "mailto:abhisksheksahani@gmail.com",
      color: "#DB4437"
    }
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0a0a2a 0%, #1a1a4a 100%)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, #00d2ff, #3a7bd5, transparent)",
        }
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `radial-gradient(circle at 25% 25%, #00d2ff 2px, transparent 2px)`,
          backgroundSize: '30px 30px',
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ py: 6 }}>
          {/* Brand Column */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Stack spacing={3}>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      background: "linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: 1
                    }}
                  >
                    Abhishek Kumar Sahani
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#b0d4ff",
                      lineHeight: 1.6
                    }}
                  >
                    Full Stack Developer specializing in .NET and React. 
                    Creating innovative solutions with modern technologies.
                  </Typography>
                </Box>

                {/* Contact Info */}
                <Stack spacing={2}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <LocationOn sx={{ color: "#00d2ff", fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: "#b0d4ff" }}>
                      Koteshwor, Kathmandu, Nepal
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Phone sx={{ color: "#00d2ff", fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: "#b0d4ff" }}>
                      +977 9843020129
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Email sx={{ color: "#00d2ff", fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: "#b0d4ff" }}>
                      abhisksheksahani@gmail.com
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </motion.div>
          </Grid>

          {/* Quick Links Column */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                }}
              >
                <Code sx={{ color: "#00d2ff", fontSize: 24 }} />
                Quick Links
              </Typography>
              <Stack spacing={2}>
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.path}
                      sx={{
                        color: "#b0d4ff",
                        textDecoration: "none",
                        fontWeight: 500,
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        "&:hover": {
                          color: "#00d2ff",
                          textDecoration: "none",
                          transform: "translateX(5px)",
                        }
                      }}
                    >
                      <Box
                        sx={{
                          width: "6px",
                          height: "6px",
                          background: "#00d2ff",
                          borderRadius: "50%",
                          opacity: 0
                        }}
                      />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            py: 4,
            position: "relative"
          }}
        >
          <Grid container alignItems="center">
            {/* Copyright */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#a0d2ff",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    justifyContent: { xs: 'center', md: 'flex-start' }
                  }}
                >
                  © {currentYear} Abhishek Kumar Sahani. All rights reserved.
                  <Favorite sx={{ fontSize: 14, color: "#ff416c" }} />
                </Typography>
              </motion.div>
            </Grid>

            {/* Back to Top */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: 'center', md: 'flex-end' },
                    mt: { xs: 2, md: 0 }
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      onClick={scrollToTop}
                      sx={{
                        background: "linear-gradient(135deg, rgba(0, 210, 255, 0.1), rgba(58, 123, 213, 0.1))",
                        border: "1px solid rgba(0, 210, 255, 0.3)",
                        color: "#00d2ff",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "linear-gradient(135deg, rgba(0, 210, 255, 0.2), rgba(58, 123, 213, 0.2))",
                          transform: "translateY(-2px)",
                          boxShadow: "0 5px 15px rgba(0, 210, 255, 0.2)",
                        }
                      }}
                      aria-label="Back to top"
                    >
                      <ArrowUpward />
                    </IconButton>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Made with text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#8a9bb8",
                textAlign: "center",
                display: "block",
                mt: 3,
                fontSize: "0.75rem"
              }}
            >
              Crafted with passion using React, Material-UI, and Framer Motion
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;