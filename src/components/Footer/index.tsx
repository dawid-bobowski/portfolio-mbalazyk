import { Box } from '@mui/material';

import FooterContact from './FooterContact';
import FooterPages from './FooterPages';
import FooterOther from './FooterOther';

const Footer = () => {
  return (
    <Box
      id='main-footer'
      sx={{
        minHeight: 300,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: { xs: '2rem', lg: '4rem' },
        backgroundColor: '#0F0F0F',
        color: '#FFF',
      }}
    >
      <FooterContact />
      <FooterPages />
      <FooterOther />
    </Box>
  );
}

export default Footer;