import { Box } from '@mui/material';
import HeroImage from '../assets/pexels-vlada-karpovich-4050364.jpg';

const Hero = () => {
  return (
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
  )
}

export default Hero;