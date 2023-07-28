import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';

import useSticky from './hooks/useSticky';

import Banner from './components/Banner';
import Hero from './components/Hero';
import Offer from './components/Offer';

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
        <Offer />
      </Box>
    </>
  );
};

export default App;
