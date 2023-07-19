import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import HeroImage from './assets/pexels-vlada-karpovich-4050364.jpg';
import LogoPlaceholder from './assets/dummy_200x60_ffffff_cccccc.png';
import { SvgIcon } from '@mui/material';

function App() {
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
        <Box
          id='main-menu'
          sx={{ height: 80 }}
        >
          <Box sx={{ height: 60, width: 200, backgroundImage: `url(${LogoPlaceholder})` }}></Box>
        </Box>
        <Box
          id='hero'
          sx={{ display: 'flex', height: 800 }}
        >
          <Box
            id='hero-left'
            sx={{ width: '100%', height: '100%' }}
          ></Box>
          <Box
            id='hero-right'
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${HeroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
