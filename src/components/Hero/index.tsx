import { Box } from '@mui/material';
import HeroImage from '../../assets/pexels-vlada-karpovich-4050364.jpg';
import HeroText from './HeroText';
import HeroActions from './HeroActions';

const Hero = () => {
  return (
    <Box
      id='hero'
      sx={{
        height: 800,
        display: 'flex',
      }}
    >
      <Box
        id='hero-left'
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <HeroText />
        <HeroActions />
      </Box>
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
  );
};

export default Hero;
