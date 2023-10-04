import { Box, Typography } from '@mui/material';

import { useAppSelector } from '../app/hooks';

const Offer = () => {
  const sticky: boolean = useAppSelector((state) => state.app.sticky);

  return (
    <Box
      id='contact'
      sx={{
        minHeight: 'calc(100vh - 100px)',
        maxWidth: 1920,
        display: 'flex',
        margin: '0 auto',
        marginTop: sticky ? '100px' : 0,
      }}
    >
      <Box
        sx={{
          width: 'calc(100vw - 8rem)',
          minHeight: 'calc(100vh - 100px - 8rem)',
          margin: '4rem auto',
          display: 'flex',
          backgroundColor: '#fff',
        }}
      >
        <Typography
          variant='h4'
          component='h1'
          sx={{
            width: '100%',
            alignSelf: 'center',
            textAlign: 'center',
            fontFamily: 'Vollkorn, serif',
            fontWeight: 'bold',
            zIndex: 2,
            fontSize: {xs: '1.75rem', sm750: '2.125rem' },
          }}
        >
          Strona z ofertą w budowie!
          <br />
          Przepraszamy za utrudnienia.
        </Typography>
      </Box>
    </Box>
  );
};

export default Offer;
