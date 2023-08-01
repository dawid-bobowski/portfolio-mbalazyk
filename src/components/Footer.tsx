import { Box, Typography } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      id='main-footer'
      sx={{
        minHeight: 300,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '4rem',
        backgroundColor: '#0F0F0F',
        color: '#FFF',
      }}
    >
      <Box id='footer-contact' sx={styles.footerBox}>
        <Typography variant='h5' sx={styles.footerBoxHeader}>Marta Bałażyk</Typography>
      </Box>
      <Box id='footer-pages' sx={styles.footerBox}>
        <Typography variant='h5' sx={styles.footerBoxHeader}>Strony</Typography>
      </Box>
      <Box
        id='social-links'
        sx={{
          ...styles.footerBox,
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          padding: '0 1rem',
        }}
      >
        <Box sx={styles.socialIconBox}>
          <Typography>/marta-bałażyk-35b850211</Typography>
          <LinkedInIcon sx={styles.icon} onClick={() => window.open('https://www.linkedin.com/in/marta-bałażyk-35b850211/', '_blank', 'noreferrer')} />
        </Box>
        <Box sx={styles.socialIconBox}>
          <Typography>@ko.t.rekta</Typography>
          <InstagramIcon sx={styles.icon} onClick={() => window.open('https://www.instagram.com/ko.t.rekta/', '_blank', 'noreferrer')} />
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  footerBox: {
    width: '100%',
  },
  footerBoxHeader: {
    fontFamily: '"Source Sans 3", sans-serif',
    fontWeight: 'bold',
  },
  icon: {
    fontSize: '3rem',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  socialIconBox: {
    gap: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default Footer;