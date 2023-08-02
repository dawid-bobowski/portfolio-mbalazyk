import { Box, Typography } from '@mui/material';

import Collabs from './Collabs';
import Reviews from './Reviews';

const Portfolio = () => {
  return (
    <Box
      id='main-portfolio'
      sx={{
        minHeight: 800,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '4rem 0',
      }}
    >
      <Typography
        variant='h3'
        component='h2'
        sx={{
          fontFamily: 'Vollkorn, serif',
          fontWeight: 'bold',
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