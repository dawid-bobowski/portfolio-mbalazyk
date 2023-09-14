import { Box } from '@mui/material';

import Hero from '../components/Hero';
import Offers from '../components/Offers';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import { useAppSelector } from '../app/hooks';

const Home = () => {
  const sticky: boolean = useAppSelector((state) => state.app.sticky);

  return (
    <Box
      id='main-container'
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
          flexDirection: 'column',
          backgroundColor: '#fff',
        }}
      >
        <Hero />
        <Offers />
        <Portfolio />
        <Contact />
      </Box>
    </Box>
  );
};

export default Home;
