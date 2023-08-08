import { Box, Button, Typography } from '@mui/material';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import BackgroundImage from '/offer-background.png';
import OfferBox, { IOfferBoxProps } from './OfferBox';

const OFFERS: IOfferBoxProps[] = [
  {
    title: 'Korekta',
    description: 'Integer id facilisis magna. Vivamus sem dolor, tincidunt quis condimentum tincidunt, sagittis vel \
      libero. Etiam sed nunc quis nisl dignissim dignissim a non magna. Mauris interdum augue neque, vel consectetur \
      diam tempor sit amet. Nullam at sagittis ante. In eget libero ut mauris elementum gravida. Sed ipsum \
      nibh, fermentum tincidunt.',
  },
  {
    title: 'Redakcja',
    description: 'Nulla facilisi. Nulla bibendum elementum hendrerit. Aliquam et massa elementum, porttitor turpis \
      eu, scelerisque dolor. In tincidunt semper elit, vitae commodo orci dignissim eu. Mauris accumsan a lectus id \
      pellentesque. Quisque pretium orci id sagittis sagittis. Vivamus dapibus ullamcorper metus nec porttitor. \
      Vestibulum velit justo, mollis quis nisi ut, suscipit.',
  },
  {
    title: 'Copywriting',
    description: 'Vestibulum pulvinar consequat arcu. Pellentesque habitant morbi tristique senectus et netus et \
      malesuada fames ac turpis egestas. Maecenas nec molestie tortor, ac semper dui. Quisque eleifend, elit id \
      aliquam malesuada, orci dui tristique eros, eget dictum mi metus nec tortor. Donec in ex lorem. Aliquam blandit \
      felis eros, quis cursus.',
  },
];

const Offers = () => {
  return (
    <Box
      id='main-offers'
      sx={{
        minHeight: 800,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 0',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundColor: '#8b1a29',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        id='offers-wrapper'
        sx={{
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}
      >
        {OFFERS.map(item => (
          <OfferBox
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </Box>
      <Box sx={{
        marginTop: 10,
      }}>
        <Button
          variant='contained'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            color: '#8b1a29',
            '&:hover': {
              color: '#b51d2d',
              backgroundColor: '#fff',
              boxShadow: '0 0 4px 4px #b51d2d',
            },
          }}
        >
          <Typography sx={{
            fontFamily: '"Source Sans 3", sans-serif',
            textTransform: 'initial',
          }}>
            Więcej szczegółów
          </Typography>
          <NavigateNextIcon sx={{
            fontSize: 16,
          }} />
        </Button>
      </Box>
    </Box>
  );
};

const styles = {
  offerItemWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    position: 'relative',
    '&:nth-of-type(2n)': {
      left: -200,
    },
    '&:nth-of-type(2n+1)': {
      left: 200,
    },
  },
  offerItem: {
    backgroundColor: '#fff',
    borderRadius: '1rem',
    width: 700,
    height: 200,
    padding: 4,
    boxShadow: '8px 8px 0px #f0f0f0',
    display: 'flex',
    flexDirection: 'column',
  },
  offerTitle: {
    fontFamily: 'Vollkorn, serif',
    fontWeight: 'bold',
  },
  offerDescription: {

  },
};

export default Offers;
