import { 
  Box, 
  Typography, 
  Grid, 
  Container,
  Paper,
  Avatar,
  Chip,
  Button,
  Stack,
  Divider,
  Card,
  CardContent
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Download,
  LocationOn,
  Email,
  Phone,
  School,
  Work,
  Code,
  Rocket,
  Psychology,
  Timeline,
  EmojiEvents,
  LinkedIn,
  GitHub
} from "@mui/icons-material";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "Redux", "Material-UI", "JavaScript"] },
    { category: "Backend", items: ["ASP.NET Core", "C#", "Node.js", "RESTful APIs", "Entity Framework Core", "SQL Server"] },
    { category: "Tools & Cloud", items: ["AWS", "Docker", "Git", "VS Code", "Postman", "Visual Studio"] },
  ];

  const education = [
    {
      degree: "Bsc (Hons) Computing",
      university: "Islington College - London Metropolitan University",
      duration: "2022 - 2025",
      location: "Kamal Marg, Kamal Pokhari, Kathmandu",
      score: "Ongoing",
      highlights: ["London Metropolitan University Affiliation", "Computing Specialization", "Current Student"]
    },
    {
      degree: "SLC - Grade 10",
      school: "Prasadi Academy Secondary School",
      duration: "2078 (2021-2022)",
      location: "Tafalhon, Lalitpur",
      score: "National Examination Board",
      highlights: ["Secondary Education", "National Level Examination", "Completed"]
    },
    {
      degree: "SEE - Grade 10",
      school: "South Zone Secondary School Pvt. Ltd.",
      duration: "2075 (2018-2019)",
      location: "Birgunj-13, Parsa",
      score: "National Examination Board",
      highlights: ["Secondary Education Examination", "National Level Examination", "Completed"]
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

      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
            <Box
              sx={{
                width: "8px",
                height: "50px",
                background: "linear-gradient(to bottom, #00d2ff, #3a7bd5)",
                borderRadius: "4px"
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: '2.5rem', md: '3rem' }
              }}
            >
              About Me
            </Typography>
          </Stack>

          <Typography
            variant="h5"
            sx={{
              color: "#c2e9ff",
              fontWeight: 500,
              mb: 4,
              maxWidth: "800px",
              lineHeight: 1.6
            }}
          >
            Results-driven Full Stack Developer with 2+ years of experience specializing in .NET and React
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Left Column - Profile & Contact */}
          <Grid item xs={12} lg={4}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper
                sx={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0, 210, 255, 0.1)",
                  borderRadius: "20px",
                  p: 4,
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "rgba(0, 210, 255, 0.3)",
                    boxShadow: "0 10px 30px rgba(0, 210, 255, 0.1)",
                  }
                }}
              >
                {/* Profile Image */}
                <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                  <Avatar
                    src="/abhishekphoto.jpg"
                    sx={{
                      width: 200,
                      height: 200,
                      border: "6px solid",
                      borderImage: "linear-gradient(135deg, #00d2ff, #3a7bd5) 1",
                      boxShadow: "0 10px 30px rgba(0, 210, 255, 0.3)",
                    }}
                  />
                </Box>

                {/* Personal Info */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      mb: 2,
                      textAlign: "center"
                    }}
                  >
                    Abhishek Kumar Sahani
                  </Typography>
                  
                  <Stack spacing={2}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Work sx={{ color: "#00d2ff" }} />
                      <Typography sx={{ color: "#b0d4ff" }}>
                        Full Stack Developer
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <LocationOn sx={{ color: "#00d2ff" }} />
                      <Typography sx={{ color: "#b0d4ff" }}>
                        Koteshwor, Kathmandu
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Email sx={{ color: "#00d2ff" }} />
                      <Typography sx={{ color: "#b0d4ff" }}>
                        abhisksheksahani@gmail.com
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Phone sx={{ color: "#00d2ff" }} />
                      <Typography sx={{ color: "#b0d4ff" }}>
                        +977 9843020129
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                {/* Download CV Button */}
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<Download />}
                  sx={{
                    background: "linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "1rem",
                    textTransform: "none",
                    boxShadow: "0 8px 25px rgba(0, 210, 255, 0.4)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 30px rgba(0, 210, 255, 0.6)",
                    }
                  }}
                >
                  Download Resume
                </Button>
              </Paper>
            </motion.div>
          </Grid>

          {/* Right Column - Content */}
          <Grid item xs={12} lg={8}>
            <Stack spacing={4}>
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Paper
                  sx={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(0, 210, 255, 0.1)",
                    borderRadius: "20px",
                    p: 4
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                    <Rocket sx={{ color: "#00d2ff", fontSize: 32 }} />
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#fff",
                        fontWeight: 600
                      }}
                    >
                      Professional Summary
                    </Typography>
                  </Stack>
                  
                  <Typography
                    sx={{
                      color: "#b0d4ff",
                      lineHeight: 1.8,
                      fontSize: "1.1rem",
                      mb: 3
                    }}
                  >
                    Results-driven Full Stack Developer with <strong style={{ color: "#00d2ff" }}>2+ years</strong> of hands-on experience 
                    specializing in .NET and React. Passionate about building scalable web applications, optimizing APIs, 
                    and leading cross-functional projects.
                  </Typography>
                  
                  <Typography
                    sx={{
                      color: "#b0d4ff",
                      lineHeight: 1.8,
                      fontSize: "1.1rem"
                    }}
                  >
                    Adept at problem-solving, database design, and integrating third-party services (eSewa, Khalti). 
                    Seeking to leverage technical expertise to deliver innovative solutions that drive business growth 
                    and enhance user experiences.
                  </Typography>
                </Paper>
              </motion.div>

              {/* Education Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Paper
                  sx={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(0, 210, 255, 0.1)",
                    borderRadius: "20px",
                    p: 4
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                    <School sx={{ color: "#00d2ff", fontSize: 32 }} />
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#fff",
                        fontWeight: 600
                      }}
                    >
                      Education
                    </Typography>
                  </Stack>

                  <Stack spacing={3}>
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        <Card
                          sx={{
                            background: "rgba(0, 210, 255, 0.05)",
                            border: "1px solid rgba(0, 210, 255, 0.2)",
                            borderRadius: "12px",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              borderColor: "rgba(0, 210, 255, 0.4)",
                              boxShadow: "0 5px 15px rgba(0, 210, 255, 0.2)",
                              transform: "translateY(-2px)"
                            }
                          }}
                        >
                          <CardContent>
                            <Typography
                              variant="h6"
                              sx={{
                                color: "#00d2ff",
                                fontWeight: 600,
                                mb: 1
                              }}
                            >
                              {edu.degree}
                            </Typography>
                            
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#fff",
                                fontWeight: 500,
                                mb: 0.5
                              }}
                            >
                              {edu.university || edu.school}
                            </Typography>
                            
                            <Grid container spacing={2} sx={{ mb: 2 }}>
                              <Grid item xs={12} md={6}>
                                <Box>
                                  <Typography variant="body2" sx={{ color: "#a0d2ff", fontWeight: 600 }}>
                                    Duration
                                  </Typography>
                                  <Typography variant="body1" sx={{ color: "#b0d4ff" }}>
                                    {edu.duration}
                                  </Typography>
                                </Box>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Box>
                                  <Typography variant="body2" sx={{ color: "#a0d2ff", fontWeight: 600 }}>
                                    Status/Score
                                  </Typography>
                                  <Typography variant="body1" sx={{ color: "#fff", fontWeight: 600 }}>
                                    {edu.score}
                                  </Typography>
                                </Box>
                              </Grid>
                            </Grid>

                            <Typography
                              variant="body2"
                              sx={{
                                color: "#a0d2ff",
                                fontWeight: 600,
                                mb: 1
                              }}
                            >
                              {edu.location}
                            </Typography>

                            {edu.highlights && (
                              <Box>
                                <Typography
                                  variant="subtitle2"
                                  sx={{
                                    color: "#fff",
                                    fontWeight: 600,
                                    mb: 1
                                  }}
                                >
                                  Highlights:
                                </Typography>
                                <Stack direction="row" flexWrap="wrap" gap={1}>
                                  {edu.highlights.map((highlight, idx) => (
                                    <Chip
                                      key={idx}
                                      label={highlight}
                                      size="small"
                                      sx={{
                                        background: "rgba(0, 210, 255, 0.1)",
                                        color: "#b0d4ff",
                                        border: "1px solid rgba(0, 210, 255, 0.3)",
                                        fontWeight: 500,
                                        fontSize: "0.7rem"
                                      }}
                                    />
                                  ))}
                                </Stack>
                              </Box>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;