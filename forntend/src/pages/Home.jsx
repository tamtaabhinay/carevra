import { Box, Container } from "@mui/material";
import HomePageBanner from "../components/heroSections/homePageBanner/HomePageBanner";

const Home = () => {
  return (
    <Box>
      <section>
        <HomePageBanner />
      </section>
      <Container maxWidth="xl">
        <h1>Home</h1>
      </Container>
    </Box>
  );
};

export default Home;
