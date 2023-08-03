import { Box, Button, Typography } from '@mui/material';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import BackgroundImage from '/offer-background.png';

const Offer = () => {
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
          gap: 4,
        }}
      >
        <Box className='offer-item-wrapper' sx={styles.offerItemWrapper}>
          <Box className='offer-item' sx={styles.offerItem}>
            <Typography className='offer-title' variant='h5' sx={styles.offerTitle}>Korekta</Typography>
            <Typography className='offer-description' sx={styles.offerDescription}>
              Integer id facilisis magna. Vivamus sem dolor, tincidunt quis condimentum tincidunt, sagittis vel libero. 
              Etiam sed nunc quis nisl dignissim dignissim a non magna. Mauris interdum augue neque, vel consectetur 
              diam tempor sit amet. Nullam at sagittis ante. In eget libero ut mauris elementum gravida. Sed ipsum 
              nibh, fermentum tincidunt.
            </Typography>
          </Box>
        </Box>
        <Box className='offer-item-wrapper' sx={styles.offerItemWrapper}>
          <Box className='offer-item' sx={styles.offerItem}>
            <Typography className='offer-title' variant='h5' sx={styles.offerTitle}>Redakcja</Typography>
            <Typography className='offer-description' sx={styles.offerDescription}>
              Nulla facilisi. Nulla bibendum elementum hendrerit. Aliquam et massa elementum, porttitor turpis eu, 
              scelerisque dolor. In tincidunt semper elit, vitae commodo orci dignissim eu. Mauris accumsan a lectus id 
              pellentesque. Quisque pretium orci id sagittis sagittis. Vivamus dapibus ullamcorper metus nec porttitor. 
              Vestibulum velit justo, mollis quis nisi ut, suscipit.
            </Typography>
          </Box>
        </Box>
        <Box className='offer-item-wrapper' sx={styles.offerItemWrapper}>
          <Box className='offer-item' sx={styles.offerItem}>
            <Typography className='offer-title' variant='h5' sx={styles.offerTitle}>Copywriting</Typography>
            <Typography className='offer-description' sx={styles.offerDescription}>
              Vestibulum pulvinar consequat arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada 
              fames ac turpis egestas. Maecenas nec molestie tortor, ac semper dui. Quisque eleifend, elit id aliquam 
              malesuada, orci dui tristique eros, eget dictum mi metus nec tortor. Donec in ex lorem. Aliquam blandit 
              felis eros, quis cursus.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        marginTop: 10,
      }}>
        <Button
          variant='contained'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            color: '#8b1a29',
            '&:hover': {
              color: '#b51d2d',
              backgroundColor: '#fff',
              boxShadow: '0 0 4px 4px #b51d2d',
            },
          }}
        >
          <Typography sx={{
            fontFamily: '"Source Sans 3", sans-serif',
            textTransform: 'initial',
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
  offerItemWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    position: 'relative',
    '&:nth-of-type(2n)': {
      left: -200,
    },
    '&:nth-of-type(2n+1)': {
      left: 200,
    },
  },
  offerItem: {
    backgroundColor: '#fff',
    borderRadius: '1rem',
    width: 700,
    height: 200,
    padding: 4,
    boxShadow: '8px 8px 0px #f0f0f0',
    display: 'flex',
    flexDirection: 'column',
  },
  offerTitle: {
    fontFamily: 'Vollkorn, serif',
    fontWeight: 'bold',
  },
  offerDescription: {

  },
};

export default Offer;
