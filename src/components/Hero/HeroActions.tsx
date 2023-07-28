import { Box, Button } from '@mui/material';

const primaryColor = '#c7263b';

const heroActionsButtonStyle = {
  fontFamily: '"Source Sans 3", sans-serif',
  textTransform: 'initial',
};

const HeroActions = () => {
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
      {/* Customized Buttons: https://mui.com/material-ui/react-button/#customization */}
      <Button
        variant='contained'
        sx={{
          backgroundColor: primaryColor,
          ...heroActionsButtonStyle,
        }}
      >
        Zamów korektę
      </Button>
      <Button
        variant='outlined'
        sx={{
          borderColor: primaryColor,
          color: primaryColor,
          ...heroActionsButtonStyle,
        }}
      >
        Sprawdź ofertę
      </Button>
    </Box>
  );
};

export default HeroActions;
