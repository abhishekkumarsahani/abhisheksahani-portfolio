import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "linear-gradient(135deg, #0a0a2a 0%, #1a1a4a 30%, #0f2027 70%, #0a2a3a 100%)",
        backdropFilter: "blur(15px)",
        borderBottom: "1px solid rgba(0, 230, 255, 0.2)",
        boxShadow: "0 4px 30px rgba(0, 20, 40, 0.4)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(0, 230, 255, 0.8), transparent)",
        }
      }}
    >
      <Toolbar sx={{ 
        maxWidth: "1200px", 
        width: "100%", 
        mx: "auto",
        py: 1
      }}>
        
        {/* Logo / Name */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 800,
            letterSpacing: 1.5,
            background: "linear-gradient(90deg, #00d2ff 0%, #3a7bd5 50%, #00d2ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% auto",
            animation: "shine 3s linear infinite",
            textShadow: "0 0 20px rgba(0, 210, 255, 0.3)",
            "@keyframes shine": {
              "0%": { backgroundPosition: "0% center" },
              "100%": { backgroundPosition: "200% center" }
            }
          }}
        >
          Abhishek Sahani
        </Typography>

        {/* Menu Links */}
        <Box sx={{ 
          display: "flex", 
          alignItems: "center",
          gap: 0.5
        }}>
          {links.map((link) => (
            <Button
              key={link.path}
              component={NavLink}
              to={link.path}
              sx={{
                color: "#c2e9ff",
                mx: 0.5,
                px: 2.5,
                py: 1,
                fontWeight: 600,
                textTransform: "none",
                borderRadius: "12px",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                position: "relative",
                overflow: "hidden",
                letterSpacing: "0.5px",
                fontSize: "0.95rem",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                  transition: "left 0.6s",
                },
                "&:hover": {
                  background: "linear-gradient(135deg, rgba(0, 210, 255, 0.15), rgba(58, 123, 213, 0.1))",
                  transform: "translateY(-2px)",
                  color: "#ffffff",
                  boxShadow: "0 5px 20px rgba(0, 123, 255, 0.3)",
                  "&::before": {
                    left: "100%",
                  }
                },
                "&.active": {
                  background: "linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)",
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(0, 210, 255, 0.5)",
                  transform: "translateY(-1px)",
                },
                "&.active:hover": {
                  background: "linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)",
                  boxShadow: "0 6px 25px rgba(0, 210, 255, 0.6)",
                }
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;