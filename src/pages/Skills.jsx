import { 
  Box, 
  Typography, 
  LinearProgress, 
  Grid, 
  Container,
  Paper,
  Chip,
  Stack,
  Card,
  CardContent,
  Tooltip,
  Divider
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Code,
  Storage,
  Cloud,
  Build,
  Language,
  Psychology,
  DesktopWindows,
  Terminal,
  Api,
  Security,
  DataArray,
  Hub
} from "@mui/icons-material";

const Skills = () => {
  // Programming Languages
  const programmingLanguages = [
    { name: "C#", level: 95, icon: "C#" },
    { name: "JavaScript", level: 90, icon: "JS" },
    { name: "TypeScript", level: 85, icon: "TS" },
    { name: "HTML5", level: 95, icon: "HTML" },
    { name: "CSS3", level: 90, icon: "CSS" },
    { name: "Python", level: 75, icon: "PY" },
    { name: "SQL", level: 88, icon: "SQL" }
  ];

  // .NET Technologies
  const dotnetTechnologies = [
    { name: "ASP.NET Core", level: 95 },
    { name: "Entity Framework Core", level: 90 },
    { name: "LINQ", level: 92 },
    { name: "ASP.NET Web API", level: 94 },
    { name: ".NET Framework", level: 85 },
    { name: "WCF", level: 80 },
    { name: "Windows Forms", level: 82 },
    { name: "ADO.NET", level: 88 }
  ];

  // Frontend Technologies
  const frontendTechnologies = [
    { name: "React", level: 90 },
    { name: "Redux", level: 85 },
    { name: "Material-UI", level: 88 },
    { name: "Bootstrap", level: 85 },
    { name: "jQuery", level: 80 },
    { name: "Blazor", level: 75 },
    { name: "AJAX", level: 82 },
    { name: "Razor Pages", level: 83 }
  ];

  // Databases
  const databases = [
    { name: "Microsoft SQL Server", level: 90 },
    { name: "MongoDB", level: 80 },
    { name: "Oracle", level: 78 },
    { name: "MySQL", level: 82 },
    { name: "Redis", level: 75 },
    { name: "Cosmos DB", level: 70 }
  ];

  // Cloud & DevOps
  const cloudDevOps = [
    { name: "Microsoft Azure", level: 85 },
    { name: "Docker", level: 78 },
    { name: "Azure DevOps", level: 82 },
    { name: "CI/CD Pipelines", level: 80 },
    { name: "Git", level: 92 },
    { name: "Azure App Service", level: 83 },
    { name: "Azure SQL", level: 81 }
  ];

  // Tools & Methodologies
  const toolsMethodologies = [
    { name: "Visual Studio", level: 95 },
    { name: "Visual Studio Code", level: 90 },
    { name: "Postman", level: 88 },
    { name: "Swagger", level: 85 },
    { name: "Agile/Scrum", level: 87 },
    { name: "JIRA", level: 84 },
    { name: "GitHub/GitLab", level: 89 },
    { name: "RESTful APIs", level: 93 },
    { name: "Microservices", level: 82 },
    { name: "OAuth 2.0", level: 80 },
    { name: "JWT", level: 85 },
    { name: "SOLID Principles", level: 88 },
    { name: "Design Patterns", level: 86 }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Language />,
      skills: programmingLanguages,
      color: "#00d2ff"
    },
    {
      title: ".NET Technologies",
      icon: <DesktopWindows />,
      skills: dotnetTechnologies,
      color: "#512BD4"
    },
    {
      title: "Frontend Technologies",
      icon: <Code />,
      skills: frontendTechnologies,
      color: "#61DAFB"
    },
    {
      title: "Databases",
      icon: <Storage />,
      skills: databases,
      color: "#CC2927"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud />,
      skills: cloudDevOps,
      color: "#0089D6"
    },
    {
      title: "Tools & Methodologies",
      icon: <Build />,
      skills: toolsMethodologies,
      color: "#F7DF1E"
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
          radial-gradient(circle at 20% 30%, rgba(0, 210, 255, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(88, 101, 242, 0.05) 0%, transparent 50%)
        `
      }
    }}>
      {/* Floating Elements */}
      <Box
        component={motion.div}
        animate={{
          y: [0, 40, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        sx={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(0, 210, 255, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(30px)"
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
                Technical Skills
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
              Comprehensive expertise across full-stack development, cloud platforms, and modern methodologies
            </Typography>
          </Box>
        </motion.div>

        {/* Skill Categories Grid */}
        <Grid container spacing={4}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} md={6} lg={4} key={categoryIndex}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid",
                    borderColor: `${category.color}20`,
                    borderRadius: "20px",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: `${category.color}40`,
                      boxShadow: `0 15px 35px ${category.color}20`
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Category Header */}
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 50,
                          height: 50,
                          background: `linear-gradient(135deg, ${category.color}, ${category.color}cc)`,
                          borderRadius: "12px",
                          color: "#fff"
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          flexGrow: 1
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Stack>

                    {/* Skills List */}
                    <Stack spacing={3}>
                      {category.skills.map((skill, skillIndex) => (
                        <Box key={skillIndex}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                            <Typography
                              sx={{
                                color: "#e0e0e0",
                                fontWeight: 500,
                                fontSize: "0.95rem"
                              }}
                            >
                              {skill.name}
                            </Typography>
                            <Typography
                              sx={{
                                color: category.color,
                                fontWeight: 600,
                                fontSize: "0.9rem"
                              }}
                            >
                              {skill.level}%
                            </Typography>
                          </Box>
                          
                          <Tooltip title={`${skill.level}% proficiency`} arrow>
                            <LinearProgress
                              variant="determinate"
                              value={skill.level}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                "& .MuiLinearProgress-bar": {
                                  borderRadius: 4,
                                  background: `linear-gradient(90deg, ${category.color}, ${category.color}cc)`
                                }
                              }}
                            />
                          </Tooltip>
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Additional Expertise Section */}
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
              mt: 6
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
              <Psychology sx={{ color: "#00d2ff", fontSize: 32 }} />
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: 600
                }}
              >
                Additional Expertise
              </Typography>
            </Stack>

            <Grid container spacing={2}>
              {/* Architecture & Design */}
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#00d2ff",
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1
                    }}
                  >
                    <Hub sx={{ fontSize: 24 }} />
                    Architecture & Design
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {["Microservices Architecture", "MVC Pattern", "Repository Pattern", "Unit of Work", "Dependency Injection", "Clean Architecture", "Onion Architecture"].map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        sx={{
                          background: "rgba(0, 210, 255, 0.1)",
                          color: "#b0d4ff",
                          border: "1px solid rgba(0, 210, 255, 0.3)",
                          fontWeight: 500,
                          "&:hover": {
                            background: "rgba(0, 210, 255, 0.2)"
                          }
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Grid>

              {/* Security & Authentication */}
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#00d2ff",
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1
                    }}
                  >
                    <Security sx={{ fontSize: 24 }} />
                    Security & Authentication
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {["OAuth 2.0", "JWT Authentication", "Identity Framework", "Role-based Access", "SSL/TLS", "CORS Configuration", "Input Validation"].map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        sx={{
                          background: "rgba(0, 210, 255, 0.1)",
                          color: "#b0d4ff",
                          border: "1px solid rgba(0, 210, 255, 0.3)",
                          fontWeight: 500,
                          "&:hover": {
                            background: "rgba(0, 210, 255, 0.2)"
                          }
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Grid>

              {/* API Development */}
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#00d2ff",
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1
                    }}
                  >
                    <Api sx={{ fontSize: 24 }} />
                    API Development
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {["RESTful APIs", "GraphQL", "gRPC", "WebSocket", "SignalR", "API Versioning", "Rate Limiting", "Caching Strategies"].map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        sx={{
                          background: "rgba(0, 210, 255, 0.1)",
                          color: "#b0d4ff",
                          border: "1px solid rgba(0, 210, 255, 0.3)",
                          fontWeight: 500,
                          "&:hover": {
                            background: "rgba(0, 210, 255, 0.2)"
                          }
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Grid>

              {/* Data Management */}
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#00d2ff",
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1
                    }}
                  >
                    <DataArray sx={{ fontSize: 24 }} />
                    Data Management
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {["Entity Framework Migrations", "Database Indexing", "Query Optimization", "Stored Procedures", "Data Seeding", "Database Transactions", "Connection Pooling"].map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        sx={{
                          background: "rgba(0, 210, 255, 0.1)",
                          color: "#b0d4ff",
                          border: "1px solid rgba(0, 210, 255, 0.3)",
                          fontWeight: 500,
                          "&:hover": {
                            background: "rgba(0, 210, 255, 0.2)"
                          }
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>

        {/* Proficiency Level Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Paper
            sx={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(0, 210, 255, 0.1)",
              borderRadius: "20px",
              p: 3,
              mt: 4
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                mb: 2,
                textAlign: "center"
              }}
            >
              Proficiency Levels
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} md={3}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box sx={{ width: "100%", height: 6, background: "linear-gradient(90deg, #ff4444, #ff8888)", borderRadius: 3 }} />
                  <Typography sx={{ color: "#ff8888", fontSize: "0.8rem", whiteSpace: "nowrap" }}>Beginner</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box sx={{ width: "100%", height: 6, background: "linear-gradient(90deg, #ffaa44, #ffcc88)", borderRadius: 3 }} />
                  <Typography sx={{ color: "#ffcc88", fontSize: "0.8rem", whiteSpace: "nowrap" }}>Intermediate</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box sx={{ width: "100%", height: 6, background: "linear-gradient(90deg, #44ff44, #88ff88)", borderRadius: 3 }} />
                  <Typography sx={{ color: "#88ff88", fontSize: "0.8rem", whiteSpace: "nowrap" }}>Advanced</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box sx={{ width: "100%", height: 6, background: "linear-gradient(90deg, #4444ff, #8888ff)", borderRadius: 3 }} />
                  <Typography sx={{ color: "#8888ff", fontSize: "0.8rem", whiteSpace: "nowrap" }}>Expert</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;