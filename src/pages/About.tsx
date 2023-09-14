import { Box, Typography } from '@mui/material';

import { useAppSelector } from '../app/hooks';
import AuthorImage from '/author.jpg';
import AboutGraphic from '/about-graphic.png';
import { PRIMARY_COLOR } from '../constants';

const About = () => {
  const sticky: boolean = useAppSelector((state) => state.app.sticky);

  return (
    <Box
      id='about'
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
          backgroundColor: '#fff',
        }}
      >
        <Box
          sx={{
            width: '60%',
            height: '100vh',
            backgroundColor: PRIMARY_COLOR,
            backgroundImage: `url(${AuthorImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></Box>
        <Box
          sx={{
            width: 'calc(100% - 4rem)',
            height: '100%',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='h4'
            component='h1'
            sx={{
              width: '70%',
              alignSelf: 'center',
              textAlign: 'center',
              fontFamily: 'Vollkorn, serif',
              fontWeight: 'bold',
              zIndex: 2,
            }}
          >
            Nazywam się <span style={{ color: PRIMARY_COLOR }}>Marta Bałażyk</span>,<br /> a praca z tekstem to moja
            pasja!
          </Typography>
          <Typography
            sx={{
              width: '80%',
              marginTop: '2rem',
              fontFamily: '"Source Sans 3", sans-serif',
              textAlign: 'justify',
              zIndex: 2,
            }}
          >
            Coś o sobie i swoich pasjach. Suspendisse elementum egestas neque, quis iaculis metus pretium vitae.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nulla enim, cursus id quam sit amet,
            iaculis vehicula ipsum. Nulla ac est in quam sollicitudin scelerisque. Mauris nec accumsan magna. Ut sodales
            nisl eget sagittis elementum. Vestibulum fringilla ipsum eu est ornare maximus.
          </Typography>
          <Box
            sx={{
              width: '70%',
              marginTop: '1rem',
              marginLeft: '5%',
              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                width: '100%',
                marginTop: '1rem',
                fontFamily: 'Vollkorn, serif',
                fontWeight: 'bold',
                zIndex: 2,
              }}
            >
              Wykształcenie
            </Typography>
            <Box
              sx={{
                width: '100%',
                marginTop: '1rem',
                marginLeft: '5%',
                fontFamily: '"Source Sans 3", sans-serif',
                zIndex: 2,
              }}
            >
              <ul>
                <li>Studia X</li>
                <li>Studia Y</li>
                <li>Studia Z</li>
              </ul>
            </Box>
          </Box>
          <Box
            sx={{
              width: '70%',
              marginTop: '1rem',
              marginLeft: '5%',
            }}
          >
            <Typography
              sx={{
                width: '100%',
                marginTop: '1rem',
                fontFamily: 'Vollkorn, serif',
                fontWeight: 'bold',
              }}
            >
              Doświaczenie zawodowe
            </Typography>
            <Box
              sx={{
                width: '100%',
                marginTop: '1rem',
                marginLeft: '5%',
                fontFamily: '"Source Sans 3", sans-serif',
              }}
            >
              <ul>
                <li>Firma X</li>
                <li>Firma Y</li>
                <li>Firma Z</li>
              </ul>
            </Box>
          </Box>
          <Typography
            sx={{
              width: '80%',
              marginTop: '1rem',
              fontFamily: '"Source Sans 3", sans-serif',
              textAlign: 'justify',
              zIndex: 2,
            }}
          >
            Wszelkie dodatkowe informacje znajdziesz na moim profilu
            <a
              href='https://www.linkedin.com/in/marta-bałażyk-35b850211/'
              target='_blank'
            >
              <span
                style={{
                  fontWeight: 'bold',
                  marginLeft: '4px',
                  color: PRIMARY_COLOR,
                }}
              >
                LinkedIn
              </span>
            </a>
            .
          </Typography>
          <Box
            sx={{
              marginTop: '1rem',
              alignSelf: 'flex-end',
            }}
          >
            <img
              src={AboutGraphic}
              alt='feather graphic'
              width={150}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
