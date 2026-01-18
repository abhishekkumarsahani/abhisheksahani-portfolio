import { 
  Box, 
  Typography, 
  TextField, 
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  IconButton,
  Chip,
  Alert,
  Snackbar
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  Send,
  CheckCircle,
  Error,
  WhatsApp,
  Telegram
} from "@mui/icons-material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSnackbar({
        open: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
        severity: 'success'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: "Email",
      value: "abhisksheksahani@gmail.com",
      color: "#00d2ff",
      action: "mailto:abhisksheksahani@gmail.com"
    },
    {
      icon: <Phone />,
      title: "Phone",
      value: "+977 9843020129",
      color: "#3a7bd5",
      action: "tel:+9779843020129"
    },
    {
      icon: <LocationOn />,
      title: "Location",
      value: "Nepal",
      color: "#ff416c",
      action: null
    }
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
      icon: <WhatsApp />,
      label: "WhatsApp",
      url: "https://wa.me/",
      color: "#25D366"
    },
    {
      icon: <Telegram />,
      label: "Telegram",
      url: "https://t.me/username",
      color: "#0088cc"
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
          radial-gradient(circle at 80% 70%, rgba(58, 123, 213, 0.05) 0%, transparent 50%)
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
                Get In Touch
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
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
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
                <Typography
                  variant="h4"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    mb: 4
                  }}
                >
                  Contact Information
                </Typography>

                {/* Contact Details */}
                <Stack spacing={4}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Box
                        component={info.action ? "a" : "div"}
                        href={info.action}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          textDecoration: "none",
                          cursor: info.action ? "pointer" : "default",
                          transition: "all 0.3s ease",
                          "&:hover": info.action ? {
                            transform: "translateX(5px)",
                            "& .contact-icon": {
                              transform: "scale(1.1)",
                              boxShadow: `0 0 20px ${info.color}40`
                            }
                          } : {}
                        }}
                      >
                        <Box
                          className="contact-icon"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 60,
                            height: 60,
                            background: `linear-gradient(135deg, ${info.color}, ${info.color}cc)`,
                            borderRadius: "12px",
                            color: "#fff",
                            transition: "all 0.3s ease"
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#a0d2ff",
                              fontWeight: 600,
                              mb: 0.5
                            }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: "#fff",
                              fontWeight: 500
                            }}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Stack>

                {/* Social Links */}
                <Box sx={{ mt: 6 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      mb: 3
                    }}
                  >
                    Connect with me
                  </Typography>
                  <Stack direction="row" spacing={2} justifyContent="center">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconButton
                          href={social.url}
                          target="_blank"
                          sx={{
                            background: `linear-gradient(135deg, ${social.color}, ${social.color}cc)`,
                            color: "#fff",
                            width: 50,
                            height: 50,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-3px)",
                              boxShadow: `0 10px 20px ${social.color}40`
                            }
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Stack>
                </Box>

                {/* Availability */}
                <Box sx={{ mt: 6 }}>
                  <Chip
                    icon={<CheckCircle />}
                    label="Available for freelance work"
                    sx={{
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
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#a0d2ff",
                      mt: 2,
                      lineHeight: 1.6
                    }}
                  >
                    Response time: Usually within 24 hours
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
                    borderColor: "rgba(0, 210, 255, 0.3)",
                    boxShadow: "0 10px 30px rgba(0, 210, 255, 0.1)",
                  }
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    mb: 4
                  }}
                >
                  Send me a message
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            background: "rgba(255, 255, 255, 0.05)",
                            borderRadius: "12px",
                            "& fieldset": {
                              borderColor: "rgba(0, 210, 255, 0.2)",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(0, 210, 255, 0.4)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#00d2ff",
                            }
                          },
                          "& .MuiInputLabel-root": {
                            color: "#b0d4ff",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#00d2ff",
                          },
                          "& .MuiOutlinedInput-input": {
                            color: "#fff",
                          }
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            background: "rgba(255, 255, 255, 0.05)",
                            borderRadius: "12px",
                            "& fieldset": {
                              borderColor: "rgba(0, 210, 255, 0.2)",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(0, 210, 255, 0.4)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#00d2ff",
                            }
                          },
                          "& .MuiInputLabel-root": {
                            color: "#b0d4ff",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#00d2ff",
                          },
                          "& .MuiOutlinedInput-input": {
                            color: "#fff",
                          }
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            background: "rgba(255, 255, 255, 0.05)",
                            borderRadius: "12px",
                            "& fieldset": {
                              borderColor: "rgba(0, 210, 255, 0.2)",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(0, 210, 255, 0.4)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#00d2ff",
                            }
                          },
                          "& .MuiInputLabel-root": {
                            color: "#b0d4ff",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#00d2ff",
                          },
                          "& .MuiOutlinedInput-input": {
                            color: "#fff",
                          }
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        multiline
                        rows={6}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            background: "rgba(255, 255, 255, 0.05)",
                            borderRadius: "12px",
                            "& fieldset": {
                              borderColor: "rgba(0, 210, 255, 0.2)",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(0, 210, 255, 0.4)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#00d2ff",
                            }
                          },
                          "& .MuiInputLabel-root": {
                            color: "#b0d4ff",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#00d2ff",
                          },
                          "& .MuiOutlinedInput-input": {
                            color: "#fff",
                          },
                          "& .MuiOutlinedInput-multiline": {
                            padding: "16.5px 14px",
                          }
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          size="large"
                          startIcon={<Send />}
                          disabled={isSubmitting}
                          sx={{
                            background: "linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)",
                            color: "#fff",
                            py: 2,
                            borderRadius: "12px",
                            fontWeight: 600,
                            fontSize: "1.1rem",
                            textTransform: "none",
                            boxShadow: "0 8px 25px rgba(0, 210, 255, 0.4)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              background: "linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)",
                              transform: "translateY(-2px)",
                              boxShadow: "0 12px 30px rgba(0, 210, 255, 0.6)",
                            },
                            "&:disabled": {
                              background: "rgba(255, 255, 255, 0.1)",
                              color: "rgba(255, 255, 255, 0.3)",
                            }
                          }}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </form>

                {/* Additional Info */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#a0d2ff",
                    mt: 4,
                    textAlign: "center",
                    lineHeight: 1.6
                  }}
                >
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision. Let's build something amazing together!
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            icon={snackbar.severity === 'success' ? <CheckCircle /> : <Error />}
            sx={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(0, 210, 255, 0.2)",
              color: "#fff",
              "& .MuiAlert-icon": {
                color: snackbar.severity === 'success' ? "#00d2ff" : "#ff416c"
              }
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;