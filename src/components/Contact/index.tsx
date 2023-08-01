import { Box, Typography } from '@mui/material';
import BackgroundImage from '../../assets/offer-background.png';

const Contact = () => {
  return (
    <Box
      id='main-contact'
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
        component='h2'
        sx={{
          fontFamily: 'Vollkorn, serif',
          fontWeight: 'bold',
          color: '#FFF',
        }}
      >
        Skontaktuj się ze mną!
      </Typography>
      <Box
        sx={{
          marginTop: '2rem',
        }}
      >
        {/* Wstawić formularz */}
      </Box>
    </Box>
  );
}

export default Contact;