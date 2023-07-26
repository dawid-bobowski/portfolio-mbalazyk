import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import Banner from './components/Banner';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box
        id='main-container'
        sx={{
          width: '100%',
          minHeight: '100vh',
        }}
      >
        <Banner />
        <Hero />
      </Box>
    </>
  );
}

export default App;
