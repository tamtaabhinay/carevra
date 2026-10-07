import {Box, Container} from '@mui/material';
import bannerImage from '../../../assets/images/banner/banner_2.jpg';

const HomePageBanner = () => {
  return (
    <Box sx={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='mainBannerSection'>
        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            HomePageBanner
        </Container>
    </Box>
  )
}

export default HomePageBanner