import { Box, Typography } from '@mui/material';

import Collabs from './Collabs';
import Reviews from './Reviews';

import FeathersBackground from '/feathers-background.png';

const Portfolio = () => {
  return (
    <Box
      id='main-portfolio'
      sx={{
        minHeight: 800,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4rem 0',
        backgroundColor: '#fff',
        backgroundImage: `url(${FeathersBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'top center',
      }}
    >
      <Typography
        variant='h3'
        component='h2'
        sx={{
          fontFamily: 'Vollkorn, serif',
          fontWeight: 'bold',
          fontSize: { xs: '2.5rem', md: '3rem' },
        }}
      >
        Kilka ostatnich współprac...
      </Typography>
      <Collabs />
      <Typography
        variant='h5'
        sx={{
          fontFamily: 'Vollkorn, serif',
          fontWeight: 'bold',
          margin: '4rem 0',
        }}
      >
        ...oraz parę słów od zadowolonych klientów
      </Typography>
      <Reviews />
    </Box>
  );
}

export default Portfolio;