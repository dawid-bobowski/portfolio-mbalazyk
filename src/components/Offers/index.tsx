import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import BackgroundImage from '/offer-background.png';
import OfferBox from './OfferBox';
import { OFFERS, PRIMARY_COLOR } from '../../constants';

const Offers = () => {
  const navigate = useNavigate();
  return (
    <Box
      id='main-offers'
      sx={{
        minHeight: 800,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 0',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundColor: '#8b1a29',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        id='offers-wrapper'
        sx={{
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}
      >
        {OFFERS.map(item => (
          <OfferBox
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </Box>
      <Box sx={{
        marginTop: 10,
      }}>
        <Button
          variant='contained'
          onClick={() => navigate('/oferta')}
          sx={{
            ...styles.styledButton,
            backgroundColor: '#fff',
            color: PRIMARY_COLOR,
            '&:hover': {
              backgroundColor: PRIMARY_COLOR,
              color: '#fff',
            },
          }}
        >
          <Typography sx={{
            fontFamily: '"Source Sans 3", sans-serif',
            textTransform: 'initial',
            fontSize: '1.2rem',
          }}>
            Więcej szczegółów
          </Typography>
          <NavigateNextIcon sx={{
            fontSize: 16,
          }} />
        </Button>
      </Box>
    </Box>
  );
};

const styles = {
  styledButton: {
    zIndex: 2,
    width: 220,
    fontFamily: '"Source Sans 3", sans-serif',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    padding: '0.75rem',
  },
};

export default Offers;
