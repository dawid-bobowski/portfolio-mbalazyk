import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import Banner from './components/Banner';
import Hero from './components/Hero';
import { Typography } from '@mui/material';
import useSticky from './hooks/useSticky';

// Routing:
// About
// Offer
// Portfolio
// Reviews
// Contact

const App = () => {
  const { sticky, stickyRef } = useSticky();

  return (
    <>
      <CssBaseline />
      <Box
        id='main-container'
        sx={{
          maxWidth: 1920,
          minHeight: 800,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          marginTop: sticky ? '120px' : 0,
        }}
      >
        <Banner
          sticky={sticky}
          stickyRef={stickyRef}
        />
        <Hero />
        <Box
          id='ad'
          sx={{
            height: 800,
            display: 'flex',
            justifyContent: 'center',
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
        </Box>
      </Box>
    </>
  );
};

export default App;
