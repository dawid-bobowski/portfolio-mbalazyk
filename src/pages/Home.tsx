import { Box } from '@mui/material';

import Hero from '../components/Hero';
import Offers from '../components/Offers';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import { useAppSelector } from '../app/hooks';

const Home = () => {
  const sticky: boolean = useAppSelector(state => state.app.sticky);

  return (
    <Box
        id='main-container'
        sx={{
          maxWidth: 1920,
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          margin: '0 auto',
          marginTop: sticky ? '100px' : 0,
        }}
      >
        <Hero />
        <Offers />
        <Portfolio />
        <Contact />
      </Box>
  )
}

export default Home;