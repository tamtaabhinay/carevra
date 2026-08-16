import { AppBar, Box, Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

const Navbar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: "60px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: { xs: 1, md: 0 },
                mr: 4,
              }}
            >
              <PetsIcon />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  letterSpacing: ".05rem",
                  background:
                    "linear-gradient(45deg, #90caf9 30%, #ce93d8 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                CAREVRA
              </Typography>
            </Box>
            <Box></Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
