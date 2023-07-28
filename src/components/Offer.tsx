import { Box, Typography } from '@mui/material';
import AdPlaceholder from '../assets/600x400.png';

// Perhaps a carousel with some images and offers?

const Offer = () => {
  return (
    <Box
      id='ad'
      sx={{
        height: 800,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
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
        Oferta
      </Typography>
      <Box
        sx={{
          marginTop: '2rem',
        }}
      >
        <img
          src={AdPlaceholder}
          width={600}
          height={400}
        />
      </Box>
    </Box>
  );
};

export default Offer;
