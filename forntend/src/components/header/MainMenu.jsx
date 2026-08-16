import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
  Container,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  Divider,
  Collapse,
  useScrollTrigger,
  Slide,
  CssBaseline,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Dashboard as DashboardIcon,
  Layers as LayersIcon,
  Web as WebIcon,
  Smartphone as PhoneIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  AutoAwesome as LogoIcon,
} from '@mui/icons-material';

// Navigation Structure with Dropdown Sub-Items
const navMenuData = [
  { label: 'Dashboard', icon: <DashboardIcon /> },
  {
    label: 'Services',
    icon: <LayersIcon />,
    children: [
      { label: 'Web Development', desc: 'Custom React & Next.js apps', icon: <WebIcon /> },
      { label: 'Mobile Apps', desc: 'iOS & Android solutions', icon: <PhoneIcon /> },
      { label: 'Cloud Hosting', desc: 'AWS & GCP infrastructure', icon: <CloudIcon /> },
      { label: 'Cybersecurity', desc: 'Enterprise security audits', icon: <SecurityIcon /> },
    ],
  },
  { label: 'About Us', icon: <PersonIcon /> },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function ProNavbarWithDropdown(props) {
  // Mobile drawer state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Desktop Dropdown State
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  // User Profile State
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);

  // Handlers for Desktop Dropdowns
  const handleOpenDropdown = (event, menu) => {
    if (menu.children) {
      setDropdownAnchorEl(event.currentTarget);
      setActiveMenu(menu);
    }
  };
  const handleCloseDropdown = () => {
    setDropdownAnchorEl(null);
    setActiveMenu(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: 'rgba(18, 18, 18, 0.8)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ height: 70 }}>
              
              {/* Brand Logo */}
              <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: { xs: 1, md: 0 }, mr: 4 }}>
                <LogoIcon sx={{ color: 'primary.main', mr: 1, fontSize: 30 }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: '.05rem',
                    background: 'linear-gradient(45deg, #90caf9 30%, #ce93d8 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Carevra
                </Typography>
              </Box>

              {/* Desktop Nav Items */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                {navMenuData.map((item) => (
                  <Button
                    key={item.label}
                    startIcon={item.icon}
                    endIcon={item.children ? <ArrowDownIcon /> : null}
                    onClick={(e) => handleOpenDropdown(e, item)}
                    sx={{
                      color: activeMenu?.label === item.label ? 'primary.main' : 'text.secondary',
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      '&:hover': {
                        color: 'common.white',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* Desktop Dropdown Menu Overlay */}
              <Menu
                anchorEl={dropdownAnchorEl}
                open={Boolean(dropdownAnchorEl)}
                onClose={handleCloseDropdown}
                PaperProps={{
                  elevation: 10,
                  sx: {
                    mt: 1.5,
                    p: 1,
                    minWidth: 260,
                    backgroundColor: 'rgba(25, 25, 25, 0.95)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: 'common.white',
                    borderRadius: 3,
                  },
                }}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              >
                {activeMenu?.children?.map((subItem) => (
                  <MenuItem
                    key={subItem.label}
                    onClick={handleCloseDropdown}
                    sx={{
                      py: 1.5,
                      px: 2,
                      borderRadius: 2,
                      gap: 2,
                      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' },
                    }}
                  >
                    <Box sx={{ color: 'primary.main', display: 'flex' }}>{subItem.icon}</Box>
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        {subItem.label}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {subItem.desc}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Menu>

              {/* Profile Avatar */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Account Settings">
                  <IconButton onClick={(e) => setUserMenuAnchor(e.currentTarget)} sx={{ p: 0.5 }}>
                    <Avatar
                      alt="User Avatar"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                      sx={{ width: 40, height: 40, border: '2px solid rgba(255,255,255,0.2)' }}
                    />
                  </IconButton>
                </Tooltip>

                {/* Profile Settings Dropdown */}
                <Menu
                  anchorEl={userMenuAnchor}
                  open={Boolean(userMenuAnchor)}
                  onClose={() => setUserMenuAnchor(null)}
                  PaperProps={{
                    sx: {
                      mt: 1.5,
                      minWidth: 180,
                      backgroundColor: '#1e1e1e',
                      color: 'common.white',
                      border: '1px solid rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  <MenuItem onClick={() => setUserMenuAnchor(null)}>
                    <PersonIcon fontSize="small" sx={{ mr: 1.5 }} /> Profile
                  </MenuItem>
                  <MenuItem onClick={() => setUserMenuAnchor(null)}>
                    <SettingsIcon fontSize="small" sx={{ mr: 1.5 }} /> Settings
                  </MenuItem>
                  <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                  <MenuItem onClick={() => setUserMenuAnchor(null)} sx={{ color: 'error.main' }}>
                    <LogoutIcon fontSize="small" sx={{ mr: 1.5 }} /> Logout
                  </MenuItem>
                </Menu>

                {/* Mobile Menu Toggle Button */}
                <IconButton
                  onClick={() => setMobileOpen(!mobileOpen)}
                  sx={{ display: { xs: 'flex', md: 'none' }, color: 'common.white', ml: 1 }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <Toolbar sx={{ height: 70 }} />

      {/* Mobile Drawer Navigation with Collapsible Accordion Dropdown */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: { width: 300, backgroundColor: '#121212', color: 'common.white', p: 2 },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6" fontWeight={700}>Navigation</Typography>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'common.white' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 2 }} />

        <List>
          {navMenuData.map((item) => (
            <React.Fragment key={item.label}>
              {item.children ? (
                <>
                  <ListItemButton
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    sx={{ borderRadius: 2, mb: 0.5 }}
                  >
                    <ListItemIcon sx={{ color: 'primary.main', minWidth: 40 }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                    <ExpandMoreIcon
                      sx={{
                        transform: mobileDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: '0.2s',
                      }}
                    />
                  </ListItemButton>

                  {/* Collapsible Mobile Sub-Menu */}
                  <Collapse in={mobileDropdownOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ pl: 2 }}>
                      {item.children.map((subItem) => (
                        <ListItemButton
                          key={subItem.label}
                          onClick={() => setMobileOpen(false)}
                          sx={{ borderRadius: 2, mb: 0.5 }}
                        >
                          <ListItemIcon sx={{ color: 'text.secondary', minWidth: 35 }}>
                            {subItem.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={subItem.label}
                            primaryTypographyProps={{ fontSize: '0.9rem' }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItemButton
                  onClick={() => setMobileOpen(false)}
                  sx={{ borderRadius: 2, mb: 0.5 }}
                >
                  <ListItemIcon sx={{ color: 'primary.main', minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}