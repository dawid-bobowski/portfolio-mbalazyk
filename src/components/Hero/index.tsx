import { Box } from '@mui/material';

import HeroText from './HeroText';
import HeroActions from './HeroActions';

import HeroImage from '../../assets/pexels-vlada-karpovich-4050364.jpg';
import BooksGraphic from '../../assets/books-graphic-01.png';

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
        <Box sx={{
          opacity: 0.04,
          left: 500,
          bottom: 0,
          position: 'absolute',
        }}>
          <img src={BooksGraphic} alt='books graphic' width={400} />
        </Box>
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
