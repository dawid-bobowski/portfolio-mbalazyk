import { Box } from '@mui/material';

import ButtonContained from '../ButtonContained';
import ButtonOutlined from '../ButtonOutlined';

const HeroActions = () => {
  return (
    <Box
      id='hero-actions'
      sx={{
        gap: 2,
        marginTop: '2rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <ButtonContained text='Zamów korektę' />
      <ButtonOutlined text='Sprawdź ofertę' />
    </Box>
  );
};

export default HeroActions;
