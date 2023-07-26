import { Box, Button, Typography } from '@mui/material';
import HeroImage from '../assets/pexels-vlada-karpovich-4050364.jpg';

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
          padding: 8,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h3' component='h1'>Twój klucz do perfekcyjnych tekstów!</Typography>
        <Box sx={{
          marginTop: 8,
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
          }}>
          <Typography>
            Nazywam się Marta Bałażyk i zajmuję się <em style={{ fontWeight: 'bold' }}>redakcją</em> oraz <em style={{ fontWeight: 'bold' }}>korektą</em>.
          </Typography>
          <Typography>
            Aenean tristique dolor est, eget laoreet tellus semper at. Proin eget diam nisl. Curabitur dictum nisi nec ultricies condimentum. Vivamus eget placerat urna. Ut eu eleifend mauris. Morbi dui diam, convallis non scelerisque vitae, laoreet vitae sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </Typography>
          <Typography>
            Ut non velit vel lectus feugiat placerat in et enim. In vel facilisis dolor. Ut elementum lorem ligula, sed ultricies risus varius maximus.
          </Typography>
        </Box>
        <Box id='hero-action' sx={{
          marginTop: 8,
          gap: 2,
          display: 'flex',
          alignItems: 'center',
        }}>
          {/* Customized Buttons: https://mui.com/material-ui/react-button/#customization */}
          <Button variant='contained' sx={{
            backgroundColor: '#c7263b',
          }}>Zamów korektę</Button>
          <Button variant='outlined' sx={{
            borderColor: '#c7263b',
            color: '#c7263b',
          }}>Sprawdź ofertę</Button>
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
  )
}

export default Hero;