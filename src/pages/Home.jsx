import { 
  Box, 
  Typography, 
  Button, 
  Stack, 
  Grid, 
  Container,
  Avatar,
  IconButton,
  Chip
} from "@mui/material";
import { motion } from "framer-motion";
import { 
  Download, 
  ArrowRight, 
  LinkedIn, 
  GitHub, 
  Email,
  Star,
  Code,
  Rocket,
  TrendingUp 
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a2a 0%, #1a1a4a 30%, #0f2027 70%, #0a2a3a 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(0, 210, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(58, 123, 213, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(0, 100, 255, 0.05) 0%, transparent 50%)
          `,
        }
      }}
    >
      {/* Animated Background Elements */}
      <Box
        component={motion.div}
        animate={{
          y: [0, 20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        sx={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(0, 210, 255, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />
      
      <Box
        component={motion.div}
        animate={{
          y: [0, -20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(58, 123, 213, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" sx={{ minHeight: "100vh", py: 8 }}>
          {/* Left Column - Content */}
          <Grid item xs={12} md={7}>
            <Box sx={{ position: "relative", zIndex: 2 }}>
              {/* Welcome Tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Chip
                  icon={<Rocket sx={{ color: "#00d2ff" }} />}
                  label="Welcome to My Portfolio"
                  sx={{
                    mb: 3,
                    background: "rgba(0, 210, 255, 0.1)",
                    border: "1px solid rgba(0, 210, 255, 0.3)",
                    color: "#00d2ff",
                    fontWeight: 600,
                    backdropFilter: "blur(10px)",
                    "& .MuiChip-icon": {
                      color: "#00d2ff !important",
                    }
                  }}
                />
              </motion.div>

              {/* Name with Gradient */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: 2,
                    background: "linear-gradient(90deg, #00d2ff 0%, #3a7bd5 50%, #00d2ff 100%)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "shine 3s linear infinite",
                    "@keyframes shine": {
                      "0%": { backgroundPosition: "0% center" },
                      "100%": { backgroundPosition: "200% center" }
                    }
                  }}
                >
                  Abhishek Kumar Sahani
                </Typography>
              </motion.div>

              {/* Title with Icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Stack direction="row" alignItems="center" spacing={1} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                  <Code sx={{ color: "#00d2ff", fontSize: 32 }} />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      fontWeight: 600,
                      color: "#c2e9ff",
                      mb: 1
                    }}
                  >
                    Full Stack Developer
                  </Typography>
                </Stack>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#a0d2ff",
                    fontWeight: 500,
                    mb: 4,
                    display: "flex",
                    alignItems: "center",
                    gap: 1
                  }}
                >
                  <TrendingUp sx={{ color: "#3a7bd5" }} />
                  Specialized in .NET + React Ecosystem
                </Typography>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    color: "#b0d4ff",
                    mb: 5,
                    maxWidth: "600px",
                    lineHeight: 1.8
                  }}
                >
                  Crafting robust, scalable web applications with modern technologies. 
                  Passionate about creating seamless user experiences and solving complex 
                  problems with elegant solutions.
                </Typography>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={3} 
                  alignItems="center"
                  sx={{ mb: 6 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight />}
                    onClick={() => navigate("/projects")}
                    sx={{
                      background: "linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)",
                      color: "#fff",
                      px: 4,
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: 600,
                      fontSize: "1rem",
                      textTransform: "none",
                      boxShadow: "0 8px 25px rgba(0, 210, 255, 0.4)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 12px 35px rgba(0, 210, 255, 0.6)",
                        background: "linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)",
                      }
                    }}
                  >
                    Explore My Work
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Download />}
                    onClick={() => navigate("/contact")}
                    sx={{
                      borderColor: "rgba(0, 210, 255, 0.5)",
                      color: "#00d2ff",
                      px: 4,
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: 600,
                      fontSize: "1rem",
                      textTransform: "none",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "#00d2ff",
                        background: "rgba(0, 210, 255, 0.1)",
                        transform: "translateY(-3px)",
                        boxShadow: "0 8px 20px rgba(0, 210, 255, 0.3)",
                      }
                    }}
                  >
                    Get In Touch
                  </Button>
                </Stack>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                  <IconButton
                    href="https://www.linkedin.com/in/abhishek-kumar-sahani-012363247/"
                    target="_blank"
                    sx={{
                      background: "rgba(0, 119, 181, 0.1)",
                      border: "1px solid rgba(0, 119, 181, 0.3)",
                      color: "#0077b5",
                      "&:hover": {
                        background: "rgba(0, 119, 181, 0.2)",
                        transform: "translateY(-2px)",
                      }
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                  
                  <IconButton
                    href="https://github.com/abhishekkumarsahani"
                    target="_blank"
                    sx={{
                      background: "rgba(24, 23, 23, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      color: "#fff",
                      "&:hover": {
                        background: "rgba(24, 23, 23, 0.2)",
                        transform: "translateY(-2px)",
                      }
                    }}
                  >
                    <GitHub />
                  </IconButton>
                  
                  <IconButton
                    href="mailto:contact@example.com"
                    sx={{
                      background: "rgba(219, 68, 55, 0.1)",
                      border: "1px solid rgba(219, 68, 55, 0.3)",
                      color: "#db4437",
                      "&:hover": {
                        background: "rgba(219, 68, 55, 0.2)",
                        transform: "translateY(-2px)",
                      }
                    }}
                  >
                    <Email />
                  </IconButton>
                </Stack>
              </motion.div>
            </Box>
          </Grid>

          {/* Right Column - Avatar/Image */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
              }}
            >
              {/* Avatar Container with Glow Effect */}
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "250px", md: "350px" },
                  height: { xs: "250px", md: "350px" },
                }}
              >
                {/* Outer Glow Ring */}
                <Box
                  component={motion.div}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  sx={{
                    position: "absolute",
                    top: "-10px",
                    left: "-10px",
                    right: "-10px",
                    bottom: "-10px",
                    background: "conic-gradient(from 0deg, #00d2ff, #3a7bd5, #00d2ff)",
                    borderRadius: "50%",
                    zIndex: 1,
                    filter: "blur(15px)",
                    opacity: 0.6,
                  }}
                />
                
                {/* Avatar */}
                <Avatar
                  src="/abhishekphoto.jpg" // Replace with your image URL
                  sx={{
                    width: "100%",
                    height: "100%",
                    border: "8px solid rgba(0, 0, 0, 0.3)",
                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
                    position: "relative",
                    zIndex: 2,
                    background: "linear-gradient(135deg, #1a1a4a, #0f2027)",
                  }}
                />

                 {/* Floating Tech Badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    zIndex: 3
                  }}
                >
                  <Chip
                    icon={<Star sx={{ fontSize: 16 }} />}
                    label="2+ Years Exp"
                    size="small"
                    sx={{
                      background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
                      color: "#fff",
                      fontWeight: 600,
                      boxShadow: "0 5px 15px rgba(255, 65, 108, 0.4)",
                    }}
                  />
                </motion.div>

                 {/* Technology Tags */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.7, type: "spring" }}
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 3
                  }}
                >
                  <Chip
                    label=".NET Core | React"
                    size="medium"
                    sx={{
                      background: "linear-gradient(135deg, rgba(0, 210, 255, 0.9), rgba(58, 123, 213, 0.9))",
                      color: "#fff",
                      fontWeight: 600,
                      boxShadow: "0 5px 15px rgba(0, 210, 255, 0.4)",
                    }}
                  />
                </motion.div>

                
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Helper function for positioning tech chips around avatar
const getPosition = (index) => {
  const positions = [
    { top: "10%", left: "10%" },
    { top: "10%", right: "10%" },
    { bottom: "10%", left: "10%" },
    { bottom: "10%", right: "10%" },
  ];
  return positions[index] || positions[0];
};

export default Home;