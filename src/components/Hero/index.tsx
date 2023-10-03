import { Box } from '@mui/material';

import HeroText from './HeroText';

import HeroImage from '/hero-right-image.jpg';
import BooksGraphic from '/books-graphic.png';

const Hero = () => {
  return (
    <Box
      id='hero'
      sx={{
        height: 800,
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
      }}
      >
      <Box
        id='hero-left'
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          padding: {xs: '4rem 2rem', md: '4rem 2rem 0 2rem' },
          paddingTop: { md: '4rem', lg: '8rem' },
          position: 'relative',
        }}
        >
        <HeroText />
        <Box sx={{
          opacity: 0.04,
          bottom: 0,
          position: 'absolute',
          display: 'flex',
          right: '1rem',
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
