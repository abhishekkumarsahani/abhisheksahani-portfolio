import { AppBar, Toolbar, Button, Box, Typography, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 900px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Desktop Navigation - EXACT SAME DESIGN
  const desktopNav = (
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
            color: location.pathname === link.path ? "#fff" : "#c2e9ff",
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
  );

  // Mobile Drawer Content - EXACT SAME DESIGN AS BUTTONS
  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        background: "linear-gradient(135deg, #0a0a2a 0%, #1a1a4a 30%, #0f2027 70%, #0a2a3a 100%)",
        padding: 3,
      }}
      role="presentation"
    >
      {/* Close Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
        <IconButton 
          onClick={toggleDrawer(false)}
          sx={{
            color: "#00d2ff",
            background: "rgba(0, 210, 255, 0.1)",
            "&:hover": {
              background: "rgba(0, 210, 255, 0.2)",
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Links in Drawer - Same styling as desktop buttons */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {links.map((link) => (
          <Button
            key={link.path}
            component={NavLink}
            to={link.path}
            onClick={toggleDrawer(false)}
            fullWidth
            sx={{
              color: location.pathname === link.path ? "#fff" : "#c2e9ff",
              py: 1.5,
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
    </Box>
  );

  return (
    <>
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
          
          {/* Logo / Name - EXACT SAME */}
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
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
              textDecoration: "none",
              "@keyframes shine": {
                "0%": { backgroundPosition: "0% center" },
                "100%": { backgroundPosition: "200% center" }
              }
            }}
          >
            Abhishek Sahani
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && desktopNav}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{
                color: "#00d2ff",
                background: "rgba(0, 210, 255, 0.1)",
                "&:hover": {
                  background: "rgba(0, 210, 255, 0.2)",
                  transform: "scale(1.1)",
                },
                transition: "all 0.3s ease"
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "transparent",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;