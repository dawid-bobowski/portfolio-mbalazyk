import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { PRIMARY_COLOR } from '../../constants';

const HeroActions = () => {
  const navigate = useNavigate();

  return (
    <Box
      id='hero-actions'
      sx={{
        gap: 2,
        marginTop: '2rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Button
        variant='contained'
        onClick={() => navigate('/oferta')}
        sx={{
          ...styles.styledButton,
          backgroundColor: '#fff',
          color: PRIMARY_COLOR,
          border: `1px solid ${PRIMARY_COLOR}`,
          '&:hover': {
            backgroundColor: PRIMARY_COLOR,
            color: '#fff',
            border: `1px solid ${PRIMARY_COLOR}`,
          },
        }}
      >
        <Typography sx={{
            fontFamily: '"Source Sans 3", sans-serif',
            textTransform: 'initial',
            fontSize: '1.2rem',
          }}>
          Sprawdź ofertę
        </Typography>
        <NavigateNextIcon sx={{
            fontSize: 16,
          }} />
      </Button>
    </Box>
  );
};

const styles = {
  styledButton: {
    zIndex: 2,
    width: 200,
    fontFamily: '"Source Sans 3", sans-serif',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: '0.75rem',
  },
};

export default HeroActions;
