import { Box, Typography } from '@mui/material';

import HeroActions from './HeroActions';

const HeroText = () => {
  return (
    <>
      <Typography
        variant='h3'
        component='h1'
        sx={{
          fontFamily: 'Vollkorn, serif',
          fontWeight: 'bold',
          maxWidth: 700,
        }}
      >
        Pomogę Tobie zapanować nad Twoim tekstem!
      </Typography>
      <Box
        sx={{
          marginTop: 8,
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography sx={styles.heroText}>
          Nazywam się Marta Bałażyk i zajmuję się <span style={styles.boldSpan}>redakcją</span> oraz{' '}
          <span style={styles.boldSpan}>korektą</span>.
        </Typography>
        <Typography sx={styles.heroText}>
          Aenean tristique dolor est, eget laoreet tellus semper at. Proin eget diam nisl. Curabitur dictum nisi nec
          ultricies condimentum. Vivamus eget placerat urna. Ut eu eleifend mauris. Morbi dui diam, convallis non
          scelerisque vitae, laoreet vitae sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </Typography>
        <Typography sx={styles.heroText}>
          Ut non velit vel lectus feugiat placerat in et enim. In vel facilisis dolor. Ut elementum lorem ligula, sed
          ultricies risus varius maximus.
        </Typography>
        <HeroActions />
      </Box>
    </>
  );
};

const styles = {
  heroText: {
    fontFamily: '"Source Sans 3", sans-serif',
    maxWidth: 700,
  },
  boldSpan: {
    fontWeight: 'bold',
  },
};

export default HeroText;
