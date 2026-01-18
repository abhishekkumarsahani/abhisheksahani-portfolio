import { 
  Box, 
  Typography, 
  Container,
  Paper,
  Stack,
  Grid,
  Chip,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Work,
  School,
  Timeline,
  Rocket,
  Code,
  Cloud,
  Security,
  Storage,
  Psychology,
  Groups,
  EmojiEvents,
  TrendingUp
} from "@mui/icons-material";

const Experience = () => {
  const experiences = [
    {
      role: ".NET API Developer",
      company: "Easy Software Pvt. Ltd.",
      duration: "Aug 2024  - Present",
      description: "Developing robust and scalable APIs using ASP.NET Core for enterprise applications. Focus on backend architecture and performance optimization.",
      responsibilities: [
        "Design and develop RESTful APIs using ASP.NET Core",
        "Implement authentication and authorization using JWT",
        "Optimize database queries and improve application performance",
        "Integrate third-party APIs and payment gateways",
        "Write unit tests and ensure code quality",
        "Collaborate with frontend developers and product teams"
      ],
      technologies: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework", "Azure", "Docker", "Git"],
      achievements: [
        "Improved API response time by 40%",
        "Implemented secure authentication system",
        "Reduced server costs by 30% through optimization"
      ],
      logoColor: "#00d2ff"
    },
    {
      role: "Full Stack Developer Intern",
      company: "Tech Innovations Inc.",
      duration: "2023-0ct-01 to 2024-Jan-07",
      description: "Worked on full-stack development projects using .NET and React. Gained experience in agile development methodologies.",
      responsibilities: [
        "Developed frontend components using React",
        "Assisted in backend API development",
        "Participated in code reviews and team meetings",
        "Learned and implemented best practices"
      ],
      technologies: [".NET Core", "React", "MongoDB", "JavaScript", "Bootstrap"],
      achievements: [
        "Completed 3 major projects successfully",
        "Received excellent feedback from senior developers"
      ],
      logoColor: "#3a7bd5"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      university: "ABC University",
      duration: "2018 - 2022",
      location: "India",
      score: "8.5/10 GPA",
      highlights: ["Major in Software Engineering", "Coursework in Algorithms & Data Structures", "Final Year Project: E-commerce Platform"]
    },
    {
      degree: "Higher Secondary Education",
      school: "XYZ College",
      duration: "2016 - 2018",
      location: "Nepal",
      score: "92%",
      highlights: ["Science Stream", "Mathematics & Computer Science Focus"]
    }
  ];

  const skillsGained = [
    { skill: "ASP.NET Core Development", level: 95 },
    { skill: "RESTful API Design", level: 92 },
    { skill: "Database Optimization", level: 88 },
    { skill: "Azure Cloud Services", level: 85 },
    { skill: "Microservices Architecture", level: 82 },
    { skill: "Security Best Practices", level: 90 },
    { skill: "Agile Methodologies", level: 87 },
    { skill: "Code Quality & Testing", level: 89 }
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
          radial-gradient(circle at 20% 40%, rgba(0, 210, 255, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 60%, rgba(58, 123, 213, 0.05) 0%, transparent 50%)
        `,
      }
    }}>
      {/* Floating Elements */}
      <Box
        component={motion.div}
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        sx={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(0, 210, 255, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(30px)",
        }}
      />

      <Container maxWidth="lg">
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
                Professional Journey
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
              2+ years of hands-on experience in enterprise software development with a focus on .NET technologies and API development
            </Typography>
          </Box>
        </motion.div>

        {/* Timeline */}
        <Box sx={{ position: "relative", mb: 8 }}>
          {/* Vertical Line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: "30px", md: "50%" },
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, transparent, #00d2ff, #3a7bd5, transparent)",
              transform: { xs: "none", md: "translateX(-50%)" }
            }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Grid container sx={{ position: "relative", mb: 6 }}>
                {/* Timeline Dot */}
                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: "24px", md: "50%" },
                    top: 0,
                    width: "16px",
                    height: "16px",
                    background: `linear-gradient(135deg, ${exp.logoColor}, ${exp.logoColor}cc)`,
                    borderRadius: "50%",
                    border: "3px solid #0a0a2a",
                    transform: { xs: "none", md: "translateX(-50%)" },
                    zIndex: 2
                  }}
                />

                {/* Content */}
                <Grid
                  item
                  xs={12}
                  md={5}
                  sx={{
                    order: { xs: 2, md: index % 2 === 0 ? 1 : 2 },
                    pl: { xs: 8, md: 0 },
                    pr: { xs: 0, md: index % 2 === 0 ? 0 : 2 },
                    mt: { xs: 2, md: 0 }
                  }}
                >
                  <Paper
                    sx={{
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(0, 210, 255, 0.1)",
                      borderRadius: "20px",
                      p: 4,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: `${exp.logoColor}40`,
                        boxShadow: `0 10px 30px ${exp.logoColor}20`
                      }
                    }}
                  >
                    {/* Role & Company */}
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                      <Avatar
                        sx={{
                          background: `linear-gradient(135deg, ${exp.logoColor}, ${exp.logoColor}cc)`,
                          width: 60,
                          height: 60
                        }}
                      >
                        <Work sx={{ fontSize: 30 }} />
                      </Avatar>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            color: "#fff",
                            fontWeight: 700,
                            mb: 0.5
                          }}
                        >
                          {exp.role}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: exp.logoColor,
                            fontWeight: 600
                          }}
                        >
                          {exp.company}
                        </Typography>
                      </Box>
                    </Stack>

                    {/* Duration & Location */}
                    <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
                      <Box>
                        <Typography variant="body2" sx={{ color: "#a0d2ff", fontWeight: 600 }}>
                          Duration
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          {exp.duration}
                        </Typography>
                      </Box>
                    </Stack>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#b0d4ff",
                        lineHeight: 1.6,
                        mb: 3
                      }}
                    >
                      {exp.description}
                    </Typography>

                    {/* Responsibilities */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          mb: 1.5,
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        }}
                      >
                        <Rocket sx={{ fontSize: 20, color: exp.logoColor }} />
                        Key Responsibilities
                      </Typography>
                      <List dense>
                        {exp.responsibilities.map((resp, idx) => (
                          <ListItem key={idx} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <Box
                                sx={{
                                  width: 8,
                                  height: 8,
                                  background: exp.logoColor,
                                  borderRadius: "50%"
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={resp}
                              primaryTypographyProps={{
                                color: "#b0d4ff",
                                fontSize: "0.9rem"
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>

                    {/* Technologies */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          mb: 1.5,
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        }}
                      >
                        <Code sx={{ fontSize: 20, color: exp.logoColor }} />
                        Technologies Used
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {exp.technologies.map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            sx={{
                              background: `linear-gradient(135deg, ${exp.logoColor}20, ${exp.logoColor}10)`,
                              color: exp.logoColor,
                              border: `1px solid ${exp.logoColor}30`,
                              fontWeight: 500
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>

                    {/* Achievements */}
                    {exp.achievements && (
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: "#fff",
                            fontWeight: 600,
                            mb: 1.5,
                            display: "flex",
                            alignItems: "center",
                            gap: 1
                          }}
                        >
                          <EmojiEvents sx={{ fontSize: 20, color: exp.logoColor }} />
                          Key Achievements
                        </Typography>
                        <List dense>
                          {exp.achievements.map((achievement, idx) => (
                            <ListItem key={idx} sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 36 }}>
                                <TrendingUp sx={{ fontSize: 20, color: exp.logoColor }} />
                              </ListItemIcon>
                              <ListItemText
                                primary={achievement}
                                primaryTypographyProps={{
                                  color: "#b0d4ff",
                                  fontSize: "0.9rem"
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    )}
                  </Paper>
                </Grid>

                {/* Empty space for alternating layout */}
                <Grid item xs={12} md={2} sx={{ display: { xs: 'none', md: 'block' } }} />
              </Grid>
            </motion.div>
          ))}
        </Box>
        {/* Skills Gained */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
              <Psychology sx={{ color: "#00d2ff", fontSize: 40 }} />
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: 600
                }}
              >
                Skills Gained Through Experience
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {skillsGained.map((skill, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#e0e0e0",
                          fontWeight: 500
                        }}
                      >
                        {skill.skill}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#00d2ff",
                          fontWeight: 600
                        }}
                      >
                        {skill.level}%
                      </Typography>
                    </Box>
                    
                    <Box
                      sx={{
                        width: "100%",
                        height: 8,
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: 4,
                        overflow: "hidden"
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        style={{
                          height: "100%",
                          background: "linear-gradient(90deg, #00d2ff, #3a7bd5)",
                          borderRadius: 4
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;