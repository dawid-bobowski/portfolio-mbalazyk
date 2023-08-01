import { Box, Typography } from '@mui/material';
import BackgroundImage from '../assets/offer-background.png';

// Perhaps a carousel with some images and offers?

const Offer = () => {
  return (
    <Box
      id='ad'
      sx={{
        minHeight: 800,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4rem 0',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundColor: '#8B1A29',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Typography
        variant='h3'
        component='h1'
        sx={{
          fontFamily: 'Vollkorn, serif',
          fontWeight: 'bold',
          color: '#FFF',
        }}
      >
        Oferta
      </Typography>
      <Box
        sx={{
          marginTop: '2rem',
        }}
      >
        {/* Wstawić ofertę */}
      </Box>
    </Box>
  );
};

export default Offer;
