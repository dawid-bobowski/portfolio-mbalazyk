import { Box, Typography } from '@mui/material';

import Collabs from './Collabs';

const Portfolio = () => {
  return (
    <Box
      id='portfolio'
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
        component='h1'
        sx={{
          fontFamily: 'Vollkorn, serif',
          fontWeight: 'bold',
        }}
      >
        Kilka ostatnich współprac 🤝🏻
      </Typography>
      <Collabs />
      <Collabs />
    </Box>
  );
}

export default Portfolio;