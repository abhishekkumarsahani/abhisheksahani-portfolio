import { 
  Grid, 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  Stack,
  Container,
  Chip,
  IconButton,
  CardMedia,
  CardActions,
  Paper
} from "@mui/material";
import { motion } from "framer-motion";
import {
  GitHub,
  Launch,
  Code,
  Storage,
  School,
  ShoppingCart,
  TrendingUp,
  People,
  LocalAtm,
  Timeline,
  Security
} from "@mui/icons-material";

const Projects = () => {
  const projects = [
    {
      title: "Network Marketing Platform",
      description: "A comprehensive MLM platform built with ASP.NET Core Web API featuring multi-level marketing hierarchy, real-time commission calculations, and role-based access control. Includes advanced analytics dashboard for performance tracking.",
      technologies: ["ASP.NET Core", "React", "SQL Server", "JWT", "Chart.js"],
      features: ["Multi-level hierarchy", "Real-time commissions", "Role-based access", "Analytics dashboard"],
      github: "https://github.com/abhishekkumarsahani",
      liveDemo: "#",
      icon: <TrendingUp />,
      color: "#00d2ff"
    },
    {
      title: "School Management System",
      description: "Complete school administration system with student tracking, GPS bus monitoring, automated attendance, and integrated payment gateways (Khalti, eSewa). Real-time notifications for parents and staff.",
      technologies: [".NET Core", "React", "MongoDB", "GPS API", "Payment APIs"],
      features: ["Student tracking", "GPS bus monitoring", "Attendance system", "Payment integration"],
      github: "https://github.com/abhishekkumarsahani",
      liveDemo: "#",
      icon: <School />,
      color: "#3a7bd5"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with user authentication, product catalog management, shopping cart, secure payment processing, order tracking, and admin dashboard for inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      features: ["User authentication", "Product management", "Payment processing", "Order tracking"],
      github: "https://github.com/abhishekkumarsahani",
      liveDemo: "#",
      icon: <ShoppingCart />,
      color: "#ff416c"
    },
    {
      title: "Hospital Management System",
      description: "Healthcare management system for patient records, appointment scheduling, billing, and inventory management. Includes telemedicine features and prescription management.",
      technologies: ["ASP.NET Core", "Angular", "SQL Server", "SignalR", "Azure"],
      features: ["Patient management", "Appointment system", "Billing", "Inventory"],
      github: "https://github.com/abhishekkumarsahani",
      liveDemo: "#",
      icon: <People />,
      color: "#36d1dc"
    },
    {
      title: "Fintech Banking App",
      description: "Secure banking application with features like fund transfer, bill payments, investment tracking, and financial analytics. Implements advanced security measures and real-time transaction monitoring.",
      technologies: [".NET Core", "React", "PostgreSQL", "OAuth 2.0", "Docker"],
      features: ["Fund transfer", "Bill payments", "Investment tracking", "Security"],
      github: "https://github.com/abhishekkumarsahani",
      liveDemo: "#",
      icon: <LocalAtm />,
      color: "#4facfe"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Dashboard for real-time data visualization and analytics with customizable widgets, data filtering, and export capabilities. Supports multiple data sources and live updates.",
      technologies: ["React", "TypeScript", "D3.js", "WebSocket", "Redis"],
      features: ["Real-time data", "Custom widgets", "Data filtering", "Export capabilities"],
      github: "https://github.com/abhishekkumarsahani",
      liveDemo: "#",
      icon: <Timeline />,
      color: "#654ea3"
    }
  ];

  return (
    <Box sx={{ 
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0a2a 0%, #1a1a4a 30%, #0f2027 70%, #0a2a3a 100%)",
      position: "relative",
      overflow: "hidden",
      py: 8,
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 10% 20%, rgba(0, 210, 255, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(58, 123, 213, 0.05) 0%, transparent 50%)
        `,
      }
    }}>
      {/* Floating Elements */}
      <Box
        component={motion.div}
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "150px",
          height: "150px",
          background: "radial-gradient(circle, rgba(0, 210, 255, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(30px)",
        }}
      />

      <Container maxWidth="xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
              <Box
                sx={{
                  width: "60px",
                  height: "4px",
                  background: "linear-gradient(90deg, #00d2ff, #3a7bd5)",
                  borderRadius: "2px"
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  background: "linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Featured Projects
              </Typography>
              <Box
                sx={{
                  width: "60px",
                  height: "4px",
                  background: "linear-gradient(90deg, #3a7bd5, #00d2ff)",
                  borderRadius: "2px"
                }}
              />
            </Stack>
            
            <Typography
              variant="h6"
              sx={{
                color: "#b0d4ff",
                fontWeight: 400,
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.6
              }}
            >
              A showcase of my most impactful work, highlighting full-stack development expertise and innovative solutions
            </Typography>
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid",
                    borderColor: `${project.color}20`,
                    borderRadius: "20px",
                    height: "100%",
                    transition: "all 0.3s ease",
                    overflow: "hidden",
                    "&:hover": {
                      borderColor: `${project.color}40`,
                      boxShadow: `0 20px 40px ${project.color}20`,
                      transform: "translateY(-5px)"
                    }
                  }}
                >
                  {/* Project Header */}
                  <Box
                    sx={{
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                      p: 3,
                      position: "relative"
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 50,
                          height: 50,
                          background: "rgba(255, 255, 255, 0.2)",
                          borderRadius: "12px",
                          color: "#fff"
                        }}
                      >
                        {project.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          flexGrow: 1
                        }}
                      >
                        {project.title}
                      </Typography>
                    </Stack>
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#b0d4ff",
                        mb: 3,
                        lineHeight: 1.6,
                        fontSize: "0.95rem"
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Features */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          mb: 1.5
                        }}
                      >
                        Key Features:
                      </Typography>
                      <Grid container spacing={1}>
                        {project.features.map((feature, idx) => (
                          <Grid item xs={6} key={idx}>
                            <Chip
                              label={feature}
                              size="small"
                              sx={{
                                background: "rgba(255, 255, 255, 0.05)",
                                color: "#b0d4ff",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                fontSize: "0.75rem",
                                width: "100%",
                                justifyContent: "flex-start",
                                height: "auto",
                                py: 0.5
                              }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    {/* Technologies */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          mb: 1.5
                        }}
                      >
                        Technologies:
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {project.technologies.map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            sx={{
                              background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                              color: project.color,
                              border: `1px solid ${project.color}30`,
                              fontWeight: 500,
                              fontSize: "0.7rem"
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>

                  {/* Action Buttons */}
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                      <Button
                        variant="contained"
                        startIcon={<GitHub />}
                        href={project.github}
                        target="_blank"
                        fullWidth
                        sx={{
                          background: "linear-gradient(135deg, #333, #555)",
                          color: "#fff",
                          py: 1,
                          borderRadius: "10px",
                          fontWeight: 600,
                          textTransform: "none",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: "linear-gradient(135deg, #444, #666)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
                          }
                        }}
                      >
                        View Code
                      </Button>
                      
                      <Button
                        variant="outlined"
                        startIcon={<Launch />}
                        href={project.liveDemo}
                        target="_blank"
                        fullWidth
                        disabled={project.liveDemo === "#"}
                        sx={{
                          borderColor: project.color,
                          color: project.color,
                          py: 1,
                          borderRadius: "10px",
                          fontWeight: 600,
                          textTransform: "none",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: `${project.color}15`,
                            borderColor: project.color,
                            transform: "translateY(-2px)"
                          }
                        }}
                      >
                        Live Demo
                      </Button>
                    </Stack>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Paper
            sx={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(0, 210, 255, 0.1)",
              borderRadius: "20px",
              p: 4,
              mt: 8
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#fff",
                      fontWeight: 700,
                      mb: 2
                    }}
                  >
                    <Box component="span" sx={{ color: "#00d2ff" }}>1000+</Box> Commits
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#b0d4ff",
                      lineHeight: 1.6
                    }}
                  >
                    With consistent contributions to open-source and personal projects, 
                    I've maintained a strong development workflow across multiple repositories.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#fff",
                      fontWeight: 700,
                      mb: 2
                    }}
                  >
                    <Box component="span" sx={{ color: "#3a7bd5" }}>15+</Box> Projects
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#b0d4ff",
                      lineHeight: 1.6
                    }}
                  >
                    Ranging from enterprise applications to innovative prototypes, 
                    each project demonstrates problem-solving abilities and technical expertise.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Button
                variant="contained"
                startIcon={<GitHub />}
                href="https://github.com/abhishekkumarsahani"
                target="_blank"
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
                View All Projects on GitHub
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;