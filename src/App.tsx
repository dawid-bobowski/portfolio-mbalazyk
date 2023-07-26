import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import Banner from './components/Banner';
import Hero from './components/Hero';
import { Typography } from '@mui/material';

// Routing:
  // About
  // Offer
  // Portfolio
  // Reviews
  // Contact

const App = () => {
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
        }}
      >
        <Banner />
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
          <Typography variant='h3' component='h1'>Reklama usług</Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
