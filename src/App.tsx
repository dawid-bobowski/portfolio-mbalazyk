import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';

import useSticky from './hooks/useSticky';

import Banner from './components/Banner';
import Hero from './components/Hero';
import Offer from './components/Offer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Routing:
// -- About
// -- Offer
// -- Portfolio (with feedback included)
// -- Contact

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
          backgroundColor: '#fff',
          margin: '0 auto',
          marginTop: sticky ? '100px' : 0,
        }}
      >
        <Banner
          sticky={sticky}
          stickyRef={stickyRef}
        />
        <Hero />
        <Offer />
        <Portfolio />
        <Contact />
        <Footer />
      </Box>
    </>
  );
};

export default App;
