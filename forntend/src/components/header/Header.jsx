import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Container,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';

/* Uses the same fonts as the banner (Bricolage Grotesque + DM Sans). */

const c = {
  ink: '#0B2A30',
  teal: '#14B8A6',
  tealLight: '#2DD4BF',
  mist: '#E8F5F2',
  coral: '#FF6B4A',
  white: '#FFFFFF',
};
const display = '"Bricolage Grotesque", "Segoe UI", system-ui, sans-serif';
const body = '"DM Sans", "Segoe UI", system-ui, sans-serif';

const services = [
  { label: 'Vet visits', desc: 'Check-ups and treatment at home or in clinic', href: '/services/vet' },
  { label: 'Grooming', desc: 'Baths, trims and nail care', href: '/services/grooming' },
  { label: 'Boarding', desc: 'Safe stays while you are away', href: '/services/boarding' },
  { label: 'Training', desc: 'One-to-one sessions with certified trainers', href: '/services/training' },
  { label: 'Emergency rescue', desc: 'Fast help for injured or stray animals', href: '/services/emergency', urgent: true },
];

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'For caregivers', href: '/caregivers' },
];

const focusRing = { outline: `3px solid ${c.tealLight}`, outlineOffset: 2 };

const Chevron = ({ open }) => (
  <Box
    component="svg"
    aria-hidden="true"
    viewBox="0 0 12 12"
    sx={{
      width: 12,
      height: 12,
      ml: 0.75,
      transition: 'transform .2s',
      transform: open ? 'rotate(180deg)' : 'none',
    }}
  >
    <path d="M2 4.5 6 8.5 10 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </Box>
);

const Logo = () => (
  <Box
    component="a"
    href="/"
    aria-label="Carevra home"
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 1.25,
      color: c.white,
      textDecoration: 'none',
      borderRadius: 2,
      '&:focus-visible': focusRing,
    }}
  >
    <Box
      aria-hidden="true"
      sx={{
        width: 34,
        height: 34,
        borderRadius: '12px 12px 12px 4px',
        bgcolor: c.teal,
        color: c.ink,
        display: 'grid',
        placeItems: 'center',
        fontFamily: display,
        fontWeight: 800,
        fontSize: '1.2rem',
        lineHeight: 1,
      }}
    >
      c
    </Box>
    <Typography sx={{ fontFamily: display, fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.03em' }}>
      Carevra
    </Typography>
  </Box>
);

const navButtonSx = {
  color: 'rgba(255,255,255,0.88)',
  textTransform: 'none',
  fontFamily: body,
  fontWeight: 500,
  fontSize: '1rem',
  px: 1.75,
  py: 1,
  borderRadius: 999,
  '&:hover': { bgcolor: 'rgba(255,255,255,0.08)', color: c.white },
  '&.Mui-focusVisible': focusRing,
};

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const menuOpen = Boolean(anchorEl);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: c.ink,
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        fontFamily: body,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 76 }, gap: 2 }}>
          <Logo />

          {/* Desktop navigation */}
          <Box component="nav" aria-label="Main" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5, ml: 4 }}>
            <Button
              id="services-button"
              aria-controls={menuOpen ? 'services-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={menuOpen ? 'true' : undefined}
              onClick={(e) => setAnchorEl(e.currentTarget)}
              sx={{ ...navButtonSx, ...(menuOpen && { bgcolor: 'rgba(255,255,255,0.08)', color: c.white }) }}
            >
              Services
              <Chevron open={menuOpen} />
            </Button>
            {links.map((l) => (
              <Button key={l.label} href={l.href} sx={navButtonSx}>
                {l.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop actions */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            <Button href="/login" sx={navButtonSx}>
              Sign in
            </Button>
            <Button
              href="/book"
              variant="contained"
              sx={{
                textTransform: 'none',
                fontFamily: body,
                fontWeight: 700,
                fontSize: '1rem',
                px: 3,
                py: 1,
                borderRadius: 999,
                bgcolor: c.teal,
                color: c.ink,
                boxShadow: 'none',
                '&:hover': { bgcolor: c.tealLight, boxShadow: 'none' },
                '&.Mui-focusVisible': focusRing,
              }}
            >
              Book care
            </Button>
          </Box>

          {/* Mobile menu toggle */}
          <IconButton
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' }, color: c.white, '&.Mui-focusVisible': focusRing }}
          >
            <Box component="svg" viewBox="0 0 24 24" sx={{ width: 26, height: 26 }} aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            </Box>
          </IconButton>
        </Toolbar>
      </Container>

      {/* Services dropdown */}
      <Menu
        id="services-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{ 'aria-labelledby': 'services-button' }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{
          paper: {
            sx: {
              mt: 1.5,
              width: 340,
              p: 1,
              bgcolor: c.mist,
              color: c.ink,
              borderRadius: '20px 20px 20px 6px',
              boxShadow: '0 24px 48px -16px rgba(0,0,0,0.5)',
            },
          },
        }}
      >
        {services.map((s) => (
          <MenuItem
            key={s.label}
            component="a"
            href={s.href}
            onClick={() => setAnchorEl(null)}
            sx={{
              alignItems: 'flex-start',
              gap: 1.5,
              py: 1.25,
              px: 1.5,
              borderRadius: 3,
              whiteSpace: 'normal',
              '&:hover, &.Mui-focusVisible': { bgcolor: 'rgba(11,42,48,0.08)' },
            }}
          >
            <Box
              aria-hidden="true"
              sx={{ mt: 0.9, width: 10, height: 10, flexShrink: 0, borderRadius: '50%', bgcolor: s.urgent ? c.coral : c.teal }}
            />
            <Box>
              <Typography sx={{ fontFamily: body, fontWeight: 700, lineHeight: 1.3 }}>{s.label}</Typography>
              <Typography sx={{ fontFamily: body, fontSize: '0.875rem', color: 'rgba(11,42,48,0.7)', lineHeight: 1.4 }}>
                {s.desc}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{ paper: { sx: { width: { xs: '100%', sm: 360 }, bgcolor: c.ink, color: c.white, p: 2.5 } } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Logo />
          <IconButton aria-label="Close menu" onClick={() => setDrawerOpen(false)} sx={{ color: c.white, '&.Mui-focusVisible': focusRing }}>
            <Box component="svg" viewBox="0 0 24 24" sx={{ width: 24, height: 24 }} aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            </Box>
          </IconButton>
        </Box>

        <Box component="nav" aria-label="Mobile">
          <Button
            fullWidth
            aria-expanded={mobileServicesOpen}
            aria-controls="mobile-services"
            onClick={() => setMobileServicesOpen((v) => !v)}
            sx={{ ...navButtonSx, justifyContent: 'space-between', fontSize: '1.15rem', borderRadius: 3, py: 1.5 }}
          >
            Services
            <Chevron open={mobileServicesOpen} />
          </Button>
          <Collapse in={mobileServicesOpen} id="mobile-services" unmountOnExit>
            <Box sx={{ pl: 1.5, pb: 1 }}>
              {services.map((s) => (
                <Button
                  key={s.label}
                  fullWidth
                  href={s.href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{ ...navButtonSx, justifyContent: 'flex-start', gap: 1.5, borderRadius: 3 }}
                >
                  <Box aria-hidden="true" sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: s.urgent ? c.coral : c.teal }} />
                  {s.label}
                </Button>
              ))}
            </Box>
          </Collapse>

          {links.map((l) => (
            <Button
              key={l.label}
              fullWidth
              href={l.href}
              onClick={() => setDrawerOpen(false)}
              sx={{ ...navButtonSx, justifyContent: 'flex-start', fontSize: '1.15rem', borderRadius: 3, py: 1.5 }}
            >
              {l.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: 1.5, pt: 3 }}>
          <Button
            href="/book"
            variant="contained"
            fullWidth
            sx={{
              textTransform: 'none',
              fontFamily: body,
              fontWeight: 700,
              fontSize: '1.05rem',
              py: 1.5,
              borderRadius: 999,
              bgcolor: c.teal,
              color: c.ink,
              boxShadow: 'none',
              '&:hover': { bgcolor: c.tealLight, boxShadow: 'none' },
              '&.Mui-focusVisible': focusRing,
            }}
          >
            Book care
          </Button>
          <Button
            href="/login"
            variant="outlined"
            fullWidth
            sx={{
              textTransform: 'none',
              fontFamily: body,
              fontSize: '1.05rem',
              py: 1.5,
              borderRadius: 999,
              color: c.white,
              borderColor: 'rgba(255,255,255,0.45)',
              '&:hover': { borderColor: c.white, bgcolor: 'rgba(255,255,255,0.08)' },
            }}
          >
            Sign in
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;