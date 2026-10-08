import { useState } from 'react';
import { Box, Button, Chip, Container, Stack, Typography, useMediaQuery } from '@mui/material';
import bannerImage from '../../../assets/images/banner/banner_2.jpg';


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

const services = ['Vet visit', 'Grooming', 'Boarding', 'Training', 'Emergency rescue'];
const trust = ['Verified caregivers', 'Secure payments', 'Rated after every visit'];

const ROUTE = 'M 30 132 C 95 132, 90 82, 155 82 S 235 40, 288 36';

const LiveMap = ({ urgent, reduceMotion }) => {
  const accent = urgent ? c.coral : c.teal;
  return (
    <Box
      role="img"
      aria-label={
        urgent
          ? 'Map showing a rescuer arriving in 4 minutes'
          : 'Map showing a caregiver arriving in 12 minutes'
      }
      sx={{ borderRadius: 3, overflow: 'hidden', bgcolor: c.white, lineHeight: 0 }}
    >
      <svg viewBox="0 0 320 168" width="100%" style={{ display: 'block' }}>
        <rect width="320" height="168" fill="#F3FAF8" />
        {/* streets */}
        <g stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" fill="none">
          <path d="M 0 60 L 320 90" />
          <path d="M 70 0 L 110 168" />
          <path d="M 200 0 L 230 168" />
          <path d="M 0 140 L 320 120" />
        </g>
        <g stroke="#D5E9E4" strokeWidth="1.5" fill="none">
          <path d="M 0 60 L 320 90" />
          <path d="M 70 0 L 110 168" />
          <path d="M 200 0 L 230 168" />
          <path d="M 0 140 L 320 120" />
        </g>
        {/* route */}
        <path d={ROUTE} fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" strokeDasharray="2 9" />
        {/* destination */}
        <circle cx="288" cy="36" r="14" fill={accent} opacity="0.2" />
        <circle cx="288" cy="36" r="7" fill={c.ink} />
        {/* start */}
        <circle cx="30" cy="132" r="5" fill={c.white} stroke={c.ink} strokeWidth="2" />
        {/* caregiver */}
        <g>
          <circle r="16" fill={accent} opacity="0.25" />
          <circle r="9" fill={accent} stroke={c.white} strokeWidth="3" />
          {!reduceMotion && (
            <animateMotion dur="7s" repeatCount="indefinite" path={ROUTE} calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;1" />
          )}
          {reduceMotion && <animateTransform attributeName="transform" type="translate" values="150 82" dur="1s" fill="freeze" />}
        </g>
      </svg>
    </Box>
  );
};

const HomePageBanner = ({ onSearch }) => {
  const [selected, setSelected] = useState('Vet visit');
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const urgent = selected === 'Emergency rescue';
  const accent = urgent ? c.coral : c.teal;

  return (
    <Box
      component="section"
      className="mainBannerSection"
      sx={{
        display: 'flex',
        alignItems: 'center',
        minHeight: { xs: 'auto', md: 660 },
        py: { xs: 6, md: 10 },
        fontFamily: body,
        backgroundImage: {
          xs: `linear-gradient(180deg, rgba(11,42,48,0.93), rgba(11,42,48,0.82)), url(${bannerImage})`,
          md: `linear-gradient(90deg, rgba(11,42,48,0.95) 0%, rgba(11,42,48,0.8) 50%, rgba(11,42,48,0.3) 100%), url(${bannerImage})`,
        },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' },
            gap: { xs: 5, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* Message */}
          <Box>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontFamily: display,
                fontWeight: 800,
                color: c.white,
                letterSpacing: '-0.035em',
                lineHeight: 1,
                fontSize: { xs: '2.75rem', sm: '3.75rem', md: '5rem' },
              }}
            >
              Care for
              <br />
              every life
            </Typography>

            <Typography
              component="p"
              sx={{
                mt: 3,
                maxWidth: 500,
                color: 'rgba(255,255,255,0.88)',
                fontSize: { xs: '1.05rem', md: '1.2rem' },
                lineHeight: 1.6,
              }}
            >
              Book a vet, groomer, boarder or trainer near you in seconds. Follow your
              caregiver on the map and pay securely in the app.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => onSearch?.(selected)}
                sx={{
                  px: 4,
                  py: 1.6,
                  borderRadius: 999,
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '1rem',
                  bgcolor: accent,
                  color: c.ink,
                  boxShadow: 'none',
                  '&:hover': { bgcolor: urgent ? '#ff836a' : c.tealLight, boxShadow: 'none' },
                  '&.Mui-focusVisible': { outline: `3px solid ${c.white}`, outlineOffset: 3 },
                }}
              >
                {urgent ? 'Get emergency help' : `Book ${selected.toLowerCase()}`}
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#how-it-works"
                sx={{
                  px: 4,
                  py: 1.6,
                  borderRadius: 999,
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '1rem',
                  color: c.white,
                  borderColor: 'rgba(255,255,255,0.45)',
                  '&:hover': { borderColor: c.white, bgcolor: 'rgba(255,255,255,0.08)' },
                }}
              >
                See how it works
              </Button>
            </Stack>

            <Stack
              direction="row"
              useFlexGap
              component="ul"
              sx={{ flexWrap: 'wrap', gap: { xs: 1.5, sm: 3 }, mt: 5, p: 0, listStyle: 'none' }}
            >
              {trust.map((t) => (
                <Box
                  component="li"
                  key={t}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.95rem',
                  }}
                >
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      bgcolor: c.teal,
                      color: c.ink,
                      fontSize: 12,
                      fontWeight: 800,
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    ✓
                  </Box>
                  {t}
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Live booking panel */}
          <Box
            sx={{
              bgcolor: c.mist,
              color: c.ink,
              borderRadius: '28px 28px 28px 6px',
              p: { xs: 2.5, md: 3.5 },
              boxShadow: '0 30px 60px -20px rgba(0,0,0,0.55)',
            }}
          >
            <Typography component="h2" sx={{ fontFamily: display, fontWeight: 600, fontSize: '1.4rem', letterSpacing: '-0.01em' }}>
              What does your pet need?
            </Typography>

            <Stack direction="row" useFlexGap role="group" aria-label="Choose a service" sx={{ flexWrap: 'wrap', gap: 1, mt: 2 }}>
              {services.map((s) => {
                const active = s === selected;
                const isUrgent = s === 'Emergency rescue';
                const tone = isUrgent ? c.coral : c.ink;
                return (
                  <Chip
                    key={s}
                    label={s}
                    clickable
                    onClick={() => setSelected(s)}
                    aria-pressed={active}
                    sx={{
                      height: 40,
                      fontFamily: body,
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      border: '1.5px solid',
                      borderColor: tone,
                      bgcolor: active ? tone : 'transparent',
                      color: active ? (isUrgent ? c.ink : c.white) : c.ink,
                      '&:hover': {
                        bgcolor: active ? tone : isUrgent ? 'rgba(255,107,74,0.15)' : 'rgba(11,42,48,0.08)',
                      },
                      '&.Mui-focusVisible': { outline: `3px solid ${c.teal}`, outlineOffset: 2 },
                    }}
                  />
                );
              })}
            </Stack>

            <Box sx={{ mt: 3 }}>
              <LiveMap urgent={urgent} reduceMotion={reduceMotion} />
              <Box sx={{ mt: 1.5, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 2 }}>
                <Typography sx={{ fontWeight: 700 }}>
                  {urgent ? 'Nearest rescuer: 4 min away' : 'Nearest caregiver: 12 min away'}
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', color: 'rgba(11,42,48,0.65)', textAlign: 'right' }}>
                  Matched by distance and rating
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePageBanner;